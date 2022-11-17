import React from "react";
import { Navigate } from "react-router-dom";
//
import paths from "../paths";

function PrivateRoute({ children }) {
  const token = window.sessionStorage.getItem("token");

  function _render() {
    let component = children;

    if (!token) {
      component = <Navigate to={paths.login} replace />;
    }

    return component;
  }

  return _render();
}

export default PrivateRoute;
