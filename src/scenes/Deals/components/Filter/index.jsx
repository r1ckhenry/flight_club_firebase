import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 0,
    boxShadow: "none"
  },
  flex: {
    flex: 1
  },
  searchField: {
    minWidth: "100%",
    backgroundColor: "#006db3",
    borderBottom: "none",
    borderRadius: 6
  }
};

class Filter extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar className={classes.root} position="static" color="primary">
        <Toolbar>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <SearchIcon />
            </Grid>
            <Grid item className={classes.flex}>
              <TextField className={classes.searchField} id="input-with-icon-grid" label="With a grid" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Filter);
