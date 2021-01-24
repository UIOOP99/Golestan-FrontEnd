import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';

import StudentSelector from './StudentSelector';
import { $Axios } from '../../../../shared/services/api';

const CourseCreateForm = ({
  visible,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();

  const [professors, setProfessors] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getResources();
  }, []);

  async function getResources() {
    try {
      const { data: allProfessors } = await $Axios.get('/get_allProfessors');
      setProfessors(allProfessors);

      const { data: allStudents } = await $Axios.get('/get_allStudents');
      setStudents(allStudents);

      const { data: allSemesters } = await $Axios.get('/semester_all');
      setSemesters(allSemesters);
    } catch (e) {
      console.log('Error getting resources!', e);
    }
  }

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
          name="units"
          label="تعداد واحد"
          rules={[
            {
              required: true,
              message: 'تعداد واحد الزامی است.',
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          name="professorId"
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
            {professors.map((professor) => {
              return (
                <Select.Option value={professor.userId} key={professor.userId}>
                  {professor.firstName} {professor.lastName} ({professor.userId})
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="semesterId"
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
            {semesters.map((semester) => {
              return (
                <Select.Option value={semester.id} key={semester.id}>{semester.name}</Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="studentsIds"
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