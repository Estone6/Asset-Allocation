import React from "react";
import { Button, Table } from "antd";
import ExpandedTableComponent from "./ExpandedTableComponent";

const TableComponent = ({
  assetAllocations,
  onAdd,
  onReset,
  onPercentageChange,
}) => {
  const columns = [
    { title: "Asset Name", dataIndex: "assetClassName", key: "assetClassName" },
  ];
  const data = assetAllocations.map((asset, index) => ({
    ...asset,
    key: index,
  }));
  const total = assetAllocations.reduce(
    (acc, curr) =>
      acc +
      curr.subAllocations.reduce((acc1, curr1) => acc1 + +curr1.percentage, 0),
    0
  );
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        expandable={{
          expandedRowRender: (record) => (
            <ExpandedTableComponent
              subAssetAllocations={record.subAllocations}
              onPercentageChange={onPercentageChange}
              assetId={record.assetClassHandle}
            />
          ),
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          color: total > 100 && "red",
        }}
      >
        Total: {total} %
      </div>
      <div style={{ marginTop: 16 }}>
        <Button onClick={onReset} type="default" style={{ marginRight: 16 }}>
          Reset
        </Button>
        <Button onClick={() => onAdd(data, total)} type="primary">
          Add
        </Button>
      </div>
    </div>
  );
};

export default TableComponent;
