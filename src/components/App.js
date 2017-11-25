import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Comic from "./ComicPage.jsx";
import Main from "./MainPage.jsx";

// Resolution Parameters
/* LoRez: 765 HiRez: 1275 */
const folderName = "HiRez";
const page = 1275;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Main} />>
          <Route
            path="/mandy"
            render={() => <Comic folder={folderName} pageWidth={page} borderSize={10}/>}
          />
        </Switch>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    document.title = "Miranda's dumb website (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧";
  }
}

export default App;
