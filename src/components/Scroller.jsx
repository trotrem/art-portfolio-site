import React from "react";
import styled from "styled-components";
import { List, AutoSizer, WindowScroller } from "react-virtualized";
import styles from '../static/css/styles.css'

const ComicPage = styled.img`
max-width: 100%;
border: 10px solid black;
`;

const rowHeight = (width, pageWidth, borderSize) => {
    return Math.min(pageWidth * ((990 + borderSize)/765), width * ((990 + borderSize)/765));
};

function rowRenderer(folder) {
  return function({
    key,
    index,
    style
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
                rowHeight={rowHeight(width, props.resolution[0], 0)}
                rowRenderer={rowRenderer(props.resolution[2])}
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
