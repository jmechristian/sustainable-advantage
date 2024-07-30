'use client';
import CTABlock from '@/components/CTABlock';
import MotionWrapper from '@/components/MotionWrapper';
import React from 'react';
import { MdCloudDownload, MdOndemandVideo } from 'react-icons/md';

const webinars = [
  {
    id: 1,
    title: 'Webinar 1',
    content:
      'Join Dr. Sternberg, an assistant professor in sustainable packaging at Clemson University, as we begin to explore what it means to be sustainable and what The Sustainable Advantage program can do for your business.',
    screenshot: 'https://packschool.s3.amazonaws.com/screengrab-sa.png',
    objectives: [
      'Understand the negative impacts of plastic waste on the environment and human health.',
      'Introduce EPA recommendations and different types of more environmentally friendly products and waste disposal methods.',
      'Explain the business benefits with switching to more sustainable practices.',
      'Understand the resources provided by the Clemson Research Team and begin conducting an internal sustainability audit.',
    ],
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
  return (
    <MotionWrapper>
      <div className='w-full flex flex-col gap-10 lg:gap-16 py-10 lg:py-16 px-6 lg:px-0'>
        <div className='grid lg:grid-cols-2 w-full items-center gap-10 lg:gap-20'>
          <div className='aspect-video lg:col-span-1'>
            <div
              className='w-full h-full bg-black bg-contain bg-no-repeat bg-center'
              style={{ backgroundImage: `url(${webinars[0].screenshot})` }}
            ></div>
          </div>
          <div className='w-full flex flex-col pl-5 gap-1.5 lg:col-span-1'>
            <div className='font-medium text-4xl text-sustainable-green'>
              {webinars[0].title}
            </div>
            <div className='text-xl'>{webinars[0].content}</div>
          </div>
        </div>
        <div className='w-full border-t-8 border-sustainable-green'></div>
        <div className='grid lg:grid-cols-2 gap-10'>
          <div className='lg:col-span-2 text-2xl font-medium'>
            Course 1 Objectives
          </div>
          {webinars[0].objectives.map((ob) => (
            <div
              className='p-5 bg-sustainable-green/30 leading-tight text-lg font-body'
              key={ob}
            >
              {ob}
            </div>
          ))}
        </div>
        <div className='w-full border-t-8 border-sustainable-green'></div>
        <div className='grid lg:grid-cols-3 gap-10'>
          <div className='bg-sustainable-green p-10 flex flex-col gap-3 lg:justify-between'>
            <div className='flex flex-col gap-3'>
              <div className='font-medium text-3xl text-white'>Step One</div>
              <div className='text-white font-body font-medium'>
                Download the Module 1 worksheet below. This worksheet will guide
                you through Webinar 1 and explain how to complete Appendix 1 &
                2.
              </div>
            </div>
            <div
              className='bg-white flex items-center gap-2 w-fit py-2 px-3 cursor-pointer hover:bg-neutral-200 transition-colors ease-in'
              onClick={() =>
                window.open(
                  'https://packschool.s3.amazonaws.com/Module-1-Worksheet.pdf',
                  '_blank'
                )
              }
            >
              <div>
                <MdCloudDownload size={24} color='black' />
              </div>
              <div>Download Worksheet</div>
            </div>
          </div>
          <div className='bg-sustainable-green p-9 flex flex-col gap-5 justify-between'>
            <div className='flex flex-col gap-3'>
              <div className='font-medium text-3xl text-white'>Step Two</div>
              <div className='text-white font-body font-medium'>
                Watch the Webinar 1 video via YouTube. This webinar will
                encourage you to begin evaluating the products, packages,
                materials &amp; waste disposal methods your business currently
                uses.
              </div>
            </div>
            <div className='bg-white flex items-center gap-2 w-fit py-2 px-3 cursor-pointer hover:bg-neutral-200 transition-colors ease-in'>
              <div>
                <MdOndemandVideo size={24} color='black' />
              </div>
              <div>Watch Webinar 1</div>
            </div>
          </div>
          <div className='bg-sustainable-green p-10 flex flex-col gap-5 justify-between'>
            <div className='flex flex-col gap-3'>
              <div className='font-medium text-3xl text-white'>Step Three</div>
              <div className='text-white font-body font-medium'>
                Download Appendix 1 & 2, then begin filling them out using the
                directions provided in the Module 1 worksheet.
              </div>
              <div className='text-white font-body font-bold'>
                Once completed, email the digital copies to:
                thesustainableadvantage@gmail.com
              </div>
            </div>
            <div className='w-full grid lg:grid-cols-2 gap-3'>
              <div
                className='bg-white flex items-center gap-2 w-fit py-2 px-3 cursor-pointer hover:bg-neutral-200 transition-colors ease-in'
                onClick={() =>
                  window.open(
                    'https://packschool.s3.amazonaws.com/Appendix-1.pdf',
                    '_blank'
                  )
                }
              >
                <div>
                  <MdCloudDownload size={24} color='black' />
                </div>
                <div>Appendix 1</div>
              </div>
              <div
                className='bg-white flex items-center gap-2 w-fit py-2 px-3 cursor-pointer hover:bg-neutral-200 transition-colors ease-in'
                onClick={() =>
                  window.open(
                    'https://packschool.s3.amazonaws.com/Appendix-2.pdf',
                    '_blank'
                  )
                }
              >
                <div>
                  <MdCloudDownload size={24} color='black' />
                </div>
                <div>Appendix 2</div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full border-t-8 border-sustainable-green'></div>
        <CTABlock />
      </div>
    </MotionWrapper>
  );
};

export default Page;
