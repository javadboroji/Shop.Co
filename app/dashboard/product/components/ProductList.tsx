import { DataTable } from "@/app/components/Local/DataTable/DataTable";
import React from "react";
import { ProductListColumns } from "./ProductListColumns";
import { fetchData, FetchDataArg } from "@/lib/fetchData";

async function ProductList() {
  const getAllProducts = async () => {
    const filters = {
      category: null,
      color: "",
      price: [],
      size: null,
    };
    const params: FetchDataArg = {
      url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/productFilter`,
      method: "post",
      cache: "no-store",
      body: filters,
    };
    return await fetchData(params);
  };
  const data =await getAllProducts();
  return (
    <div className="w-full">
      <DataTable columns={ProductListColumns} data={data?.data??[]} />
    </div>
  );
}

export default ProductList;
