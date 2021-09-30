import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import DashBoard from "./components/Dashboard/DashBoard";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <PrivateRoute path="/dashboard" component={DashBoard} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
