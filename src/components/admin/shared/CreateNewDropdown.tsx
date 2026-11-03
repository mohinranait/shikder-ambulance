"use client";

import React from "react";
import Link from "next/link";
import {
  Plus,
  ChevronDown,
  Receipt,
  PenSquare,
  UserPlus,
  ImagePlus,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function CreateNewDropdown() {
  const items = [
    {
      title: "Money Receipt",
      description: "Generate patient bill & trip slip",
      href: "/admin/receipt/new",
      icon: Receipt,
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      badge: "Receipt",
      badgeColor: "bg-emerald-100/70 text-emerald-800",
    },
    {
      title: "Blog Article",
      description: "Draft & publish news or ambulance tips",
      href: "/admin/post/new",
      icon: PenSquare,
      iconColor: "text-amber-600 bg-amber-50 border-amber-200",
      badge: "Post",
      badgeColor: "bg-amber-100/70 text-amber-800",
    },
    {
      title: "Customer Lead",
      description: "Manage emergency caller inquiries",
      href: "/admin/lead",
      icon: UserPlus,
      iconColor: "text-violet-600 bg-violet-50 border-violet-200",
      badge: "Lead",
      badgeColor: "bg-violet-100/70 text-violet-800",
    },
    {
      title: "Media Asset",
      description: "Upload fleet photos & branding files",
      href: "/admin/media",
      icon: ImagePlus,
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
      badge: "Media",
      badgeColor: "bg-indigo-100/70 text-indigo-800",
    },
  ];

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/95 text-white gap-1.5 h-9 px-3 rounded-lg text-xs font-semibold shadow-sm transition-all duration-200 group"
        >
          <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
            <Plus size={12} className="stroke-[2.5]" />
          </div>
          <span className="hidden sm:inline-block">Create New</span>
          <ChevronDown
            size={13}
            className="text-white/80 group-data-[state=open]:rotate-180 transition-transform duration-200"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-72 p-1.5 rounded-xl shadow-xl border border-slate-200/80 bg-white"
        align="end"
        sideOffset={8}
      >
        <DropdownMenuLabel className="px-2.5 py-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
              <Sparkles size={13} className="text-amber-500" />
              Quick Actions
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
              Shortcuts
            </span>
          </div>
          <p className="text-[11px] text-muted-foreground font-normal mt-0.5">
            Instantly create or log new items
          </p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-slate-100 my-1" />

        <DropdownMenuGroup className="space-y-0.5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <DropdownMenuItem
                key={item.href}
                asChild
                className="p-2 rounded-lg cursor-pointer hover:bg-slate-50 focus:bg-slate-50 transition-colors group"
              >
                <Link href={item.href} className="flex items-center gap-3 w-full">
                  {/* Icon Box */}
                  <div
                    className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${item.iconColor}`}
                  >
                    <Icon size={17} />
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-slate-800 group-hover:text-primary transition-colors">
                        {item.title}
                      </p>
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground truncate mt-0.5">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <ArrowRight
                    size={12}
                    className="text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-1"
                  />
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
