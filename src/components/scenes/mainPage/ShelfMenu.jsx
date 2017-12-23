import React from "react";
import styled from "styled-components";
import mandy from "../comic/img/banner.png";
import goblins from "../goblins/img/plxLayers/4a.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  margin: auto;
  background-color: #446644;
  top: 200px;
  width: 100%;
  max-width: 1200px;
`;

const Button = styled(Link)`
  display: block;
  max-width: 100%;
  color: white;
  border: 8px solid white;
  height: 684px;
  overflow: hidden;
  &:hover {
    opacity: 0.9;
    background-color: #449944;
    cursor: pointer;
  }
`;

const StyledImage = styled.img`
  width: 1184px;
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
