import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React, { FC } from "react";

interface SliderProps {
  images: string[];
}

const Slider: FC<SliderProps> = ({ images }) => {
  return (
    <div>
      {images?.map((image, index) => (
        <Image
          src={urlFor(image).url()}
          width={1920}
          height={1080}
          alt='car'
          key={image}
        />
      ))}
    </div>
  );
};

export default Slider;
