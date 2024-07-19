import CTABlock from '@/components/CTABlock';
import React from 'react';

const services = [
  {
    title: 'Sustainability Audit',
    content:
      'Businesses can recieve a free sustainability audit conducted by a member of the Clemson Research Team. Together, we will assess your business’ current inputs, outputs, operations, waste disposal methods, and more to determine areas where sustainable alternatives can be implemented.',
    pic: 'https://packschool.s3.amazonaws.com/Audit-Results-Document.png',
  },
  {
    title: 'Technical Assistance',
    content:
      'Are you trying to make your business more sustainable but have a question or need help? The Sustainable Advantage Team is ready to assist you!. We can provide eco-friendly recommendations and solutions tailored to your business’ needs.',
    pic: 'https://packschool.s3.amazonaws.com/Technical-assistance-image.png',
  },
  {
    title: 'Live Workshops',
    content:
      'Located near Greenville, SC? Consider joining us for in-person workshops hosted through our outreach partner: Mill Village Ministies. If you are unable to attend our in-person workshops then look out for our virtual sessions! Workshop topics can vary but each one offers an opportunity to speak with a member of our team, collaborate with other participating business, and more.',
    pic: 'https://packschool.s3.amazonaws.com/Live-Workshop-Image.png',
  },
];

const Page = () => {
  return (
    <div className='w-full flex flex-col gap-10 lg:gap-20 py-10 lg:py-16'>
      <div className='flex flex-col gap-6'>
        <div className='font-semibold text-3xl lg:text-4xl text-sustainable-green'>
          Our Services
        </div>
        <div className='flex flex-col gap-4'>
          {services.map((se) => (
            <div
              className='w-full rounded-xl bg-sustainable-green p-16'
              key={se.pic}
            >
              <div className='w-full grid lg:grid-cols-6 gap-10 items-center'>
                <div className='lg:col-span-4 flex flex-col gap-3'>
                  <div className='text-white font-medium text-4xl'>
                    {se.title}
                  </div>
                  <div className='text-white font-medium text-lg font-body lg:pr-10'>
                    {se.content}
                  </div>
                </div>
                <div className='w-full h-full lg:col-span-2'>
                  <div
                    className='w-full h-full min-h-[300px] bg-contain bg-center bg-no-repeat'
                    style={{ backgroundImage: `url(${se.pic})` }}
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
