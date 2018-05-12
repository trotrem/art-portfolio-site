import React from "react";
import styled from "react-emotion";
import Plx from "../../common/Parallax";
import background from "./img/redBackground.png";
import frame from "./img/FrameTitle.png";
import blueGradient from "./img/blueGradient.png"

const imgPath = "./img/";

const Container = styled("div")`
  position: relative;
  background-image: url(${background});
  background-repeat: repeat;
  height: 200%;
  width: 100%;
  overflow: hidden;
`;


const Frame = styled("div")`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: url(${frame});
  background-size: 100%  100%;
`;

const BlueGradient = styled("div")`
  height: 100%;
  width: 100%;
  background-image: url(${blueGradient});
  background-size: 100% 100%;
`

const Scroll = styled("img")`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
`;

const MainPage = props => (
    <Container>
      <BlueGradient>
        <Scroll src={require(imgPath + "Scroll.png")}></Scroll>
        <Frame>
        </Frame>
      </BlueGradient>
    </Container>
);

export default MainPage;
