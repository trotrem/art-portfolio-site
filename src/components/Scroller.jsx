import React from "react";
import styled from "styled-components";
import { List, AutoSizer, WindowScroller } from "react-virtualized";

const ComicPage = styled.img`
max-width: 100%;
border-bottom: 10px solid;
border-color: black;
background: black;
`;

const rowHeight = (width, HiRez) => {
  if(HiRez)
    return Math.min(1660, width * 1660 / 1275);
  else
    return Math.min(1000, width * 1000 / 765);
};

function rowRenderer(HiRez) {
  let folderName = HiRez? 'HiRez': 'LoRez';
  return function({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style // Style object to be applied to row (to position it)
  }){
    return (
      <div key={key} style={style}>
        <ComicPage src={require("../static/img/" + folderName + "/" + (index % 28 + 1) + ".png")} />
      </div>
    );
  }
}

const Scroller = (props) => {
  return (
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer disableHeight>
            {({ width }) => {
            return(
              <List
                autoHeight
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                rowCount={28}
                rowHeight={rowHeight(width, props.HiRez)}
                rowRenderer={rowRenderer(props.HiRez)}
                scrollTop={scrollTop}
                width={width}
                scrollToIndex={props.pageNum - 1}
                scrollToAlignment="start"
              />
            )}}
          </AutoSizer>
        )}
      </WindowScroller>
  );
};

export default Scroller;
