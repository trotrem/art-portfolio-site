import React from "react";
import styled from "styled-components";
import { Parallax, Background } from "react-parallax";
import tree from "./img/plxLayers/3.png";
import scroll from "./img/plxLayers/3a.png";
import buttons from "./img/plxLayers/3b.png";

const Container = styled.div`
  position: relative;
  background-color: #898989;
  height: 3360px;
  width: 100%;
  overflow: hidden;
`;

const Tree = styled.div`
  background-image: url(${tree});
  height: 100%;
  width: 100%;
`;

const TreeScroll = styled.div`
  background-image: url(${scroll});
  width: 100%;
  height: 100%;
`;

const TreeButton = styled.div`
  background-image: url(${buttons});
  width: 527px;
  height: 407px;
`;

const StyledLayer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
`;

const layerPath = "./img/plxLayers/";

const MainPage = props => (
  <Container>
    <StyledLayer>
      <Parallax bgImage={require(layerPath + "1.png")} strength={700}>
        <div style={{ height: 3360 }} />
      </Parallax>
    </StyledLayer>
    <StyledLayer>
      <Parallax bgImage={require(layerPath + "2.png")} strength={-200}>
        <div style={{ height: 3360 }} />
      </Parallax>
    </StyledLayer>
    <StyledLayer>
      <Tree>
        <TreeScroll>
          <TreeButton />
        </TreeScroll>
      </Tree>
    </StyledLayer>
    <StyledLayer>
      <Parallax bgImage={require(layerPath + "4.png")} strength={100}>
        <div style={{ height: 3360 }} />
      </Parallax>
    </StyledLayer>
    <StyledLayer>
      <Parallax bgImage={require(layerPath + "4a.png")} strength={100}>
        <div style={{ height: 3360 }} />
      </Parallax>
    </StyledLayer>
  </Container>
);

export default MainPage;
