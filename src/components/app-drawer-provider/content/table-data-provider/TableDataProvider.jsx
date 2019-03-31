import React, { useState } from "react";
import TableDataContext from "../../../../contexts/table-data-context";
import TableDataDefaultValue from "../../../../table-data-default-value";

const TableDataProvider = ({ children }) => {
  const [tableData, setTableData] = useState(TableDataDefaultValue);

  return (
    <TableDataContext.Provider
      value={{ tableData: tableData, setTableData: setTableData }}
    >
      {children}
    </TableDataContext.Provider>
  );
}; //AppDrawerProvider

export default TableDataProvider;
