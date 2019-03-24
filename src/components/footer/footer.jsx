import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    marginTop: 10
  },
  fabButton: {
    position: "absolute",
    top: -30,
    right: 70
  }
};

const Footer = props => {
  return (
    <AppBar position="static" color="primary" className={props.classes.root}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Footer
        </Typography>
        <Fab
          color="secondary"
          aria-label="Add"
          className={props.classes.fabButton}
        >
          <AddIcon />
        </Fab>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Footer);
