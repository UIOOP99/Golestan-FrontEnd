import { UserOutlined, CalendarOutlined, BookOutlined, TeamOutlined } from '@ant-design/icons';

const sidebarItems = [
  {
    name: 'ترم‌ها',
    icon: CalendarOutlined,
    link: '/admin/semesters'
  },
  {
    name: 'درس‌ها',
    icon: BookOutlined,
    link: '/admin/courses'
  },
  {
    name: 'اساتید',
    icon: UserOutlined,
    link: '/admin/professors'
  },
  {
    name: 'دانشجویان',
    icon: TeamOutlined,
    link: '/admin/students'
  },
];

export default sidebarItems;
