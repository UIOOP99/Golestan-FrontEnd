import React from "react";
import ReactDOM from "react-dom";
import "../../../index.css";

import StuReportTitles from '../../../fake/StuReportTitles.json'
import StuReportContent from '../../../fake/StuReportContent'
import StuReportInner from '../../../fake/StuReportInner.json'
import StuReportCols from '../../../fake/StuReportCols.json'

import "antd/dist/antd.css";
import { Table, Badge } from "antd";


export default function StuReportCard() {
  const expandedRowRender = () => {
    const columns = [{StuReportTitles},
      {render: () => (
      <span>
        <Badge status="success" />
        18
      </span>
    ),}]

    const data = StuReportContent
    return <Table columns={StuReportTitles} dataSource={data} pagination={false} />;
  };

  const columns = [{StuReportCols}]
  const data = [{StuReportInner}]

  return (
    <div>
      <h1>کارنامه</h1>
      <Table
        className="components-table-demo-nested"
        columns={StuReportCols}
        expandable={{ expandedRowRender }}
        dataSource={StuReportInner}
      />
    </div>
  );
}

ReactDOM.render(<StuReportCard />, document.getElementById("root"));
