import React from "react";
import styled from "styled-components";
import Plx from "../../common/Parallax";
import ShelfMenu from "./ShelfMenu.jsx"

const Container = styled.div`
  position: relative;
  background-color: #898989;
  height: 200vh;
  overflow: hidden;
`;

const Tontainer = styled.div`
  position: absolute;
  top: 1080px;
  left: 0px;
  background-color: #898ff9;
  height: calc(100% - 1080px);
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
    <Plx image={require(layerPath + "1.png")} strength={700} height={1080}/>
    <Plx image={require(layerPath + "2.png")} strength={600} height={1080}/>
    <Plx image={require(layerPath + "3.png")} strength={300} height={1080}/>
    <Plx image={require(layerPath + "4.png")} strength={200} height={1080}/>
    <Plx image={require(layerPath + "5.png")} strength={100} height={1080}/>
    <Plx image={require(layerPath + "6.png")} strength={0} height={1080}/>
    <Plx image={require(layerPath + "7.png")} strength={-30} height={1080}/>
    <Tontainer>
      <ShelfMenu/>
    </Tontainer>
  </Container>
);

export default MainPage;
