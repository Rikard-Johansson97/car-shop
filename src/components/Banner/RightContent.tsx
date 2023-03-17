"use client";
import React, { FC } from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import ShutterSpeedOutlinedIcon from "@mui/icons-material/ShutterSpeedOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

interface RightContentProps {}

const specs = [
  {
    value: 200,
    measure: "MPH",
    icon: <SpeedIcon style={{ color: "#304ffd" }} />,
    title: "Top Speed",
  },
  {
    value: 4561,
    measure: "lbs",
    icon: <DirectionsCarFilledOutlinedIcon style={{ color: "#ab55ed" }} />,
    title: "Weight",
  },
  {
    value: 1.99,
    measure: "s",
    icon: <ShutterSpeedOutlinedIcon style={{ color: "#74d149" }} />,
    title: "0-60 mph",
  },
  {
    value: 1022,
    measure: "HP",
    icon: <TimerOutlinedIcon style={{ color: "#ebb259" }} />,
    title: "Horse Power",
  },
];

const RightContent: FC<RightContentProps> = ({}) => {
  return (
    <div className='grid grid-cols-2 gap-4 w-full'>
      {specs.map((spec) => (
        <div
          key={spec.title}
          className='bg-bg-secondary p-4 flex flex-col gap-1 rounded-lg shadow-lg items-center justify-center'>
          <div className='bg-gradient-to-t from-bg-secondary to-bg p-4 rounded-full shadow-sm'>
            {spec.icon}
          </div>

          <h3 className='font-bold'>
            {spec.value}
            {spec.measure}
          </h3>
          <p className='text-xs text-gray-500'>{spec.title}</p>
        </div>
      ))}
    </div>
  );
};

export default RightContent;
