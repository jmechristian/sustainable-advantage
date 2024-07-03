'use client';
import React, { useEffect } from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const PlantIcon = ({ parentHover }) => {
  const { rive, RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: 'https://packschool.s3.amazonaws.com/sa-plant-2.riv',
    stateMachines: 'State Machine 1',
    // Be sure to specify the correct state machine (or animation) name
    onLoadError: (err) => console.log(err),
    // This is optional.Provides additional layout control.
    autoplay: true,
  });

  const hoverInput = useStateMachineInput(rive, 'State Machine 1', 'isHover');

  useEffect(() => {
    if (hoverInput && parentHover === true) {
      hoverInput.value = true;
    }

    if (hoverInput && parentHover === false) {
      hoverInput.value = false;
    }
  }, [parentHover, hoverInput]);

  return <RiveComponent isHover={parentHover} />;
};

export default PlantIcon;
