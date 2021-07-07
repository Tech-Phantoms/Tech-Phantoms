import React from "react";
import { Route, Switch } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import {LandingPage} from "./pages";
import "./index.css";
function App() {
  return (
    <div>
      {/* Routing */}
      <Hidden mdUp>
      </Hidden>
      <Switch>
        <Route path="/" exact render={() => <LandingPage/>} />
        {/* <Route path="*" render={() => <NotFoundPage/>} /> */}
      </Switch>
    </div>
  );
}
// Exporting App
export default App;
