import "./index.css";
import TableA from "./TableA";
import Table from "./Table";

function App() {
  const data1 = [
    {
      transactionType: "Initial Investment",
      date: "8-Jun-16",
      amount: 9000000,
    },
    { transactionType: "Addition", date: "18-Aug-16", amount: 3335000 },
    { transactionType: "Addition", date: "27-Jan-17", amount: 5000000 },
    { transactionType: "Withdrawal", date: "31-Oct-18", amount: 2000000 },
    { transactionType: "Withdrawal", date: "18-Jun-19", amount: 7000000 },
    { transactionType: "Addition", date: "5-Jul-21  ", amount: 2000000 },
    { transactionType: "Addition", date: "17-May-23", amount: 4000000 },
    { transactionType: "Addition", date: "13-Jun-23", amount: 1000000 },
    { transactionType: "Withdrawal", date: "28-Aug-24", amount: 1500000 },
  ];

  const columns = [
    { header: "Investment Category", accessor: "investmentCategory" },
    { header: "Investment Category", accessor: "portName" },
    { header: "Quantity", accessor: "quantity" },
    { header: "Unit Cost", accessor: "unitCost" },
    { header: "Market Price", accessor: "marketPrice" },
    { header: "Market Value", accessor: "marketValue" },
    { header: "Amount", accessor: "amount" },
    { header: "%", accessor: "percentage" },
    { header: "% of NAV", accessor: "NAV" },
  ];
  const portfolioReport = [
    {
      investmentCategory: "Cash & Cash Equivalent",
      portName: "Cash",
      marketValue: 378699.67,
      NAV: 2.52,
    },
    {
      investmentCategory: "Equity",
      portName: "BBL",
      quantity: 30000,
      unitCost: 135.86,
      marketPrice: 141,
      marketValue: 4230000,
      amount: 154147.3,
      percentage: 3.78,
      NAV: 28.15,
    },
    {
      investmentCategory: "Equity",
      portName: "KBANK",
      quantity: 167000,
      unitCost: 136.21,
      marketPrice: 143,
      marketValue: 2388100,
      amount: 113381.55,
      percentage: 4.98,
      NAV: 15.89,
    },
    {
      investmentCategory: "Equity",
      portName: "CPALL",
      quantity: 11000,
      unitCost: 59.72,
      marketPrice: 60.5,
      marketValue: 665500,
      amount: 8563.89,
      percentage: 1.3,
      NAV: 4.43,
    },
    {
      investmentCategory: "Equity",
      portName: "BTG",
      quantity: 64500,
      unitCost: 21.95,
      marketPrice: 23.9,
      marketValue: 1563060,
      amount: 127440.77,
      percentage: 8.88,
      NAV: 10.4,
    },
    {
      investmentCategory: "Equity",
      portName: "TFG",
      quantity: 3108000,
      unitCost: 3.39,
      marketPrice: 4.64,
      marketValue: 1442112,
      amount: 388395.32,
      percentage: 36.86,
      NAV: 9.6,
    },
    {
      investmentCategory: "Equity",
      portName: "ADVANC",
      quantity: 9300,
      unitCost: 214.65,
      marketPrice: 247,
      marketValue: 2297100,
      amount: 300849.08,
      percentage: 15.07,
      NAV: 15.28,
    },
    {
      investmentCategory: "Equity",
      portName: "SIRI",
      quantity: 1188400,
      unitCost: 1.52,
      marketPrice: 1.71,
      marketValue: 2032164,
      amount: 220184.99,
      percentage: 12.15,
      NAV: 13.52,
    },
    {
      investmentCategory: "Equity",
      portName: "TFG-W4",
      quantity: 34020,
      unitCost: 0.02,
      marketPrice: 0.91,
      marketValue: 30958.2,
      amount: 30354.33,
      percentage: 5026.76,
      NAV: 0.21,
    },
  ];

  return (
    <div className="mx-auto my-10 w-19/20 space-y-12">
      <h1 className="text-gray-400 font-bold text-right">
        Portfolio Number: ABC001
      </h1>
      <div>
        <h1 className="text-right">Unit baht</h1>
        <TableA header="Investment Report as of 31 August 2024" data={data1} />
        {/* <Table
          header="Investment Report as of 31 August 2024"
          data={portfolioReport}
          columns={columns}
        /> */}
      </div>
      <Table
        header="PortFolio Holding report"
        data={portfolioReport}
        columns={columns}
      />
    </div>
  );
}

export default App;
