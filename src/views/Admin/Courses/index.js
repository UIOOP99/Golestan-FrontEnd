import { useState, useEffect } from 'react';

import ListHeader from '../../../shared/components/ListHeader';
import { $Axios } from '../../../shared/services/api';

import CreateCourseModal from './components/CreateCourse';
import CoursesList from './components/List';

export default function Courses() {
  const [courses, setCoures] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  async function getCourses() {
    try {
      const { data: allCourses } = await $Axios.get('/courses_all');
      setCoures(allCourses);
    } catch (e) {
      console.log('Error getting courses!', e);
    }
  }

  async function addCourse(course) {
    try {
      const { data: id } = await $Axios.post('/courses',
        {
          name: course.name,
          professorId: course.professorId,
          semesterId: course.semesterId,
          studentsIds: course.studentsIds,
          units: Number(course.units),
          dates: [] // Todo: Add ability to set dates for course!
        },
        {
          headers: {
            'Authorization': localStorage.getItem('authToken')
          }
        });

      setCoures((prevState) => [
        ...prevState,
        {
          ...course,
          id
        }
      ]);
    } catch (e) {
      console.log('Error adding course', e);
    }
  }

  async function removeCourse(course) {
    const index = courses.findIndex(({ id }) => course.id === id);
    if (index === -1) {
      return;
    }

    try {
      await $Axios({
        method: 'delete',
        url: '/courses?id=' + course.id,
        headers: {
          'Authorization': localStorage.getItem('authToken')
        }
      });

      const newCourses = [...courses];
      newCourses.splice(index, 1);

      setCoures(newCourses);
    } catch (e) {
      console.log('Error removing course', e);
    }

    const newCourses = [...courses];
    newCourses.splice(index, 1);

    setCoures(newCourses);
  }

  return (
    <>
      <ListHeader title="درس‌ها">
        <CreateCourseModal onCreate={addCourse} />
      </ListHeader>

      <CoursesList items={courses} onDelete={removeCourse} />
    </>
  )
}