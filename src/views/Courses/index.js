import { useState } from 'react';

import ListHeader from '../../shared/components/ListHeader';

import CreateCourseModal from './components/CreateCourse';
import CoursesList from './components/List';

const FAKE_COURSES = [
  {
    id: 1,
    name: "طراحی شی‌گرای سیستم‌ها",
    professor: 1,
    semester: 1,
    students: [1, 2, 3, 4]
  },
  {
    id: 2,
    name: "مبانی برنامه‌نویسی",
    professor: 2,
    semester: 1,
    students: [4, 5, 6]
  },
];

export default function Courses() {
  const [courses, setCoures] = useState([...FAKE_COURSES]);

  function addCourse(course) {
    console.log('---------->', course)
    // TODO: REQUES?

    setCoures((prevState) => [
      ...prevState,
      {
        ...course,
        id: '---'
      }
    ]);
  }

  function removeCourse(course) {
    const index = courses.findIndex(({ id }) => course.id === id);
    if (index === -1) {
      return;
    }

    // TODO: REQUEST?

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