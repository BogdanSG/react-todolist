import React, { useContext, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import TableDataContext from "../../../../../contexts/table-data-context";
import FlexMainContent from "../../../../../ui-components/FlexMainContent";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TextField from "@material-ui/core/TextField";
import Wrapper from "../../../../../ui-components/Wrapper";
import WrapItem from "../../../../../ui-components/WrapItem";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 100
  },
  todoDrawer: {
    minWidth: 320,
    height: "100%"
  },
  toolBar: {
    justifyContent: "space-between"
  },
  textField: {
    width: "100%"
  }
});

const TodoDrawer = ({ classes, open, value, onClose }) => {
  const { tableData, setTableData } = useContext(TableDataContext);

  const [deadline, setDeadline] = useState(
    value ? value.deadline.replace(" ", "T") : ""
  );

  const [task, setTask] = useState(value ? value.task : "");

  const [errors, setErrors] = useState({
    deadlineError: false,
    taskError: false
  });

  const saveTaskData = () => {
    const taskTrim = task.trim();

    if (!deadline || !taskTrim) {
      setErrors({
        deadlineError: !deadline,
        taskError: !taskTrim
      });
    } //if
    else {
      const data = {
        id: value
          ? value.id
          : tableData.length > 0
          ? tableData[tableData.length - 1].id + 1
          : 1,
        task: taskTrim,
        deadline: deadline.replace("T", " "),
        done: false
      };

      if (value) {
        const index = tableData.findIndex(elem => elem.id === value.id);

        tableData[index] = data;

        setTableData([...tableData]);
      } //if
      else setTableData([...tableData, data]);

      setDefaultState();
      onClose();
    } //else
  };

  const setDefaultState = () => {
    setDeadline("");
    setTask("");
    setErrors({
      deadlineError: false,
      taskError: false
    });
  }; //setDefaultState

  const closeDrawer = () => {
    setDefaultState();
    onClose();
  }; //closeDrawer

  return (
    <Drawer open={open} onClose={closeDrawer}>
      <div className={classes.todoDrawer}>
        <Wrapper>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6">TodoDrawer</Typography>
            </Toolbar>
          </AppBar>
          <FlexMainContent>
            <Wrapper>
              <WrapItem icon={<DateRangeIcon />}>
                <TextField
                  required
                  error={errors.deadlineError}
                  label="Deadline"
                  type="datetime-local"
                  value={deadline}
                  className={classes.textField}
                  onChange={e => setDeadline(e.target.value)}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </WrapItem>
              <WrapItem icon={<AssignmentIcon />}>
                <TextField
                  required
                  error={errors.taskError}
                  label="Task"
                  value={task}
                  rowsMax="33"
                  onChange={e => setTask(e.target.value)}
                  className={classes.textField}
                  multiline
                />
              </WrapItem>
            </Wrapper>
          </FlexMainContent>
          <AppBar position="static" color="default">
            <Toolbar className={classes.toolBar}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={saveTaskData}
              >
                Save
              </Button>
              <Button className={classes.button} onClick={closeDrawer}>
                Cancel
              </Button>
            </Toolbar>
          </AppBar>
        </Wrapper>
      </div>
    </Drawer>
  );
}; //TodoDrawer

export default withStyles(styles)(TodoDrawer);
