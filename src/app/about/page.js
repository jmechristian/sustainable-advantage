import AboutTeam from '@/components/AboutTeam';
import CTABlock from '@/components/CTABlock';
import MotionWrapper from '@/components/MotionWrapper';
import Team from '@/components/Team';
import React from 'react';

const Page = () => {
  return (
    <MotionWrapper>
      <div className='w-full flex flex-col gap-10 lg:gap-20 py-10 lg:py-16 px-4 lg:px-0'>
        <Team />
        <AboutTeam />
        <CTABlock />
      </div>
    </MotionWrapper>
  );
};

export default Page;
