import MainComponentWrap from "@/app/components/Local/MainComponentWrap";
import EccomerceLayout from "@/app/EccomerceLayout";
import React from "react";
import ProductInfo from "../components/ProductInfo";
import ColectionImage from "../components/ColectionImage";
import { fetchData, FetchDataArg } from "@/lib/fetchData";
import { ProductCard } from "@/app/types";

const getNewProduct = async (id: string) => {
  const params: FetchDataArg = {
    url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/singleProduct`,
    method: "post",
    cache: "no-store",
    body: id,
  };
  const data = await fetchData(params);

  return data.data;
};
async function page(params: any) {
  const data: ProductCard = await getNewProduct(params?.params);
  return (
    <EccomerceLayout>
      <MainComponentWrap>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[49%]">
              <ColectionImage data={data?.ColectionImage ?? []} />
            </div>
            <div className="lg:w-[49%]">
              <ProductInfo data={data} />
            </div>
          </div>
        </div>
      </MainComponentWrap>
    </EccomerceLayout>
  );
}

export default page;
