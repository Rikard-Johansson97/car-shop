import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";

interface LeftContentProps {
  car: Car;
}

const LeftContent: FC<LeftContentProps> = ({ car }) => {
  return (
    <div className='flex-1 w-full max-w-[270px]  sm:max-w-xs md:max-w-sm  flex items-center justify-center animate-fade-right'>
      <div className='flex flex-col gap-4 p-4'>
        <div className='bg-black rounded-full w-24 flex justify-center shadow-sm'>
          <p className='text-sm bg-black rounded-full text-white p-1 uppercase'>
            {car.category}
          </p>
        </div>
        <div className='flex flex-col text-5xl'>
          <h1 className='uppercase'>{car.make}</h1>
          <span className='font-bold uppercase'>
            {`${car.model} ${car.engine.type}`}
          </span>
        </div>
        <p className='text-sm'>{car.summary}</p>

        <p className='font-semibold'>{}</p>
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
