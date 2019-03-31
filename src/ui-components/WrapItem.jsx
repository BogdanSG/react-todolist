import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  wrapItem: {
    margin: `0 0 ${theme.spacing.unit * 4}px 0`,
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  icon: {
    alignSelf: "flex-start",
    color: "rgba(0,0,0,0.54)",
    marginRight: 30,
    position: "relative",
    top: "20px"
  }
});

const WrapItem = ({ icon, children, classes }) => {
  return (
    <div className={classes.wrapItem}>
      {icon && <div className={classes.icon}>{icon}</div>}
      {children}
    </div>
  );
}; //Wrapper

export default withStyles(styles)(WrapItem);
