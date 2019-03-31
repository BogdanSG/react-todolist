import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "./components/app-drawer-provider/header/Header";
import Content from "./components/app-drawer-provider/content/Content";
import Footer from "./components/app-drawer-provider/footer/Footer";
import AppDrawerProvider from "./components/app-drawer-provider/AppDrawerProvider";
import { blue } from "@material-ui/core/colors";
import Wrapper from "./ui-components/Wrapper";

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

const App = ({ classes }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppDrawerProvider>
        <Wrapper>
          <Header />
          <Content />
          <Footer />
        </Wrapper>
      </AppDrawerProvider>
    </MuiThemeProvider>
  );
};

export default App;
