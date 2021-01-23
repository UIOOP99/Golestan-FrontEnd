import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

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
      
        <Menu.Item key="1" icon={<VideoCameraOutlined />}>
          <Link to='/master/classList'>کلاس ها</Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to='/master/profile'>پروفایل</Link>
        </Menu.Item>
        
      </Menu>
    </Sider>
  );
}