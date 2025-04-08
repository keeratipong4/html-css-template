import React from "react";

const Table = ({ header, data }) => {
  const netInvestment = data.reduce(
    (sum, row) =>
      row.transactionType !== "Withdrawal"
        ? sum + (row.amount || 0)
        : sum - (row.amount || 0),
    0
  );

  return (
    <table className="table-auto w-full border-3 border-gray-800 rounded-lg shadow-lg">
      <thead>
        <tr>
          <th
            colSpan={data.length}
            className="uppercase text-white px-4 py-2 text-left bg-[#887650] font-semibold">
            <span className="text-2xl">{header}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="px-4 py-1 text-left">{row.transactionType}</td>
            <td>{row.date}</td>
            <td className="px-4 py-1 text-right">
              {row.amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="px-4 py-2  bg-[#DAD3C0] font-semibold">
          <td></td>
          <td></td>
          <td className="px-4 py-2 text-right border-b-2 ">
            {netInvestment.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
