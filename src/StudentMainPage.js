
import React from "react";
import { ConfigProvider } from 'antd';
import "./index.css";

import "antd/dist/antd.css";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Dashboard from "./shared/Dashboard";

import StuProfile from "./views/Student-Panel/StuProfile";
import StuExamSchedule from "./views/Student-Panel/StuExamSchedule";
import StuWeeklySchedule from "./views/Student-Panel/StuWeeklySchedule";
import StuReportCard from "./views/Student-Panel/StuReportCard";

import sidebarItems from './views/Student-Panel/sidebarItems'

function App() {
  return (
    <ConfigProvider direction="rtl">
      <BrowserRouter>
        <Dashboard sidebarItems={sidebarItems}>
          <Switch>
            <Route exact path="/student/profile" component={StuProfile} />
            <Route exact path="/student/exam-schedule" component={StuExamSchedule} />
            <Route exact path="/student/weekly-schedule" component={StuWeeklySchedule} />
            <Route exact path="/student/report" component={StuReportCard} />
          </Switch>
        </Dashboard>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
