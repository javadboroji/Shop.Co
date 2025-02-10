"use client";
import { DataTable } from "@/app/components/Local/DataTable/DataTable";
import React, { useState } from "react";
import { fetchData, FetchDataArg } from "@/lib/fetchData";
import useProductColumns from "./useProductColumns";
import ViewProduct from "./ViewProduct";

function ProductList() {
  const [open, setOpen] = useState(false);
  const { columns, data } = useProductColumns(setOpen);
  return (
    <div className="w-full">
      <DataTable columns={columns} data={data ?? []} />
      <ViewProduct open={open} setOpen={setOpen} />
    </div>
  );
}

export default ProductList;
