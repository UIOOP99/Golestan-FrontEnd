import React,{ Component } from 'react';
import { Table, Tag, Space } from 'antd';
import StudentsTest from '../fakeDatas/StudentsTest.json';
import EditScore from './EditScore';
import StudentScore from './StudentScore';
class StudentsList extends Component{
    constructor(props){
        super(props);
        this.state={
            edit_mode: true,

        }
    }
    render(){
        const { Column, ColumnGroup } = Table;

        return(
            <Table dataSource={StudentsTest}>
            {/* <ColumnGroup title="اطلاعدرسات درس" /> */}
              <Column title="نام " dataIndex="name" key="name" />
              <Column title="نام خانوادگی" dataIndex="lastname" key="lastname" />
              <Column title="شماره دانشجویی" dataIndex="student_number" key="student_number" />
              <StudentScore edit_modes={true} title="نمره" dataIndex="score" key="score" />
            <Column 
            key="action"
            render={(text, record) => (
                <Space size="middle">
                <EditScore edit_mode={true}  />
                </Space>
            )}
            />
          </Table>
        );
    }
}

export default StudentsList;