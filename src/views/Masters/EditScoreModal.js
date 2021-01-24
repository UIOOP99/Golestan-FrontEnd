import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Space } from 'antd';

import EditScoreForm from './EditScoreForm';

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

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
            ویرایش  
        </Button>
        <Modal
          title="ویرایش نمره"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="ثبت"
          cancelText="انصراف"
        >
         <EditScoreForm />
        </Modal>
      </>
    );
  }
}

export default EditScoreModal;






