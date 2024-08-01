'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { MobileHeader } from './MobileHeader';
import { MdMarkChatUnread } from 'react-icons/md';
import { motion } from 'framer-motion';

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
      <motion.div
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: '0%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='hidden w-full lg:flex justify-center items-center gap-1 bg-amber-200 hover:bg-amber-300 transition-colors ease-in py-3 cursor-pointer'
        onClick={() =>
          window.open('https://forms.gle/orjUbg6TiD1DqFHJ6', '_blank')
        }
      >
        <div>
          <MdMarkChatUnread size={18} color='black' />
        </div>
        <div className='font-medium text-neutral-900'>
          Click here to schedule a free consultation with the Clemson Research
          Team
        </div>
      </motion.div>
      <motion.div
        className='w-full bg-sustainable-green px-5 py-6 hidden lg:block'
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: '0%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
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
      </motion.div>
    </>
  );
};

export default Header;
