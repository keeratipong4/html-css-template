import "./index.css";
import Table from "./table";

function App() {
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
      NAV: 2.52,
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
      quantity: 30000,
      unitCost: 135.86,
      marketPrice: 141,
      marketValue: 4230000,
      amount: 154147.3,
      percentage: 3.78,
      NAV: 4.43,
    },
  ];

  // const data = [
  //   { name: "Alice", age: 25, country: "USA" },
  //   { name: "Bob", age: 30, country: "UK" },
  //   { name: "Charlie", age: 35, country: "Canada" },
  //];
  return (
    <div className="mx-auto my-10 w-19/20">
      <h1>My Table</h1>
      <Table
        header="PortFolio Holding report"
        data={portfolioReport}
        columns={columns}
      />
    </div>
  );
}

export default App;
