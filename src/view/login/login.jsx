import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return(
  <div className="signupParent">
    <img alt="logo" src={logo} />
    <h1>Welcome to dailyblog</h1>
    <h1>Login to Your Account</h1>
    <form>
      <div className="inputWrapper">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleEmail}
          value={email}
          id="email"
          placeholder="Enter Your Mail Id"
        />
      </div>
      <div className="inputWrapper">
        <label htmlFor="password">Password</label>
        <input
          onChange={handlePassword}
          value={password}
          id="password"
          placeholder="Enter Your Passwors"
        />
      </div>
      <button type="submit">Login</button>
    </form>
    <div className="footerText">
        Didn't have an account?
        <a href="/signup">Signup</a>
    </div>
  </div>
)};

export default Login;
