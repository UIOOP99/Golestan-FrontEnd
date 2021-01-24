import { Layout, Menu } from 'antd';

import { Link } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar({ collapse, items }) {
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
        {items.map(item => (
          <Menu.Item key={item.name} icon={<item.icon />}>
            <Link to={item.link}>{item.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}
