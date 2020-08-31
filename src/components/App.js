import React, { Component } from "react";
import Login from "./login/Login";
import { postData } from "../api/index";
import { validateUser, getAllCategorias } from "../api";
import Main from "./main/Main";

class App extends Component {
  state = {
    user: false,
    categorias:[]
  };

  componentDidMount() {
    getAllCategorias().then((data) => {
      
      console.log("all categorias: ", data);
      this.setState({categorias:data})
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
    console.log(this.state.categorias)
    return this.state.user ? <Main categorias={this.state.categorias}/> : <Login onLogin={this.handleOnLogin} />;
  }
}

export default App;