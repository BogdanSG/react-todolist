import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }
};

const Wrapper = ({ children, classes }) => {
  return <div className={classes.wrapper}>{children}</div>;
}; //Wrapper

export default withStyles(styles)(Wrapper);
