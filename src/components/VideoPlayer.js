'use client';
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className='w-full'>
      <ReactPlayer
        url={'https://www.youtube.com/embed/h5IOkDFCxH4?si=Y2eGHQU7_EVgXllo'}
      />
    </div>
  );
};

export default VideoPlayer;
