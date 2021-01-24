import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';

const SemesterCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="اضافه‌کردن ترم جدید"
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
          name="name"
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
      </Form>
    </Modal>
  );
};

const CreateSemesterModal = ({ onCreate }) => {
  const [visible, setVisible] = useState(false);

  const handleCreateSemester = (values) => {
    onCreate(values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
      >
        ترم جدید
      </Button>

      <SemesterCreateForm
        visible={visible}
        onCreate={handleCreateSemester}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
};

export default CreateSemesterModal;