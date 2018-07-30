import React from "react";
import styled from "react-emotion";
import { List, AutoSizer, WindowScroller } from "react-virtualized";

const ComicPage = styled("img")`
  max-width: 100%;
  border: 10px solid black;
`;

const heightCalculator = (widthSetting, heightSetting, currentWidth) => {
  return heightSetting / widthSetting * currentWidth;
}

function rowRenderer(folder, maxPages) {
  return function({ key, index, style }) {
    return (
      <div key={key} style={style}>
        <ComicPage
          src={require("./img/" +
            folder +
            "/" +
            (index % maxPages + 1) +
            ".png")}
        />
      </div>
    );
  };
}

class Scroller extends React.Component {
  constructor(props) {
    super(props);
    this.grid = React.createRef();
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }
  render() {
    return (
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer disableHeight>
            {({ width }) => {
              return (
                <List
                  ref={this.grid}
                  autoHeight
                  height={height}
                  isScrolling={isScrolling}
                  onScroll={(s) => {
                    onChildScroll(s);
                    let index = Math.floor(scrollTop / heightCalculator(this.props.resolution[0], this.props.resolution[1], width)) + 1
                    if (index != window.location.hash.slice(1)) {
                      this.props.history.push("/mandy#" + (index));
                    }
                  }}
                  rowCount={this.props.maxPages}
                  rowHeight={heightCalculator(this.props.resolution[0], this.props.resolution[1], width)}
                  rowRenderer={rowRenderer(this.props.resolution[2], this.props.maxPages)}
                  scrollTop={scrollTop}
                  width={width}
                  scrollToIndex={this.props.pageNum - 1}
                  scrollToAlignment="start"
                />
              );
            }}
          </AutoSizer>
        )}
      </WindowScroller>
    );
  }
};

export default Scroller;
