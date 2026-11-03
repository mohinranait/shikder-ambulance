"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  Plus,
  Edit,
  Eye,
  Trash,
  X,
  Download,
  Printer,
  Search,
  FileText,
  DollarSign,
  TrendingUp,
  Loader2,
  Link2,
} from "lucide-react";
import moment from "moment";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import type { TReceipt } from "@/types/receip.type";
import {
  deleteReceiptById,
  getAllReceipts,
  getReceiptShareToken,
} from "@/actions/moneyReceiptApi";
import PDFComponent from "@/components/admin/pages/receipt/PDFComponent";
import MoneyReceiptForm from "@/components/admin/pages/receipt/MoneyReceiptForm";
import { Navbar } from "@/components/admin/shared/Navbar";
import { Main } from "@/components/ui/main";
import { generateReceiptPdf } from "@/lib/receiptPdf";

const MoneyReceiptManage = () => {
  const [isSelected, setIsSelected] = useState<TReceipt | null>(null);
  const [receipts, setReceipts] = useState<TReceipt[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  // Direct download states
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [copyingId, setCopyingId] = useState<string | null>(null);

  // Row selection states
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [isSelectAll, setIsSelectAll] = useState(false);

  // Modal states
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [multipleDeleteModalOpen, setMultipleDeleteModalOpen] = useState(false);
  const [isModalDownloading, setIsModalDownloading] = useState(false);

  // Load receipts
  const fetchReceipts = async () => {
    try {
      setIsLoading(true);
      const data = await getAllReceipts();
      if (data?.success) {
        setReceipts(data?.payload?.receipts || []);
      }
    } catch (error) {
      console.error("Failed to fetch receipts:", error);
      toast.error("Failed to load receipts");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReceipts();
  }, []);

  // Filtered receipts
  const filteredReceipts = useMemo(() => {
    return receipts.filter((receipt) => {
      const q = search.toLowerCase().trim();
      if (!q) return true;
      return (
        receipt.patientName?.toLowerCase().includes(q) ||
        receipt.uid?.toLowerCase().includes(q) ||
        receipt.phone?.toLowerCase().includes(q) ||
        receipt.destination?.toLowerCase().includes(q) ||
        receipt.carType?.toLowerCase().includes(q) ||
        receipt.carNo?.toLowerCase().includes(q) ||
        receipt.paymentMethod?.toLowerCase().includes(q) ||
        receipt.serviceType?.toLowerCase().includes(q)
      );
    });
  }, [receipts, search]);

  // Statistics calculation
  const stats = useMemo(() => {
    const totalCount = receipts.length;
    const totalAmount = receipts.reduce((acc, curr) => {
      const val = parseFloat(String(curr.totalPrice).replace(/[^0-9.]/g, "")) || 0;
      return acc + val;
    }, 0);
    const today = moment().format("YYYY-MM-DD");
    const todayCount = receipts.filter(
      (r) =>
        moment(r.date).format("YYYY-MM-DD") === today ||
        moment(r.createdAt).format("YYYY-MM-DD") === today
    ).length;

    return { totalCount, totalAmount, todayCount };
  }, [receipts]);

  // Direct download handler without opening preview
  const handleDirectDownload = async (receipt: TReceipt) => {
    if (!receipt._id) return;
    try {
      setDownloadingId(receipt._id);
      await generateReceiptPdf(
        receipt,
        `Receipt_${receipt.uid || receipt._id}.pdf`
      );
      toast.success(`Receipt #${receipt.uid} downloaded!`);
    } catch (error) {
      console.error("Error during direct download:", error);
      toast.error("Failed to download PDF");
    } finally {
      setDownloadingId(null);
    }
  };

  // Download from View Modal
  const handleModalDownload = async () => {
    if (!isSelected) return;
    try {
      setIsModalDownloading(true);
      await generateReceiptPdf(
        isSelected,
        `Receipt_${isSelected.uid || isSelected._id}.pdf`
      );
      toast.success("Receipt downloaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to download PDF");
    } finally {
      setIsModalDownloading(false);
    }
  };

  // Copy 7-day public share link for WhatsApp / Customer
  const handleCopyShareLink = async (receipt: TReceipt) => {
    if (!receipt._id) return;
    try {
      setCopyingId(receipt._id);
      const res = await getReceiptShareToken(receipt._id);
      if (res?.success && res?.token) {
        const shareUrl = `${window.location.origin}/receipt/view/${res.token}`;
        await navigator.clipboard.writeText(shareUrl);
        toast.success("7-Day Public Link copied to clipboard!");
      } else {
        toast.error(res?.message || "Failed to generate share link");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to copy link");
    } finally {
      setCopyingId(null);
    }
  };

  // Handle select all checkbox
  const handleSelectAll = (checked: boolean | "indeterminate") => {
    const isChecked = checked === true;
    setIsSelectAll(isChecked);
    if (isChecked) {
      const allIds = new Set(
        filteredReceipts
          .filter((receipt) => receipt._id)
          .map((receipt) => receipt._id as string)
      );
      setSelectedRows(allIds);
    } else {
      setSelectedRows(new Set());
    }
  };

  // Handle individual row selection
  const handleRowSelect = (
    receiptId: string,
    checked: boolean | "indeterminate"
  ) => {
    if (!receiptId) return;

    const isChecked = checked === true;
    const newSelectedRows = new Set(selectedRows);
    if (isChecked) {
      newSelectedRows.add(receiptId);
    } else {
      newSelectedRows.delete(receiptId);
      setIsSelectAll(false);
    }
    setSelectedRows(newSelectedRows);

    const validReceipts = filteredReceipts.filter((receipt) => receipt._id);
    if (
      newSelectedRows.size === validReceipts.length &&
      validReceipts.length > 0
    ) {
      setIsSelectAll(true);
    }
  };

  const clearSelections = () => {
    setSelectedRows(new Set());
    setIsSelectAll(false);
  };

  // Delete single receipt
  const handleDelete = async () => {
    try {
      if (!isSelected?._id) return;
      const data = await deleteReceiptById(isSelected._id);
      if (data?.success) {
        setReceipts((prev) =>
          prev.filter((item) => item._id && item._id !== isSelected._id)
        );
        toast.success("Receipt deleted successfully");
        setDeleteModalOpen(false);
        setIsSelected(null);
        clearSelections();
      } else {
        toast.error("Failed to delete receipt");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete receipt");
    }
  };

  // Delete multiple receipts
  const handleMultipleDelete = async () => {
    try {
      const selectedIds = Array.from(selectedRows).filter((id): id is string =>
        Boolean(id)
      );
      if (selectedIds.length === 0) return;

      const deletePromises = selectedIds.map((id) => deleteReceiptById(id));
      const results = await Promise.all(deletePromises);
      const allSuccessful = results.every((result) => result?.success);

      if (allSuccessful) {
        setReceipts((prev) =>
          prev.filter((item) => !item._id || !selectedRows.has(item._id))
        );
        toast.success(`${selectedIds.length} receipts deleted`);
        setMultipleDeleteModalOpen(false);
        clearSelections();
      } else {
        fetchReceipts();
        toast.success("Completed with some errors");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error deleting receipts");
    }
  };

  // Helper for Payment Badge Colors
  const getPaymentBadge = (method?: string) => {
    switch (method) {
      case "Bkash":
        return "bg-pink-100 text-pink-700 border-pink-200";
      case "Nagad":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "Bank":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Cash":
      default:
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
    }
  };

  return (
    <>
      <Navbar fixed />
      <Main>
        <div className="flex flex-col gap-6 max-w-[1300px] mx-auto pb-12">
          {/* Top Section / Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4">
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                Money Receipts Management
              </h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                Generate, manage, preview, and download HD money receipts
              </p>
            </div>

            <Link href="/admin/receipt/new">
              <Button className="bg-primary hover:bg-primary/95 text-white flex items-center gap-2 shadow-sm font-semibold">
                <Plus className="h-4 w-4" />
                Add New Receipt
              </Button>
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border rounded-xl p-4 flex items-center justify-between shadow-xs">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Total Receipts
                </p>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  {stats.totalCount}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <FileText size={20} />
              </div>
            </div>

            <div className="bg-white border rounded-xl p-4 flex items-center justify-between shadow-xs">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Today&apos;s Receipts
                </p>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  {stats.todayCount}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <TrendingUp size={20} />
              </div>
            </div>

            <div className="bg-white border rounded-xl p-4 flex items-center justify-between shadow-xs">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Total Volume
                </p>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  ৳ {stats.totalAmount.toLocaleString()}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <DollarSign size={20} />
              </div>
            </div>
          </div>

          {/* Table Controls (Search & Batch Action) */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 bg-white p-4 rounded-xl border shadow-xs">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Search by name, phone, SL.No..."
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-9 text-sm"
              />
            </div>

            {/* Batch Delete actions */}
            {selectedRows.size > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                  {selectedRows.size} selected
                </span>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setMultipleDeleteModalOpen(true)}
                  className="flex items-center gap-1.5 h-9 text-xs"
                >
                  <Trash className="h-3.5 w-3.5" />
                  Delete Selected
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearSelections}
                  className="h-9 text-xs text-muted-foreground"
                >
                  Clear
                </Button>
              </div>
            )}
          </div>

          {/* TABLE */}
          <div className="rounded-xl border bg-white shadow-xs overflow-hidden">
            {isLoading ? (
              <div className="p-16 flex flex-col items-center justify-center text-muted-foreground gap-3">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm font-medium">Loading receipts...</p>
              </div>
            ) : filteredReceipts.length === 0 ? (
              <div className="p-16 text-center text-muted-foreground">
                <FileText className="h-10 w-10 mx-auto text-slate-300 mb-2" />
                <p className="text-base font-semibold text-slate-800">
                  No Receipts Found
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Try adjusting your search criteria or create a new receipt
                </p>
              </div>
            ) : (
              <Table>
                <TableHeader className="bg-slate-50/80">
                  <TableRow>
                    <TableHead className="w-12 text-center">
                      <Checkbox
                        checked={isSelectAll}
                        onCheckedChange={handleSelectAll}
                        aria-label="Select all"
                      />
                    </TableHead>
                    <TableHead className="font-bold text-slate-900">
                      SL. No
                    </TableHead>
                    <TableHead className="font-bold text-slate-900">
                      Patient
                    </TableHead>
                    <TableHead className="font-bold text-slate-900">
                      Care of & Phone
                    </TableHead>
                    <TableHead className="font-bold text-slate-900">
                      Destination
                    </TableHead>
                    <TableHead className="font-bold text-slate-900">
                      Amount
                    </TableHead>
                    <TableHead className="font-bold text-slate-900">
                      Payment
                    </TableHead>
                    <TableHead className="font-bold text-slate-900">
                      Date
                    </TableHead>
                    <TableHead className="font-bold text-slate-900 text-center">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReceipts
                    .filter((receipt) => receipt._id)
                    .map((receipt) => (
                      <TableRow
                        key={receipt._id}
                        className="hover:bg-slate-50/60 transition-colors"
                      >
                        {/* Checkbox */}
                        <TableCell className="text-center">
                          <Checkbox
                            checked={selectedRows.has(receipt._id!)}
                            onCheckedChange={(checked) =>
                              handleRowSelect(receipt._id!, checked)
                            }
                            aria-label={`Select ${receipt.patientName}`}
                          />
                        </TableCell>

                        {/* SL UID */}
                        <TableCell className="font-mono text-xs font-bold text-primary">
                          #{receipt.uid}
                        </TableCell>

                        {/* Patient Name */}
                        <TableCell>
                          <p className="font-semibold text-slate-900 leading-tight">
                            {receipt.patientName}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {receipt.serviceType || "Patient"}
                          </span>
                        </TableCell>

                        {/* Care of & Phone */}
                        <TableCell>
                          <p className="text-xs font-medium text-slate-800">
                            {receipt.careOfName || "—"}
                          </p>
                          <p className="text-xs text-muted-foreground font-mono">
                            {receipt.phone}
                          </p>
                        </TableCell>

                        {/* Destination */}
                        <TableCell>
                          <p
                            className="text-xs text-slate-700 max-w-[150px] truncate"
                            title={receipt.destination}
                          >
                            {receipt.destination || "—"}
                          </p>
                          <p
                            className="text-[11px] text-muted-foreground truncate max-w-[150px]"
                            title={receipt.carNo}
                          >
                            {receipt.carType}
                          </p>
                        </TableCell>

                        {/* Amount */}
                        <TableCell className="font-bold text-slate-900">
                          ৳ {receipt.totalPrice}
                        </TableCell>

                        {/* Payment Method Badge */}
                        <TableCell>
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold border ${getPaymentBadge(
                              receipt.paymentMethod
                            )}`}
                          >
                            {receipt.paymentMethod || "Cash"}
                          </span>
                        </TableCell>

                        {/* Date */}
                        <TableCell>
                          <p className="text-xs font-medium text-slate-800 whitespace-nowrap">
                            {moment(receipt.date || receipt.createdAt).format(
                              "DD/MM/YYYY"
                            )}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {moment(receipt.createdAt).format("hh:mm A")}
                          </p>
                        </TableCell>

                        {/* Action Buttons */}
                        <TableCell>
                          <div className="flex gap-1.5 items-center justify-center">
                            {/* Direct Download Button (No View Needed!) */}
                            <Button
                              onClick={() => handleDirectDownload(receipt)}
                              disabled={downloadingId === receipt._id}
                              size="icon"
                              variant="ghost"
                              title="Direct Download HD PDF"
                              className="h-8 w-8 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg"
                            >
                              {downloadingId === receipt._id ? (
                                <Loader2
                                  size={16}
                                  className="animate-spin text-emerald-600"
                                />
                              ) : (
                                <Download size={16} />
                              )}
                            </Button>

                            {/* Copy 7-Day Public Link for WhatsApp / Customer */}
                            <Button
                              onClick={() => handleCopyShareLink(receipt)}
                              disabled={copyingId === receipt._id}
                              size="icon"
                              variant="ghost"
                              title="Copy 7-Day Public Link (WhatsApp)"
                              className="h-8 w-8 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg"
                            >
                              {copyingId === receipt._id ? (
                                <Loader2
                                  size={16}
                                  className="animate-spin text-indigo-600"
                                />
                              ) : (
                                <Link2 size={16} />
                              )}
                            </Button>

                            {/* View Modal Button */}
                            <Button
                              onClick={() => {
                                setViewModalOpen(true);
                                setIsSelected(receipt);
                              }}
                              size="icon"
                              variant="ghost"
                              title="View & Preview"
                              className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg"
                            >
                              <Eye size={16} />
                            </Button>

                            {/* Edit Button (Links to new edit page with live preview) */}
                            <Link href={`/admin/receipt/edit/${receipt._id}`}>
                              <Button
                                size="icon"
                                variant="ghost"
                                title="Edit Receipt"
                                className="h-8 w-8 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
                              >
                                <Edit size={16} />
                              </Button>
                            </Link>

                            {/* Delete Button */}
                            <Button
                              onClick={() => {
                                setDeleteModalOpen(true);
                                setIsSelected(receipt);
                              }}
                              size="icon"
                              variant="ghost"
                              title="Delete Receipt"
                              className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg"
                            >
                              <Trash size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            )}
          </div>





          {/* View PDF Modal (Sheet) */}
          <Sheet open={viewModalOpen} onOpenChange={setViewModalOpen}>
            <SheetContent side="right" className="w-full sm:max-w-full p-0">
              <SheetHeader className="flex flex-row justify-between items-center p-4 border-b bg-white">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-900 text-lg">
                    Money Receipt View
                  </span>
                  <Badge variant="outline" className="font-mono text-xs">
                    #{isSelected?.uid}
                  </Badge>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => isSelected && handleCopyShareLink(isSelected)}
                    disabled={copyingId === isSelected?._id}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 border-indigo-200"
                  >
                    {copyingId === isSelected?._id ? (
                      <Loader2 size={15} className="animate-spin text-indigo-600" />
                    ) : (
                      <Link2 size={15} />
                    )}
                    Copy 7-Day Link
                  </Button>

                  <Button
                    onClick={() => window.print()}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1.5"
                  >
                    <Printer size={15} />
                    Print
                  </Button>

                  <Button
                    onClick={handleModalDownload}
                    disabled={isModalDownloading}
                    size="sm"
                    className="bg-primary hover:bg-primary/95 text-white flex items-center gap-1.5 shadow-sm font-semibold"
                  >
                    {isModalDownloading ? (
                      <Loader2 size={15} className="animate-spin" />
                    ) : (
                      <Download size={15} />
                    )}
                    {isModalDownloading ? "Generating..." : "Download HD PDF"}
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-8 w-8 bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-500"
                    onClick={() => setViewModalOpen(false)}
                  >
                    <X size={18} />
                  </Button>
                </div>
              </SheetHeader>

              {/* Centered Preview Canvas */}
              <div className="min-h-[calc(100vh-80px)] overflow-y-auto overflow-x-auto bg-slate-200/70 p-6 md:p-12 flex items-center justify-center">
                {isSelected && (
                  <div className="shadow-2xl rounded-sm transition-all">
                    <PDFComponent
                      id="modal-receipt-view"
                      data={isSelected}
                    />
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>

          {/* Single Delete Confirmation Dialog */}
          <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center font-bold text-slate-900">
                  Delete Money Receipt?
                </DialogTitle>
              </DialogHeader>
              <div className="py-3 text-center">
                <p className="text-slate-700 font-medium">
                  {isSelected?.patientName} (SL: #{isSelected?.uid})
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  This action cannot be undone. Are you sure?
                </p>
              </div>
              <div className="flex justify-center gap-3 mt-4">
                <Button
                  variant="outline"
                  onClick={() => setDeleteModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleDelete}>
                  Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Multiple Delete Confirmation Dialog */}
          <Dialog
            open={multipleDeleteModalOpen}
            onOpenChange={setMultipleDeleteModalOpen}
          >
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center font-bold text-slate-900">
                  Delete Multiple Receipts?
                </DialogTitle>
              </DialogHeader>
              <div className="py-3 text-center">
                <p className="text-slate-700 font-medium">
                  Are you sure you want to delete {selectedRows.size} selected
                  receipt{selectedRows.size > 1 ? "s" : ""}?
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  This action cannot be undone.
                </p>
              </div>
              <div className="flex justify-center gap-3 mt-4">
                <Button
                  variant="outline"
                  onClick={() => setMultipleDeleteModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleMultipleDelete}>
                  Delete {selectedRows.size} Receipts
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </Main>
    </>
  );
};

export default MoneyReceiptManage;
