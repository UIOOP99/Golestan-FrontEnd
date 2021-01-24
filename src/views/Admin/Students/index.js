import { useState } from 'react';

import ListHeader from '../../../shared/components/ListHeader';
import { $Axios } from '../../../shared/services/api';

import CreateStudentModal from './components/CreateStudent';
import StudentsList from './components/List';

const FAKE_STUDENTS = [
  {
    studentNumber: '9725311',
    firstName: "امیرحسین",
    lastName: "قاسمی"
  },
  {
    studentNumber: '9725312',
    firstName: "فرزانه",
    lastName: "محمدی"
  },
  {
    studentNumber: '9725313',
    firstName: "مینا",
    lastName: "رضایی"
  },
  {
    studentNumber: '9725314',
    firstName: "سجاد",
    lastName: "هاشمیان"
  },
];

export default function Students() {
  const [students, setStudents] = useState([...FAKE_STUDENTS]);

  async function addStudent(student) {
    try {
      const { data: id } = await $Axios.post('/admin/add_user',
        {
          firstname: student.firstName,
          lastname: student.lastName,
          username: student.username,
          email: student.email,
          password: student.password,
          role: 'STUDENT',
        },
        {
          headers: {
            'Authorization': localStorage.getItem('authToken')
          }
        });

      setStudents((prevState) => [
        ...prevState,
        {
          ...student,
          studentNumber: id
        }
      ]);
    } catch (e) {
      console.log('Error adding student', e);
    }
  }

  function removeStudent(student) {
    const index = students.findIndex(({ studentNumber }) => student.studentNumber === studentNumber);
    if (index === -1) {
      return;
    }

    // TODO: REQUEST?

    const newStudents = [...students];
    newStudents.splice(index, 1);

    setStudents(newStudents);
  }

  return (
    <>
      <ListHeader title="دانشجویان">
        <CreateStudentModal onCreate={addStudent} />
      </ListHeader>

      <StudentsList items={students} onDelete={removeStudent} />
    </>
  )
}