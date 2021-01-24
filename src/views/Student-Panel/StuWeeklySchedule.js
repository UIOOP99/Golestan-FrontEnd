import React from "react";
import ReactDOM from "react-dom";

import axios from 'axios';

import  StuWeekTitles from '../../fake/StuWeekTitles.json'
import StuWeekdataSource from '../../fake/StuWeekdataSource.json'

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

  componentDidMount(){

    axios.get('').then(
        response=>{

            this.setState({
              dataSource : response.data
            });

        }
    ).catch(
        err=>{
            console.log(err,"An Error Occured in data fetching (StuWeeklySchedule.js) <3")
        }
    );
   
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
