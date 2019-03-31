import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  flexMainContent: {
    padding: theme.spacing.unit * 4,
    flexGrow: 1,
    overflow: "auto"
  }
});

const FlexMainContent = ({ children, classes }) => {
  return <div className={classes.flexMainContent}>{children}</div>;
}; //FlexMainContent

export default withStyles(styles)(FlexMainContent);
