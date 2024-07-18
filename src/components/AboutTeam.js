import Image from 'next/image';
import React from 'react';

const AboutTeam = () => {
  return (
    <div className='flex flex-col'>
      <div className='grid lg:grid-cols-12 gap-16'>
        <div className='col-span-6 flex flex-col gap-10'>
          <div className='w-full bg-sustainable-green text-white p-12 rounded-2xl'>
            <p className='text-lg lg:text-3xl font-body'>
              The Sustainable Advantage Team is comprised of members from the{' '}
              <span className='font-semibold'>Clemson Packaging Science</span>{' '}
              program,{' '}
              <span className='font-semibold'>outside organizations</span>{' '}
              providing support, and our outreach partner:{' '}
              <span className='font-semibold'>Mill Village Ministries.</span>
            </p>
          </div>
          <div className='text-2xl text-neutral-700 font-body'>
            The team combines expertise from numerous backgrounds in{' '}
            <span className='font-semibold'>
              sustainability, packaging, waste management, and more
            </span>{' '}
            to provide participants with{' '}
            <span className='font-semibold'>
              technical assistance and guidance
            </span>{' '}
            in their efforts to implement sustainability.
          </div>
          <div className='w-full'>
            <Image
              src={'https://packschool.s3.amazonaws.com/fnps-color.png'}
              width={350}
              height={99}
              alt='FPS Logo'
            />
          </div>
        </div>
        <div className='col-span-6 flex flex-col gap-10'>
          <div className='w-full'>
            <Image
              src={'https://packschool.s3.amazonaws.com/Kongsberg-Image-sm.png'}
              width={719}
              height={760}
              alt='SA'
            />
          </div>
        </div>
      </div>
      <div className='w-full border-t-8 border-sustainable-green  mt-10 lg:mt-24'></div>
      <div className='grid grid-cols-4 w-full items-center mt-5 lg:mt-10'>
        <div className='w-full px-20'>
          <Image
            src={
              'https://packschool.s3.amazonaws.com/PS_com-LOGO-Transparent.webp'
            }
            width={1893}
            height={934}
            alt='Packaging School'
          />
        </div>
        <div className='w-full'>
          <Image
            src={
              'https://packschool.s3.amazonaws.com/SCSC-Partner-Logo-SPC.webp'
            }
            width={800}
            height={600}
            alt='SPC Logo'
          />
        </div>
        <div className='w-full px-20'>
          <Image
            src={'https://packschool.s3.amazonaws.com/mill.png'}
            width={400}
            height={439}
            alt='Mill Village Ministries Logo'
          />
        </div>
        <div className='w-full px-6'>
          <Image
            src={
              'https://packschool.s3.amazonaws.com/SC+dept+commerce+logo.png'
            }
            width={225}
            height={225}
            alt='SC Dept of Commerce Logo'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
