import React, { Component } from "react";

import Header from "./components/Header";
import Deals from "./scenes/Deals";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { setup as firebaseSetup, getRoutes as firebaseGetRoutes } from "./services/firebase/index";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#039be5" },
    secondary: { main: "#fdd835" }
  },
  typography: {
    fontFamily: "Mukta"
  }
});

class App extends Component {
  state = {
    deals: []
  };

  constructor() {
    super();
    firebaseSetup();
  }

  componentDidMount() {
    firebaseGetRoutes(deals => this.setState({ deals }));
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <Deals deals={this.state.deals} />
      </MuiThemeProvider>
    );
  }
}

export default App;
