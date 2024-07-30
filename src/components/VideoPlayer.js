'use client';
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className='aspect-video w-full'>
      <ReactPlayer
        url={'https://www.youtube.com/embed/h5IOkDFCxH4?si=Y2eGHQU7_EVgXllo'}
        light={
          <img
            src='https://packschool.s3.amazonaws.com/video-cover-sm.png'
            alt='Thumbnail'
            className='w-full h-auto'
          />
        }
        width={'100%'}
        height={'100%'}
      />
    </div>
  );
};

export default VideoPlayer;
