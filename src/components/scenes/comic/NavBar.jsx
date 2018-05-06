import React from "react";
import styled from "react-emotion";
import Button from "./NavButton.jsx"

const Nav = styled("div")`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "a a a a";
  height: 50px;
  background-color: #000000;
  align-items: center;
  justify-items: center;
`;

const NavButton = styled(Button)`
  grid-area: a;
`;

const NavBar = (props) => {
  return (
    <Nav>
      <NavButton to="/#title">Home</NavButton>
      <NavButton to="/#title">Euh...</NavButton>
      <NavButton to="/#title">What else?</NavButton>
      <NavButton to="/#title">About!</NavButton>
    </Nav>
  );
};

export default NavBar;
