import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Comic from "./scenes/comic/Main.jsx";
import Home from "./scenes/mainPage/Main.jsx";
import Gallery from "./scenes/art/Main.jsx";
import Goblins from "./scenes/goblins/Main.jsx";
import withScrollToTop from "./common/ScrollToTop.jsx";

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
          <Route path="/" exact={true} component={withScrollToTop(Home)}/>
          <Route
            path="/mandy"
            render={() => <Comic resolution={[1295, 1690, "HiRez"]}/>}
          />
          <Route
            path="/goblins"
            component={withScrollToTop(Goblins)}
          />
          <Route path="/gallery" 
            component={withScrollToTop(Gallery)}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
