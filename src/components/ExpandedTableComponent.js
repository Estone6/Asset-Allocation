import React from "react";
import { PercentageOutlined } from "@ant-design/icons";
import { Input, Table } from "antd";

const ExpandedTableComponent = ({
  subAssetAllocations,
  onPercentageChange,
  assetId,
}) => {
  const columns = [
    { title: "Sub Asset Name", dataIndex: "name", key: "name", width: "70%" },
    {
      name: "Percentage",
      dataIndex: "percentage",
      key: "percentage",
      width: "30%",
      render: (text, record) => (
        <Input
          onChange={(e) =>
            onPercentageChange(assetId, record.assetClassHandle, e.target.value)
          }
          suffix={<PercentageOutlined />}
          value={text}
        />
      ),
    },
  ];
  const data = subAssetAllocations.map((subAsset, index) => ({
    ...subAsset,
    key: index,
  }));
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default ExpandedTableComponent;
