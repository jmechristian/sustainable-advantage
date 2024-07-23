'use client';
import React from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const HeroGroup = () => {
  const { rive, RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: 'https://packschool.s3.amazonaws.com/sa-intro-group-2.riv',
    stateMachines: 'State Machine 1',
    // Be sure to specify the correct state machine (or animation) name
    onLoadError: (err) => console.log(err),
    // This is optional.Provides additional layout control.
    autoplay: true,
  });
  return <RiveComponent />;
};

export default HeroGroup;
