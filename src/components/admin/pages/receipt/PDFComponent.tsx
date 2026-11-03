"use client";

import React, { useEffect, useRef } from "react";
import moment from "moment";
import { MapPin, PhoneCall, Globe } from "lucide-react";
import type { TReceipt } from "@/types/receip.type";

type Props = {
  data: TReceipt | Partial<TReceipt>;
  id?: string;
  className?: string;
};

const PDFComponent: React.FC<Props> = ({
  data: form,
  id = "money_receip",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Expose receipt data on DOM element for easy access if needed
  useEffect(() => {
    if (containerRef.current) {
      (containerRef.current as any).__receiptData = form;
    }
  }, [form]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`bg-white text-slate-900 relative shadow-md select-none overflow-hidden ${className}`}
      style={{
        width: "820px",
        height: "578px",
        minWidth: "820px",
        minHeight: "578px",
        maxWidth: "820px",
        maxHeight: "578px",
        boxSizing: "border-box",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* Decorative Outer & Inner Chamfered Border SVG Frame */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 820 578"
        preserveAspectRatio="none"
      >
        {/* Outer Frame */}
        <rect
          x="5"
          y="5"
          width="810"
          height="568"
          fill="none"
          stroke="#1e293b"
          strokeWidth="1.5"
          rx="1"
        />

        {/* Inner Frame with Chamfered (Angled) Corners */}
        <path
          d="M 26 12 
             L 794 12 
             L 808 26 
             L 808 552 
             L 794 566 
             L 26 566 
             L 12 552 
             L 12 26 
             Z"
          fill="none"
          stroke="#475569"
          strokeWidth="1"
        />

        {/* Decorative corner tick accents */}
        <line x1="5" y1="19" x2="19" y2="5" stroke="#475569" strokeWidth="0.8" />
        <line
          x1="815"
          y1="19"
          x2="801"
          y2="5"
          stroke="#475569"
          strokeWidth="0.8"
        />
        <line
          x1="5"
          y1="559"
          x2="19"
          y2="573"
          stroke="#475569"
          strokeWidth="0.8"
        />
        <line
          x1="815"
          y1="559"
          x2="801"
          y2="573"
          stroke="#475569"
          strokeWidth="0.8"
        />
      </svg>

      {/* Watermark in center */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        style={{ zIndex: 0 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.jpg"
          alt="Watermark"
          style={{
            width: "360px",
            height: "360px",
            maxWidth: "360px",
            maxHeight: "360px",
            objectFit: "contain",
            opacity: 0.22,
          }}
          crossOrigin="anonymous"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 px-8 pt-6 pb-6 h-full flex flex-col justify-between box-border">
        {/* TOP HEADER SECTION */}
        <div>
          <div className="flex justify-between items-start">
            {/* Left Header Info */}
            <div className="space-y-1">
              <h1 className="text-[25px] font-black text-[#0c2752] tracking-wide uppercase leading-tight font-sans mb-1">
                SHIKDER AMBULANCE SERVICE
              </h1>

              <div className="flex items-center gap-2 text-slate-800 leading-tight">
                <MapPin
                  size={14}
                  className="text-[#0c2752] fill-[#0c2752]/20 shrink-0"
                />
                <p className="text-[13px] leading-tight">
                  <span className="font-bold text-slate-950">Address: </span>
                  <span>Eskaton Road, Mogbazar, Dhaka-1217</span>
                </p>
              </div>

              <div className="flex items-center gap-2 text-slate-800 leading-tight">
                <PhoneCall
                  size={14}
                  className="text-[#0c2752] fill-[#0c2752]/20 shrink-0"
                />
                <p className="text-[13px] leading-tight">
                  <span className="font-bold text-slate-950">Helpline: </span>
                  <span>01713-260042, 01710060020</span>
                </p>
              </div>

              <div className="flex items-center gap-2 text-slate-800 leading-tight">
                <Globe size={14} className="text-[#0c2752] shrink-0" />
                <p className="text-[13px] font-bold text-slate-950 leading-tight">
                  www.shikderambulance.com
                </p>
              </div>
            </div>

            {/* Right Logo */}
            <div className="w-[110px] h-[110px] shrink-0 relative flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.jpg"
                alt="Shikder Ambulance Logo"
                className="w-full h-full object-contain"
                crossOrigin="anonymous"
              />
            </div>
          </div>

          {/* MONEY RECEIPT Pill Badge */}
          <div className="flex justify-center my-2">
            <div className="border border-[#7ba2ca] bg-[#edf4fb] px-8 py-1 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              <span className="text-[19px] font-black tracking-[0.14em] text-[#0b1e36] uppercase leading-none block">
                MONEY RECEIPT
              </span>
            </div>
          </div>

          {/* SL.No and Date row */}
          <div className="flex justify-between items-center px-1 mb-2">
            <p className="text-[14px] text-slate-900 leading-tight">
              <span className="font-extrabold text-slate-950">SL.No: </span>
              <span className="font-semibold">{form.uid || "------"}</span>
            </p>
            <p className="text-[14px] text-slate-900 leading-tight">
              <span className="font-extrabold text-slate-950">Date: </span>
              <span className="font-semibold">
                {form.date
                  ? moment(form.date).format("DD/MM/YYYY")
                  : moment().format("DD/MM/YYYY")}
              </span>
            </p>
          </div>
        </div>

        {/* MIDDLE TABLE SECTION (Transparent background so watermark shows through) */}
        <div className="border border-slate-700 text-[13.5px] leading-snug">
          {/* Row 1: Name */}
          <div className="px-3.5 py-1.5 border-b border-slate-700">
            <span className="font-bold text-slate-950">Name: </span>
            <span className="font-semibold text-slate-900">
              {form.patientName || ""}
            </span>
          </div>

          {/* Row 2: Care of Name | Phone */}
          <div className="grid grid-cols-2 border-b border-slate-700">
            <div className="px-3.5 py-1.5 border-r border-slate-700">
              <span className="font-bold text-slate-950">Care of Name: </span>
              <span className="font-medium text-slate-900">
                {form.careOfName || ""}
              </span>
            </div>
            <div className="px-3.5 py-1.5">
              <span className="font-bold text-slate-950">Phone: </span>
              <span className="font-medium text-slate-900">
                {form.phone || ""}
              </span>
            </div>
          </div>

          {/* Row 3: Address */}
          <div className="px-3.5 py-1.5 border-b border-slate-700">
            <span className="font-bold text-slate-950">Address: </span>
            <span className="font-medium text-slate-900">
              {form.address || ""}
            </span>
          </div>

          {/* Row 4: Destination */}
          <div className="px-3.5 py-1.5 border-b border-slate-700">
            <span className="font-bold text-slate-950">Destination: </span>
            <span className="font-medium text-slate-900">
              {form.destination || ""}
            </span>
          </div>

          {/* Row 5: Ambulance Type | Ambulance No */}
          <div className="grid grid-cols-2 border-b border-slate-700">
            <div className="px-3.5 py-1.5 border-r border-slate-700">
              <span className="font-bold text-slate-950">
                Ambulance Type:{" "}
              </span>
              <span className="font-medium text-slate-900">
                {form.carType || ""}
              </span>
            </div>
            <div className="px-3.5 py-1.5">
              <span className="font-bold text-slate-950">Ambulance No: </span>
              <span className="font-medium text-slate-900">
                {form.carNo || ""}
              </span>
            </div>
          </div>

          {/* Row 6: Service Type | Payment by */}
          <div className="grid grid-cols-2">
            <div className="px-3.5 py-1.5 border-r border-slate-700">
              <span className="font-bold text-slate-950">Service Type: </span>
              <span className="font-medium text-slate-900">
                {form.serviceType || ""}
              </span>
            </div>
            <div className="px-3.5 py-1.5">
              <span className="font-bold text-slate-950">Payment by: </span>
              <span className="font-medium text-slate-900">
                {form.paymentMethod || ""}
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM TOTAL RENT & IN WORD (Highlighted Double Box) */}
        <div className="flex items-center justify-between gap-4 px-1 mt-1">
          {/* Total Rent Highlighted Box with Double-Border */}
          <div className="border border-slate-700 p-[2.5px] bg-white inline-block shadow-xs shrink-0">
            <div className="border border-slate-700 px-4 py-1.5 bg-[#eaeff5]">
              <span className="text-[17px] font-black text-slate-950 tracking-tight whitespace-nowrap">
                Total Rent: {form.totalPrice || "0"} /-
              </span>
            </div>
          </div>

          {/* In Word Text */}
          <div className="flex-1 pl-3 flex items-center">
            <p className="text-[14px] text-slate-950 leading-snug">
              <span className="font-bold text-slate-950">In Word: </span>
              <span className="italic font-medium text-slate-800">
                {form.amountInWord || ""}
              </span>
            </p>
          </div>
        </div>

        {/* FOOTER SIGNATURES */}
        <div className="flex justify-between items-end px-6 pt-4 pb-1">
          {/* Received By */}
          <div className="w-52 text-center">
            <div className="border-b border-dotted border-slate-700 w-full mb-1.5"></div>
            <span className="text-[13.5px] font-bold text-slate-900">
              Received By
            </span>
          </div>

          {/* Authorized Signature */}
          <div className="w-52 text-center relative flex flex-col items-center">
            <div className="h-12 w-32 relative mb-[-6px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/signature.jpg"
                alt="Authorized Signature"
                className="w-full h-full object-contain"
                crossOrigin="anonymous"
              />
            </div>
            <div className="border-b border-dotted border-slate-700 w-full mb-1.5"></div>
            <span className="text-[13.5px] font-bold text-slate-900">
              Authorized Signature
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFComponent;
