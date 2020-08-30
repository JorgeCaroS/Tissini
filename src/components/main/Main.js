import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Catalogo from "../catalogo/Catalogo";
import Categorias from "../categorias/Categorias";
import Carrito from "../carrito/Carrito";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Main() {
    return (
      <BrowserRouter>
        <Header/>
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
        <Footer/>
      </BrowserRouter>
    );
  }

  export default Main;