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
      <div className='flex-1 flex flex-col items-center justify-evenly'>
        <div className='flex flex-col'>
          <h3 className='text-2xl font-bold'>
            <CountUp start={0} end={16} />
            -CYLINDER
          </h3>
          <p className='text-xs text-gray-700'>W CONFIGURATION</p>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-2xl font-bold'>
            <CountUp start={0} end={displacement} decimals={1} /> L
          </h3>
          <p className='text-xs text-gray-700'>W CONFIGURATION</p>
        </div>
      </div>
      <div className='flex-1 h-full'>
        <Image
          src={urlFor(engine.image).url()}
          alt='engine-image'
          width={1000}
          height={1000}
          className='drop-shadow-lg'
        />
      </div>
      <div className='flex-1 flex flex-col items-center justify-evenly divide-solid text-start'>
        <div className='flex flex-col'>
          <h3 className='text-2xl font-bold'>
            <CountUp start={0} end={engine.power} /> HP
          </h3>
          <p className='text-xs text-gray-700'>Horse Power</p>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-2xl font-bold'>
            <CountUp start={0} end={engine.torque} /> Nm
          </h3>
          <p className='text-xs text-gray-700'>Torque</p>
        </div>
      </div>
    </div>
  );
};

export default EngineSpecs;
