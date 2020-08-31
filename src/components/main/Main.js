import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";

import Catalogo from "../catalogo/Catalogo";
import Categorias from "../categorias/Categorias";
import Carrito from "../carrito/Carrito";
import Header from "../header/Header";
import Footer from "../footer/Footer";

//  function Main() {
class Main extends Component {
  state = {
    categorias: [],
  };
  componentDidMount() {
    const categorias = this.props.categorias;
    this.setState({ categorias: categorias });
    console.log(categorias);
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login">
            <Redirect to="/categorias" />
          </Route>

          <Route path="/catalogo">
            <Catalogo />
          </Route>

          <Route path="/categorias">
            <Categorias categorias={this.props.categorias} />
          </Route>

          <Route path="/carrito">
            <Carrito />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default Main;
