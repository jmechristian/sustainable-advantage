'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const CTABlock = () => {
  return (
    <div className='w-full border-2 border-black py-5 flex'>
      <div className='grid lg:grid-cols-12 w-full'>
        <div className='lg:col-span-8 content-center'>
          <div className='p-10 lg:p-20 flex flex-col gap-5 text-center lg:text-left'>
            <div className='text-4xl lg:text-5xl font-semibold text-sustainable-green font-sans'>
              Ready To Get Started?
            </div>
            <div className='font-body text-medium text-lg lg:text-xl'>
              Scan or click the QR code or follow the link below to fill out the
              interest form and a team member will reach out to your business
              with more information on how to get started or answer any
              questions you may have.
            </div>
          </div>
        </div>
        <div className='lg:col-span-4 w-full lg:p-12 items-center'>
          <div
            className='cursor-pointer w-full max-w-xs mx-auto bg-sustainable-green flex justify-center items-center p-10 mb-10 lg:mb-0'
            onClick={() =>
              window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSfrH0nMFWqpKVlq9DDulpKsnD4q5DhrHBejEe73jd0CQvOKwg/viewform',
                '_blank'
              )
            }
          >
            <Image
              src={'https://packschool.s3.amazonaws.com/sa-qrcode.png'}
              width={390}
              height={390}
              layout='responsive'
              alt='QR Code'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABlock;
