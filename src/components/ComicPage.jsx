import React from "react";
import styled from "styled-components";
import { media } from "../static/js/style-utils.js";
import { Route } from 'react-router-dom';
import Scroller from "./Scroller.jsx";
import Sticky from "react-stickynode";
import NavBar from "./NavBar.jsx";
import glamorous from 'glamorous';
import background from '../static/img/background.png';
import banner from '../static/img/banner.png';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 684px 50px 1fr;
  grid-template-areas: "banner" "navigation" "content";
  background-image: url(${background});
  background-attachment: fixed;
`;

const Comic = styled.div`
  grid-area: comic;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const LeftMargin = styled.div`
  height: 200vh;
  ${media.tablet`
      display:none;
  `};
`;

const RightMargin = styled.div`
  height: 200vh;
  ${media.tablet`
      display:none;
  `};
`;
const TopBanner = styled.div`
  grid-area: banner;
  background-image: url(${banner});
  background-position: center;
`;

const ComicContainer = glamorous.div(
  ({pageWidth}) => ({
    gridTemplateColumns: '1fr ' + pageWidth + 'px 1fr',
  }),
  {
    gridArea: 'content',
    display: 'grid',
    gridTemplateAreas: `"left comic right"`,
    '@media(max-width: 750px)': {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: `"comic"`
    }
  }
);

const scrollerRenderer = (resolution, page) => <Scroller pageNum={page} resolution={resolution}/>;

const ComicPage = (props) => (
  <Grid>
    <TopBanner/>
      <ComicContainer pageWidth={props.resolution[0]}>
        <Sticky>
          <LeftMargin/>
        </Sticky>
        <Comic>
          <Route exact={true} path="/mandy" render={() => scrollerRenderer(props.resolution, 0)}/>
          <Route exact={true} path="/mandy/:pageNum" render={({match}) => scrollerRenderer(props.resolution, match.params.pageNum)}/>
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
