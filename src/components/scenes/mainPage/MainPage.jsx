import React from "react";
import styled from "styled-components";
import {Parallax} from "react-parallax";
import ShelfMenu from "./ShelfMenu.jsx"

const Container = styled.div`
  position: relative;
  background-color: #898989;
  height: 500vh;
  overflow: hidden;
`;

const Tontainer = styled.div`
  position: absolute;
  top: 1080px;
  left: 0px;
  background-color: #898ff9;
  height: 500vh;
  width:100%;
`;

const StyledLayer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 1080px;
  width:100%;
`;

const layerPath = "./img/plxLayers/compressed/";

const MainPage = props => (
  <Container >
    <StyledLayer><Parallax bgImage={require(layerPath + "1.png")} bgHeight="1080px" strength={700}><div style={{height: 1080}}/></Parallax></StyledLayer>
    <StyledLayer><Parallax bgImage={require(layerPath + "2.png")} bgHeight="1080px" strength={600}><div style={{height: 1080}}/></Parallax></StyledLayer>
    <StyledLayer><Parallax bgImage={require(layerPath + "3.png")} bgHeight="1080px" strength={300}><div style={{height: 1080}}/></Parallax></StyledLayer>
    <StyledLayer><Parallax bgImage={require(layerPath + "4.png")} bgHeight="1080px" strength={200}><div style={{height: 1080}}/></Parallax></StyledLayer>
    <StyledLayer><Parallax bgImage={require(layerPath + "5.png")} bgHeight="1080px" strength={100}><div style={{height: 1080}}/></Parallax></StyledLayer>
    <StyledLayer><img src={require(layerPath + "6.png")}/></StyledLayer>
    <StyledLayer><Parallax bgImage={require(layerPath + "7.png")} bgHeight="1080px" strength={-30}><div style={{height: 1080}}/></Parallax></StyledLayer>
    <Tontainer>
      <ShelfMenu/>
    </Tontainer>
  </Container>
);

export default MainPage;
