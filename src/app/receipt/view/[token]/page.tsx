"use client";

import React, { useEffect, useState, useRef, use } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import {
  Download,
  Printer,
  PhoneCall,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  ArrowLeft,
  ZoomIn,
  ZoomOut,
  Maximize2,
  FileCheck,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import PDFComponent from "@/components/admin/pages/receipt/PDFComponent";
import { generateReceiptPdf } from "@/lib/receiptPdf";
import type { TReceipt } from "@/types/receip.type";

type PageProps = {
  params: Promise<{ token: string }>;
};

export default function PublicReceiptViewPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const token = resolvedParams.token;

  const [receipt, setReceipt] = useState<TReceipt | null>(null);
  const [expiresAt, setExpiresAt] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isExpired, setIsExpired] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  // Responsive scaling container
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(820);
  const [zoomMode, setZoomMode] = useState<"fit" | "actual">("fit");

  const baseWidth = 820;
  const baseHeight = 578;

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [receipt]);

  useEffect(() => {
    if (!token) return;

    const fetchReceipt = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/money/public/${token}`);
        const data = await res.json();

        if (data.success) {
          setReceipt(data.payload.receipt);
          setExpiresAt(data.payload.expiresAt);
        } else {
          if (data.expired) {
            setIsExpired(true);
          }
          setErrorMsg(data.message || "Failed to load receipt");
        }
      } catch (err) {
        console.error(err);
        setErrorMsg("Failed to connect to server. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReceipt();
  }, [token]);

  const handleDownloadPdf = async () => {
    if (!receipt) return;
    try {
      setIsDownloading(true);
      await generateReceiptPdf(
        receipt,
        `Receipt_${receipt.uid || "shikder"}.pdf`
      );
      toast.success("PDF Downloaded successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to download PDF");
    } finally {
      setIsDownloading(false);
    }
  };


  // Calculate dynamic scale factor to fit mobile screens perfectly
  const fitScale = Math.min(1, Math.max(0.3, (containerWidth - 24) / baseWidth));
  const currentScale = zoomMode === "fit" ? fitScale : 1;
  const scaledHeight = baseHeight * currentScale;

  return (
    <div className="min-h-screen bg-slate-100/90 flex flex-col justify-between font-sans">
      <Toaster position="top-center" />

      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-[1000px] mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 relative shrink-0">
              <Image
                src="/logo.jpg"
                alt="Shikder Ambulance"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-black text-[#0c2752] tracking-tight uppercase leading-none">
                Shikder Ambulance Service
              </h1>
              <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">
                Official E-Receipt & Money Voucher
              </p>
            </div>
          </div>

          <div>
            <a
              href="tel:01713260042"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c2752] bg-blue-50/80 hover:bg-blue-100 px-3 py-2 rounded-lg border border-blue-100 transition whitespace-nowrap"
            >
              <PhoneCall size={14} className="text-[#0c2752]" />
              <span className="hidden sm:inline">24/7 Helpline:</span> 01713-260042
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1000px] w-full mx-auto p-3.5 sm:p-6 md:p-8">
        {isLoading ? (
          <div className="min-h-[400px] flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-9 h-9 animate-spin text-primary" />
            <p className="text-sm font-semibold text-slate-700">
              Loading official money receipt...
            </p>
          </div>
        ) : isExpired ? (
          /* Expired Notice Card */
          <div className="max-w-md mx-auto my-8 sm:my-12 bg-white rounded-2xl border border-red-200 p-6 sm:p-8 text-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
              <Clock size={28} />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
              Receipt Link Expired
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              For privacy and security, public receipt links are valid for only{" "}
              <strong>7 days</strong> from creation. This link has expired.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 text-left">
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                Need a new copy?
              </p>
              <p className="text-xs text-slate-600">
                Please contact Shikder Ambulance 24/7 helpline with your patient
                name or booking date.
              </p>
              <div className="mt-3 flex items-center gap-2 font-mono text-sm font-bold text-[#0c2752]">
                <PhoneCall size={15} />
                01713-260042, 01710060020
              </div>
            </div>

            <a
              href="tel:01713260042"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0c2752] text-white py-2.5 px-4 rounded-xl text-sm font-bold hover:bg-[#0c2752]/90 transition"
            >
              <PhoneCall size={16} />
              Call Helpline
            </a>
          </div>
        ) : errorMsg || !receipt ? (
          /* Generic Error Card */
          <div className="max-w-md mx-auto my-8 sm:my-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 text-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle size={28} />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
              Receipt Not Found
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              {errorMsg || "The requested money receipt could not be found."}
            </p>
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft size={16} /> Return Home
              </Button>
            </Link>
          </div>
        ) : (
          /* Active Receipt View */
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Action Bar (Optimized for Mobile) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                    <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                      Money Receipt #{receipt.uid}
                    </h2>
                  </div>
                  {expiresAt && (
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                      <Clock size={13} className="text-slate-500 shrink-0" />
                      <span>
                        Valid until:{" "}
                        <strong className="text-slate-700">
                          {moment(expiresAt).format("DD MMM YYYY")}
                        </strong>{" "}
                        (7-day access)
                      </span>
                    </p>
                  )}
                </div>

                {/* Prominent Download Button (Mobile full width) */}
                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleDownloadPdf}
                    disabled={isDownloading}
                    className="w-full sm:w-auto h-11 sm:h-10 text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white gap-2 shadow-sm rounded-xl px-5"
                  >
                    {isDownloading ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Download size={16} />
                    )}
                    {isDownloading ? "Generating PDF..." : "Download Receipt (PDF)"}
                  </Button>

                 
                </div>
              </div>

              {/* Quick Info Summary Bar for Mobile */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="bg-slate-50 p-2 rounded-lg">
                  <span className="text-muted-foreground block text-[11px]">
                    Patient:
                  </span>
                  <span className="font-bold text-slate-900 truncate block">
                    {receipt.patientName || "—"}
                  </span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg">
                  <span className="text-muted-foreground block text-[11px]">
                    Total Rent:
                  </span>
                  <span className="font-bold text-emerald-700 truncate block">
                    ৳ {receipt.totalPrice || "0"}
                  </span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg">
                  <span className="text-muted-foreground block text-[11px]">
                    Service:
                  </span>
                  <span className="font-bold text-slate-800 truncate block">
                    {receipt.serviceType || "Patient"}
                  </span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg">
                  <span className="text-muted-foreground block text-[11px]">
                    Payment:
                  </span>
                  <span className="font-bold text-slate-800 truncate block">
                    {receipt.paymentMethod || "Cash"}
                  </span>
                </div>
              </div>
            </div>

            {/* Preview Section Header with Mobile Zoom Controls */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <FileCheck size={16} className="text-emerald-600" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  Document Preview
                </span>
              </div>

              {/* Zoom Switcher (Useful on mobile) */}
              <div className="flex items-center gap-1">
                <Button
                  size="sm"
                  variant={zoomMode === "fit" ? "secondary" : "ghost"}
                  onClick={() => setZoomMode("fit")}
                  className="h-7 text-xs px-2.5 rounded-lg"
                >
                  Fit Screen
                </Button>
                <Button
                  size="sm"
                  variant={zoomMode === "actual" ? "secondary" : "ghost"}
                  onClick={() => setZoomMode("actual")}
                  className="h-7 text-xs px-2.5 rounded-lg"
                >
                  Full Size (100%)
                </Button>
              </div>
            </div>

            {/* Dynamic Scaled Receipt Preview Canvas */}
            <div
              ref={containerRef}
              className="w-full flex justify-center py-4 sm:py-8 bg-slate-200/70 rounded-2xl border border-slate-300 shadow-inner overflow-x-auto"
            >
              <div
                style={{
                  width:
                    zoomMode === "fit"
                      ? `${baseWidth * currentScale}px`
                      : `${baseWidth}px`,
                  height:
                    zoomMode === "fit"
                      ? `${scaledHeight}px`
                      : `${baseHeight}px`,
                  position: "relative",
                  transition: "width 0.15s ease, height 0.15s ease",
                }}
              >
                <div
                  style={{
                    width: `${baseWidth}px`,
                    height: `${baseHeight}px`,
                    transform:
                      zoomMode === "fit" ? `scale(${currentScale})` : "none",
                    transformOrigin: "top left",
                    transition: "transform 0.15s ease",
                  }}
                  className="shadow-xl rounded-sm"
                >
                  <PDFComponent data={receipt} />
                </div>
              </div>
            </div>

            {/* Mobile Helpful Hint */}
            <div className="text-center text-xs text-muted-foreground pb-2">
              <p>
                Click <strong>&quot;Download Receipt (PDF)&quot;</strong> above for the
                official high-resolution vector PDF copy.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Shikder Ambulance Service. All Rights
          Reserved.
        </p>
        <p className="mt-0.5">
          Head Office: Eskaton Road, Mogbazar, Dhaka-1217 | Helpline:
          01713-260042
        </p>
      </footer>
    </div>
  );
}
