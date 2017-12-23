import React from "react";
import styled from "styled-components";
import mandy from "../comic/img/banner.png";
import goblins from "../goblins/img/plxLayers/4a.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  margin: auto;
  background-color: #f98ff9;
  top: 200px;
  width: 100%;
  max-width: 1200px;
`;

const Button = styled(Link)`
  display: block;
  maxwidth: 100%;
  height: 684px;
  color: white;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const StyledImage = styled.img`
  width: calc(100% - 16px);
  border: 8px solid white;
`;

const ShelfMenu = props => (
  <Container>
    <Button to="/goblins">
      <StyledImage src={goblins} />
    </Button>
    <Button to="/mandy">
      <StyledImage src={mandy} />
    </Button>
  </Container>
);

export default ShelfMenu;
