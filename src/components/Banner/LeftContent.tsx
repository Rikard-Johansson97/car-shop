import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";

interface LeftContentProps {}

const LeftContent: FC<LeftContentProps> = ({}) => {
  return (
    <div className='w-full max-w-[270px]  sm:max-w-xs md:max-w-sm  flex items-center justify-center animate-fade-right'>
      <div className='flex flex-col gap-4 p-4'>
        <div className='bg-black rounded-full w-24 flex justify-center shadow-sm'>
          <p className='text-sm bg-black rounded-full text-white p-1'>
            Sports Car
          </p>
        </div>
        <div className='flex flex-col text-5xl'>
          <h1 className=''>BUGATTI</h1>
          <span className='font-bold'>VEYRON 16.4</span>
        </div>
        <p className='text-sm'>
          Discover unparalleled luxury and performance in the Bugatti Veyron
          16.4, featuring a striking design and breathtaking speed.
        </p>

        <p className='font-semibold'>$ 290.000</p>
        <button
          type='button'
          className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 duration-200 hover:brightness-105  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-md'>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default LeftContent;
