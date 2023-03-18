import Image from "next/image";
import React, { FC } from "react";
import { urlFor } from "@/lib/imageBuilder";

interface FeatureProps {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const Feature: FC<FeatureProps> = ({
  image,
  title,
  description,
  reverse = false,
}) => {
  const flexDirection = reverse ? "flex-row-reverse" : "flex-row";
  return (
    <div className={`flex flex-col md:${flexDirection} p-4`}>
      <div className='flex-1 flex'>
        <Image
          src={urlFor(image).url()}
          alt='design-Image'
          width={1920}
          height={1080}
          className='rounded-xl shadow-xl object-cover'
        />
      </div>
      <div className='flex-1 flex flex-col mt-2 md:mt-0 justify-center md:p-4 space-y-2'>
        <h2 className='text-4xl font-bold'>{title}</h2>
        <p className='text-gray-700'>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
