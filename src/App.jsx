import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Places from "./places/pages/Places";
import Users from "./user/pages/Users";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/Places" exact>
            <Places />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
