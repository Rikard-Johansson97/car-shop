"use client";

import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React, { FC } from "react";
import CountUp from "react-countup";

interface EngineSpecsProps {
  engine: Engine;
}

const EngineSpecs: FC<EngineSpecsProps> = ({ engine }) => {
  const displacement = parseFloat(engine.displacement.toFixed(1));
  console.log(engine);

  return (
    <div className='flex py-10 px-4'>
      <div className='engineSpec '>
        <div className='flex flex-col primaryGradient max-w-[250px] p-2 w-full rounded-lg shadow'>
          <h3 className='text-sm md:text-2xl font-bold'>
            W
            <CountUp start={0} end={16} />
          </h3>
          <p className='text-xs text-gray-700'>W Config</p>
        </div>
        <div className='flex flex-col primaryGradient max-w-[250px] p-2 w-full rounded-lg shadow'>
          <h3 className='text-sm font-bold md:text-2xl'>
            <CountUp start={0} end={displacement} decimals={1} /> L
          </h3>
          <p className='text-xs text-gray-700'>Displacement</p>
        </div>
      </div>
      <div className='flex-1 h-full'>
        <Image
          src={urlFor(engine.image).url()}
          alt='engine-image'
          width={1000}
          height={1000}
          className='relative  drop-shadow-lg px-2'
        />
      </div>
      <div className='engineSpec '>
        <div className='flex flex-col primaryGradient w-full max-w-[250px] p-2  rounded-lg shadow'>
          <h3 className='text-sm font-bold md:text-2xl'>
            <CountUp start={0} end={engine.power} /> HP
          </h3>
          <p className='text-xs text-gray-700'>Horse Power</p>
        </div>
        <div className='flex flex-col primaryGradient max-w-[250px] p-2 w-full rounded-lg shadow'>
          <h3 className='text-sm font-bold md:text-2xl'>
            <CountUp start={0} end={engine.torque} /> Nm
          </h3>
          <p className='text-xs text-gray-700'>Torque</p>
        </div>
      </div>
    </div>
  );
};

export default EngineSpecs;
