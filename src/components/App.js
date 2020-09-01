import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Login from "./login/Login";
import { postData, getAllCatalogos } from "../api/index";
import { validateUser, getAllCategorias } from "../api/index";
import Main from "./main/Main";

class App extends React.Component {
  state = {
    user: false,
    categorias:[],
    catalogo:[]
  };

  componentDidMount() {
    getAllCategorias().then((data) => {
      
      console.log("all categorias: ", data);
      this.setState({categorias:data})
    });

    getAllCatalogos().then((data)=>{
      console.log("Catalogo: ", data);
      this.setState({catalogo:data})
    })
  }

  handleOnLogin = (userId) => {
    validateUser(userId).then((data) => {
     
      if (data && data.customer && data.customer.store_name_active) {
        this.setState({ user: true });
      }
      else{alert("Usuario No Registrado")}
      console.log(data); 
    });
  };

  render() {
    
    console.log(this.state.categorias)
    console.log(this.state.catalogo)
    return this.state.user ? <Main catalogo={this.state.catalogo} categorias={this.state.categorias}/> : <Login  onLogin={this.handleOnLogin} /> ;
  }
}

export default App;