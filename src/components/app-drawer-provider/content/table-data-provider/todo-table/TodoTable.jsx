import React, { Fragment, useContext, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import AlarmIcon from "@material-ui/icons/Alarm";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";
import TableDataContext from "../../../../../contexts/table-data-context";
import TodoDrawer from "../todo-drawer/TodoDrawer";

const styles = {
  paper: {
    width: "100%",
    height: "100%",
    overflow: "auto",
    "& *": {
      fontSize: 18
    }
  },
  table: {
    minWidth: 850
  },
  deadline: {
    whiteSpace: "nowrap"
  },
  checkBox: {
    fontSize: 32
  },
  menu: {
    fontSize: 28
  },
  textDecoration: {
    textDecoration: "line-through"
  },
  textCross: {
    position: "relative",
    overflow: "unset",
    "&:before": {
      content: '""',
      position: "absolute",
      width: "auto",
      height: "auto",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0) url(./images/cross.svg) no-repeat",
      backgroundSize: "100% 100%"
    }
  },
  rowDone: {
    backgroundColor: "#2196f31c"
  },
  taskCell: {
    padding: 15
  },
  taskLabel: {
    display: "inline-block",
    lineHeight: 1.2
  }
};

const MENU_ITEM_HEIGHT = 48;

const TodoTable = ({ classes }) => {
  const { tableData, setTableData } = useContext(TableDataContext);

  //const [editDeleteMenu, setEditDeleteMenu] = useState(null);
  const [editDeleteMenu, setEditDeleteMenu] = useState({
    anchorEl: null,
    index: 0
  });
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [rowIndex, setRowIndex] = useState(-1);

  const openEditDrawer = index => {
    if (index !== rowIndex) {
      setRowIndex(index);
      setTimeout(() => setDrawerIsOpen(true), 10);
    } //if
    else setDrawerIsOpen(true);
  }; //openEditDrawer

  return (
    <Paper elevation={7} className={classes.paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Done</TableCell>
            <TableCell align="center">Task</TableCell>
            <TableCell align="center">Deadline</TableCell>
            <TableCell align="center" />
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <Fragment key={index}>
              <TableRow
                onDoubleClick={() => {
                  if (!row.done) openEditDrawer(index);
                }}
                className={row.done ? classes.rowDone : ""}
              >
                <TableCell align="center">
                  <Checkbox
                    checked={row.done}
                    icon={
                      <CheckBoxOutlineBlankIcon className={classes.checkBox} />
                    }
                    checkedIcon={<CheckBoxIcon className={classes.checkBox} />}
                    onChange={e => {
                      row.done = e.target.checked;
                      setTableData([...tableData]);
                    }}
                    color="primary"
                  />
                </TableCell>
                <TableCell align="center" className={classes.taskCell}>
                  <label
                    className={`${classes.taskLabel} ${
                      row.done ? classes.textCross : ""
                    }`}
                  >
                    {row.task}
                  </label>
                </TableCell>
                <TableCell align="center" className={classes.deadline}>
                  <Chip
                    icon={row.done ? <AlarmOnIcon /> : <AlarmIcon />}
                    variant="outlined"
                    color="primary"
                    label={row.deadline}
                  />
                </TableCell>
                <TableCell>
                  <Fragment>
                    <IconButton
                      aria-label="More"
                      aria-haspopup="true"
                      onClick={e =>
                        setEditDeleteMenu({
                          anchorEl: e.currentTarget,
                          index: index
                        })
                      }
                    >
                      <MoreVertIcon className={classes.menu} />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={editDeleteMenu.anchorEl}
                      open={!!editDeleteMenu.anchorEl}
                      onClose={() =>
                        setEditDeleteMenu({ anchorEl: null, index: index })
                      }
                      PaperProps={{
                        style: {
                          maxHeight: MENU_ITEM_HEIGHT * 4.5,
                          width: 200
                        }
                      }}
                    >
                      <MenuItem
                        disabled={tableData[editDeleteMenu.index].done}
                        onClick={() => {
                          openEditDrawer(editDeleteMenu.index);
                          setEditDeleteMenu({
                            anchorEl: null,
                            index: editDeleteMenu.index
                          });
                        }}
                      >
                        Edit
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          tableData.splice(editDeleteMenu.index, 1);
                          setTableData([...tableData]);
                          setEditDeleteMenu({
                            anchorEl: null,
                            index: editDeleteMenu.index
                          });
                        }}
                      >
                        Remove
                      </MenuItem>
                      ))}
                    </Menu>
                  </Fragment>
                </TableCell>
              </TableRow>
              {rowIndex === index && (
                <TodoDrawer
                  value={row}
                  open={drawerIsOpen}
                  onClose={() => {
                    setDrawerIsOpen(false);
                    //setRowIndex(-1);
                  }}
                />
              )}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
export default withStyles(styles)(TodoTable);
