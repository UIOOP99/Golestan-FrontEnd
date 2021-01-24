import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';

const ProfessorCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="اضافه‌کردن استاد جدید"
      okText="اضافه‌کردن"
      cancelText="انصراف"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
        <Form.Item
          name="firstName"
          label="نام"
          rules={[
            {
              required: true,
              message: 'نام الزامی است.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="نام خانوادگی"
          rules={[
            {
              required: true,
              message: 'نام خانوادگی الزامی است.',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CreateProfessorModal = ({ onCreate }) => {
  const [visible, setVisible] = useState(false);

  const handleCreateProfessor = (values) => {
    onCreate(values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
      >
        استاد جدید
      </Button>

      <ProfessorCreateForm
        visible={visible}
        onCreate={handleCreateProfessor}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
};

export default CreateProfessorModal;