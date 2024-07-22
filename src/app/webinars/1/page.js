import React from 'react';

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
    <div className='w-full flex flex-col gap-10 lg:gap-20 py-10 lg:py-16'>
      <div className='grid lg:grid-cols-5 w-full items-center'>
        <div className='aspect-video lg:col-span-2'>
          <div
            className='w-full h-full bg-black bg-contain bg-no-repeat bg-center'
            style={{ backgroundImage: `url(${webinars[0].screenshot})` }}
          ></div>
        </div>
        <div className='w-full flex flex-col pl-5 gap-1.5 lg:col-span-3'>
          <div className='font-medium text-4xl text-sustainable-green'>
            {webinars[0].title}
          </div>
          <div>{webinars[0].content}</div>
          <div className='grid grid-cols-2 gap-5 content-center mt-2'>
            {webinars[0].objectives.map((ob) => (
              <div
                className='text-sm p-2.5 bg-sustainable-green/30 leading-tight'
                key={ob}
              >
                {ob}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full border-t-8 border-sustainable-green'></div>
      <div className='grid grid-cols-3 gap-10'>
        <div className='bg-sustainable-green p-10 flex flex-col gap-5'>
          <div className='font-medium text-3xl text-white'>Step One</div>
          <div className='text-white font-body font-medium'>
            Download the Module 1 worksheet below. This worksheet will guide you
            through Webinar 1 and explain how to complete Appendix 1 & 2.
          </div>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Page;
