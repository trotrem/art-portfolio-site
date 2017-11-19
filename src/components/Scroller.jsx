import React, { Component } from "react";
import ReactDOM from "react-dom";
import { List, WindowScroller } from "react-virtualized";

const rowRenderer = ({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style // Style object to be applied to row (to position it)
}) => (
  <div key={key} style={style}>
    <img src={require("../static/img/" + (index % 28 + 1) + ".png")} />
  </div>
);

const Scroller = ({ height }) => (
  <WindowScroller>
  {({ isScrolling, onChildScroll, scrollTop }) => (
    <List
      autoHeight
      height={height}
      isScrolling={isScrolling}
      onScroll={onChildScroll}
      rowCount={28}
      rowHeight={990}
      rowRenderer={rowRenderer}
      scrollTop={scrollTop}
      width={765}
    />)}
  </WindowScroller>
);

export default Scroller;
