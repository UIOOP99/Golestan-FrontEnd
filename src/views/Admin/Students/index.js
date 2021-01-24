import { useState, useEffect } from 'react';

import ListHeader from '../../../shared/components/ListHeader';
import { $Axios } from '../../../shared/services/api';

import CreateStudentModal from './components/CreateStudent';
import StudentsList from './components/List';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents()
  }, []);

  async function getStudents() {
    try {
      const { data } = await $Axios.get('/get_allStudents');
      setStudents(data);
    } catch (e) {
      console.log('Error getting students', e);
    }
  }

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
    const index = students.findIndex(({ userId }) => student.userId === userId);
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