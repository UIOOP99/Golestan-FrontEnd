import { useState } from 'react';

import ListHeader from '../../../shared/components/ListHeader';

import CreateProfessorModal from './components/CreateProfessor';
import ProfessorsList from './components/List';

const FAKE_PROFESSORS = [
  {
    id: 1,
    firstName: "رضا",
    lastName: "رضایی"
  },
  {
    id: 2,
    firstName: "مریم",
    lastName: "مریمی"
  },
];

export default function Professors() {
  const [professors, setProfessors] = useState([...FAKE_PROFESSORS]);

  function addProfessor(professor) {
    // TODO: REQUES?

    setProfessors((prevState) => [
      ...prevState,
      {
        ...professor,
        id: '---'
      }
    ]);
  }

  function removeProfessor(professor) {
    const index = professors.findIndex(({ id }) => professor.id === id);
    if (index === -1) {
      return;
    }

    // TODO: REQUEST?

    const newProfessors = [...professors];
    newProfessors.splice(index, 1);

    setProfessors(newProfessors);
  }

  return (
    <>
      <ListHeader title="اساتید">
        <CreateProfessorModal onCreate={addProfessor} />
      </ListHeader>

      <ProfessorsList items={professors} onDelete={removeProfessor} />
    </>
  )
}