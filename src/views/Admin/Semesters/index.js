import { useState, useEffect } from 'react';

import ListHeader from '../../../shared/components/ListHeader';

import CreateSemesterModal from './components/CreateSemester';
import SemestersList from './components/List';

import { $Axios } from '../../../shared/services/api';

export default function Semesters() {
  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    getSemesters()
  }, []);

  async function getSemesters() {
    try {
      const { data } = await $Axios.get('/semester_all');

      setSemesters(data);
    } catch (e) {
      console.log('Error getting semesters', e);
    }
  }

  async function addSemester(semester) {
    try {
      const formdata = new FormData();
      formdata.append('name', semester.name);

      const { data: id } = await $Axios({
        method: 'put',
        url: '/admin/add_semester',
        data: formdata,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': localStorage.getItem('authToken')
        }
      });

      setSemesters((prevState) => [
        ...prevState,
        {
          ...semester,
          id
        }
      ]);
    } catch (e) {
      console.log('Error adding semester', e);
    }
  }

  async function removeSemester(semester) {
    const index = semesters.findIndex(({ id }) => semester.id === id);
    if (index === -1) {
      return;
    }

    try {
      await $Axios({
        method: 'delete',
        url: '/admin/delete_semester?id=' + semester.id,
        headers: {
          'Authorization': localStorage.getItem('authToken')
        }
      });

      const newSemesters = [...semesters];
      newSemesters.splice(index, 1);

      setSemesters(newSemesters);
    } catch (e) {
      console.log('Error removing semester', e);
    }
  }

  return (
    <>
      <ListHeader title="ترم‌ها">
        <CreateSemesterModal onCreate={addSemester} />
      </ListHeader>

      <SemestersList items={semesters} onDelete={removeSemester} />
    </>
  )
}