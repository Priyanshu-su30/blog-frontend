import React, { useState } from "react";
import "./signup.css";
import logo from "../../assets/logo.png";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return(
  <div className="signupParent">
    <img alt="logo" src={logo} />
    <h1>Welcome to dailyblog</h1>
    <h1>Create Account</h1>
    <form>
      <div className="inputWrapper">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleName}
          value={name}
          id="name"
          placeholder="Enter Your Name"
        />
      </div>
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
      <button type="submit">Create Account</button>
    </form>
    <div className="footerText">
        Already have an account?
        <a href="/Login">Login</a>
    </div>
  </div>
  )};

export default Signup;
