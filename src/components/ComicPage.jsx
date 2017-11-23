import React from "react";
import styled from "styled-components";
import { media } from "../static/js/style-utils.js";
import { Route } from 'react-router-dom';
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
  max-width: ${props => props.HiRez ? '1275px' : '765px'};
`;

const LeftMargin = styled.div`
  height: 200vh;
  background-color: #aa7093;
  ${media.tablet`
      display:none;
  `};
`;

const RightMargin = styled.div`
  height: 200vh;
  background-color: #aa7093;
  ${media.tablet`
      display:none;
  `};
`;
const TopBanner = styled.div`
  grid-area: banner;
  background-color: #aa7093;
`;

const ComicContainer = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: ${props => props.HiRez ? '1fr 1275px 1fr' : '1fr 765px 1fr'};
  grid-template-areas: "left comic right";
  ${media.tablet`
      grid-template-columns: 1fr;
      grid-template-areas: "comic";
`};
`;

const ComicPage = (props) => (
  <Grid>
    <TopBanner/>
      <ComicContainer HiRez={props.HiRez}>
        <Sticky>
          <LeftMargin/>
        </Sticky>
        <Comic HiRez={props.HiRez}>
          <Route exact={true} path="/mandy" render={() => <Scroller pageNum={0} HiRez={props.HiRez}/>}/>
          <Route exact={true} path="/mandy/:pageNum" render={({match}) => <Scroller pageNum={match.params.pageNum} HiRez={props.HiRez}/>}/>
        </Comic>
        <Sticky>
          <RightMargin/>
        </Sticky>
      </ComicContainer>
      <Sticky>
        <NavBar/>
      </Sticky>
  </Grid>
);

export default ComicPage;
