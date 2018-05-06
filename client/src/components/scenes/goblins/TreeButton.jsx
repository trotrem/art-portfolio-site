import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import background from "./img/plxLayers/3b.png";

const Button = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: center;
  width: 527px;
  height: 407px;
  background-image: url(${background});
  margin: 20px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const TreeButton = props => {
  return <Button to={props.to}>{props.children}</Button>;
};

export default TreeButton;
