import React from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
//
// import { store } from "./services/store";
import router from "./router";
import theme from "./theme";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {router()}
    </ThemeProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
