import React from 'react';
import { Layout } from 'antd';

import TopHeader from '../../../../shared/Dashboard/Header.js';
import Sidebar from './Sidebar';

import './style.css';

const { Content } = Layout;

export default function Dashboard({ children }) {
  const [siderCollapse, setSiderCollapse] = React.useState(false);

  const toggleSiderCollapse = () => setSiderCollapse((prevState) => !prevState);

  return (
    <Layout style={{ height: '100%' }}>
      <Sidebar collapse={siderCollapse} />

      <Layout>
        <TopHeader collapse={siderCollapse} toggleSider={toggleSiderCollapse} />

        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
