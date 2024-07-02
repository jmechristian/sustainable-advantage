import React from 'react';

const navigation = [
  {
    name: 'Home',
    link: '#',
  },
  {
    name: 'About the Team',
    link: '#',
  },
  {
    name: 'Services',
    link: '#',
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
  return (
    <div className='w-full bg-sustainable-green px-5 py-2'>
      <div className='grid grid-cols-5 divide-x-2 divide-white w-fit mx-auto'>
        {navigation.map((item) => (
          <div
            key={item.link}
            className='w-full flex justify-center font-semibold text-white px-6 font-headline'
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
