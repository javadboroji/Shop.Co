import CButton from "@/app/components/Local/CButton";
import ProductsCard from "@/app/components/Local/ProductsCard";
import SectionTitle from "@/app/components/Local/SectionTitle";
import { ProductCard } from "@/app/types";
import { fetchData, FetchDataArg } from "@/lib/fetchData";
import React from "react";
const getNewProduct = async () => {
  const params: FetchDataArg = {
    url: `${process.env.BASE_URL}/api/product/topSell`,
    method: "get",
    cache: "force-cache",
  };
  const data = await fetchData(params);
  return data?.data;
};
async function TopSell() {
  const product = await getNewProduct();
  return (
    <div>
      <SectionTitle text="Top Selling" />

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
                category={product.category}
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

export default TopSell;
