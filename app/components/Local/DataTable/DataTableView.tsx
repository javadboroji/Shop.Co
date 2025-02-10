import { Button } from "antd";
import { Eye } from "lucide-react";
import React from "react";

interface IProps {
  viewRow: (row: object) => void;
  row: object;
}

const DataTableView: React.FC<IProps> = ({ viewRow, row }) => {
  return (
    <div className="flex items-center">
      <Button onClick={() => viewRow(row)} className="shadow-none border-0">
        <Eye className="text-orange-500 text-xs" />
      </Button>
    </div>
  );
};

export default DataTableView;
