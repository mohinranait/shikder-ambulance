"use client";
import LayoutWrapper from "@/components/admin/layouts/LayoutWrapper";
import MediaModal from "@/components/shared/MediaModal";
import AuthProvider from "@/providers/AuthProvider";
import ImageProvider from "@/providers/ImageProvider";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <ImageProvider>
        <LayoutWrapper>
          {children}
          <MediaModal />
          <Toaster />
        </LayoutWrapper>
      </ImageProvider>

      {/* <Suspense fallback={<div>Admin Layout suspent</div>}>
        <SidebarProvider>
          <MainLayout>{children}</MainLayout>
        </SidebarProvider>
      </Suspense> */}
    </AuthProvider>
  );
};

export default AdminLayout;
