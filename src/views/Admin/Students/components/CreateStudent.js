import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';

const StudentCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="اضافه‌کردن دانشجوی جدید"
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

        <Form.Item
          name="username"
          label="نام کاربری"
          rules={[
            {
              required: true,
              message: 'نام کاربری الزامی است.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="ایمیل"
          rules={[
            {
              required: true,
              message: 'ایمیل الزامی است.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="رمز عبور"
          rules={[
            {
              required: true,
              message: 'رمز عبور الزامی است.',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CreateStudentModal = ({ onCreate }) => {
  const [visible, setVisible] = useState(false);

  const handleCreateStudent = (values) => {
    onCreate(values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
      >
        دانشجوی جدید
      </Button>

      <StudentCreateForm
        visible={visible}
        onCreate={handleCreateStudent}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
};

export default CreateStudentModal;