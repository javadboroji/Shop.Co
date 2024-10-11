"use client";
import React, { useState } from "react";
import Image from "next/image";
import type { ColectionImage } from "@/app/types";
interface IColectionImage {
  data: ColectionImage[];
}
const ColectionImage: React.FC<IColectionImage> = ({ data }) => {
  const [imagePreview, setImagePreview] = useState<undefined | ColectionImage>(
    undefined
  );
  const imagePrevView = (id: string) => {
    const imageSelected = data?.find((item) => item.id === id);
    setImagePreview(imageSelected);
  };
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="xxl:w-[20%] xl:w-[25%] flex lg:flex-col order-2 lg:order-1">
        {data?.map((image, i) => {
          return (
            <button
              key={`image-${i}}`}
              className="my-2 w-28 h-28 mx-1 lg:w-32 lg:h-32 bg-ec-gray rounded-lg p-1"
              onClick={() => imagePrevView(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full"
              />
            </button>
          );
        })}
      </div>
      <div className="flex flex-1 m-4 bg-ec-gray order-1 lg:order-2 max-h-[25rem]">
        {imagePreview && (
          <Image
            src={imagePreview.src}
            alt="image"
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default ColectionImage;
