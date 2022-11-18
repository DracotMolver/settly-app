import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
//
import store from "./application/config/store";
import router from "./ui/router";
import theme from "./theme";
//

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {router()}
    </ThemeProvider>
  </Provider>
);
