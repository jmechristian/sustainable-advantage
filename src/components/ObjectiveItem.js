'use client';
import React, { useState } from 'react';

const ObjectiveItem = ({ obj, Icon }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className='w-full h-full px-6 py-10 rounded bg-sustainable-green text-white flex items-center flex-col gap-4'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className='w-24 h-24'>
        <Icon parentHover={isHovering} />
      </div>
      <div className='flex flex-col gap-3 text-white font-medium leading-snug text-center'>
        {obj.content}
      </div>
    </div>
  );
};

export default ObjectiveItem;
