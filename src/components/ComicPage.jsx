import React from "react";
import styled from "styled-components";
import { media } from "../static/js/style-utils.js";
import Scroller from "./Scroller.jsx";
import { Sticky, StickyContainer } from "react-sticky";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-areas: "top" "content";
`;

const Comic = styled.div`
  grid-area: comic;
  background-color: #aaaabb;
  max-width: 765px;
`;

const LeftMargin = styled.div`
  height: 100vh;
  background-color: #aa99bb;
  ${media.tablet`
      display:none;
  `};
`;

const RightMargin = styled.div`
  height: 100vh;
  background-color: #aa4455;
  ${media.tablet`
      display:none;
  `};
`;

const Top = styled.div`
  grid-area: top;
  background-color: #4499ff;
`;

const LeftSticky = styled(Sticky)`
  grid-area: left;
`;

const RightSticky = styled(Sticky)`
  grid-area: right;
`;

const StyledStickyContainer = styled(StickyContainer)`
  grid-area: content;
  display: grid;
  grid-template-columns: 1fr 765px 1fr;
  grid-template-areas: "left comic right";
  ${media.tablet`
        grid-template-columns: 1fr;
        grid-template-areas: "comic";
  `};
`;

const ComicPage = ({ props }) => (
  <Grid>
    <Top>top</Top>

    <StyledStickyContainer>
      <LeftSticky>
        {({
          isSticky,
          wasSticky,
          style,
          distanceFromTop,
          distanceFromBottom,
          calculatedHeight
        }) => {
          console.log({
            isSticky,
            wasSticky,
            style,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          });
          return <LeftMargin style={style}>left</LeftMargin>;
        }}
      </LeftSticky>
      <Comic>
        <Scroller />
      </Comic>
      <RightSticky>
      {({
          isSticky,
          wasSticky,
          style,
          distanceFromTop,
          distanceFromBottom,
          calculatedHeight
        }) => {
          console.log({
            isSticky,
            wasSticky,
            style,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          });
          return <RightMargin style={style}>right</RightMargin>;
        }}</RightSticky>
    </StyledStickyContainer>
  </Grid>
);

export default ComicPage;
