import React, { useState } from "react";
import TableComponent from "./components/TableComponent";
import "antd/dist/antd.css";
import { message } from "antd";

function App() {
  const [assetAllocations, setAssetAllocations] = useState([
    {
      assetClassName: "Alternatives",

      assetClassHandle: "1~20~313",

      subAllocations: [
        {
          name: "Equity Market Neutral",

          assetClassHandle: "1~20~128",

          percentage: 20,
        },

        { name: "Hedged Equity", assetClassHandle: "1~20~129", percentage: 0 },

        { name: "Event Driven", assetClassHandle: "1~20~130", percentage: 10 },

        {
          name: "Managed Futures",
          assetClassHandle: "1~20~131",
          percentage: 0,
        },
      ],
    },

    {
      assetClassName: "Equity",

      assetClassHandle: "1~20~302",

      subAllocations: [
        { name: "All Cap", assetClassHandle: "1~20~101", percentage: 0 },

        { name: "Large-Cap Core", assetClassHandle: "1~20~112", percentage: 0 },

        {
          name: "Large-Cap Growth",
          assetClassHandle: "1~20~113",
          percentage: 0,
        },

        {
          name: "Large-Cap Value",
          assetClassHandle: "1~20~114",
          percentage: 50,
        },

        { name: "Mid-Cap Core", assetClassHandle: "1~20~117", percentage: 0 },

        { name: "Mid-Cap Growth", assetClassHandle: "1~20~118", percentage: 0 },

        { name: "Mid-Cap Value", assetClassHandle: "1~20~119", percentage: 0 },

        { name: "REITs", assetClassHandle: "1~20~120", percentage: 0 },

        {
          name: "Small-Cap Core",
          assetClassHandle: "1~20~123",
          percentage: 10,
        },

        {
          name: "Small-Cap Growth",
          assetClassHandle: "1~20~124",
          percentage: 10,
        },

        {
          name: "Small-Cap Value",
          assetClassHandle: "1~20~125",
          percentage: 0,
        },
      ],
    },
  ]);
  const onAdd = (data, total) => {
    console.log("onAdd", data, total);
    if (total !== 100) {
      return message.error("Total allocation percentage should be 100");
    }
  };
  const onReset = () => {
    const newState = [...assetAllocations];
    newState.forEach((item) =>
      item.subAllocations.forEach((item1) => (item1.percentage = 0))
    );
    setAssetAllocations(newState);
  };
  const onPercentageChange = (assetId, subAssetId, value) => {
    const newState = [...assetAllocations];
    newState
      .find((item) => item.assetClassHandle === assetId)
      .subAllocations.find(
        (item) => item.assetClassHandle === subAssetId
      ).percentage = value;
    setAssetAllocations(newState);
  };
  return (
    <div style={{ padding: "40px 100px 100px 100px" }}>
      <h2 style={{ textAlign: "center" }}>Asset Allocation</h2>
      <TableComponent
        assetAllocations={assetAllocations}
        onAdd={onAdd}
        onReset={onReset}
        onPercentageChange={onPercentageChange}
      />
    </div>
  );
}

export default App;
