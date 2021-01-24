import React,{ Component } from 'react';
import { Table, Tag, Space } from 'antd';
import StudentsTest from '../../fakeDatas/StudentsTest.json';
import EditScore from './EditScore';
import StudentScore from './StudentScore';
import axios from 'axios';
class StudentsList extends Component{
    constructor(props){
        super(props);
        this.state={
            edit_mode: true,
            studentList_data_array : []
        }
    }

    componentDidMount(){
        const url = "http://localhost:8000/api";
        const config = {
        headers: { Authorization: `Bearer ${this.state.JWT_token}` }
        };
        axios.get(url,config)
        .then(response => {
        this.setState({
            classList_data_array : response.data,
        });
        })
        .catch(err=>{
        console.log(err);
        });
        console.log(document.location.lastIndexOf('/'));
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
            key="action" dataIndex="id"
            render={(id) => (
                <Space size="middle">
                <EditScore edit_mode={true} student_id={id} />
                </Space>
            )}
            />
          </Table>
        );
    }
}

export default StudentsList;