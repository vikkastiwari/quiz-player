import React from "react";
import "./App.css";
import Home from "./component/Home/Home";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#108ac4",
      dark: "#000",
    },
    secondary: {
      main: "#0c58bb",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Home />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
