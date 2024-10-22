import React from "react";
import { flexRender, Row } from "@tanstack/react-table";

interface TableRowProps<T extends object> {
  row: Row<T>;
  isSelected?: boolean;
}

const TableRow = <T extends object>({
  row,
  isSelected = false,
}: TableRowProps<T>) => (
  <tr
    className={`even:bg-sky-700 odd:bg-sky-900 min-h-8 max-h-11 ${isSelected ? "bg-gray-600" : ""} hover:bg-gray-600`}
  >
    {row.getVisibleCells().map((cell) => (
      <td key={cell.id}>
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </td>
    ))}
  </tr>
);

export default TableRow;
