import { useState, useEffect } from 'react';

import ListHeader from '../../../shared/components/ListHeader';
import { $Axios } from '../../../shared/services/api';

import CreateProfessorModal from './components/CreateProfessor';
import ProfessorsList from './components/List';

export default function Professors() {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    getProfessors()
  }, []);

  async function getProfessors() {
    try {
      const { data } = await $Axios.get('/get_allProfessors');
      setProfessors(data);
    } catch (e) {
      console.log('Error getting professors', e);
    }
  }

  async function addProfessor(professor) {
    try {
      const { data: id } = await $Axios.post('/admin/add_user',
        {
          firstname: professor.firstName,
          lastname: professor.lastName,
          username: professor.username,
          email: professor.email,
          password: professor.password,
          role: 'PROFESSOR',
        },
        {
          headers: {
            'Authorization': localStorage.getItem('authToken')
          }
        });

      setProfessors((prevState) => [
        ...prevState,
        {
          ...professor,
          id
        }
      ]);
    } catch (e) {
      console.log('Error adding professor', e);
    }
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