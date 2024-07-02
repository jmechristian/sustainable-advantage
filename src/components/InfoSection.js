import React from 'react';

const InfoSection = () => {
  return (
    <div className='grid grid-cols-5 w-full p-10'>
      <div
        className='w-full max-w-sm bg-cover bg-center col-span-2'
        style={{
          backgroundImage: `url('https://packschool.s3.amazonaws.com/sustainable-advantage-cup-sm.png')`,
        }}
      ></div>
      <div className='w-full flex flex-col gap-10 col-span-3 py-10 px-5'>
        <p className='text-xl text-sustainable-green font-body leading-relaxed'>
          This program is made available through an EPA cooperative agreement
          with researchers at Clemson University to help prevent plastic waste
          and toxic chemicals from entering the environment.{' '}
        </p>
        <p className='text-xl text-sustainable-green leading-relaxed font-body'>
          Participants in this program will view a series of webinars and engage
          in related activities designed to help them examine their business’
          internal operations and leverage the free technical assistance
          provided by the Clemson Research Team. Participants will also learn
          how to use resources provided by the EPA in an effort to implement
          more sustainable practices into their business.
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
