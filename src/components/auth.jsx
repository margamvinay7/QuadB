import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleSubmit = (e) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ username: username, password: password })
    );
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))?.username;
    console.log("user is ", user);
    navigate("/shows");
    if (user?.username) {
      console.log(user.username);
      navigate("/shows");
    }
  }, []);
  return (
    <div className="login">
      <h1 className="headerLogin">QuadB Login</h1>
      <form className="loginContainer " onSubmit={(e) => handleSubmit(e)}>
        <label for="username">Username :</label>
        <input
          className="login-button"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label for="password">Password :</label>
        <input
          className="login-button"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Auth;
