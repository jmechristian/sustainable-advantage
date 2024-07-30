'use client';
import React from 'react';
import ReactPlayer from 'react-player';

const WebinarPlayer = ({ url }) => {
  return (
    <div className='aspect-video w-full'>
      <ReactPlayer url={url} width={'100%'} height={'100%'} />
    </div>
  );
};

export default WebinarPlayer;
