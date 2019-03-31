import React, { useContext } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppDrawerContext from "../../../contexts/app-drawer-context";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  footer: {
    marginTop: 15
  },
  fabButton: {
    position: "absolute",
    height: 70,
    width: 70,
    top: -35,
    right: 70
  }
};

const Footer = ({ classes }) => {
  const { setIsDrawerOpen } = useContext(AppDrawerContext);

  return (
    <AppBar position="static" color="primary" className={classes.footer}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Footer
        </Typography>
        <Fab
          color="secondary"
          aria-label="Add"
          onClick={() => setIsDrawerOpen(true)}
          className={classes.fabButton}
        >
          <AddIcon />
        </Fab>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Footer);
