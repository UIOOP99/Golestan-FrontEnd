import { ConfigProvider } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from '../../shared/Dashboard';

import Courses from './Courses';
import Students from './Students';
import Semesters from './Semesters';
import Professors from './Professors';

import sidebarItems from './sidebarItems';

function AdminMainLayout() {
  return (
    <ConfigProvider direction="rtl">
      <Router>
        <Dashboard sidebarItems={sidebarItems}>

          <Switch>
            <Route path="/admin/courses">
              <Courses />
            </Route>

            <Route path="/admin/semesters">
              <Semesters />
            </Route>

            <Route path="/admin/professors">
              <Professors />
            </Route>

            <Route path="/admin/students">
              <Students />
            </Route>
          </Switch>

        </Dashboard>
      </Router>
    </ConfigProvider>
  );
}

export default AdminMainLayout;