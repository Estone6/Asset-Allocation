import React, { useState } from "react";
import TableComponent from "./components/TableComponent";
import { message } from "antd";
import "antd/dist/antd.css";

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
        {
          name: "Hegde Equity",
          assetClassHandle: "1~20~129",
          percentage: 0,
        },
        {
          name: "Equity Market Neutral",
          assetClassHandle: "1~20~130",
          percentage: 0,
        },
        {
          name: "Equity Market Neutral",
          assetClassHandle: "1~20~131",
          percentage: 10,
        },
      ],
    },
    {
      assetClassName: "Equity",
      assetClassHandle: "1~20~302",
      subAllocations: [
        {
          name: "All Cap",
          assetClassHandle: "1~20~101",
          percentage: 20,
        },
        {
          name: "Large-Cap Core",
          assetClassHandle: "1~20~112",
          percentage: 0,
        },
        {
          name: "Large-Cap Growth",
          assetClassHandle: "1~20~113",
          percentage: 0,
        },
        {
          name: "Large-Cap Value",
          assetClassHandle: "1~20~114",
          percentage: 10,
        },
      ],
    },
  ]);
  const onAdd = (data, total) => {
    console.log("onAdd", data, total);
    if (total > 100) {
      return message.error(
        "Total percentage should be less than or equals 100"
      );
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
