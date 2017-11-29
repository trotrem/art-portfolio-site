import React from "react";
import Plx from 'react-plx';

const PlxLayer = props => (
  <Plx
  animateWhenNotInViewport={ true }
  parallaxData={ [
    {
      start: 'top',
      duration: 1080,
      properties: [
        {
          startValue: 0,
          endValue: props.endValue,
          property: 'translateY',
        },
      ],
    },
  ] }
>
{props.children}
</Plx>
);

export default PlxLayer;
