import { UserOutlined, CalendarOutlined, BookOutlined } from '@ant-design/icons';

const sidebarItems = [
  {
    name: 'پروفایل دانشجو',
    icon: UserOutlined,
    link: '/student/profile'
  },
  {
    name: 'برنامه امتحانات',
    icon: BookOutlined,
    link: '/student/exam-schedule'
  },
  {
    name: 'برنامه هفتگی',
    icon: CalendarOutlined,
    link: '/student/weekly-schedule'
  },
  {
    name: 'کارنامه',
    icon: BookOutlined,
    link: '/student/report'
  },
];



export default sidebarItems;
