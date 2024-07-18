import AboutTeam from '@/components/AboutTeam';
import CTABlock from '@/components/CTABlock';
import Team from '@/components/Team';
import React from 'react';

const Page = () => {
  return (
    <div className='w-full flex flex-col gap-10 lg:gap-20 py-10 lg:py-16'>
      <Team />
      <AboutTeam />
      <CTABlock />
    </div>
  );
};

export default Page;
