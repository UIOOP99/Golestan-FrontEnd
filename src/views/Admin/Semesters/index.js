import { useState } from 'react';

import ListHeader from '../../../shared/components/ListHeader';

import CreateSemesterModal from './components/CreateSemester';
import SemestersList from './components/List';

import { $Axios } from '../../../shared/services/api';

const FAKE_SEMESTERS = [
  {
    id: 1,
    name: "نیم‌سال اول ۹۹/۰۰",
  },
  {
    id: 2,
    name: "نیم‌سال دوم ۹۹/۰۰",
  },
];

export default function Semesters() {
  const [semesters, setSemesters] = useState([...FAKE_SEMESTERS]);

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

  function removeSemester(semester) {
    const index = semesters.findIndex(({ id }) => semester.id === id);
    if (index === -1) {
      return;
    }

    // TODO: REQUEST?

    const newSemesters = [...semesters];
    newSemesters.splice(index, 1);

    setSemesters(newSemesters);
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