"use client";
import LayoutWrapper from "@/components/admin/layouts/LayoutWrapper";
import AuthProvider from "@/providers/AuthProvider";
import React, { Suspense } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <LayoutWrapper>
        {children}
      </LayoutWrapper>

      {/* <Suspense fallback={<div>Admin Layout suspent</div>}>
        <SidebarProvider>
          <MainLayout>{children}</MainLayout>
        </SidebarProvider>
      </Suspense> */}
    </AuthProvider>
  );
};

export default AdminLayout;
