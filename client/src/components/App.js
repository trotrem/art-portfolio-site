import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Comic from "./scenes/comic/ComicContainer.jsx";
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

const EnhancedGoblins = withScrollToTop(Goblins);
const EnhancedGallery = withScrollToTop(Gallery);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route
            path="/mandy"
            render={({match}) => <Comic match={match} resolution={[1295, 1690, "HiRez"]}/>}
          />
          <Route
            path="/goblins"
            component={EnhancedGoblins}
          />
          <Route path="/gallery"
            component={EnhancedGallery}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
