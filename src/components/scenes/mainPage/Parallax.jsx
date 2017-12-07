import React from "react";
import PlxLayer from "./ParallaxLayer.jsx";

const Parallax = props => {
  const children = props.children;
  var layers = React.Children.map(children, (child, index) => {
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
