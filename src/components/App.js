import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Comic from "./scenes/comic/Main.jsx";
import Home from "./scenes/mainPage/Main.jsx";
import Goblins from "./scenes/goblins/Main.jsx";

// Resolution Parameters
/*
const comicResolutions = [
  [765, 990, "LoRez"],
  [1275, 1650, "HiRez"]
]
*/

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />>
          <Route
            path="/mandy"
            render={() => <Comic resolution={[1295, 1690, "HiRez"]}/>}
          />
          <Route
            path="/goblins"
            render={() => <Goblins/>}
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
