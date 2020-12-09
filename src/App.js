import { ConfigProvider } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from './shared/Dashboard';

import Courses from './views/Courses';
import Students from './views/Students';
import Semesters from './views/Semesters';
import Professors from './views/Professors';

function App() {
  return (
    <ConfigProvider direction="rtl">
      <Router>
        <Dashboard>

          <Switch>
            <Route path="/courses">
              <Courses />
            </Route>

            <Route path="/semesters">
              <Semesters />
            </Route>

            <Route path="/professors">
              <Professors />
            </Route>

            <Route path="/students">
              <Students />
            </Route>
          </Switch>

        </Dashboard>
      </Router>
    </ConfigProvider>
  );
}

export default App;
