import { Routes, Route, BrowserRouter } from "react-router-dom";
import Container from "@mui/material/Container";
import LoginScreen from "../screens/LoginScreen";

function router() {
  return (
    <BrowserRouter>
      <Container maxWidth="sm">
        <Routes>
          <Route exact path="/" element={<LoginScreen />}>
            <Route exact path="/sing-up" element={<LoginScreen />} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

// {/* <PrivateRouter exact path={VIDEO_LIST_URL}>
//           <VideoLists />
//         </PrivateRouter>
//         <PrivateRouter path={`${VIDEO_LIST_URL}/:id`} component={SingleVideo} /> */}

router.displayName = "router";

export default router;
