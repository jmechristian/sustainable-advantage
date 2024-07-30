'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { MobileHeader } from './MobileHeader';

const navigation = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About the Team',
    link: '/about',
  },
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'Webinars',
    link: '/webinars',
  },
  {
    name: 'Contact Us',
    link: '/contact',
  },
];

const Header = () => {
  const router = useRouter();

  return (
    <>
      <div className='lg:hidden block'>
        <MobileHeader navigation={navigation} />
      </div>
      <div className='w-full bg-sustainable-green px-5 py-6 hidden lg:block'>
        <div className='grid lg:grid-cols-5 divide-x-2 divide-white w-fit mx-auto'>
          {navigation.map((item) => (
            <div
              key={item.link}
              className='w-full flex justify-center font-semibold cursor-pointer text-white px-6 font-headline hover:text-yellow-300 transition-all ease-in'
              onClick={() => router.push(item.link)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
