import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: center;
  border-radius: 3px;
  padding: 0.5rem 0;
  width: 15vw;
  background: transparent;
  color: white;
  border: 2px solid white;
  &:hover{
		background-color: palevioletred;
        cursor:pointer;
	}
`;

const NavButton = props => {
  return <Button to={props.to}>{props.children}</Button>;
};

export default NavButton;
