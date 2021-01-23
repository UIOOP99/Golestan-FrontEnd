import React, { Component } from 'react';
import { Layout,Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import ClassList from './ClassList';
import MasterProfile from './MasterProfile';
import StudentsList from './StudentsList';
import MasterPage from '../../../src/MasterMainPage.css'; 
class MasterMainPage extends Component{
    render(){
        const { Header, Content, Footer, Sider } = Layout;
        return(
          <ConfigProvider direction="rtl">
          <Router>
            <Layout className={MasterPage.masterPage}>
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
                      <Link to='/master/classList'>کلاس ها</Link>
                    </Menu.Item>
                  
      
                    <Menu.Item key="2" icon={<UserOutlined />}>
                      <Link to='/master/profile'>پروفایل</Link>
                    </Menu.Item>
                
                </Menu>
              </Sider>
              <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                  <div className="site-layout-background" style={{ padding: 24, minHeight: window.innerHeight }}>
                    <Route exact path='/master/classList' component={ClassList} />
                    <Route path="/master/profile" component={MasterProfile} />
                    <Route path="/master/studentList/319923" component={StudentsList} />
                  </div>
                </Content>
                {/* <Footer style={{ textAlign: 'center' }}>All right reserved by Golestan ©2020</Footer> */}
              </Layout>
            </Layout>
          </Router>
        </ConfigProvider>
        );
    }
}

export default MasterMainPage;





