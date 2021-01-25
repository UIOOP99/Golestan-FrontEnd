import React from "react";
import ReactDOM from "react-dom";

import axios from 'axios';

import  StuWeekTitles from '../../fake/StuWeekTitles.json'
import StuWeekdataSource from '../../fake/StuWeekdataSource.json'
import {$Axios} from '../../shared/services/api'

import "antd/dist/antd.css";
import { Table, Form } from "antd";


const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  children,

  ...restProps
}) => {

  let childNode = children;

  return <td {...restProps}>{childNode}</td>;
};

export default class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{ StuWeekTitles}]
    this.state = {
      dataSource: [{StuWeekdataSource}]
    };
  }

 componentDidMount() {
   $Axios
      .get(
        "http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/student-controller/getStudentCourseDates"
      )
      .then((response) => {
        this.setState({
          dataSource: response.data,
          columns: response.data,
        });
      })
      .catch((err) => {
        console.log(err, "An Error in data fetching (StuWeeklySchedule.js)");
      });
  }

  render() {
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };

    return (
      <div>
        <h1> برنامه هفتگی دانشجو</h1>
        <Table
          components={components}
          bordered
          dataSource={StuWeekdataSource}
          columns={StuWeekTitles}
        />
      </div>
    );
  }
}

ReactDOM.render(<EditableCell />, document.getElementById("root"));
