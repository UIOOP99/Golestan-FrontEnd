import React,{ Component } from 'react';
import { Table, Tag, Space } from 'antd';
import StudentsTest from '../../fakeDatas/StudentsTest.json';
import EditScore from './EditScore';
import StudentScore from './StudentScore';
import axios from 'axios';
import { $Axios } from '../../shared/services/api';
class StudentsList extends Component{
    constructor(props){
        super(props);
        this.state={
            edit_mode: true,
            studentList_data_array : [],
            course_id : 0
        }
    }

    componentDidMount(){

        const urlParams = new URLSearchParams(window.location.search);
        const course_id_param = urlParams.get('course_id');
        this.setState({
          course_id : course_id_param
        });
        const url = `/professor/get_course_students?course_id=${course_id_param}`;
    
        $Axios.get(url,
          {
            headers : {'Authorization': localStorage.getItem('authToken')}
          })
        .then(response => {
          
        //   this.setState(
        //     {
        //       classList_data_array : response.data
        //     });
    
          console.log(response.data);
    
        })
        .catch(err=>{
          console.log(err);
        });
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
            render={(id,record) => (
                <Space size="middle">
                <EditScore edit_mode={true} student_id={id} course_id={this.state.course_id} />
                </Space>
            )
          }
            />
          </Table>
        );
    }
}

export default StudentsList;