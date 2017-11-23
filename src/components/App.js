import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Comic from "./ComicPage.jsx";
import Main from "./MainPage.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Main} />>
          <Route path="/mandy" render={() => <Comic HiRez />} />
        </Switch>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    document.title = "Miranda's dumb website (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧";
  }
}

export default App;
