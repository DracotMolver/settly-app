import { Routes, Route, BrowserRouter } from "react-router-dom";
//
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ClientListScreen from "../screens/ClientListScreen";
import PrivateRoute from "./PrivateRoute";
import paths from "./paths";

function router() {
  return (
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
  );
}

router.displayName = "router";

export default router;
