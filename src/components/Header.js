'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

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
    link: '#',
  },
  {
    name: 'Contact Us',
    link: '#',
  },
];

const Header = () => {
  const router = useRouter();

  return (
    <div className='w-full bg-sustainable-green px-5 py-5'>
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
  );
};

export default Header;
