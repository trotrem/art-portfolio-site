import React from "react";
import { media } from "../static/js/style-utils.js";
import styled from "styled-components";

const Grid = styled.div`
  height: 50px;
  background-color: #4499bb;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const NavBar = ({ props }) => {
  return (
    <Grid>
      <Button>Home</Button>
      <Button>Euh...</Button>
      <Button>What else?</Button>
      <Button>About!</Button>
    </Grid>
  );
};

export default NavBar;
