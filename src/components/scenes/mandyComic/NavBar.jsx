import React from "react";
import styled from "styled-components";
import Button from "./NavButton.jsx"

const Nav = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "a a a a";
  height: 50px;
  background-color: #447093;
  align-items: center;
  justify-items: center;
`;

const NavButton = styled(Button)`
  grid-area: a;
`;

const NavBar = (props) => {
  return (
    <Nav>
      <NavButton to="/">Home</NavButton>
      <NavButton to="/">Euh...</NavButton>
      <NavButton to="/">What else?</NavButton>
      <NavButton to="/">About!</NavButton>
    </Nav>
  );
};

export default NavBar;
