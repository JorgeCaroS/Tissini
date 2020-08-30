import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Catalogo from "../catalogo/Catalogo";
import Categorias from "../categorias/Categorias";
import Carrito from "../carrito/Carrito";

function Main() {
    return (
      <BrowserRouter>
        <header>
          <h1> Header </h1>
        </header>
        <Switch>
          <Route path="/catalogo">
            <Catalogo />
          </Route>
  
          <Route path="/categorias">
            <Categorias />
          </Route>
  
          <Route path="/carrito">
            <Carrito />
          </Route>
        </Switch>
        <footer>
          <h1> Footer </h1>
        </footer>
      </BrowserRouter>
    );
  }

  export default Main;