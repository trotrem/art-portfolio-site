import React from "react";
import styled from "styled-components";
import { media } from "../static/js/style-utils.js";
import Scroller from "./Scroller.jsx";
import Sticky from "react-stickynode";
import NavBar from "./NavBar.jsx"

const Grid = styled.div`
  display: grid;
  grid-template-rows: 250px 50px 1fr;
  grid-template-areas: "banner" "navigation" "content";
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

const Navi = styled(NavBar)`
height: 50px;
background-color: #aabb55;
`;

const Navi2 = Navi.extend`

;`

const TopBanner = styled.div`
  grid-area: banner;
  background-color: #4499ff;
`;

const LeftSticky = styled(Sticky)`grid-area: left;`;

const RightSticky = styled(Sticky)`grid-area: right;`;

const NavSticky = styled(Sticky)`grid-area: navigation;`;

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
    <TopBanner>banner</TopBanner>
      <ComicContainer>
        <Sticky>
          <LeftMargin>left</LeftMargin>
        </Sticky>
        <Comic>
          <Scroller />
        </Comic>
        <Sticky>
          <RightMargin>right</RightMargin>
        </Sticky>
      </ComicContainer>
      <Sticky>
        <Navi>nav</Navi>
      </Sticky>
  </Grid>
);

export default ComicPage;
