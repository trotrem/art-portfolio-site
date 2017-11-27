import React from "react";
import styled from "styled-components";
import PlxLayer from "./ParallaxLayer.jsx";

const Parallax = props => {
  var layers = props.children.map((child, index) => {
    console.log(child.props.duration)
    return(<PlxLayer key={index}{...child.props}>{child}</PlxLayer>);
  });
return(
  <div>
  {layers}
  </div>
)
}
export default Parallax;
