import { useState, useEffect } from 'react';

import ListHeader from '../../../shared/components/ListHeader';
import { $Axios } from '../../../shared/services/api';

import CreateCourseModal from './components/CreateCourse';
import CreateCourseDateModal from './components/CreateCourseDate';
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
      const { data } = await $Axios.post('/courses',
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
          id: data.id
        }
      ]);
    } catch (e) {
      console.log('Error adding course', e);
    }
  }

  async function addCourseDate(courseDate) {
    try {
      const { data } = await $Axios.post(`/course/add_date?courseId=${courseDate.courseId}`,
        {
          day: courseDate.day,
          start: courseDate.start,
          end: courseDate.end,
        },
        {
          headers: {
            'Authorization': localStorage.getItem('authToken')
          }
        });

      setCoures((prevState) => [
        ...prevState,
        {
          ...courseDate,
          id: data.id
        }
      ]);
    } catch (e) {
      console.log('Error adding course date', e);
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
        <div style={{ display: 'flex' }}>
          <CreateCourseDateModal onCreate={addCourseDate} courses={courses} />
          <CreateCourseModal onCreate={addCourse} />
        </div>
      </ListHeader>

      <CoursesList items={courses} onDelete={removeCourse} />
    </>
  )
}