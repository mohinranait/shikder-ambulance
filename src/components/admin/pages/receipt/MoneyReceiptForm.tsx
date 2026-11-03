"use client";

import {
  type Dispatch,
  type FormEvent,
  type SetStateAction,
  useState,
  useEffect,
} from "react";
import toast from "react-hot-toast";
import { Download, Printer, Save, RefreshCw } from "lucide-react";
import moment from "moment";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PDFComponent from "./PDFComponent";
import type { TReceipt } from "@/types/receip.type";
import { createReceipt, updateReceiptById } from "@/actions/moneyReceiptApi";
import { generateReceiptPdf } from "@/lib/receiptPdf";
import { numberToWords } from "@/lib/numberToWords";

const generateUID = () => {
  const now = new Date();
  const year = now.getFullYear() % 10;
  const month = (now.getMonth() + 1) % 10;
  const date = now.getDate() % 10;
  const hour = now.getHours() % 10;
  const minute = now.getMinutes() % 10;
  const second = now.getSeconds() % 10;
  return `${year}${month}${date}${hour}${minute}${second}`;
};

type TProps = {
  data?: TReceipt;
  close?: () => void;
  setIsSelected?: Dispatch<SetStateAction<TReceipt | null>>;
};

const MoneyReceiptForm = ({ data, close, setIsSelected }: TProps) => {
  const router = useRouter();
  const currentTime = new Date(Date.now());
  const [customField, setCustomField] = useState("select");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const [form, setForm] = useState<TReceipt>({
    uid: data?.uid ? data?.uid : generateUID(),
    patientName: data?.patientName ? data?.patientName : "",
    careOfName: data?.careOfName ? data?.careOfName : "",
    phone: data?.phone ? data?.phone : "",
    totalPrice: data?.totalPrice ? data?.totalPrice : "",
    amountInWord: data?.amountInWord ? data?.amountInWord : "",
    address: data?.address ? data?.address : "",
    destination: data?.destination ? data?.destination : "",
    carType: data?.carType ? data?.carType : "Ac Ambulance",
    carNo: data?.carNo ? data?.carNo : "Dhaka Metro Cha: 75-0426",
    date: data?.date ? data?.date : moment(currentTime).format("YYYY-MM-DD"),
    paymentMethod: data?.paymentMethod ? data?.paymentMethod : "Cash",
    serviceType: data?.serviceType ? data?.serviceType : "Patient",
  });


  console.log(data);
  

  // Sync form state whenever data prop changes (e.g. editing different receipts)
  useEffect(() => {
    if (data) {
      setForm({
        uid: data.uid || generateUID(),
        patientName: data.patientName || "",
        careOfName: data.careOfName || "",
        phone: data.phone || "",
        totalPrice: data.totalPrice || "",
        amountInWord: data.amountInWord || "",
        address: data.address || "",
        destination: data.destination || "",
        carType: data.carType || "Ac Ambulance",
        carNo: data.carNo || "Dhaka Metro Cha: 75-0426",
        date: data.date
          ? moment(data.date).format("YYYY-MM-DD")
          : moment().format("YYYY-MM-DD"),
        paymentMethod: data.paymentMethod || "Cash",
        serviceType: data.serviceType || "Patient",
      });

      const presets = [
        "Dhaka Metro Cha: 75-0426",
        "Dhaka Metro Sha: 13-0341",
        "Dhaka Metro Tha: 15-0066",
      ];
      if (data.carNo && !presets.includes(data.carNo)) {
        setCustomField("custom");
      } else {
        setCustomField("select");
      }
    }
  }, [data]);

  // Handle total rent change and auto-suggest in words
  const handlePriceChange = (value: string) => {
    setForm((prev) => {
      const updated = { ...prev, totalPrice: value };
      // If words is empty or was previous auto-conversion, update it
      const words = numberToWords(value);
      if (words) {
        updated.amountInWord = words;
      }
      return updated;
    });
  };

  // Function to download high-DPI Vector PDF with Selectable Text
  const handleDownloadPdf = async () => {
    try {
      setIsDownloading(true);
      await generateReceiptPdf(
        form,
        `Receipt_${form.uid || "shikder"}.pdf`
      );
      toast.success("PDF Downloaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to download PDF");
    } finally {
      setIsDownloading(false);
    }
  };


  // handle submit form
  const handleSubmit = async (
    event?: FormEvent<HTMLFormElement> | React.MouseEvent,
    shouldDownload = false
  ) => {
    if (event?.preventDefault) {
      event.preventDefault();
    }
    setIsSubmitting(true);

    try {
      if (data?._id) {
        // Update existing receipt
        const res = await updateReceiptById({
          data: { ...form },
          id: data._id,
        });
        if (res?.success) {
          toast.success("Receipt updated successfully!");
          if (shouldDownload) {
            await handleDownloadPdf();
          }
          if (close) {
            close();
          } else {
            setTimeout(() => {
              router.push("/admin/receipt/all");
            }, 600);
          }
          if (setIsSelected) setIsSelected(null);
        } else {
          toast.error(res?.message || "Failed to update receipt");
        }
      } else {
        // Create new receipt
        const res = await createReceipt({ ...form });
        if (res?.success) {
          toast.success("Receipt created successfully!");
          if (shouldDownload) {
            await handleDownloadPdf();
          }
          resetForm();
        } else {
          toast.error(res?.message || "Failed to create receipt");
        }
      }
    } catch (error) {
      console.error("Error submitting receipt:", error);
      toast.error("An error occurred while saving");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm({
      uid: generateUID(),
      patientName: "",
      careOfName: "",
      phone: "",
      totalPrice: "",
      amountInWord: "",
      address: "",
      destination: "",
      carType: "Ac Ambulance",
      carNo: "Dhaka Metro Cha: 75-0426",
      date: moment().format("YYYY-MM-DD"),
      paymentMethod: "Cash",
      serviceType: "Patient",
    });
  };

  return (
    <div className="max-w-[960px] mx-auto pb-16">
      {/* Header */}
      <div className="mb-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {data?._id ? "Edit Money Receipt" : "Create Money Receipt"}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Fill in details below to generate and download an official money
          receipt
        </p>
      </div>

      {/* Main Form */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 mb-10">
        <form
          onSubmit={(e) => handleSubmit(e, true)}
          className="space-y-6"
        >
          {/* Top Row: UID & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-4 border-b border-slate-100">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="uid" className="font-semibold text-slate-700">
                  Receipt SL. No
                </Label>
                <button
                  type="button"
                  onClick={() =>
                    setForm((prev) => ({ ...prev, uid: generateUID() }))
                  }
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  <RefreshCw size={12} /> Regenerate
                </button>
              </div>
              <Input
                id="uid"
                name="uid"
                type="text"
                className="bg-slate-50 font-mono font-medium"
                value={form.uid}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, uid: e.target.value }))
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="font-semibold text-slate-700">
                Receipt Date
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, date: e.target.value }))
                }
                required
              />
            </div>
          </div>

          {/* Patient Details */}
          <div className="space-y-2">
            <Label
              htmlFor="patientName"
              className="font-semibold text-slate-700"
            >
              Patient Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="patientName"
              name="patientName"
              type="text"
              placeholder="e.g. Rajon Chowdhuri (60)"
              value={form.patientName}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, patientName: e.target.value }))
              }
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label
                htmlFor="careOfName"
                className="font-semibold text-slate-700"
              >
                Care of Name
              </Label>
              <Input
                id="careOfName"
                name="careOfName"
                type="text"
                placeholder="e.g. Mehedi Hasan"
                value={form.careOfName}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, careOfName: e.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-semibold text-slate-700">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="text"
                placeholder="e.g. 01783835000"
                value={form.phone}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, phone: e.target.value }))
                }
                required
              />
            </div>
          </div>

          {/* Vehicle and Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="carType" className="font-semibold text-slate-700">
                Ambulance Type
              </Label>
              <Select
                value={form.carType}
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, carType: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Ambulance type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ac Ambulance">Ac Ambulance</SelectItem>
                  <SelectItem value="Non-Ac Ambulance">
                    Non-Ac Ambulance
                  </SelectItem>
                  <SelectItem value="Freezing Ambulance">
                    Freezing Ambulance
                  </SelectItem>
                  <SelectItem value="ICU Ambulance">ICU Ambulance</SelectItem>
                  <SelectItem value="CCU Ambulance">CCU Ambulance</SelectItem>
                  <SelectItem value="NICU Ambulance">NICU Ambulance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="font-semibold text-slate-700">
                  Ambulance No
                </Label>
                <RadioGroup
                  value={customField}
                  onValueChange={setCustomField}
                  className="flex gap-3"
                >
                  <div className="flex items-center space-x-1.5">
                    <RadioGroupItem value="select" id="select" />
                    <Label
                      htmlFor="select"
                      className="text-xs cursor-pointer text-slate-600 font-medium"
                    >
                      Presets
                    </Label>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <RadioGroupItem value="custom" id="custom" />
                    <Label
                      htmlFor="custom"
                      className="text-xs cursor-pointer text-slate-600 font-medium"
                    >
                      Custom
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {customField === "select" ? (
                <Select
                  value={form.carNo}
                  onValueChange={(value) =>
                    setForm((prev) => ({ ...prev, carNo: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle registration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dhaka Metro Cha: 75-0426">
                      শিকদার এসি (Dhaka Metro Cha: 75-0426)
                    </SelectItem>
                    <SelectItem value="Dhaka Metro Sha: 13-0341">
                      শিকদার ফ্রিজার (Dhaka Metro Sha: 13-0341)
                    </SelectItem>
                    <SelectItem value="Dhaka Metro Tha: 15-0066">
                      দাদার ডাবল কেবিন (Dhaka Metro Tha: 15-0066)
                    </SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  name="carNo"
                  type="text"
                  placeholder="e.g. Dhaka Metro Tha: 15-0066"
                  value={form.carNo}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      carNo: e.target.value,
                    }))
                  }
                />
              )}
            </div>
          </div>

          {/* Location and Destination */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label
                htmlFor="address"
                className="font-semibold text-slate-700"
              >
                Address / Pickup
              </Label>
              <Input
                id="address"
                name="address"
                type="text"
                placeholder="e.g. Jahan Ara Garden, House 9, Banani"
                value={form.address}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, address: e.target.value }))
                }
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="destination"
                className="font-semibold text-slate-700"
              >
                Destination
              </Label>
              <Input
                id="destination"
                name="destination"
                type="text"
                placeholder="e.g. Dhaka to Faridpur Sadar"
                value={form.destination}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    destination: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          {/* Rent & Words */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label
                htmlFor="totalPrice"
                className="font-semibold text-slate-700"
              >
                Total Rent (BDT) <span className="text-red-500">*</span>
              </Label>
              <Input
                id="totalPrice"
                name="totalPrice"
                type="text"
                placeholder="e.g. 55,000"
                value={form.totalPrice}
                onChange={(e) => handlePriceChange(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="amountInWord"
                  className="font-semibold text-slate-700"
                >
                  Amount in Words
                </Label>
                <span className="text-xs text-muted-foreground italic">
                  Auto-filled (Editable)
                </span>
              </div>
              <Input
                id="amountInWord"
                name="amountInWord"
                type="text"
                placeholder="e.g. Eleven Thousand and Five Hundred Taka"
                value={form.amountInWord}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    amountInWord: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          {/* Service & Payment Method */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label
                htmlFor="serviceType"
                className="font-semibold text-slate-700"
              >
                Service Type
              </Label>
              <Select
                value={form.serviceType}
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, serviceType: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Service Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Patient">Patient</SelectItem>
                  <SelectItem value="Dead body">Dead Body</SelectItem>
                  <SelectItem value="Emergency">Emergency</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="paymentMethod"
                className="font-semibold text-slate-700"
              >
                Payment Method
              </Label>
              <Select
                value={form.paymentMethod}
                onValueChange={(value) =>
                  setForm((prev) => ({
                    ...prev,
                    paymentMethod: value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cash">Cash</SelectItem>
                  <SelectItem value="Bkash">Bkash</SelectItem>
                  <SelectItem value="Nagad">Nagad</SelectItem>
                  <SelectItem value="Bank">Bank</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-end gap-3 border-t border-slate-100">
            <Button
              type="button"
              variant="outline"
              disabled={isSubmitting || isDownloading}
              onClick={(e) => handleSubmit(e as any, false)}
              className="flex items-center gap-1.5"
            >
              <Save size={16} />
              {data?._id ? "Update Only" : "Save Only"}
            </Button>

            <Button
              type="submit"
              disabled={isSubmitting || isDownloading}
              className="bg-primary hover:bg-primary/95 text-white flex items-center gap-1.5 px-6 shadow-sm"
            >
              <Download size={16} />
              {isSubmitting
                ? "Saving..."
                : data?._id
                ? "Update & Download PDF"
                : "Save & Download PDF"}
            </Button>
          </div>
        </form>
      </div>

      {/* LIVE PREVIEW SECTION */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Preview Header Toolbar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg leading-tight">
                Live Receipt Preview
              </h3>
              <p className="text-xs text-muted-foreground">
                Actual print-ready layout (HD Vector Quality)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
           
            <Button
              type="button"
              size="sm"
              disabled={isDownloading}
              onClick={handleDownloadPdf}
              className="bg-primary hover:bg-primary/90 text-white flex items-center gap-1.5 text-xs font-semibold shadow-xs"
            >
              <Download size={14} />
              {isDownloading ? "Generating HD PDF..." : "Download PDF"}
            </Button>
          </div>
        </div>

        {/* Scrollable Container with centered PDFComponent */}
        <div className="p-6 md:p-8 bg-slate-100/70 overflow-x-auto flex justify-center items-center min-h-[620px]">
          <div className="shadow-xl rounded-sm transition-all duration-200">
            <PDFComponent id="money_receip_preview" data={form} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyReceiptForm;
