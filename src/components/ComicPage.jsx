import React from "react";
import styled from "styled-components";
import { media } from "../static/js/style-utils.js";
import Scroller from "./Scroller.jsx";
import { Sticky, StickyContainer } from "react-sticky";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 250px 1fr;
  grid-template-areas: "banner" "sticky";
`;

const Comic = styled.div`
  grid-area: comic;
  background-color: #aaaabb;
  max-width: 765px;
`;

const LeftMargin = styled.div`
  height: 200vh;
  background-color: #aa99bb;
  ${media.tablet`
      display:none;
  `};
`;

const RightMargin = styled.div`
  height: 200vh;
  background-color: #aa4455;
  ${media.tablet`
      display:none;
  `};
`;

const NavigationBar = styled.div`
  height: 50px;
  background-color: #4499bb;
`;

const Top = styled.div`
  grid-area: banner;
  background-color: #4499ff;
`;

const LeftSticky = styled(Sticky)`grid-area: left;`;

const RightSticky = styled(Sticky)`grid-area: right;`;

const NavSticky = styled(Sticky)`grid-area: navigation;`;

const StyledStickyContainer = styled(StickyContainer)`
  grid-area: sticky;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-areas: "navigation" "content";
`;

const ComicContainer = styled.div`
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
    <Top>banner</Top>

    <StyledStickyContainer>
      <ComicContainer>
        <LeftSticky>
          {({ style }) => <LeftMargin style={style}>left</LeftMargin>}
        </LeftSticky>
        <Comic>
          <Scroller />
        </Comic>
        <RightSticky>
          {({ style }) => <RightMargin style={style}>right</RightMargin>}
        </RightSticky>
      </ComicContainer>
      <NavSticky>
        {({ style }) => <NavigationBar style={style}>nav</NavigationBar>}
      </NavSticky>
    </StyledStickyContainer>
  </Grid>
);

export default ComicPage;
