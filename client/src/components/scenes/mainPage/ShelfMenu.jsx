import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import shelf from "./img/DeskImages/Pieces/deskplank.gif";

const Container = styled("div")`
  background-image: url(${shelf});
  background-repeat: repeat-x;
  background-size: 30% 100%;
  padding-top: 5%;
  width: 100%;
`;

const DrawerButton = styled(Link)`
  display: block;
  max-width: 65%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  &:hover {
    filter: brightness(110%);    
    cursor: pointer;
  }
`;

const DrawerImage = styled("img")`
  width: 100%;
`

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
    filter: brightness(110%);    
    cursor: pointer;
  }
`;

const ShelfMenu = props => (
  <Container>
    <DrawerButton to="/mandy">
      <DrawerImage src={require("./img/DeskImages/Drawer1.png")}/>
    </DrawerButton>
    <DrawerButton to="/goblins">
      <DrawerImage src={require("./img/DeskImages/Drawer2.png")}/>
    </DrawerButton>
    <DrawerButton to="/gallery">
      <DrawerImage src={require("./img/DeskImages/Drawer3.png")}/>
    </DrawerButton>
    <BottomContainer>
      <BottomButton href="https://themirandachick.tumblr.com/"></BottomButton>
      <BottomButton href="https://themirandachick.deviantart.com/"></BottomButton>
      <BottomButton href="https://www.pinterest.ca/eastwoodmiranda/"></BottomButton>
      <BottomButton href="mailto:eastwoodmiranda@gmail.com"></BottomButton>
    </BottomContainer>
  </Container>
);

export default ShelfMenu;
