import React from "react";
import styled, { css } from "react-emotion";
import { Link } from "react-router-dom";
import shelf from "./img/DeskImages/Pieces/deskplank.gif";
import h_detail from "./img/DeskImages/Pieces/detail1.gif";
import v_detail from "./img/DeskImages/Pieces/detail2.gif";

const Container = styled("div") `
  background-image: url(${shelf});
  background-repeat: repeat-x;
  background-size: 30% 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  width: 100%;
  position: relative;
`;

const HorizontalFlex = styled("div") `
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 3%;
`

const HorizontalDetail = styled("div") `
  height: 0px;
  width: 65%;
  border: 25px solid white;
  border-image: url(${h_detail}) 50% 14% round;
  margin: 0 auto 5% auto;
  @media (max-width: 1024px) {
    display: none;
  }
`

const verticalDetail = css`
  position: relative;
  width: 0px;
  border: 40px solid white;
  border-image: url(${v_detail}) 15% 50% round;
  @media (max-width: 1024px) {
    display: none;
  }
`

const RightVerticalDetail = styled("div") `
  ${verticalDetail}
`

const LeftVerticalDetail = styled("div") `
  ${verticalDetail}
`

const DrawerContainer = styled("div") `
`

const DrawerButton = styled(Link) `
  display: block;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  &:hover {
    filter: brightness(110%);    
    cursor: pointer;
  }
`;

const DrawerImage = styled("img") `
  width: 100%;
`

const BottomContainer = styled("div") `
  position: relative;
  width: 800px;
  max-width: 65%;
  height: 12vw;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  background: #000000;
  padding: 1%;
`;

const BottomButton = styled("a") `
  width: 12vw;
  min-width: 100px;
  height: 100%;
  color: white;
  margin: 0 auto;
  overflow: hidden;
  &:hover {
    filter: brightness(110%);    
    cursor: pointer;
  }
`;

const BottomButtonImage = styled("img") `
  height: 100%;
`;

const ShelfMenu = props => (
  <Container>
    <HorizontalDetail />
    <HorizontalFlex>
    <LeftVerticalDetail />
      <DrawerContainer>
        <DrawerButton to="/mandy">
          <DrawerImage src={require("./img/DeskImages/Drawer1.png")} />
        </DrawerButton>
        <DrawerButton to="/goblins">
          <DrawerImage src={require("./img/DeskImages/Drawer2.png")} />
        </DrawerButton>
        <DrawerButton to="/gallery">
          <DrawerImage src={require("./img/DeskImages/Drawer3.png")} />
        </DrawerButton>
      </DrawerContainer>
    <RightVerticalDetail />
    </HorizontalFlex>
    <BottomContainer>
      <BottomButton href="https://themirandachick.tumblr.com/">
        <BottomButtonImage src={require("./img/DeskImages/Tumblr.png")} />
      </BottomButton>
      <BottomButton href="https://themirandachick.deviantart.com/">
        <BottomButtonImage src={require("./img/DeskImages/Deviantart.png")} />
      </BottomButton>
      <BottomButton href="https://www.pinterest.ca/eastwoodmiranda/">
        <BottomButtonImage src={require("./img/DeskImages/Pinterest.png")} />
      </BottomButton>
      <BottomButton href="mailto:eastwoodmiranda@gmail.com">
        <BottomButtonImage src={require("./img/DeskImages/Gmail.png")} />
      </BottomButton>
    </BottomContainer>
  </Container>
);

export default ShelfMenu;
