"use client";

import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, FileEdit } from "lucide-react";
import { Button } from "@/components/ui/button";
import MoneyReceiptForm from "@/components/admin/pages/receipt/MoneyReceiptForm";
import { Navbar } from "@/components/admin/shared/Navbar";
import { Main } from "@/components/ui/main";
import { getReceiptById } from "@/actions/moneyReceiptApi";
import type { TReceipt } from "@/types/receip.type";

type Props = {
  params: Promise<{ id: string }>;
};

export default function EditReceiptPage({ params }: Props) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [receipt, setReceipt] = useState<TReceipt | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    const loadReceipt = async () => {
      try {
        setIsLoading(true);
        const res = await getReceiptById(id);
        if (res?.success && res?.payload?.receipt) {
          setReceipt(res.payload.receipt);
        } else {
          setError(res?.message || "Failed to load receipt");
        }
      } catch (err) {
        console.error("Error fetching receipt for edit:", err);
        setError("An error occurred while loading receipt");
      } finally {
        setIsLoading(false);
      }
    };

    loadReceipt();
  }, [id]);

  return (
    <>
      <Navbar fixed />
      <Main>
        <div className="max-w-[960px] mx-auto mb-4">
          <Link href="/admin/receipt/all">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-slate-900"
            >
              <ArrowLeft size={16} /> Back to All Receipts
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="min-h-[450px] flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-sm font-semibold text-slate-700">
              Loading receipt details for editing...
            </p>
          </div>
        ) : error || !receipt ? (
          <div className="max-w-md mx-auto my-12 bg-white rounded-xl border border-slate-200 p-8 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-3">
              <FileEdit size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Receipt Not Found
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              {error || "Could not find the requested receipt."}
            </p>
            <Link href="/admin/receipt/all">
              <Button>Return to Receipts List</Button>
            </Link>
          </div>
        ) : (
          <MoneyReceiptForm data={receipt} />
        )}
      </Main>
    </>
  );
}
