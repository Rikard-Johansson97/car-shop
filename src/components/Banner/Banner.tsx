import Image from "next/image";
import React, { FC } from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div>
      <div className=' flex justify-between items-center mt-20 flex-1 min-h-screen '>
        <LeftContent />
        <div className='absolute xl:static -right-40 w-full animate-fade-up'>
          <Image
            src={"/bugatti-car.png"}
            alt='image'
            width='0'
            height='0'
            sizes='100vw'
            className=' w-full h-auto rotate-90'
          />
        </div>
        <div className=' w-full max-w-sm  hidden  xl:flex items-center justify-center p-8 animate-fade-left'>
          <RightContent />
        </div>
      </div>
      <div className='xl:hidden flex p-4'>
        <RightContent />
      </div>
      make a navbar
    </div>
  );
};

export default Banner;
