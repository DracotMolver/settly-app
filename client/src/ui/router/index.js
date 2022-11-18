import React, { Fragment } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ClientListScreen from "../screens/ClientListScreen";
import AlertMessage from "../components/atoms/AlertMessage";
import PrivateRoute from "./PrivateRoute";
import paths from "./paths";

function router() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path={paths.login} element={<LoginScreen />} />
          <Route path={paths.signUp} element={<RegisterScreen />} />
          <Route
            path={paths.dashboard}
            element={
              <PrivateRoute>
                <ClientListScreen />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>

      <AlertMessage />
    </Fragment>
  );
}

router.displayName = "router";

export default router;
