import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../App";

function PrivateRoute({ children }) {
  const { isLogin } = useContext(LoginContext);

  if (isLogin) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
