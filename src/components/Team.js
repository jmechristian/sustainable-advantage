import React from 'react';

const team = [
  {
    name: 'Dr. Andrew Hurley',
    title: 'Professor at Clemson University',
    pic: 'https://packschool.s3.amazonaws.com/DrHurley.png',
    background: 'bg-[#d5673b]',
  },
  {
    name: 'Dr. James Sternberg',
    title: 'Associate Professor at Clemson University',
    pic: 'https://packschool.s3.amazonaws.com/DrSternberg.png',
    background: 'bg-[#d5673b]',
  },
  {
    name: 'Sheryl Guarniero',
    title: 'Executive Director of Sustain Cities',
    pic: 'https://packschool.s3.amazonaws.com/Sheryl.png',
    background: 'bg-[#5799a4]',
  },
  {
    name: 'Melissa Williams',
    title: 'Program Coordinator at Mill Village Ministries',
    pic: 'https://packschool.s3.amazonaws.com/Melissa.png',
    background: 'bg-[#5799a4]',
  },
  {
    name: 'Hunter Dixon',
    title: 'Graduate Assistant at Clemson University',
    pic: 'https://packschool.s3.amazonaws.com/Hunter.png',
    background: 'bg-[#d5673b]',
  },
  {
    name: 'Margaret Milani',
    title: 'Graduate Assistant at Clemson University',
    pic: 'https://packschool.s3.amazonaws.com/Margaret.png',
    background: 'bg-[#d5673b]',
  },
];

const Team = () => {
  return (
    <div className='flex flex-col gap-10 lg:gap-24'>
      <div className='flex flex-col gap-6'>
        <div className='font-semibold text-3xl lg:text-4xl text-sustainable-green px-6 lg:px-0'>
          Meet Our Team
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
          {team.map((t) => (
            <div
              className={`p-6 flex flex-col gap-5 ${t.background}`}
              key={t.name}
            >
              <div
                className='aspect-square ring-4 ring-white rounded-full w-full bg-black bg-cover bg-center'
                style={{ backgroundImage: `url(${t.pic})` }}
              />
              <div className='flex flex-col gap-1.5 items-center text-center'>
                <div className='text-white font-semibold text-lg leading-tight px-5'>
                  {t.name}
                </div>
                <div className='text-white font-body leading-tight'>
                  {t.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
