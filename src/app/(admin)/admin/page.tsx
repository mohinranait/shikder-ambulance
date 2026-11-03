"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import toast from "react-hot-toast";
import {
  DollarSign,
  Truck,
  PhoneCall,
  FileText,
  TrendingUp,
  Calendar,
  Clock,
  Plus,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  MapPin,
  ArrowUpRight,
  CreditCard,
  Wallet,
  Building,
  Banknote,
  Users,
  Image as ImageIcon,
  HelpCircle,
  Settings,
  CheckCircle2,
  AlertCircle,
  Eye,
  Link2,
} from "lucide-react";

import { Navbar } from "@/components/admin/shared/Navbar";
import { Main } from "@/components/ui/main";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState<"leads" | "posts">("leads");

  const fetchDashboardData = useCallback(async (showLoading = true) => {
    try {
      if (showLoading) setIsLoading(true);
      const res = await fetch("/api/admin/dashboard", { cache: "no-store" });
      const json = await res.json();
      if (json?.success) {
        setData(json.data);
      } else {
        toast.error("Failed to load dashboard data");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error loading dashboard data");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchDashboardData(false);
    toast.success("Dashboard data refreshed!");
  };

  const getPaymentBadge = (method?: string) => {
    switch (method?.toLowerCase()) {
      case "bkash":
        return "bg-pink-50 text-pink-700 border-pink-200";
      case "nagad":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "bank":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "cash":
      default:
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }
  };

  const financials = data?.financials || {
    totalRevenue: 0,
    todayRevenue: 0,
    todayReceiptsCount: 0,
    monthRevenue: 0,
    monthReceiptsCount: 0,
    totalReceipts: 0,
    paymentMethods: {
      Cash: { count: 0, total: 0 },
      Bkash: { count: 0, total: 0 },
      Nagad: { count: 0, total: 0 },
      Bank: { count: 0, total: 0 },
    },
    ambulanceTypes: [],
    revenueTrend: [],
  };

  const leads = data?.leads || {
    total: 0,
    today: 0,
    customer: 0,
    provider: 0,
    recent: [],
  };

  const posts = data?.posts || {
    total: 0,
    published: 0,
    unpublished: 0,
    recent: [],
  };

  const recentReceipts = data?.recentReceipts || [];

  // Calculate highest revenue in trend for chart scaling
  const maxTrendRevenue = Math.max(
    ...(financials.revenueTrend?.map((t: any) => t.revenue) || [1]),
    1000
  );

  return (
    <>
      <Navbar fixed />
      <Main>
        <div className="space-y-6 pb-12">
          {/* Welcome Header Banner */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 rounded-2xl shadow-sm border border-slate-700/60 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute right-0 top-0 -mt-8 -mr-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-1.5 relative z-10">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Operational System
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {moment().format("dddd, DD MMMM YYYY")}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Shikder Ambulance Command Center
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Real-time monitoring of ambulance bookings, revenue collections,
                customer emergency leads, and hospital articles.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 relative z-10">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-xs gap-1.5"
              >
                <RefreshCw
                  size={14}
                  className={isRefreshing ? "animate-spin text-blue-300" : ""}
                />
                Refresh
              </Button>

              <Link href="/admin/receipt/new">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-white text-xs font-semibold gap-1.5 shadow-md shadow-primary/20"
                >
                  <Plus size={15} />
                  New Money Receipt
                </Button>
              </Link>
            </div>
          </div>

          {/* Key KPI Metric Cards (4 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Total Revenue */}
            <Card className="border border-slate-200/80 shadow-sm bg-white hover:border-emerald-300 transition-all hover:shadow">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Total Revenue
                  </p>
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <DollarSign className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2.5">
                  <p className="text-2xl font-black text-slate-900 tracking-tight">
                    ৳ {financials.totalRevenue.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium mt-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>
                      ৳ {financials.todayRevenue.toLocaleString()} today
                    </span>
                    <span className="text-slate-400 font-normal">
                      ({financials.todayReceiptsCount} trips)
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    ৳ {financials.monthRevenue.toLocaleString()} this month
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Ambulance Bookings (Receipts) */}
            <Card className="border border-slate-200/80 shadow-sm bg-white hover:border-blue-300 transition-all hover:shadow">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Ambulance Trips
                  </p>
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2.5">
                  <p className="text-2xl font-black text-slate-900 tracking-tight">
                    {financials.totalReceipts}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-blue-700 font-medium mt-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{financials.todayReceiptsCount} bookings today</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {financials.monthReceiptsCount} trips this month
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Emergency Leads & Inquiries */}
            <Card className="border border-slate-200/80 shadow-sm bg-white hover:border-violet-300 transition-all hover:shadow">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Customer Leads
                  </p>
                  <div className="w-9 h-9 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2.5">
                  <p className="text-2xl font-black text-slate-900 tracking-tight">
                    {leads.total}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-violet-700 font-medium mt-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet-500" />
                    <span>{leads.today} received today</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {leads.customer} Customers • {leads.provider} Providers
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Articles & Content */}
            <Card className="border border-slate-200/80 shadow-sm bg-white hover:border-amber-300 transition-all hover:shadow">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Blog Articles
                  </p>
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2.5">
                  <p className="text-2xl font-black text-slate-900 tracking-tight">
                    {posts.total}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-amber-700 font-medium mt-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>{posts.published} Live on website</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {posts.unpublished} Drafts pending
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Analytics & Payment Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 7-Day Revenue Trend (2 Columns) */}
            <Card className="lg:col-span-2 border border-slate-200/80 shadow-sm bg-white">
              <CardHeader className="p-5 pb-2 border-b border-slate-100 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    7-Day Booking & Revenue Trend
                  </CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Daily trip earnings and ambulance dispatch counts over the
                    past week
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[11px]"
                >
                  Live Updates
                </Badge>
              </CardHeader>
              <CardContent className="p-5">
                {/* Visual Bar Chart */}
                <div className="space-y-4">
                  <div className="h-48 flex items-end justify-between gap-2 pt-6 pb-2 px-2 border-b border-slate-100">
                    {financials.revenueTrend?.map((item: any, i: number) => {
                      const heightPercent = Math.max(
                        Math.round((item.revenue / maxTrendRevenue) * 100),
                        6
                      );
                      const isToday = i === financials.revenueTrend.length - 1;

                      return (
                        <div
                          key={i}
                          className="flex-1 flex flex-col items-center gap-2 h-full justify-end group relative"
                        >
                          {/* Hover Tooltip */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-10 bg-slate-900 text-white text-[11px] px-2 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-20">
                            ৳ {item.revenue.toLocaleString()} ({item.bookings}{" "}
                            trips)
                          </div>

                          {/* Bar */}
                          <div className="w-full max-w-[38px] flex flex-col justify-end items-center h-full">
                            <span className="text-[10px] font-bold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              {item.revenue > 0
                                ? `৳${Math.round(item.revenue / 1000)}k`
                                : "0"}
                            </span>
                            <div
                              style={{ height: `${heightPercent}%` }}
                              className={`w-full rounded-t-lg transition-all duration-500 ${
                                isToday
                                  ? "bg-gradient-to-t from-primary to-blue-400 shadow-sm"
                                  : "bg-slate-200 hover:bg-slate-300"
                              }`}
                            />
                          </div>

                          {/* Day Label */}
                          <div className="text-center">
                            <span
                              className={`text-[11px] block font-semibold ${
                                isToday ? "text-primary" : "text-slate-600"
                              }`}
                            >
                              {item.day}
                            </span>
                            <span className="text-[10px] text-muted-foreground block -mt-0.5">
                              {item.date}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap items-center justify-between text-xs text-muted-foreground pt-1">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-sm bg-primary" /> Today
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-sm bg-slate-200" /> Past
                        Days
                      </span>
                    </div>
                    <Link
                      href="/admin/receipt/all"
                      className="text-primary hover:underline font-medium flex items-center gap-1"
                    >
                      View all receipts →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Gateway Breakdown (1 Column) */}
            <Card className="border border-slate-200/80 shadow-sm bg-white flex flex-col justify-between">
              <CardHeader className="p-5 pb-2 border-b border-slate-100">
                <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-primary" />
                  Payment Collections
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Channels used for customer payments
                </p>
              </CardHeader>
              <CardContent className="p-5 space-y-4">
                {/* Cash */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <Banknote className="w-4 h-4 text-emerald-600" /> Cash On
                      Service
                    </span>
                    <span className="font-bold text-slate-900">
                      ৳{" "}
                      {(
                        financials.paymentMethods?.Cash?.total || 0
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      style={{
                        width: `${
                          financials.totalRevenue > 0
                            ? (financials.paymentMethods?.Cash?.total /
                                financials.totalRevenue) *
                              100
                            : 0
                        }%`,
                      }}
                      className="h-full bg-emerald-500 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>
                      {financials.paymentMethods?.Cash?.count || 0} receipts
                    </span>
                    <span>
                      {financials.totalRevenue > 0
                        ? `${Math.round(
                            (financials.paymentMethods?.Cash?.total /
                              financials.totalRevenue) *
                              100
                          )}%`
                        : "0%"}
                    </span>
                  </div>
                </div>

                {/* Bkash */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <Wallet className="w-4 h-4 text-pink-600" /> bKash Digital
                    </span>
                    <span className="font-bold text-slate-900">
                      ৳{" "}
                      {(
                        financials.paymentMethods?.Bkash?.total || 0
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      style={{
                        width: `${
                          financials.totalRevenue > 0
                            ? (financials.paymentMethods?.Bkash?.total /
                                financials.totalRevenue) *
                              100
                            : 0
                        }%`,
                      }}
                      className="h-full bg-pink-500 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>
                      {financials.paymentMethods?.Bkash?.count || 0} receipts
                    </span>
                    <span>
                      {financials.totalRevenue > 0
                        ? `${Math.round(
                            (financials.paymentMethods?.Bkash?.total /
                              financials.totalRevenue) *
                              100
                          )}%`
                        : "0%"}
                    </span>
                  </div>
                </div>

                {/* Nagad */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <Wallet className="w-4 h-4 text-orange-600" /> Nagad
                    </span>
                    <span className="font-bold text-slate-900">
                      ৳{" "}
                      {(
                        financials.paymentMethods?.Nagad?.total || 0
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      style={{
                        width: `${
                          financials.totalRevenue > 0
                            ? (financials.paymentMethods?.Nagad?.total /
                                financials.totalRevenue) *
                              100
                            : 0
                        }%`,
                      }}
                      className="h-full bg-orange-500 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>
                      {financials.paymentMethods?.Nagad?.count || 0} receipts
                    </span>
                    <span>
                      {financials.totalRevenue > 0
                        ? `${Math.round(
                            (financials.paymentMethods?.Nagad?.total /
                              financials.totalRevenue) *
                              100
                          )}%`
                        : "0%"}
                    </span>
                  </div>
                </div>

                {/* Bank */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-purple-600" /> Bank
                      Transfer
                    </span>
                    <span className="font-bold text-slate-900">
                      ৳{" "}
                      {(
                        financials.paymentMethods?.Bank?.total || 0
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      style={{
                        width: `${
                          financials.totalRevenue > 0
                            ? (financials.paymentMethods?.Bank?.total /
                                financials.totalRevenue) *
                              100
                            : 0
                        }%`,
                      }}
                      className="h-full bg-purple-500 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>
                      {financials.paymentMethods?.Bank?.count || 0} receipts
                    </span>
                    <span>
                      {financials.totalRevenue > 0
                        ? `${Math.round(
                            (financials.paymentMethods?.Bank?.total /
                              financials.totalRevenue) *
                              100
                          )}%`
                        : "0%"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ambulance Types Fleet Distribution */}
          {financials.ambulanceTypes?.length > 0 && (
            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-primary" />
                  Popular Ambulance Fleet & Services
                </h3>
                <span className="text-xs text-muted-foreground">
                  By total bookings
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {financials.ambulanceTypes.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-slate-100 bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
                  >
                    <p className="text-xs font-semibold text-slate-800 truncate">
                      {item.type}
                    </p>
                    <p className="text-lg font-bold text-primary mt-0.5">
                      {item.count}{" "}
                      <span className="text-[11px] font-normal text-muted-foreground">
                        trips
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Two-Column Operational Hub */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Recent Money Receipts (2 Columns) */}
            <Card className="lg:col-span-2 border border-slate-200/80 shadow-sm bg-white">
              <CardHeader className="p-5 pb-3 border-b border-slate-100 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-primary" />
                    Recent Ambulance Trips & Receipts
                  </CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Latest generated money receipts with route details
                  </p>
                </div>
                <Link href="/admin/receipt/all">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-primary hover:text-primary gap-1"
                  >
                    View All ({financials.totalReceipts}){" "}
                    <ChevronRight size={14} />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="p-0">
                {recentReceipts.length === 0 ? (
                  <div className="p-8 text-center text-xs text-muted-foreground">
                    No receipts created yet.
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {recentReceipts.map((receipt: any) => (
                      <div
                        key={receipt._id}
                        className="p-4 hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        {/* Patient & Route */}
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                              #{receipt.uid}
                            </span>
                            <span className="font-bold text-slate-900 text-sm truncate">
                              {receipt.patientName}
                            </span>
                            {receipt.carType && (
                              <span className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-medium border border-slate-200/60 hidden sm:inline-block">
                                {receipt.carType}
                              </span>
                            )}
                          </div>

                          {/* Pickup & Destination */}
                          <div className="flex items-center gap-2 text-xs text-slate-600">
                            <span className="truncate max-w-[160px] sm:max-w-[200px]" title={receipt.address}>
                              <strong className="text-emerald-700 font-semibold">
                                From:
                              </strong>{" "}
                              {receipt.address || "Dhaka"}
                            </span>
                            <span className="text-slate-300">→</span>
                            <span className="truncate max-w-[160px] sm:max-w-[200px]" title={receipt.destination}>
                              <strong className="text-rose-700 font-semibold">
                                To:
                              </strong>{" "}
                              {receipt.destination || "Destination"}
                            </span>
                          </div>
                        </div>

                        {/* Amount, Method & Date */}
                        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                          <div className="text-right">
                            <p className="text-sm font-bold text-slate-900">
                              ৳ {receipt.totalPrice}
                            </p>
                            <span
                              className={`inline-block px-2 py-0.2 rounded-full text-[10px] font-semibold border ${getPaymentBadge(
                                receipt.paymentMethod
                              )}`}
                            >
                              {receipt.paymentMethod || "Cash"}
                            </span>
                          </div>

                          <Link href={`/admin/receipt/edit/${receipt._id}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 px-2 text-xs border-slate-200 hover:bg-slate-100 text-slate-700"
                            >
                              Edit
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Right: Leads & Articles Widget (1 Column) */}
            <Card className="border border-slate-200/80 shadow-sm bg-white flex flex-col justify-between">
              <CardHeader className="p-4 pb-2 border-b border-slate-100">
                {/* Switcher Tab */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200/70 text-xs">
                    <button
                      onClick={() => setActiveTab("leads")}
                      className={`px-3 py-1 rounded-md font-semibold transition-all ${
                        activeTab === "leads"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      Leads ({leads.total})
                    </button>
                    <button
                      onClick={() => setActiveTab("posts")}
                      className={`px-3 py-1 rounded-md font-semibold transition-all ${
                        activeTab === "posts"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      Articles ({posts.total})
                    </button>
                  </div>

                  <Link
                    href={
                      activeTab === "leads" ? "/admin/lead" : "/admin/post/all"
                    }
                    className="text-xs text-primary hover:underline font-medium"
                  >
                    View All →
                  </Link>
                </div>
              </CardHeader>

              <CardContent className="p-0 flex-1">
                {activeTab === "leads" ? (
                  /* Leads List */
                  leads.recent?.length === 0 ? (
                    <div className="p-8 text-center text-xs text-muted-foreground">
                      No customer leads yet.
                    </div>
                  ) : (
                    <div className="divide-y divide-slate-100">
                      {leads.recent.map((lead: any) => (
                        <div
                          key={lead._id}
                          className="p-3.5 hover:bg-slate-50/70 transition-colors flex items-center justify-between gap-2"
                        >
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-slate-900 truncate">
                              {lead.fullName || "Emergency Caller"}
                            </p>
                            <a
                              href={`tel:${lead.phone}`}
                              className="text-[11px] text-primary font-mono hover:underline flex items-center gap-1 mt-0.5"
                            >
                              <PhoneCall size={10} /> {lead.phone}
                            </a>
                            <p className="text-[10px] text-muted-foreground mt-0.5">
                              {lead.district || "Dhaka"} •{" "}
                              {moment(lead.createdAt).fromNow()}
                            </p>
                          </div>
                          <Badge
                            variant="secondary"
                            className={`text-[10px] shrink-0 ${
                              lead.leadType === "Provider"
                                ? "bg-purple-50 text-purple-700"
                                : "bg-blue-50 text-blue-700"
                            }`}
                          >
                            {lead.leadType || "Customer"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )
                ) : (
                  /* Posts List */
                  posts.recent?.length === 0 ? (
                    <div className="p-8 text-center text-xs text-muted-foreground">
                      No articles published yet.
                    </div>
                  ) : (
                    <div className="divide-y divide-slate-100">
                      {posts.recent.map((post: any) => (
                        <div
                          key={post._id}
                          className="p-3.5 hover:bg-slate-50/70 transition-colors flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="relative w-10 h-10 rounded-md overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                              <Image
                                src={
                                  post?.image?.featuresImage ||
                                  post?.image?.thumbnail ||
                                  "/default.png"
                                }
                                alt={post.postTitle}
                                fill
                                sizes="40px"
                                className="object-cover"
                              />
                            </div>
                            <div className="min-w-0">
                              <Link
                                href={`/admin/post/new?link=${post.slug}`}
                                className="text-xs font-bold text-slate-900 hover:text-primary transition-colors line-clamp-1"
                              >
                                {post.postTitle}
                              </Link>
                              <p className="text-[10px] text-muted-foreground mt-0.5">
                                {moment(post.createdAt).format("DD MMM, YYYY")}
                              </p>
                            </div>
                          </div>

                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 ${
                              post.status === "Publish"
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : "bg-amber-50 text-amber-700 border border-amber-200"
                            }`}
                          >
                            {post.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Operations Shortcuts Grid */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Settings className="w-4 h-4 text-slate-600" />
              Quick Command Shortcuts
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <Link
                href="/admin/receipt/new"
                className="p-3 rounded-lg border border-slate-200/70 hover:border-primary hover:bg-blue-50/30 transition-all text-center flex flex-col items-center gap-1.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Plus className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800">
                  New Receipt
                </span>
              </Link>

              <Link
                href="/admin/receipt/all"
                className="p-3 rounded-lg border border-slate-200/70 hover:border-primary hover:bg-blue-50/30 transition-all text-center flex flex-col items-center gap-1.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Truck className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800">
                  All Receipts
                </span>
              </Link>

              <Link
                href="/admin/post/all"
                className="p-3 rounded-lg border border-slate-200/70 hover:border-primary hover:bg-blue-50/30 transition-all text-center flex flex-col items-center gap-1.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800">
                  Manage Posts
                </span>
              </Link>

              <Link
                href="/admin/lead"
                className="p-3 rounded-lg border border-slate-200/70 hover:border-primary hover:bg-blue-50/30 transition-all text-center flex flex-col items-center gap-1.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800">
                  Customer Leads
                </span>
              </Link>

              <Link
                href="/admin/media"
                className="p-3 rounded-lg border border-slate-200/70 hover:border-primary hover:bg-blue-50/30 transition-all text-center flex flex-col items-center gap-1.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800">
                  Media Library
                </span>
              </Link>

              <Link
                href="/admin/setting"
                className="p-3 rounded-lg border border-slate-200/70 hover:border-primary hover:bg-blue-50/30 transition-all text-center flex flex-col items-center gap-1.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Settings className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800">
                  Site Settings
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
