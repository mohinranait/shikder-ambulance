"use client";
import MainLayout from "@/components/admin/layouts/MainLayout";
import { SidebarProvider } from "@/components/ui/sidebar";
import withAuth from "@/hooks/withAuth";
import React, { Suspense } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<div>Admin Layout suspent</div>}>
      <SidebarProvider>
        <MainLayout>{children}</MainLayout>
      </SidebarProvider>
    </Suspense>
  );
};

export default withAuth(AdminLayout);
