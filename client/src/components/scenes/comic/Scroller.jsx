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

const Scroller = props => {
  return (
    <WindowScroller>
      {({ height, isScrolling, onChildScroll, scrollTop }) => (
        <AutoSizer disableHeight>
          {({ width }) => {
            return (
              <List
                autoHeight
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                rowCount={props.maxPages}
                rowHeight={heightCalculator(props.resolution[0], props.resolution[1], width)}
                rowRenderer={rowRenderer(props.resolution[2], props.maxPages)}
                scrollTop={scrollTop}
                width={width}
                scrollToIndex={props.pageNum - 1}
                scrollToAlignment="start"
              />
            );
          }}
        </AutoSizer>
      )}
    </WindowScroller>
  );
};

export default Scroller;
