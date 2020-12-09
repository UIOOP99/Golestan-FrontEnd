import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import { Link } from "react-router-dom";

import './style.css';

const { Header, Content, Sider } = Layout;

export default function Dashboard({ children }) {
  return (
    <Layout style={{ height: '100%' }}>
      <Sider
        breakpoint="sm"
        collapsedWidth="0"
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<VideoCameraOutlined />}>
            <Link to="semesters">ترم‌ها</Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="courses">درس‌ها</Link>
          </Menu.Item>

          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="professors">اساتید</Link>
          </Menu.Item>

          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to="students">دانشجویان</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
