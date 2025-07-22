import CreateBlogsPost from "@/components/admin/pages/crete-blogs";
import { Navbar } from "@/components/admin/shared/Navbar";
import React from "react";

const NewPostpage = () => {
  return (
    <>
      <Navbar fixed></Navbar>
      <CreateBlogsPost />
    </>
  );
};

export default NewPostpage;
