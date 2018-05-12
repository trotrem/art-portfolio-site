import React from "react";
import styled from "react-emotion";
import Plx from "../../common/Parallax";
import frame from "./img/FrameTitle.png";
import blueGradient from "./img/blueGradient.png"

const imgPath = "./img/";

const Container = styled("div")`
  position: relative;
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

const Stump = styled("img")`
  position: absolute;
  width: 100%;
  bottom: 0px;
`

const Content = styled("div")`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 60%;
  height: 100%;
`;

const PreviewFormats = styled("div")`
  position: relative;
  top: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormatImage = styled("img")`
  width: 18%;
`;

const ClickToDownload = styled("img")`
  width: 40%;
`;

const BuyButton = styled("img")`
  position: relative;
  top: 50%;
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const MainPage = props => (
    <Container>
      <BlueGradient>
        <Scroll src={require(imgPath + "Scroll.png")}></Scroll>
        <Stump src={require(imgPath + "Stump.png")}/>
        <Content>
          <PreviewFormats>
            <FormatImage src={require(imgPath + "epub.png")}/>
            <ClickToDownload src={require(imgPath + "ctd.png")}/>
            <FormatImage src={require(imgPath + "kindle.png")}/>
          </PreviewFormats>
          <BuyButton src={require(imgPath + "buy.png")}/>
        </Content>
        <Frame/>
      </BlueGradient>
    </Container>
);

export default MainPage;
