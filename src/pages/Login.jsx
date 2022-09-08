import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import MoveUp from "../component/MoveUp";

function Login() {
  const { setIsLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  function login() {
    setIsLogin(true);
    navigate(-1);
  }

  return (
    <MoveUp>
      <h1>Login Page</h1>
      <button onClick={login}>Login</button>
    </MoveUp>
  );
}

export default Login;
