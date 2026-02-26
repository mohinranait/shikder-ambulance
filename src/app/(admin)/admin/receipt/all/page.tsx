"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Eye, Trash, X } from "lucide-react";
import moment from "moment";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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
import { deleteReceiptById, getAllReceipts } from "@/actions/moneyReceiptApi";
import PDFComponent from "@/components/admin/pages/receipt/PDFComponent";
import MoneyReceiptForm from "@/components/admin/pages/receipt/MoneyReceiptForm";
import { Navbar } from "@/components/admin/shared/Navbar";
import { Main } from "@/components/ui/main";

const MoneyReceiptManage = () => {
  const [isSelected, setIsSelected] = useState<TReceipt | null>(null);
  const [receipts, setReceipts] = useState<TReceipt[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  // Row selection states
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [isSelectAll, setIsSelectAll] = useState(false);

  // Modal states
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [multipleDeleteModalOpen, setMultipleDeleteModalOpen] = useState(false);

  // Search table data
  const filteredReceipts = receipts.filter((receipt) =>
    Object.values(receipt).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(search.toLowerCase())
    )
  );

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getAllReceipts();
        if (data.success) {
          setReceipts(data?.payload?.receipts);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    })();
  }, []);

  // Handle select all checkbox
  const handleSelectAll = (checked: boolean | "indeterminate") => {
    const isChecked = checked === true;
    setIsSelectAll(isChecked);
    if (isChecked) {
      const allIds = new Set(
        filteredReceipts
          .filter((receipt) => receipt._id) // Filter out undefined IDs
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
    if (!receiptId) return; // Add type guard

    const isChecked = checked === true;
    const newSelectedRows = new Set(selectedRows);
    if (isChecked) {
      newSelectedRows.add(receiptId);
    } else {
      newSelectedRows.delete(receiptId);
      setIsSelectAll(false);
    }
    setSelectedRows(newSelectedRows);

    // Update select all state
    const validReceipts = filteredReceipts.filter((receipt) => receipt._id);
    if (
      newSelectedRows.size === validReceipts.length &&
      validReceipts.length > 0
    ) {
      setIsSelectAll(true);
    }
  };

  // Clear all selections
  const clearSelections = () => {
    setSelectedRows(new Set());
    setIsSelectAll(false);
  };

  // Delete single receipt
  const handleDelete = async () => {
    try {
      if (!isSelected?._id) return;
      const data = await deleteReceiptById(isSelected._id);
      if (data.success) {
        setReceipts((prev) =>
          prev.filter((item) => item._id && item._id !== isSelected._id)
        );
        setDeleteModalOpen(false);
        setIsSelected(null);
        clearSelections();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete multiple receipts
  const handleMultipleDelete = async () => {
    try {
      const selectedIds = Array.from(selectedRows).filter((id): id is string =>
        Boolean(id)
      );
      if (selectedIds.length === 0) return;

      // Delete all selected receipts
      const deletePromises = selectedIds.map((id) => deleteReceiptById(id));



      const results = await Promise.all(deletePromises);

      // Check if all deletions were successful
      const allSuccessful = results.every((result) => result?.success);

      if (allSuccessful) {
        setReceipts((prev) =>
          prev.filter((item) => !item._id || !selectedRows.has(item._id))
        );
        setMultipleDeleteModalOpen(false);
        clearSelections();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function to generate PDF
  const generatePDF = async () => {
    const receiptElement = document.getElementById("money_receip");
    if (!receiptElement) return;
    const canvas = await html2canvas(receiptElement, {
      scale: 2,
      width: 700,
      height: 620,
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("l", "px", [700, 620]);
    pdf.addImage(imgData, "PNG", 0, 0, 700, 620);
    pdf.save("money_receipt.pdf");
  };

  return (
    <>
      <Navbar fixed></Navbar>
      <Main>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link href={`/admin/receipt/new`}>
                <Button className="bg-primary flex items-center gap-1 text-sm">
                  <Plus className="h-4 w-4" />
                  Add New Receipt
                </Button>
              </Link>

              {/* Selected count and delete button */}
              {selectedRows.size > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {selectedRows.size} selected
                  </span>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => setMultipleDeleteModalOpen(true)}
                    className="flex items-center gap-1"
                  >
                    <Trash className="h-4 w-4" />
                    Delete Selected
                  </Button>
                  <Button variant="outline" size="sm" onClick={clearSelections}>
                    Clear Selection
                  </Button>
                </div>
              )}
            </div>

            <div>
              <Input
                placeholder="Search..."
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[200px]"
              />
            </div>
          </div>

          <div className="rounded-md border">
            {isLoading ? (
              <div className="p-8 text-center">Loading...</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        checked={isSelectAll}
                        onCheckedChange={handleSelectAll}
                        aria-label="Select all"
                      />
                    </TableHead>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>C/o</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Destination</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReceipts
                    .filter((receipt) => receipt._id) // Filter out receipts without ID
                    .map((receipt) => (
                      <TableRow key={receipt._id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedRows.has(receipt._id!)}
                            onCheckedChange={(checked) =>
                              handleRowSelect(receipt._id!, checked)
                            }
                            aria-label={`Select ${receipt.patientName}`}
                          />
                        </TableCell>
                        {/* Rest of the table cells remain the same */}
                        <TableCell className="font-medium">
                          <p
                            title={receipt.uid}
                            className="truncate overflow-hidden"
                          >
                            #{receipt.uid}
                          </p>
                        </TableCell>
                        <TableCell>
                          <p
                            title={receipt.patientName}
                            className="truncate w-[150px] max-w-[250px] overflow-hidden"
                          >
                            {receipt.patientName}
                          </p>
                        </TableCell>
                        <TableCell>
                          <p
                            className="truncate w-[100px] max-w-[250px] overflow-hidden"
                            title={receipt.careOfName}
                          >
                            {receipt.careOfName}
                          </p>
                        </TableCell>
                        <TableCell>
                          <p title={receipt.phone}>{receipt.phone}</p>
                        </TableCell>
                        <TableCell>
                          <p
                            className="truncate w-[100px] max-w-[120px] overflow-hidden"
                            title={receipt.destination}
                          >
                            {receipt.destination}
                          </p>
                        </TableCell>
                        <TableCell>
                          <p className="text-nowrap text-muted-foreground">
                            {moment(receipt.createdAt).format("DD/MM/YYYY")}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {moment(receipt.createdAt).format("hh:mm A")}
                          </p>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2 items-center">
                            <Button
                              onClick={() => {
                                setEditModalOpen(true);
                                setIsSelected(receipt);
                              }}
                              size="icon"
                              variant="default"
                              className="bg-black text-white h-8 w-8"
                            >
                              <Edit size={18} />
                            </Button>
                            <Button
                              onClick={() => {
                                setViewModalOpen(true);
                                setIsSelected(receipt);
                              }}
                              size="icon"
                              variant="default"
                              className="bg-primary text-white h-8 w-8"
                            >
                              <Eye size={18} />
                            </Button>
                            <Button
                              onClick={() => {
                                setDeleteModalOpen(true);
                                setIsSelected(receipt);
                              }}
                              size="icon"
                              variant="destructive"
                              className="h-8 w-8"
                            >
                              <Trash size={18} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            )}
          </div>

          {/* Edit Modal */}
          <Sheet open={editModalOpen} onOpenChange={setEditModalOpen}>
            <SheetContent side="right" className="w-full sm:max-w-full p-0">
              <SheetHeader className="flex justify-end p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8 bg-red-100 text-red-500"
                  onClick={() => setEditModalOpen(false)}
                >
                  <X size={18} />
                </Button>
              </SheetHeader>
              <div className="min-h-[calc(100vh-100px)] overflow-y-auto bg-slate-100 p-4">
                {isSelected && (
                  <MoneyReceiptForm
                    data={isSelected}
                    close={() => setEditModalOpen(false)}
                    setIsSelected={setIsSelected}
                  />
                )}
              </div>
            </SheetContent>
          </Sheet>

          {/* View PDF Modal */}
          <Sheet open={viewModalOpen} onOpenChange={setViewModalOpen}>
            <SheetContent side="right" className="w-full sm:max-w-full p-0">
              <SheetHeader className="flex justify-between items-center p-4">
                <Button onClick={generatePDF} className="bg-primary text-white">
                  Download PDF
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8 bg-red-100 text-red-500"
                  onClick={() => setViewModalOpen(false)}
                >
                  <X size={18} />
                </Button>
              </SheetHeader>
              <div className="min-h-[calc(100vh-100px)] overflow-y-auto bg-slate-100 p-4">
                {isSelected && <PDFComponent data={isSelected} />}
              </div>
            </SheetContent>
          </Sheet>

          {/* Single Delete Confirmation Dialog */}
          <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center">
                  Are you Sure to Delete?
                </DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p className="text-center text-slate-700">
                  {isSelected?.patientName}
                </p>
              </div>
              <div className="flex justify-center gap-4 mt-4">
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
                <DialogTitle className="text-center">
                  Delete Multiple Receipts?
                </DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p className="text-center text-slate-700">
                  Are you sure you want to delete {selectedRows.size} selected
                  receipt{selectedRows.size > 1 ? "s" : ""}?
                </p>
                <p className="text-center text-sm text-muted-foreground mt-2">
                  This action cannot be undone.
                </p>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <Button
                  variant="outline"
                  onClick={() => setMultipleDeleteModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleMultipleDelete}>
                  Delete {selectedRows.size} Receipt
                  {selectedRows.size > 1 ? "s" : ""}
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
