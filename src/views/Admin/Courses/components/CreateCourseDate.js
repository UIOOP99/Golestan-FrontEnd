import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';

const CourseDateCreateForm = ({ visible, onCreate, onCancel, courses }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="اضافه‌کردن زمان جدید"
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
          name="courseId"
          label="درس"
          rules={[
            {
              required: true,
              message: 'انتخاب درس الزامی است.',
            },
          ]}
        >
          <Select
            placeholder="انتخاب درس"
          >
            {courses.map((course) => {
              return (
                <Select.Option value={course.id} key={course.id}>
                  {course.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="day"
          label="روز"
          rules={[
            {
              required: true,
              message: 'روز الزامی است.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="start"
          label="شروع"
          rules={[
            {
              required: true,
              message: 'زمان شروع الزامی است.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="end"
          label="پایان"
          rules={[
            {
              required: true,
              message: 'زمان پایان الزامی است.',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CreateCourseDateModal = ({ onCreate, courses = [] }) => {
  const [visible, setVisible] = useState(false);

  const handleCreateCourseDate = (values) => {
    onCreate(values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        style={{ margin: '0 0.5rem' }}
        onClick={() => setVisible(true)}
      >
        زمان‌ جدید
      </Button>

      <CourseDateCreateForm
        visible={visible}
        onCreate={handleCreateCourseDate}
        onCancel={() => setVisible(false)}
        courses={courses}
      />
    </div>
  );
};

export default CreateCourseDateModal;