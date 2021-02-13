import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0b7368",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
    ,
  </Provider>,
  document.getElementById("root")
);
