import React from "react";
import Plx from 'react-plx';

const PlxStyle = {
    height:"1080px",
}

const PlxLayer = props => (
  <Plx
  className={PlxStyle}
  animateWhenNotInViewport={ true }
  parallaxData={ [
    {
      start: 'top',
      duration: 1080,
      name: props.key,
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
