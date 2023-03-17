import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React, { FC } from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

interface BannerProps {
  image: string;
}

const Banner: FC<BannerProps> = ({ image }) => {
  return (
    <div>
      <div className=' flex justify-between items-center flex-1 min-h-screen'>
        <LeftContent />
        <div className='absolute xl:static sm:right-0 animate-fade-up'>
          <Image
            src={urlFor(image).url()}
            alt='image'
            width='0'
            height='0'
            sizes='100vw'
            className=' w-full rotate-90 overflow-hidden object-contain'
          />
        </div>
        <div className=' w-full max-w-sm  hidden  xl:flex items-center justify-center p-8 animate-fade-left'>
          <RightContent />
        </div>
      </div>
      <div className='relative xl:hidden flex p-4 z-50 animate-fade-up'>
        <RightContent />
      </div>
    </div>
  );
};

export default Banner;
