import React from "react";

const Table = ({ header, data, columns }) => {
  const totalMarketValue = data.reduce(
    (sum, row) => sum + (row.marketValue || 0),
    0
  );
  const totalAmount = data.reduce((sum, row) => sum + (row.amount || 0), 0);
  const totalNAV = data.reduce((sum, row) => sum + (row.NAV || 0), 0);

  return (
    <table className="table-auto w-full border-2 border-gray-800 rounded-lg shadow-lg">
      <thead>
        <tr>
          <th
            colSpan={columns.length}
            className="uppercase text-white px-4 py-2 text-left bg-yellow-700">
            {header}
          </th>
        </tr>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className="capitalize px-4 py-2 text-left bg-yellow-600">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="even:bg-gray-50">
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="px-4 py-2 text-right">
                {typeof row[column.accessor] === "number"
                  ? row[column.accessor].toLocaleString()
                  : row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="px-4 py-2 bg-yellow-600 font-semibold">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="px-4 py-2 text-right">
            {totalMarketValue.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </td>
          <td className="px-4 py-2 text-right">
            {totalAmount.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </td>
          <td></td>
          <td className="px-4 py-2 text-right">
            {totalNAV.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
