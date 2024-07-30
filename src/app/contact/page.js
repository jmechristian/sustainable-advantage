import CTABlock from '@/components/CTABlock';
import MotionWrapper from '@/components/MotionWrapper';
import React from 'react';
import { MdForwardToInbox } from 'react-icons/md';

const contacts = [
  {
    name: 'Contact the Team',
    title: 'For all general questions and inquiries',
    pic: 'https://packschool.s3.amazonaws.com/logo.png',
    background: 'bg-sustainable-green',
    email: 'thesustainableadvantage@gmail.com',
  },
  {
    name: 'Dr. James Sternberg',
    title: 'Associate Professor at Clemson University',
    pic: 'https://packschool.s3.amazonaws.com/DrSternberg.png',
    background: 'bg-[#d5673b]',
    email: 'sternbe@clemson.edu',
  },
  {
    name: 'Hunter Dixon',
    title: 'Graduate Assistant at Clemson University',
    pic: 'https://packschool.s3.amazonaws.com/Hunter.png',
    background: 'bg-[#d5673b]',
    email: 'hcdixon@clemson.edu',
  },
  {
    name: 'Melissa Williams',
    title: 'Program Coordinator at Mill Village Ministries',
    pic: 'https://packschool.s3.amazonaws.com/Melissa.png',
    background: 'bg-[#5799a4]',
    email: 'melissa@millcommunity.org',
  },
];

const Page = () => {
  return (
    <MotionWrapper>
      <div className='w-full flex flex-col gap-10 lg:gap-20 py-10 lg:py-16 px-6 lg:px-0'>
        <div className='flex flex-col gap-6'>
          <div className='font-semibold text-3xl lg:text-4xl text-sustainable-green'>
            Contact Us
          </div>
          <div className='grid lg:grid-cols-4 gap-5'>
            {contacts.map((t) => (
              <div
                className={`p-6 flex flex-col gap-5 ${t.background}`}
                key={t.name}
              >
                <div
                  className='aspect-square max-w-[200px] mx-auto ring-4 ring-white rounded-full w-full bg-black bg-cover bg-center'
                  style={{ backgroundImage: `url(${t.pic})` }}
                />
                <div className='flex flex-col gap-1.5 items-center text-center'>
                  <div className='text-white font-semibold text-lg leading-tight px-5'>
                    {t.name}
                  </div>
                  <div className='text-white font-body leading-tight'>
                    {t.title}
                  </div>
                  <a
                    href={`mailto:${t.email}`}
                    className='flex items-center gap-2 mt-4 cursor-pointer bg-white hover:bg-neutral-300 transition-colors ease-in text-black p-2'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div>
                      <MdForwardToInbox size={24} color='black' />
                    </div>
                    <div className='text-black text-xs font-body leading-tight'>
                      {t.email}
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CTABlock />
      </div>
    </MotionWrapper>
  );
};

export default Page;
