import React from "react";
import styled, {css} from "react-emotion";
import { Link } from "react-router-dom";

const buttonStyle = css`
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

const Nav = styled("div")`
  display: flex;
  height: 50px;
  background-color: #000000;
  align-items: center;
  justify-content: center;
`;

const NavA = styled("a")`
  ${buttonStyle}
`;

const NavLink = styled(Link)`
  ${buttonStyle}
`;

const Button = styled("div")`
  ${buttonStyle}
`;

const NavBar = (props) => {
  return (
    <Nav>
      <Button onClick={() => props.scrollCommand(0)}>First</Button>
      <Button onClick={() => props.scrollCommand(-1)}>Latest</Button>
      <NavA href="https://tapas.io/episode/944804" target="_blank">Tapas</NavA>
      <NavLink to="/#title">Toymaker</NavLink>
    </Nav>
  );
};

export default NavBar;
