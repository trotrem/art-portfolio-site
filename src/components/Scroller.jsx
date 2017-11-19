import React from "react";
import { media } from "../static/js/style-utils.js";
import styled from "styled-components";
import { List, AutoSizer, WindowScroller } from "react-virtualized";

const ComicPage = styled.img`
  ${media.tablet`
max-width: 100%`};
`;

const rowHeight = width => {
  return Math.min(990, width * 990 / 765);
};

const rowRenderer = ({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style // Style object to be applied to row (to position it)
}) => (
  <div key={key} style={style}>
    <ComicPage src={require("../static/img/" + (index % 28 + 1) + ".png")} />
  </div>
);

const Scroller = ({ props }) => {
  return (
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
              <List
                autoHeight
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                rowCount={28}
                rowHeight={rowHeight(width)}
                rowRenderer={rowRenderer}
                scrollTop={scrollTop}
                width={width}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
  );
};

export default Scroller;
