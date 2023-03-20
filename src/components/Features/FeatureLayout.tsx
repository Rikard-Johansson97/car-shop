import React, { FC } from "react";
import Feature from "./Feature";

interface FeatureLayoutProps {
  car: Car;
}

const FeatureLayout: FC<FeatureLayoutProps> = ({ car }) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='animate-fade-right'>
        <Feature
          title={car.design.title}
          description={car.design.description}
          image={car.design.image}
          className='md:flex-row'
        />
      </div>
      <div className='animate-fade-left'>
        <Feature
          title={car.performance.title}
          description={car.performance.description}
          image={car.performance.image}
          className='md:flex-row-reverse'
        />
      </div>
    </div>
  );
};

export default FeatureLayout;
