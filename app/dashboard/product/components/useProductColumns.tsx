"use client";
import { Button } from "antd";
import { Eye } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { fetchData, FetchDataArg } from "@/lib/fetchData";
import { useEffect, useState } from "react";
import DataTableView from "@/app/components/Local/DataTable/DataTableView";

const useProductColumns = (
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const viewRow = (row: any) => {
    setOpen(true);
    console.log(row.original);
  };
  const columns: ColumnDef<PaymentComplete>[] = [
    {
      accessorKey: "title",
      header: "Title",
      minSize: 450,
      size: 850,
    },
    {
      accessorKey: "rating",
      header: "Rating",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
      accessorKey: "saleCount",
      header: "SaleCount",
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => <DataTableView row={row} viewRow={viewRow} />,
    },
  ];
  const [data, setData] = useState([]);
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
    const result = await fetchData(params);
    setData(result.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return { columns, data };
};

export default useProductColumns;
