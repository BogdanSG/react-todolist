import React, { useContext, useState } from "react";
import GlobalContext from "../contexts/global-context";
import TableContext from "../contexts/table-context";
import TableDefaultValues from "../todolist-default-data";

const Store = ({ children }) => {
  const tableContext = useContext(TableContext);

  return (
    <GlobalContext.Provider value={{ ...tableContext }}>
      {children}
    </GlobalContext.Provider>
  );
}; //Store

const GlobalStore = ({ children }) => {
  const [tableData, setTableData] = useState(TableDefaultValues);

  return (
    <TableContext.Provider value={{ tableData, setTableData }}>
      <Store>{children}</Store>
    </TableContext.Provider>
  );
}; //GlobalStore

export default GlobalStore;
