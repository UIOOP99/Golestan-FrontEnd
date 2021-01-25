import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Space } from 'antd';
import axios from 'axios';
import { $Axios } from '../../shared/services/api';
import EditScoreForm from './EditScoreForm';
import { Header } from 'antd/lib/layout/layout';

class EditScoreModal extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  editScore = (score)=>{
    
    const body = JSON.stringify({
        studentId  : this.props.student_id,
        courseId  : this.props.course_id,
        score : score
       }
    );

    const url = "/professor/";
    console.log("1111111111",this.props.student_id,this.props.course_id);
    $Axios.post(url,
      body,
      {
        headers : {'Authorization': localStorage.getItem('authToken')}
      })
    .then(response => {
      
      console.log(response.data);
      this.hideModal();
    })
    .catch(err=>{
      console.log(err);
      this.hideModal();
    });
    
  }

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
            ویرایش  
        </Button>
        <Modal
          title="ویرایش نمره"
          visible={this.state.visible}
          onOk={this.editScore}
          onCancel={this.hideModal}
          okText="ثبت"
          cancelText="انصراف"
        >
         <EditScoreForm student_id={this.props.student_id} />
        </Modal>
      </>
    );
  }
}

export default EditScoreModal;






