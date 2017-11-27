import React from "react";
import styled from "styled-components";
import Parallax from "./Parallax.jsx";

const Container = styled.div`
  background-color: #898989;
  height: 500vh;
  overflow-x: hidden;
`;

const StyledLayer = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
`;

const MainPage = props => (
  <Container >
    <Parallax style={{height:"1080px"}}>
      <StyledLayer src={require("./img/plxLayers/1.png")} duration={1000} endValue={700}/>
      <StyledLayer src={require("./img/plxLayers/2.png")} duration={1000} endValue={600}/>
      <StyledLayer src={require("./img/plxLayers/3.png")} duration={1000} endValue={500}/>
      <StyledLayer src={require("./img/plxLayers/4.png")} duration={1000} endValue={200}/>
      <StyledLayer src={require("./img/plxLayers/5.png")} duration={1000} endValue={100}/>
      <StyledLayer src={require("./img/plxLayers/6.png")} duration={1000} endValue={50}/>
      <StyledLayer src={require("./img/plxLayers/7.png")} duration={1000} endValue={0}/>
    </Parallax>
  </Container>
);

export default MainPage;
