"use client";
import React, { FC } from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import ShutterSpeedOutlinedIcon from "@mui/icons-material/ShutterSpeedOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CountUp from "react-countup";

interface RightContentProps {
  car: Car;
}

const RightContent: FC<RightContentProps> = ({ car }) => {
  const specs = [
    {
      value: car.topSpeed,
      measure: "MPH",
      icon: <SpeedIcon style={{ color: "#304ffd" }} />,
      title: "Top Speed",
    },
    {
      value: car.weight,
      measure: "lbs",
      icon: <DirectionsCarFilledOutlinedIcon style={{ color: "#ab55ed" }} />,
      title: "Weight",
    },
    {
      value: car.acceleration,
      measure: "s",

      icon: <TimerOutlinedIcon style={{ color: "#ebb259" }} />,
      title: "0-60 mph",
    },
    {
      value: car.engine.power,
      measure: "HP",
      icon: <ShutterSpeedOutlinedIcon style={{ color: "#74d149" }} />,
      title: "Horse Power",
    },
  ];

  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-2 gap-4 w-full'>
      {specs.map((spec) => (
        <div
          key={spec.title}
          className='bg-bg-secondary p-4 flex flex-col gap-1 rounded-lg shadow-lg items-center justify-center'>
          <div className='bg-gradient-to-t from-bg-secondary to-bg p-4 rounded-full shadow-sm'>
            {spec.icon}
          </div>

          <h3 className='font-bold'>
            <CountUp
              start={0}
              end={spec.value}
              decimals={spec.measure === "s" ? 1 : 0}
            />
            {spec.measure}
          </h3>
          <p className='text-xs text-gray-500'>{spec.title}</p>
        </div>
      ))}
    </div>
  );
};

export default RightContent;
