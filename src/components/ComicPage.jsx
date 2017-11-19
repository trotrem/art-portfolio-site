import React from "react";
import styled from "styled-components";
import { media } from "../static/js/style-utils.js";
import Scroller from "./Scroller.jsx";
import Dimensions from "react-container-dimensions";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:  "top       top     top" 
                        "left      comic   right";
  ${media.tablet`
        grid-template-columns: 1fr;
        grid-template-rows: 50px 1fr;
        grid-template-areas:    "top"
                                "comic";
  `};
  height: 100vh;
`;

const Comic = styled.div`
  grid-area: comic;
  background-color: #aaaabb;
  display: grid;
  justify-items: center;
  align-items: center;
`;

const Left = styled.div`
  grid-area: left;
  background-color: #aa99bb;
  ${media.tablet`
        display:none;
  `};
`;

const Right = styled.div`
  grid-area: right;
  background-color: #aa4455;
  ${media.tablet`
        display:none;
  `};
`;

const Top = styled.div`
  grid-area: top;
  background-color: #4499ff;
`;

const ComicPage = ({ props }) => (
  <Grid>
    <Top>top</Top>
    <Left>left</Left>
    <Comic>
      <Dimensions>
        <Scroller />
      </Dimensions>
    </Comic>
    <Right>right</Right>
  </Grid>
);

export default ComicPage;
