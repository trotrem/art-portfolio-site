import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { List } from 'react-virtualized';

// List data as an array of strings
const list = [
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn'
  // And so on...
];

const rowRenderer = ({
  key,         // Unique key within array of rows
  index,       // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible,   // This row is visible within the List (eg it is not an overscanned row)
  style        // Style object to be applied to row (to position it)
}) =>
    <div
      key={key}
      style ={style}      
    >
      <img src={require('../static/img/' + ((index) % 28 + 1) + '.png')}/>
    </div>;

const Scroller = ({props}) =>
  <List
    width={800}
    height={900}
    rowCount={1000}
    rowHeight={900}
    rowRenderer={rowRenderer}
  />;

export default Scroller;
