'use client';
import CTABlock from '@/components/CTABlock';
import React from 'react';
import { useRouter } from 'next/navigation';

const webinars = [
  {
    id: 1,
    title: 'Webinar 1',
    content:
      'Join Dr. Sternberg, an assistant professor in sustainable packaging at Clemson University, as we begin to explore what it means to be sustainable and what The Sustainable Advantage program can do for your business.',
    screenshot: 'https://packschool.s3.amazonaws.com/screengrab-sa.png',
  },
  {
    id: 2,
    title: 'Webinar 2',
    content:
      'Join Dr. Sternberg, an assistant professor in sustainable packaging at Clemson University, as we begin to explore what it means to be sustainable and what The Sustainable Advantage program can do for your business.',
    screenshot: 'https://packschool.s3.amazonaws.com/screengrab-sa.png',
  },
  {
    id: 3,
    title: 'Webinar 3',
    content:
      'Join Dr. Sternberg, an assistant professor in sustainable packaging at Clemson University, as we begin to explore what it means to be sustainable and what The Sustainable Advantage program can do for your business.',
    screenshot: 'https://packschool.s3.amazonaws.com/screengrab-sa.png',
  },
];

const Page = () => {
  const router = useRouter();
  return (
    <div className='w-full flex flex-col gap-10 lg:gap-20 py-10 lg:py-16'>
      <div className='flex flex-col gap-6'>
        <div className='font-semibold text-3xl lg:text-4xl text-sustainable-green'>
          Webinars
        </div>
        <div className='flex flex-col gap-4'>
          {webinars.map((se) => (
            <div
              className='w-full rounded-xl bg-sustainable-green p-16'
              key={se.id}
            >
              <div className='w-full grid lg:grid-cols-6 gap-10 items-center'>
                <div className='lg:col-span-4 flex flex-col gap-3'>
                  <div className='text-white font-medium text-4xl'>
                    {se.title}
                  </div>
                  <div className='text-white font-medium text-lg font-body lg:pr-10'>
                    {se.content}
                  </div>
                  <div
                    className='bg-white py-2 px-3 font-medium w-fit uppercase mt-5 cursor-pointer hover:bg-neutral-200'
                    onClick={() => router.push(`/webinars/${se.id}`)}
                  >
                    View Webinar
                  </div>
                </div>
                <div className='w-full h-full lg:col-span-2'>
                  <div
                    className='w-full h-full min-h-[300px] bg-contain bg-center bg-no-repeat'
                    style={{ backgroundImage: `url(${se.screenshot})` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CTABlock />
    </div>
  );
};

export default Page;
