import React, { Component } from 'react';
import Comic from './components/ComicPage.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <Comic/>
    );
  }
  // componentDidMount() {
  //     window.addEventListener("resize", this.render);
  // }
  // componentWillUnmount() {
  //     window.removeEventListener("resize", this.render);
  // }
}

export default App;
