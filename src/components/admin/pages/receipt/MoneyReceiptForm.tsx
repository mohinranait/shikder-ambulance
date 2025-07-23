"use client";

import {
  type Dispatch,
  type FormEvent,
  type SetStateAction,
  useState,
} from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import toast from "react-hot-toast";

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
import moment from "moment";

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
  const currentTime = new Date(Date.now());
  const [customField, setCustomField] = useState("select");
  const [form, setForm] = useState({
    uid: data?.uid ? data?.uid : generateUID(),
    patientName: data?.patientName ? data?.patientName : "",
    careOfName: data?.careOfName ? data?.careOfName : "",
    phone: data?.phone ? data?.phone : "",
    totalPrice: data?.totalPrice ? data?.totalPrice : "",
    amountInWord: data?.amountInWord ? data?.amountInWord : "",
    address: data?.address ? data?.address : "",
    destination: data?.destination ? data?.destination : "",
    carType: data?.carType ? data?.carType : "Ac Ambulance",
    carNo: data?.carNo ? data?.carNo : "",
    date: data?.date ? data?.date : moment(currentTime).format("YYYY-MM-DD"),
    paymentMethod: data?.paymentMethod ? data?.paymentMethod : "Cash",
    serviceType: data?.serviceType ? data?.serviceType : "Patient",
  });

  // handle submit form
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Upload PDF to server
    if (data?._id) {
      try {
        if (!data?._id) return;
        const getRes = await updateReceiptById({
          data: { ...form },
          id: data?._id,
        });
        if (getRes?.success) {
          toast.success("Success");
          if (close) close();
          if (setIsSelected) setIsSelected(null);
          resetForm();
        }
      } catch (error) {
        console.error("Error uploading PDF:", error);
      }
    } else {
      try {
        const data = await createReceipt({ ...form });
        if (data?.success) {
          toast.success("Success");
          resetForm();
          generatePDF();
        }
      } catch (error) {
        console.error("Error uploading PDF:", error);
      }
    }
  };

  // Function to generate PDF
  const generatePDF = async () => {
    const receiptElement = document.getElementById("money_receip");
    if (!receiptElement) return;
    const canvas = await html2canvas(receiptElement, {
      scale: 2,
      width: 700,
      height: 700,
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("l", "px", [700, 700]);
    pdf.addImage(imgData, "PNG", 0, 0, 700, 700);
    pdf.save("money_receipt.pdf");
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
      carType: "",
      carNo: "Dhaka Metro Cha: 75-0426",
      date: "",
      paymentMethod: "",
      serviceType: "",
    });
  };

  return (
    <div>
      <div className="mb-3">
        <p className="text-3xl font-semibold text-slate-800 text-center">
          Money Receipt
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-[850px] mx-auto mb-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="patientName">Patient Name</Label>
            <Input
              id="patientName"
              name="patientName"
              type="text"
              placeholder="Patient Name"
              className="border-slate-200"
              value={form?.patientName}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  patientName: e.target.value,
                }))
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="careOfName">Care of Name (C/o)</Label>
              <Input
                id="careOfName"
                name="careOfName"
                type="text"
                placeholder="Care of Name (C/o)"
                className="border-slate-200"
                value={form?.careOfName}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    careOfName: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="number"
                placeholder="Phone"
                className="border-slate-200"
                value={form?.phone}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="carType">Car type</Label>
              <Select
                value={form?.carType}
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, carType: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select car type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ac Ambulance">Ac Ambulance</SelectItem>
                  <SelectItem value="Non-Ac Ambulance">
                    Non-Ac Ambulance
                  </SelectItem>
                  <SelectItem value="Freezing Ambulance">
                    Freezing Ambulance
                  </SelectItem>
                  <SelectItem value="Life Support Ambulance">
                    Life Support Ambulance
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Label>Car No</Label>
                <RadioGroup
                  value={customField}
                  onValueChange={setCustomField}
                  className="flex gap-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="select" id="select" />
                    <Label
                      htmlFor="select"
                      className="text-xs cursor-pointer text-slate-600"
                    >
                      Select
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom" id="custom" />
                    <Label
                      htmlFor="custom"
                      className="text-xs cursor-pointer text-slate-600"
                    >
                      Custom
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              {customField === "select" ? (
                <Select
                  value={form?.carNo}
                  onValueChange={(value) =>
                    setForm((prev) => ({ ...prev, carNo: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select car number" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dhaka Metro Cha: 75-0426">
                      Dhaka Metro Cha: 75-0426
                    </SelectItem>
                    <SelectItem value="Dhaka Metro Sha: 00-0776">
                      Dhaka Metro Sha: 00-0776
                    </SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  name="carNo"
                  type="text"
                  placeholder="Car No"
                  className="border-slate-200"
                  value={form?.carNo}
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

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              className="border-slate-200"
              value={form?.address}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  address: e.target.value,
                }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination">Destination</Label>
            <Input
              id="destination"
              name="destination"
              type="text"
              placeholder="Destination"
              className="border-slate-200"
              value={form?.destination}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  destination: e.target.value,
                }))
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="totalPrice">Rent</Label>
              <Input
                id="totalPrice"
                name="totalPrice"
                type="text"
                placeholder="Rent"
                className="border-slate-200"
                value={form?.totalPrice}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    totalPrice: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amountInWord">Amount in word</Label>
              <Input
                id="amountInWord"
                name="amountInWord"
                type="text"
                placeholder="Amount in word"
                className="border-slate-200"
                value={form?.amountInWord}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    amountInWord: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Payment</Label>
              <Select
                value={form?.paymentMethod}
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
            <div className="space-y-2">
              <Label htmlFor="serviceType">Service Type</Label>
              <Select
                value={form?.serviceType}
                onValueChange={(value) =>
                  setForm((prev) => ({
                    ...prev,
                    serviceType: value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Patient">Patient</SelectItem>
                  <SelectItem value="Dead body">Dead Body</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="bg-primary text-white px-6">
              {!data?._id ? "Save and Download" : "Update"}
            </Button>
          </div>
        </div>
      </form>

      {!data?._id && (
        <>
          <div>
            <p className="text-2xl font-semibold text-center mb-4">Preview</p>
          </div>
          <PDFComponent data={form} />
        </>
      )}
    </div>
  );
};

export default MoneyReceiptForm;
