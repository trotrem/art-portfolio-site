import React, { Component } from 'react';

function withScrollToTop(WrappedComponent) {
  return class extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
      return <WrappedComponent />;
    }
  };
}

export default withScrollToTop;