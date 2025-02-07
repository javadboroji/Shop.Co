import React from "react";
import DashboardLayout from "../DashboardLayout";
import ProductList from "./components/ProductList";

function page() {
  return (
    <DashboardLayout>
      <ProductList/>
    </DashboardLayout>
  );
}

export default page;
