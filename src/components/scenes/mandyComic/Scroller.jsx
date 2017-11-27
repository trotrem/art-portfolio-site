import React from "react";
import styled from "styled-components";
import { List, AutoSizer, WindowScroller } from "react-virtualized";

const ComicPage = styled.img`
  max-width: 100%;
  border: 10px solid black;
`;

function rowRenderer(folder) {
  return function({ key, index, style }) {
    return (
      <div key={key} style={style}>
        <ComicPage
          src={require("./img/" +
            folder +
            "/" +
            (index % 28 + 1) +
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
                rowCount={28}
                rowHeight={props.resolution[1]}
                rowRenderer={rowRenderer(props.resolution[2])}
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
