"use client";
import type { Comments } from "@/app/types";
import SectionTitle from "@/app/components/Local/SectionTitle";
import { fetchData, FetchDataArg } from "@/lib/fetchData";
import React, { useEffect, useState } from "react";
import CommentCard from "@/app/components/Local/CommentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

function Comments() {
  const [comments, setComments] = useState([]);
  const getLastComments = async () => {
    const params: FetchDataArg = {
      url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/comment/getLastComments`,
      method: "get",
      cache: "no-store",
    };
    const data = await fetchData(params);
    setComments(data.data);
  };
  useEffect(() => {
    getLastComments();
  }, []);

  return (
    <div className="my-8">
      <SectionTitle text="OUR HAPPY CUSTOMERS" />
      <div className="flex flex-wrap overflow-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          //centeredSlides={true}

          speed={3000}
          parallax={true}
          modules={[Autoplay, Navigation]}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="commentSwiper !p-4"
        >
          {comments?.map((item: Comments) => {
            return (
              <SwiperSlide key={item.id}>
                <CommentCard
                  commentText={item.commentText}
                  rating={item.rating}
                  userName={item.userName}
                  id={item.id}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Comments;
