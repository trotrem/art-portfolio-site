import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import shelf from "./img/DeskImages/Pieces/deskplank.gif";

const Container = styled("div")`
  background-image: url(${shelf});
  background-repeat: repeat-x;
  background-size: 30% 100%;
  padding-top: 5%;
  padding-bottom: 5%;
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
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  background: #000000;
  padding: 1vh;
`;

const BottomButton = styled("a")`
  color: white;
  overflow: hidden;
  margin: 0 auto;
  &:hover {
    filter: brightness(110%);    
    cursor: pointer;
  }
`;

const BottomButtonImage = styled("img")`
  height: 15vw;
  width: 15vw;
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
      <BottomButton href="https://themirandachick.tumblr.com/">
        <BottomButtonImage src={require("./img/DeskImages/Tumblr.png")}/>
      </BottomButton>
      <BottomButton href="https://themirandachick.deviantart.com/">
        <BottomButtonImage src={require("./img/DeskImages/Deviantart.png")}/>
      </BottomButton>
      <BottomButton href="https://www.pinterest.ca/eastwoodmiranda/">
        <BottomButtonImage src={require("./img/DeskImages/Pinterest.png")}/>
      </BottomButton>
      <BottomButton href="mailto:eastwoodmiranda@gmail.com">
        <BottomButtonImage src={require("./img/DeskImages/Gmail.png")}/>
      </BottomButton>
    </BottomContainer>
  </Container>
);

export default ShelfMenu;
