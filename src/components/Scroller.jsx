import React from "react";
import styled from "styled-components";
import { List, AutoSizer, WindowScroller } from "react-virtualized";
import styles from '../static/css/styles.css'

const ComicPage = styled.img`
max-width: 100%;
border-bottom: 10px solid;
border-color: black;
background: black;
`;

const rowHeight = (width, pageWidth) => {
    return Math.min(pageWidth * (990/765), width * (990/765));
};

function rowRenderer(folder) {
  return function({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style // Style object to be applied to row (to position it)
  }){
    return (
      <div key={key} style={style}>
        <ComicPage src={require("../static/img/" + folder + "/" + (index % 28 + 1) + ".png")} />
      </div>
    );
  }
}

const Scroller = (props) => {
  return (
    <div className={styles.WindowScrollerWrapper}>
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
                rowHeight={rowHeight(width, props.pageWidth)}
                rowRenderer={rowRenderer(props.folder)}
                scrollTop={scrollTop}
                width={width}
                scrollToIndex={props.pageNum - 1}
                scrollToAlignment="start"
              />
            )}}
          </AutoSizer>
        )}
      </WindowScroller>
    </div>
  );
};

export default Scroller;
