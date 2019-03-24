import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Store from "./components/store";
import Header from "./components/header/header";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import "./App.css";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Arial",
      "sans-serif"
    ].join(","),
    useNextVariants: true
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Store>
        <div className="wrapper">
          <Header />
          <Content />
          <Footer />
        </div>
      </Store>
    </MuiThemeProvider>
  );
};

export default App;
