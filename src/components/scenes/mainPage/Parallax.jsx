import React from "react";
import { Parallax } from "react-parallax";
import styled from "styled-components";

const StyledLayer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 1080px;
  width: 100%;
`;

const Plx = props => (
    <StyledLayer>
      <Parallax
        bgImage={props.image}
        bgStyle={{backgroundPosition: "center" }}
        bgHeight="1080px"
        strength={props.strength}
      >
        <div style={{ height: 1080 }} />
      </Parallax>
    </StyledLayer>
  );

export default Plx;
