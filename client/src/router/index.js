import { Routes, Route, BrowserRouter } from "react-router-dom";
//
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ClientListScreen from "../screens/ClientListScreen";

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route path="/sing-up" element={<RegisterScreen />} />
        <Route path="/dashboard/clients" element={<ClientListScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

// {/* <PrivateRouter exact path={VIDEO_LIST_URL}>
//           <VideoLists />
//         </PrivateRouter>
//         <PrivateRouter path={`${VIDEO_LIST_URL}/:id`} component={SingleVideo} /> */}

router.displayName = "router";

export default router;
