import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddGif from "./pages/Public/AddGif";
import SignUp from "./pages/Public/SignUp";
import SignIn from "./pages/Public/SignIn";
import Search from "./pages/Public/Search";
import Home from "./pages/Public/Home";

import { PUBLIC } from "./constants/routes.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={PUBLIC.SIGN_UP}>
          <SignUp />
        </Route>
        <Route path={PUBLIC.SIGN_IN}>
          <SignIn />
        </Route>
        <Route path={PUBLIC.SEARCH}>
          <Search />
        </Route>
        <Route path={PUBLIC.HOME} exact>
          <Home />
        </Route>
        <Route path={PUBLIC.ADD_FIG} exact>
          <AddGif />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
