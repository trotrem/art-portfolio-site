import React from "react";
import styled, { css } from "react-emotion";
import { Link } from "react-router-dom";
import shelf from "./img/DeskImages/Pieces/deskplank.gif";
import h_detail from "./img/DeskImages/Pieces/detail1.gif";
import v_detail from "./img/DeskImages/Pieces/detail2.gif";
import cupboard_body from "./img/DeskImages/Pieces/cupboardbody.gif";
import cupboard_knob from "./img/DeskImages/Pieces/cupboardknob.gif";

const Container = styled("div")`
  background-image: url(${shelf});
  background-repeat: repeat-x;
  background-size: 30% 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  width: 100%;
  position: relative;
  text-align:center
`;

const HorizontalFlex = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center
  padding-bottom: 3%;
  align-items: stretch
`

const HorizontalDetail = styled("div")`
  height: 0px;
  width: 90%;
  border: 20px solid white;
  border-image: url(${h_detail}) 50% 14% round;
  filter: drop-shadow(5px 5px 5px #111);
  margin: 0 auto 5% auto;
  @media (max-width: 1600px) {
    display: none;
  }
`

const verticalDetail = css`
  position: relative;
  filter: drop-shadow(5px 5px 5px #111);
  width: 0px;
  border: 40px solid white;
  border-image: url(${v_detail}) 15% 50% round;
  @media (max-width: 1600px) {
    display: none;
  }
`

const RightVerticalDetail = styled("div")`
  ${verticalDetail}
`

const LeftVerticalDetail = styled("div")`
  ${verticalDetail}
`

const DrawerContainer = styled("div")`
  margin-left: auto;
  margin-right: auto;
  max-width: 90vw;
`

const DrawerButton = styled(Link)`
  display: block;
  filter: drop-shadow(5px 5px 5px #111);
  margin-bottom: 5%;
  &:hover {
    filter: brightness(110%) drop-shadow(5px 5px 5px #111);    
    cursor: pointer;
  }
`;

const DrawerImage = styled("img")`
  width: 100%;
`

const BottomContainer = styled("div")`
  height: 12vw;
  max-width: 90vw;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
  padding: 0 1vw;
  background: #2D2725;
`;

const BottomButton = styled("a")`
  width: 11vw;
  height: 11vw;
  color: white;
  overflow: hidden;
  filter: drop-shadow(5px 5px 5px #111);
  &:hover {
    filter: brightness(110%) drop-shadow(5px 5px 5px #111);    
    cursor: pointer;
  }
`;

const BottomButtonImage = styled("img")`
  height: 100%;
  width: 100%;
`;

const Separator = styled("img")`
  height: 100%;
  margin: 0 1vw;
`

const cupboard = css`
  width: 10vw;
  display:flex;
  flex-direction: column;
  filter: drop-shadow(5px 5px 5px #111);
  @media (max-width: 1600px) {
    display: none;
  }
`

const RightCupboard = styled("div")`
  ${cupboard}
  margin-left: auto;
`

const LeftCupboard = styled("div")`
  ${cupboard}
  margin-right: auto;
`

const cupboardExtremity = css`
  width: 100%;
`

const LeftCupboardTop = styled("img")`
  ${cupboardExtremity}
`
const RightCupboardTop = styled("img")`
  ${cupboardExtremity}
  transform: scale(-1, 1);
`
const LeftCupboardBottom = styled("img")`
  ${cupboardExtremity}
  transform: scale(1, -1);
`
const RightCupboardBottom = styled("img")`
  ${cupboardExtremity}
  transform: scale(-1, -1);
`
const cupboardBody = css`
  background-image: url(${cupboard_body});
  background-size: contain;
  width: 100%;
  flex-grow: 1;
  position: relative;
`

const LeftCupboardBody = styled("div")`
  ${cupboardBody}
`
const RightCupboardBody = styled("div")`
  ${cupboardBody}
  transform: scaleX(-1);
`

const knob = css`
  background-image: url(${cupboard_knob});
  background-size: cover;
  position: absolute;
  top: 20%;
  width: 10vh;
  height: 12vh;
  left: 0px;
`

const LeftKnob = styled("div")`
  ${knob}
  filter: drop-shadow(5px 5px 5px #111);
`
const RightKnob = styled("div")`
  ${knob}
  filter: drop-shadow(-5px 5px 5px #111);
`

const ShelfMenu = props => (
  <Container>
    <HorizontalDetail />
    <HorizontalFlex>
      <LeftCupboard>
        <LeftCupboardTop src={require("./img/DeskImages/Pieces/cupboardtopandbottom.gif")}/>
        <LeftCupboardBody>
          <LeftKnob/>
        </LeftCupboardBody>
        <LeftCupboardBottom src={require("./img/DeskImages/Pieces/cupboardtopandbottom.gif")}/>
      </LeftCupboard>
      <LeftVerticalDetail />
      <DrawerContainer>
        <DrawerButton name="Comics" to="/mandy" target="_blank">
          <DrawerImage src={require("./img/DeskImages/Drawer1.png")} />
        </DrawerButton>
        <DrawerButton name="Books" to="/goblins" target="_blank">
          <DrawerImage src={require("./img/DeskImages/Drawer2.png")} />
        </DrawerButton>
        <DrawerButton name="Gallery" to="/gallery" target="_blank">
          <DrawerImage src={require("./img/DeskImages/Drawer3.png")} />
        </DrawerButton>
      </DrawerContainer>
      <RightVerticalDetail />
      <RightCupboard>
        <RightCupboardTop src={require("./img/DeskImages/Pieces/cupboardtopandbottom.gif")}/>
        <RightCupboardBody>
          <RightKnob/>
        </RightCupboardBody>
        <RightCupboardBottom src={require("./img/DeskImages/Pieces/cupboardtopandbottom.gif")}/>
      </RightCupboard>
    </HorizontalFlex>
    <BottomContainer>
      <BottomButton name="tumblr" href="https://themirandachick.tumblr.com/" target="_blank">
        <BottomButtonImage src={require("./img/DeskImages/Tumblr.png")} />
      </BottomButton>
      <Separator src={require("./img/DeskImages/Pieces/shelfseparater.gif")} />
      <BottomButton name="instagram" href="https://www.instagram.com/themirandachick/" target="_blank">
        <BottomButtonImage src={require("./img/DeskImages/Instagram.png")} />
      </BottomButton>
      <Separator src={require("./img/DeskImages/Pieces/shelfseparater.gif")} target="_blank" />
      <BottomButton name="tapas" href="https://tapas.io/series/Her-Name-is-Mandy">
        <BottomButtonImage src={require("./img/DeskImages/Tapas.png")} />
      </BottomButton>
      <Separator src={require("./img/DeskImages/Pieces/shelfseparater.gif")} />
      <BottomButton name="contact me" href="mailto:eastwoodmiranda@gmail.com" target="_blank">
        <BottomButtonImage src={require("./img/DeskImages/Gmail.png")} />
      </BottomButton>
    </BottomContainer>
  </Container>
);

export default ShelfMenu;
