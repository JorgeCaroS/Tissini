import React, { useState } from "react";

// const [userData, setUserData] = useState("");

export default class Login extends React.Component {
  userInput = React.createRef();

  handleUserLogin = () => {
    const userId = this.userInput.current.value;
    this.props.onLogin(userId);
    // console.log("user ID: ", userId, userId.value);
  };

  render() {
    return (
      <div>
        <div className="background-login">
          {/* <img className="img-login" src="https://mitienda.moda/img/login-desktop.0a0cacb5.jpg" /> */}
          <div className="test">
            <form className="form-container">
              <h1>MITIENDA.MODA</h1>
              <h3>Ingresa el número de teléfono de tu asesora independiente.</h3>
              <img src="https://mitienda.moda/img/logo.c752bf8f.png" />
              <br></br>
              <input
                placeholder="Teléfono"
                ref={this.userInput}
                className="user-id"
              ></input>
              <button
                className="btn-form"
                type="button"
                onClick={this.handleUserLogin}
              >
                Login{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
