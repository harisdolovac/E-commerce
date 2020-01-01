import React from "react";
import HomePage from "./pages/homepage/Homepage.component";
import { Route, Switch } from "react-router-dom";
import Hats from "./pages/Hatspage.component";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
};

export default App;
