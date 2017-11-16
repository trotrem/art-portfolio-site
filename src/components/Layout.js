import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <p>
            Miranda's dumb website (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
          </p>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
          </p>
        </footer>
      </div>
    );
  }
}