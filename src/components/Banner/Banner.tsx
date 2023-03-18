import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React, { FC } from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

interface BannerProps {
  car: Car;
}

const Banner: FC<BannerProps> = ({ car }) => {
  return (
    <div>
      <div className=' flex justify-between items-center min-h-screen'>
        <LeftContent car={car} />
        <div className='flex-1 relative xl:static right-0 animate-fade-up flex justify-center w-full max-h-screen'>
          <Image
            src={urlFor(car.image).url()}
            alt='bugatti-image'
            width='0'
            height='0'
            sizes='100vw'
            className=' w-full overflow-hidden object-contain'
          />
        </div>
        <div className='flex-1 w-full max-w-sm  hidden  xl:flex items-center justify-center p-8 animate-fade-left'>
          <RightContent car={car} />
        </div>
      </div>
      <div className='relative xl:hidden flex p-4 z-50 animate-fade-up'>
        <RightContent car={car} />
      </div>
    </div>
  );
};

export default Banner;
