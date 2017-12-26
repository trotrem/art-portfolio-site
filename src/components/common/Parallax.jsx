import React from "react";
import { Parallax } from "react-parallax";
import styled from "styled-components";

const StyledLayer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
`;

const Plx = props => {
  return(
    <StyledLayer>
      <Parallax
        bgImage={props.image}
        bgStyle={{backgroundPosition: "center" }}
        bgHeight={props.height+"px"}
        strength={props.strength}
      >
        <div style={{ height: (props.divHeight ? props.divHeight : props.height) }} />
      </Parallax>
    </StyledLayer>
  );}

export default Plx;
