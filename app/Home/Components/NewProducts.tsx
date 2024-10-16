import ProductsCard from "@/app/components/Local/ProductsCard";
import SectionTitle from "@/app/components/Local/SectionTitle";
import React from "react";
import { fetchData, FetchDataArg } from "@/lib/fetchData";
import type { ProductCard } from "@/app/types";
import CButton from "@/app/components/Local/CButton";

const getNewProduct = async () => {
  const params: FetchDataArg = {
    url: `${process.env.BASE_URL}/api/product/getNewProduct`,
    method: "get",
    cache: "no-store",
  };
  const data = await fetchData(params);
  return data?.data;
};
async function NewProducts() {
  const product = await getNewProduct();

  return (
    <div>
      <SectionTitle text="NEW ARRIVALS" />
      {process.env.BASE_URL}

      <div className="flex-col flex md:flex-row flex-wrap">
        {product?.map((product: ProductCard) => {
          return (
            <div key={product._id} className="w-full md:w-1/2 lg:w-1/4">
              <ProductsCard
                title={product.title}
                price={product.price}
                rating={product.rating}
                discountPercentage={product.discountPercentage}
                discountPrice={product.discountPrice}
                image={product.image}
                _id={product._id}
                color={product.color}
                size={product.size}
              />
            </div>
          );
        })}
      </div>
      <CButton title="View All" />
    </div>
  );
}

export default NewProducts;
