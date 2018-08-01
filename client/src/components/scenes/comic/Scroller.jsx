import React from "react";
import styled from "react-emotion";
import { List, AutoSizer, WindowScroller } from "react-virtualized";

const ComicPage = styled("img")`
  max-width: 100%;
  border: 10px solid black;
`;
var page_height = undefined;

const heightCalculator = (widthSetting, heightSetting, currentWidth) => {
  page_height = heightSetting / widthSetting * currentWidth
  return page_height;
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
    this.scrollToRow = this.scrollToRow.bind(this);
    this.listRef = React.createRef();
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }
  scrollToRow(row) {
    row === -1 ? 
      window.scrollTo(0, 924 + (this.props.maxPages - 1) * page_height):
      window.scrollTo(0, 924 + 0 * page_height)
  }
  render() {
    return (
      <WindowScroller
        ref={this._setRef}
        scrollElement={window}>
        {({ height, isScrolling, registerChild, onChildScroll, scrollTop }) => (
          <div >
            <AutoSizer disableHeight>
              {({ width }) => (
                <div ref={registerChild}>
                  <List
                    ref={el => {
                      window.listEl = el;
                    }}
                    autoHeight
                    height={height}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    overscanRowCount={2}
                    rowCount={this.props.maxPages}
                    rowHeight={heightCalculator(this.props.resolution[0], this.props.resolution[1], width)}
                    rowRenderer={rowRenderer(this.props.resolution[2], this.props.maxPages)}
                    scrollToIndex={this.props.pageNum}
                    scrollTop={scrollTop}
                    width={width}
                    scrollToAlignment="start"
                  />
                </div>
              )}
            </AutoSizer>
          </div>
        )}
      </WindowScroller>
    );
  }
};

export default Scroller;
