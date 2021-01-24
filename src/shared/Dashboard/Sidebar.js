import { Layout, Menu } from 'antd';
import { UserOutlined, CalendarOutlined, BookOutlined, TeamOutlined } from '@ant-design/icons';

import { Link } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar({ collapse }) {
  return (
    <Sider
      trigger={null} 
      collapsible 
      collapsed={collapse}
      collapsedWidth="0"
    >
      <div className="sidebar__logo">
        <h1>سامانه گلستان</h1>
      </div>

      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<CalendarOutlined />}>
          <Link to="/admin/semesters">ترم‌ها</Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<BookOutlined />}>
          <Link to="/admin/courses">درس‌ها</Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="/admin/professors">اساتید</Link>
        </Menu.Item>

        <Menu.Item key="4" icon={<TeamOutlined />}>
          <Link to="/admin/students">دانشجویان</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}