import React from 'react';
import LogoComponent from './LogoComponent';
import HeroGroup from './HeroGroup';

const Hero = () => {
  return (
    <div
      className='w-full py-20 lg:py-10 bg-cover bg-right-bottom border-b-8 border-b-sustainable-green lg:mb-16'
      style={{
        backgroundImage: `url('https://packschool.s3.amazonaws.com/tree-border2-sm.png')`,
      }}
    >
      <div className='w-full min-h-[550px] grid lg:grid-cols-2 gap-10 lg:gap-16 overflow-hidden'>
        <div className='flex flex-col justify-center items-center mt-4 lg:mt-0'>
          <div className='w-full h-40 lg:h-72'>
            <LogoComponent />
          </div>
          <div className='w-full h-[400px] lg:hidden'>
            <HeroGroup />
          </div>
          <div className='w-full md:text-center mt-10 lg:mt-0 pl-4 pr-4 lg:pr-6 font-sans text-2xl font-medium text-white lg:text-orange-500'>
            A new program providing free P2 technical assistance and guidance to
            businesses with the goal of improving human and environmental health
            in disadvantaged communities.
          </div>
        </div>
        <HeroGroup />
      </div>
    </div>
  );
};

export default Hero;
