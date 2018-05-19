import React from "react";
import styled from "react-emotion";
import mandy from "../comic/img/banner.png";
import { Link } from "react-router-dom";

const Container = styled("div")`
  position: relative;
  margin: auto;
  top: 50px;
  width: 100%;
  max-width: 1100px;
`;

const DrawerButton = styled(Link)`
  display: flex;
  justify-content: center;
  max-width: 100%;
  height: 480px;
  overflow: hidden;
  margin: 50px 0 0 0;
  &:hover {
    background-color: white;
    opacity: 0.1;
    cursor: pointer;
  }
`;

const FlexImage = styled("img")`
  flex: none;
`;

const BottomContainer = styled("div")`
  position: relative;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -10px;
  margin-right: -10px;
`;

const BottomButton = styled("a")`
  color: white;
  height: 175px;
  width: 175px;
  overflow: hidden;
  margin: 0px 50px 0px 50px;
  &:hover {
    background-color: white;
    opacity: 0.1;
    cursor: pointer;
  }
`;

const ShelfMenu = props => (
  <Container>
    <DrawerButton to="/mandy">
    </DrawerButton>
    <DrawerButton to="/goblins">
    </DrawerButton>
    <DrawerButton to="/gallery"></DrawerButton>
    <BottomContainer>
      <BottomButton href="https://themirandachick.tumblr.com/"></BottomButton>
      <BottomButton href="https://themirandachick.deviantart.com/"></BottomButton>
      <BottomButton href="https://www.pinterest.ca/eastwoodmiranda/"></BottomButton>
      <BottomButton href="mailto:eastwoodmiranda@gmail.com"></BottomButton>
    </BottomContainer>
  </Container>
);

export default ShelfMenu;
