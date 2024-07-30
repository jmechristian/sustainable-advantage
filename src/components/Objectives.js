'use client';
import React from 'react';
import { useRive } from '@rive-app/react-canvas';
import GlobeIcon from './GlobeIcon';
import ChatIcon from './ChatIcon';
import ObjectiveItem from './ObjectiveItem';
import PlantIcon from './PlantIcon';
import DocIcon from './DocIcon';

const objectives = [
  {
    id: 1,
    icon: ChatIcon,
    content:
      'Recieve a free sustainability audit and technical assistance from the Clemson Research Team.',
  },
  {
    id: 2,
    icon: GlobeIcon,
    content:
      'Determine the sustainable packaging, products, and waste disposal methods most aligned with business operations and goals.',
  },
  {
    id: 3,
    icon: PlantIcon,
    content:
      'Understand the business benefits associated with switching to eco-friendly packaging, products, and waste disposal methods.',
  },
  {
    id: 4,
    icon: DocIcon,
    content:
      'Generate and enact a plan to replace current products, packaging, and waste disposal methods with more sustainable alternatives.',
  },
];

const Objectives = () => {
  return (
    <div className='flex flex-col gap-5 w-full'>
      <div className='text-3xl font-medium text-center'>
        By The End of This Program, Participants Will:
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 w-full gap-5 px-6 lg:px-0'>
        {objectives.map((obj) => (
          <ObjectiveItem obj={obj} key={obj.id} Icon={obj.icon} />
        ))}
      </div>
    </div>
  );
};

export default Objectives;
