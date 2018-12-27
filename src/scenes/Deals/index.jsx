import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Filter from "./components/Filter";
import DealCards from "./components/DealCards";

const styles = {};

class Deals extends Component {
  render() {
    const { classes, deals } = this.props;
    return (
      <div>
        <DealCards deals={deals} />
      </div>
    );
  }
}

export default withStyles(styles)(Deals);
