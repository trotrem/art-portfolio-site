import React from "react";
import styled from "styled-components";
import Plx from "./Parallax";
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
    <Plx image={require(layerPath + "1.png")} strength={700}/>
    <Plx image={require(layerPath + "2.png")} strength={600}/>
    <Plx image={require(layerPath + "3.png")} strength={300}/>
    <Plx image={require(layerPath + "4.png")} strength={200}/>
    <Plx image={require(layerPath + "5.png")} strength={100}/>
    <Plx image={require(layerPath + "6.png")} strength={0}/>
    <Plx image={require(layerPath + "7.png")} strength={-30}/>
    <Tontainer>
      <ShelfMenu/>
    </Tontainer>
  </Container>
);

export default MainPage;
