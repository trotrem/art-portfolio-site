import React from "react";
import styled from "react-emotion";
import mandy from "../comic/img/banner.png";
import goblins from "../goblins/img/plxLayers/4a.png";
import { Link } from "react-router-dom";

const Container = styled("div")`
  position: relative;
  margin: auto;
  top: 50px;
  width: 100%;
  max-width: 980px;
`;

const DrawerButton = styled(Link)`
  display: flex;
  justify-content: center;
  max-width: 100%;
  color: white;
  border: 8px solid white;
  height: 480px;
  overflow: hidden;
  margin: 50px 0 0 0;
  background-color: #446644;
  &:hover {
    opacity: 0.9;
    background-color: #449944;
    cursor: pointer;
  }
`;

const FlexImage = styled("img")`
  flex: none;
`;

const BottomContainer = styled("div")`
  position: relative;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BottomButton = styled("a")`
  color: white;
  border: 8px solid white;
  height: 150px;
  width: 150px;
  overflow: hidden;
  margin: 0px 30px 0px 30px;
  background-color: #446644;
  &:hover {
    opacity: 0.9;
    background-color: #449944;
    cursor: pointer;
  }
`

const ShelfMenu = props => (
  <Container>
    <DrawerButton to="/goblins">
      <FlexImage src={goblins} style={{ height: "2000px" }} />
    </DrawerButton>
    <DrawerButton to="/mandy">
      <FlexImage src={mandy} style={{ height: "584px" }} />
    </DrawerButton>
    <DrawerButton to="/gallery">ART GALLERY</DrawerButton>
    <BottomContainer>
      <BottomButton href="https://themirandachick.deviantart.com/"><FlexImage src={mandy} style={{ height: "150px" }} /></BottomButton>
      <BottomButton href="https://www.pinterest.ca/eastwoodmiranda/"><FlexImage src={mandy} style={{ height: "150px" }} /></BottomButton>
      <BottomButton href="https://themirandachick.tumblr.com/"><FlexImage src={mandy} style={{ height: "150px" }} /></BottomButton>
      <BottomButton href="mailto:eastwoodmiranda@gmail.com"><FlexImage src={mandy} style={{ height: "150px" }} /></BottomButton>
    </BottomContainer>
  </Container>
);

export default ShelfMenu;
