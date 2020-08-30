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
        <p>Login</p>

        <form>
          <label>User</label>
          <br></br>
          <input ref={this.userInput} className="user-id"></input>
          <button className="btn" type="button" onClick={this.handleUserLogin}>            
            Login{" "}
          </button>
        </form>
      </div>
    );
  }
}