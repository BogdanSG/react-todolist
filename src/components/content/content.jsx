import React from "react";
import TodoTable from "./todotable/todotable";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    margin: 30,
    flexGrow: 1,
    border: "3px solid blue"
  }
};

const Content = props => {
  return (
    <div className={props.classes.root}>
      <TodoTable />
    </div>
  );
};

export default withStyles(styles)(Content);
