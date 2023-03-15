import Image from "next/image";
import React, { FC } from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className=' flex justify-between items-center mt-20 flex-1 min-h-screen'>
      <LeftContent />
      <div className='absolute xl:static -right-40 w-full'>
        <Image
          src={"/bugatti-car.png"}
          alt='image'
          width='0'
          height='0'
          sizes='100vw'
          className=' w-full h-auto rotate-90  '
        />
      </div>
      <RightContent />
    </div>
  );
};

export default Banner;
