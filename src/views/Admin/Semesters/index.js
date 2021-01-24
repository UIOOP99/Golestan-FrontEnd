import { useState } from 'react';

import ListHeader from '../../../shared/components/ListHeader';

import CreateSemesterModal from './components/CreateSemester';
import SemestersList from './components/List';

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

  function addSemester(semester) {
    // TODO: REQUES?

    setSemesters((prevState) => [
      ...prevState,
      {
        ...semester,
        id: '---'
      }
    ]);
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