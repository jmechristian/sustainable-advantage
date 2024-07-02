'use client';
import React, { useState } from 'react';

const ObjectiveItem = ({ obj, Icon }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className='w-full h-full px-4 py-10 rounded bg-sustainable-green text-white flex justify-center items-center flex-col gap-3'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className='w-20 h-20'>
        <Icon parentHover={isHovering} />
      </div>
      <div className='flex flex-col gap-3 text-white font-medium leading-snug text-center'>
        {obj.content}
      </div>
    </div>
  );
};

export default ObjectiveItem;
