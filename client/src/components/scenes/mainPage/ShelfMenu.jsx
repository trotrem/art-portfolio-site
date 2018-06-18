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
  text-align:center
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
  height: 12vw;
  min-height: 100px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 5px;
  padding: 0 1vw;
  background: #000000;
`;

const BottomButton = styled("a") `
  min-width: 90px;
  width: 11vw;
  min-height: 90px;
  height: 11vw;
  color: white;
  overflow: hidden;
  &:hover {
    filter: brightness(110%);    
    cursor: pointer;
  }
`;

const BottomButtonImage = styled("img") `
  height: 100%;
  width: 100%;
`;

const Separator = styled("img")`
  height: 100%;
  margin: 0 10px;
`

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
      <Separator src={require("./img/DeskImages/Pieces/shelfseparater.gif")}/>
      <BottomButton href="https://themirandachick.deviantart.com/">
        <BottomButtonImage src={require("./img/DeskImages/Deviantart.png")} />
      </BottomButton>
      <Separator src={require("./img/DeskImages/Pieces/shelfseparater.gif")}/>
      <BottomButton href="https://www.pinterest.ca/eastwoodmiranda/">
        <BottomButtonImage src={require("./img/DeskImages/Pinterest.png")} />
      </BottomButton>
      <Separator src={require("./img/DeskImages/Pieces/shelfseparater.gif")}/>
      <BottomButton href="mailto:eastwoodmiranda@gmail.com">
        <BottomButtonImage src={require("./img/DeskImages/Gmail.png")} />
      </BottomButton>
    </BottomContainer>
  </Container>
);

export default ShelfMenu;
