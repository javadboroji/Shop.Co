import Image from "next/image";
import { Button } from "@/components/ui/button";
import EccomerceLayout from "./EccomerceLayout";
import MainComponentWrap from "@/app/components/Local/MainComponentWrap";
import NewProducts from "./Home/Components/NewProducts";
import Comments from "./Home/Components/Comments";
import EmailBox from "@/app/components/Local/EmailBox";
import Banner from "./Home/Components/Banner";
import TopSell from "./Home/Components/TopSell";
import Brands from "./Home/Components/Brands";
import Category from "./Home/Components/Category";
export const dynamic = 'force-dynamic'
export default function Home() {
  return (
    <>
      {" "}
      <EccomerceLayout>
        <MainComponentWrap>
          <Banner />
          <Brands />
          <div className="container mx-auto">
            {/* <NewProducts />
            <TopSell /> */}
            <Category />
          </div>
          <Comments />
        
        </MainComponentWrap>
      </EccomerceLayout>
    </>
  );
}
