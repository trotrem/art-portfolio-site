import React from "react";
import styled from "styled-components";
import mandy from "../comic/img/banner.png";
import goblins from "../goblins/img/plxLayers/4a.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  margin: auto;
  top: 100px;
  width: 100%;
  max-width: 980px;
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  max-width: 100%;
  color: white;
  border: 8px solid white;
  height: 480px;
  overflow: hidden;
  margin: 0px 0 50px 0;
  background-color: #446644;
  &:hover {
    opacity: 0.9;
    background-color: #449944;
    cursor: pointer;
  }
`;

const StyledImage = styled.img`
  flex:none;
`;

const ShelfMenu = props => (
  <Container>
    <Button to="/goblins">
      <StyledImage src={goblins} style={{height:"2000px"}}/>
    </Button>
    <Button to="/mandy">
      <StyledImage src={mandy} />
    </Button>
  </Container>
);

export default ShelfMenu;
