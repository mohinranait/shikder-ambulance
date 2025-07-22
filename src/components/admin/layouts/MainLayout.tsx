"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";
import "simplebar-react/dist/simplebar.min.css";
import AppSidebar from "../shared/AppSidebar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [hydrated, setHydrated] = useState(false);
  const { state, setOpen } = useSidebar();
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      {hydrated ? (
        <>
          <AppSidebar setOpen={setOpen} state={state} />

          <div
            id="content"
            className={cn(
              " w-full max-w-full ",
              "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
              "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
              "sm:transition-[width] sm:duration-200 sm:ease-linear",
              "flex h-svh flex-col",
              "group-data-[scroll-locked=1]/body:h-full",
              "has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh"
            )}
          >
            {children}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default MainLayout;
