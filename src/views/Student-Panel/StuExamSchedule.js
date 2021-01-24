import React from "react";
import ReactDOM from "react-dom";
import "../../index.css";

import axios from 'axios';

import StuExamCols from '../../fake/StuExamCols.json'
import StuExamData from '../../fake/StuExamData.json'

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
  editable,
  children,
  dataIndex,
  record,

  ...restProps
}) => {
  let childNode = children;
  return <td {...restProps}>{childNode}</td>;
};

export default class EditableTable extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [{StuExamCols}]
    this.state = {dataSource: [{StuExamData}]};
  }

  componentDidMount(){

    axios.get('').then(
        response=>{

            this.setState({
              dataSource : response.data
            });

        }
    ).catch(
        err=>{
            console.log(err,"An Error Occured in data fetching (StuExamSchedule.js) <3")
        }
    );
   
}

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    
    return (
      <div>
        <h1>برنامه امتحانات دانشجو</h1>
        <Table
          components={components}
          bordered
          dataSource={StuExamData}
          columns={StuExamCols}
        />
      </div>
    );
  }
}

ReactDOM.render(<EditableTable />, document.getElementById("root"));
