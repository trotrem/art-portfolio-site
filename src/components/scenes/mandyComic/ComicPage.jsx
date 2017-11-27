import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Scroller from "./Scroller.jsx";
import Sticky from "react-stickynode";
import NavBar from "./NavBar.jsx";
import glamorous from "glamorous";
import background from "./img/background.png";
import banner from "./img/banner.png";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 684px 50px 1fr;
  grid-template-areas: "banner" "navigation" "content";
  background-image: url(${background});
  background-attachment: fixed;
`;

const ComicContainer = glamorous.div(
  {
    gridArea: "content",
    width:"100%",
    height:"100%"
  }
);

const Comic = glamorous.div(
  ({ pageWidth }) => ({
    maxWidth: pageWidth
  }),
  {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    overflow: "auto",
    margin: "auto"
  }
);

const TopBanner = styled.div`
  grid-area: banner;
  background-image: url(${banner});
  background-position: center;
`;

const NavSticky = styled(Sticky)`
  grid-area: navigation;
`;

const scrollerRenderer = (resolution, page) => (
  <Scroller pageNum={page} resolution={resolution} />
);

const ComicPage = props => (
  <Grid>
    <TopBanner />
    <ComicContainer>
    <Comic pageWidth={props.resolution[0]}>
      <Route
        exact={true}
        path="/mandy"
        render={() => scrollerRenderer(props.resolution, 0)}
      />
      <Route
        exact={true}
        path="/mandy/:pageNum"
        render={({ match }) =>
          scrollerRenderer(props.resolution, match.params.pageNum)
        }
      />
    </Comic>
    </ComicContainer>
    <NavSticky>
      <NavBar />
    </NavSticky>
  </Grid>
);

export default ComicPage;
