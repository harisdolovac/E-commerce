import React from "react";
import HomePage from "./pages/homepage/Homepage.component";
import { Route, Switch } from "react-router-dom";
import Hats from "./pages/Hatspage.component";
import ShopPage from "./pages/shop/shop.component";
import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
