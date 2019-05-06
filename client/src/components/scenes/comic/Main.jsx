import React from "react";
import styled from "react-emotion";
import { Route, withRouter } from "react-router-dom";
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
  text-align: center;
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

const ComicBottom = styled("div")`
  width: 100%;
`

const BuyTeaButton = styled("a")`
  &:hover {
    filter: brightness(110%);    
    cursor: pointer;
  }
`

const TopBanner = styled("h1")`
  grid-area: banner;
  background-image: url(${banner});
  background-position: center;
  margin: 0 0 0 0;
`;

const NavSticky = styled(Sticky)`
  grid-area: navigation;
`;

const WithRouterScroller = withRouter(Scroller);

class ComicPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageNum: window.location.hash ? window.location.hash.slice(1) : null
    }
    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(pageIndex) {
    this.child.scrollToRow(pageIndex);
  }

  render() {
    return (
      <Grid>
        <TopBanner title="Her Name is Mandy"/>
        <ComicContainer>
          {this.props.isLoading
            ? <p>Loading pages..</p>
            : <Comic pageWidth={this.props.resolution[0]}>
              <Route
                path="/mandy/"
                render={() => (
                  <WithRouterScroller
                    onRef={ref => (this.child = ref)}
                    pageNum={this.state.pageNum}
                    resolution={this.props.resolution}
                    maxPages={this.props.maxPages} />)} />
            </Comic>}
          <ComicBottom>
            <BuyTeaButton href="https://www.paypal.me/toymakerprojects">
              <img src={require("./img/buymeatea.png")} alt="Buy Me a Tea!"/>
            </BuyTeaButton>
          </ComicBottom>
        </ComicContainer>
        <NavSticky>
          <NavBar scrollCommand={this.scrollTo} />
        </NavSticky>
      </Grid>
    );
  }
}

export default ComicPage;
