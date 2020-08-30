import React, { Component } from "react";
import Login from "./login/Login";
import { postData } from "../api/index";
import { validateUser, getAllCategorias } from "../api";
import Main from "./main/Main";

class App extends Component {
  state = {
    user: false,
  };

  componentDidMount() {
    getAllCategorias().then((data) => {
      
      console.log("all categorias: ", data);
    });
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
    //const logged = false;
    return this.state.user ? <Main /> : <Login onLogin={this.handleOnLogin} />;
  }
}

export default App;