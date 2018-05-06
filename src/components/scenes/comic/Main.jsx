import React from "react";
import styled from "react-emotion";
import { Route } from "react-router-dom";
import Scroller from "./Scroller.jsx";
import Sticky from "react-stickynode";
import NavBar from "./NavBar.jsx";
import banner from "./img/banner.png";
import background from "./img/background.png";

const Grid = styled("div")`
display: grid;
grid-template-rows: 874px 50px 1fr;
grid-template-areas: "banner" "navigation" "content";
background-image: url(${background});
background-attachment: fixed;
`;

const ComicContainer = styled("div")`
    grid-area: content;
    width: 100%;
    height: 100%;
`;

const Comic = styled("div")`
    max-width: ${props => props.pageWidth}px;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: auto;
    margin: auto;
`;

const TopBanner = styled("div")`
  grid-area: banner;
  background-image: url(${banner});
  background-position: center;
`;

const NavSticky = styled(Sticky)`
  grid-area: navigation;
`;

const scrollerRenderer = (resolution, page, maxPages) => {
    return (
        <Scroller pageNum={page} resolution={resolution} maxPages={maxPages}/>
    );
};

const ComicPage = props => (
    <Grid>
      <TopBanner />
      {props.isLoading?<p>Loading pages..</p>:
      <ComicContainer>
        <Comic pageWidth={props.resolution[0]}>
          <Route
            exact={true}
            path="/mandy"
            render={() => scrollerRenderer(props.resolution, 0, props.maxPages)}
            />
            <Route
              exact={true}
              path="/mandy/:pageNum"
              render={({ match }) =>
                      scrollerRenderer(props.resolution, match.params.pageNum, props.maxPages)
                      }
                      />
        </Comic>
      </ComicContainer>}
        <NavSticky>
        <NavBar />
        </NavSticky>
        </Grid>
);

export default ComicPage;
