"use client";
import MediaContainer from "@/components/admin/pages/media/MediaContainer";
import { Navbar } from "@/components/admin/shared/Navbar";
import { Main } from "@/components/ui/main";
import React from "react";

const AllMedia = () => {
  return (
    <>
      <Navbar fixed></Navbar>
      <Main>
        <MediaContainer />
      </Main>
    </>
  );
};

export default AllMedia;
