import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import LogoIcon from "@material-ui/icons/AirplanemodeActive";

const styles = {
  root: {
    flexGrow: 1
  },
  logoText: {
    flexGrow: 1,
    fontFamily: "'Righteous', cursive",
    letterSpacing: 0.6,
    color: "white"
  },
  logoIcon: {
    background: "white",
    color: "#006db3",
    width: 18,
    height: 18,
    padding: 4,
    marginRight: 10,
    borderRadius: 6,
    transform: "rotate(45deg)"
  },
  button: {
    marginRight: -12,
    color: "white"
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <LogoIcon className={classes.logoIcon} />
          <Typography variant="subheading" color="inherit" className={classes.logoText}>
            flight club
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// <IconButton className={classes.button} aria-label="Menu">
//   <LogoutIcon />
// </IconButton>

export default withStyles(styles)(Header);
