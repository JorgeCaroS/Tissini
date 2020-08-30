import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main/Main";
import Login from "./components/login/Login";

import {  
  BrowserRouter,  
  Route,
  Switch
} from "react-router-dom";


ReactDOM.render(
  
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/">
          <Login />
        </Route>

        <Route  path="/Main">
          <Main />
        </Route>
      </React.Fragment>
    </BrowserRouter>
  ,
  document.getElementById("root")
);
