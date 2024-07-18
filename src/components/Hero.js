import React from 'react';
import LogoComponent from './LogoComponent';
import HeroGroup from './HeroGroup';

const Hero = () => {
  return (
    <div
      className='w-full py-10 bg-cover bg-right-bottom border-b-8 border-b-sustainable-green mb-10 lg:mb-24'
      style={{
        backgroundImage: `url('https://packschool.s3.amazonaws.com/tree-border2-sm.png')`,
      }}
    >
      <div className='w-full h-[550px] grid lg:grid-cols-2 gap-16 '>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-full h-72'>
            <LogoComponent />
          </div>
          <div className='w-full pr-6 font-sans text-2xl font-medium text-orange-500'>
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
