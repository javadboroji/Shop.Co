"use client";
import React from "react";
import image from "@/public/image/Rectangle 2.png";
import image2 from "@/public/image/1.jpg";
import image3 from "@/public/image/4.jpg";
import image4 from "@/public/image/5.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "../style/swiper.css";
function Banner() {
  return (
    <div className="">
      <Swiper
        pagination={true}
        spaceBetween={30}
        centeredSlides={true}
        speed={5000}
        grabCursor={true}
        parallax={true}
        preventInteractionOnTransition={true}
        longSwipesRatio={0.35}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="w-full h-full z-0 absolute object-cover bg-center  "
            src={image}
            alt={"slider"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-full z-0 absolute object-cover bg-center  "
            src={image2}
            alt={"slider"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-full z-0 absolute object-cover bg-center  "
            src={image3}
            alt={"slider"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-full z-0 absolute object-cover bg-center  "
            src={image4}
            alt={"slider"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
