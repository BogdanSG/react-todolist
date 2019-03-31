import React, { useContext } from "react";
import AppDrawerContext from "../../../contexts/app-drawer-context";
import FlexMainContent from "../../../ui-components/FlexMainContent";
import TableDataProvider from "./table-data-provider/TableDataProvider";
import TodoTable from "./table-data-provider/todo-table/TodoTable";
import TodoDrawer from "./table-data-provider/todo-drawer/TodoDrawer";

const Content = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(AppDrawerContext);

  return (
    <FlexMainContent>
      <TableDataProvider>
        <TodoTable />
        <TodoDrawer
          value={null}
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      </TableDataProvider>
    </FlexMainContent>
  );
};

export default Content;
