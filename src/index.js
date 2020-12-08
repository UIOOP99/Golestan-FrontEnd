import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { ConfigProvider } from 'antd';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import ClassList from './components/ClassList';
import MasterProfile from './components/MasterProfile';
import StudentsList from './components/StudentsList';

const { Header, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <ConfigProvider direction="rtl">
    <Router>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            
            
              <Menu.Item key="1" icon={<VideoCameraOutlined />}>
                <Link to='/'>کلاس ها</Link>
              </Menu.Item>
            

              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to='/profile'>پروفایل</Link>
              </Menu.Item>
          
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Route exact path='/' component={ClassList} />
              <Route path="/profile" component={MasterProfile} />
              <Route path="/students" component={StudentsList} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>All right reserved by Golestan ©2020</Footer>
        </Layout>
      </Layout>
    </Router>
  </ConfigProvider>,
  document.getElementById('root'),
);