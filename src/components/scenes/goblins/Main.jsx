import React from "react";
import styled from "styled-components";
import Plx from "../../common/Parallax";
import tree from "./img/plxLayers/3.png";
import scroll from "./img/plxLayers/3a.png";
import TreeButton from "./TreeButton.jsx"

const Container = styled.div`
  position: relative;
  background-color: #898989;
  height: 3360px;
  width: 100%;
  overflow: hidden;
`;

const Tree = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-image: url(${tree});
  background-position: center;
  height: 100%;
  width: 100%;
`;

const TreeScroll = styled.div`
  position:relative;
  top: 1200px;
  background-image: url(${scroll});
  background-position: center;
  width: 582px;
  height: 1844px;
  margin: 0 auto;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const layerPath = "./img/plxLayers/";

const MainPage = props => (
  <Container>
    <Plx image={require(layerPath + "1.png")} strength={700} height={3360} />
    <Plx image={require(layerPath + "2.png")} strength={-200} height={3360} />
    <Tree>
      <TreeScroll>
        <TreeButton to="/" >Book</TreeButton>
        <TreeButton to="/" >Art</TreeButton>
        <TreeButton to="/" >Home</TreeButton>
        <TreeButton to="/" >About</TreeButton>
      </TreeScroll>
    </Tree>
    <Plx image={require(layerPath + "4.png")} strength={100} height={1078} divHeight={1250}/>
  </Container>
);

export default MainPage;
