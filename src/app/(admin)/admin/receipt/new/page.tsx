import MoneyReceiptForm from "@/components/admin/pages/receipt/MoneyReceiptForm";
import { Navbar } from "@/components/admin/shared/Navbar";
import { Main } from "@/components/ui/main";
import React from "react";

const NewReceiptPage = () => {
  return (
    <>
      <Navbar fixed></Navbar>
      <Main>
        <MoneyReceiptForm />
      </Main>
    </>
  );
};

export default NewReceiptPage;
