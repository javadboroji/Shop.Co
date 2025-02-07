"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
export type Payment = {
  id: string;
  title: string;
  rating: number;
  price: number;
  SaleCount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
const viewRow = (row: any) => {
  console.log(row.
    original
    );
};
export const ProductListColumns: ColumnDef<Payment>[] = [
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
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <Button onClick={() => viewRow(row)} className="shadow-none">
            <Eye className="text-orange-500" />
          </Button>
        </div>
      );
    },
  },
];
