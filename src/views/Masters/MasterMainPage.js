import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ClassList from './ClassList';
import MasterProfile from './MasterProfile';
import StudentsList from './StudentsList';
import Dashboard from '../../views/Masters/shared_clone/Dashboard';
class MasterMainPage extends Component {
  render() {
    const {Content } = Layout;
    
    return (
      <ConfigProvider direction="rtl">
        <Router>
          <Dashboard sidebarItems={[]}>

            <Content style={{ margin: '24px 16px 0' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: window.innerHeight }}>
                <Switch>
                  <Redirect exact from="/master" to="/master/classList" />
                  <Route exact path='/master/classList' component={ClassList} />
                  <Route path="/master/profile" component={MasterProfile} />
                  <Route path="/master/studentList" component={StudentsList} />
                </Switch>
              </div>
            </Content>

          </Dashboard>
        </Router>
      </ConfigProvider>
    );
  }
}

export default MasterMainPage;