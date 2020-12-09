import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';

import StudentSelector from './StudentSelector';

const CourseCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const professors = [
    {
      id: 1,
      firstName: 'رضا'
    },
    {
      id: 2,
      firstName: 'مریم'
    },
  ];

  const semesters = [
    {
      id: 1,
      name: 'نیم‌سال اول'
    },
    {
      id: 2,
      name: 'نیم‌سال دوم'
    },
  ];

  const students = [
    {
      studentNumber: 1,
      firstName: "امیرحسین",
      lastName: "قاسمی"
    },
    {
      studentNumber: 2,
      firstName: "فرزانه",
      lastName: "محمدی"
    },
    {
      studentNumber: 3,
      firstName: "مینا",
      lastName: "رضایی"
    },
    {
      studentNumber: 4,
      firstName: "سجاد",
      lastName: "هاشمیان"
    },
  ];

  return (
    <Modal
      visible={visible}
      title="اضافه‌کردن درس جدید"
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

        <Form.Item
          name="professor"
          label="استاد"
          rules={[
            {
              required: true,
              message: 'انتخاب استاد الزامی است.',
            },
          ]}
        >
          <Select
            placeholder="انتخاب استاد"
          >
            {professors.map((professor, index) => {
              return (
                <Select.Option value={professor.id}>{professor.firstName}</Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="semester"
          label="ترم"
          rules={[
            {
              required: true,
              message: 'انتخاب ترم الزامی است.',
            },
          ]}
        >
          <Select
            placeholder="انتخاب ترم"
          >
            {semesters.map((semester, index) => {
              return (
                <Select.Option value={semester.id}>{semester.name}</Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="students"
          label="دانشجویان"
        >
          <StudentSelector studentsList={students} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CreateCourseModal = ({ onCreate }) => {
  const [visible, setVisible] = useState(false);

  const handleCreateCourse = (values) => {
    onCreate(values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
      >
        درس جدید
      </Button>

      <CourseCreateForm
        visible={visible}
        onCreate={handleCreateCourse}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
};

export default CreateCourseModal;