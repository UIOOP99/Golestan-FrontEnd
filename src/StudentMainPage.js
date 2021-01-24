import React from "react";
import "./index.css";

import "antd/dist/antd.css";

import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

// import RedirectPage from './RedirectPage'

import Dashboard from "./shared/Dashboard";

import StuProfile from "./views/Student-Panel/StuProfile";
import StuExamSchedule from "./views/Student-Panel/StuExamSchedule";
import StuWeeklySchedule from "./views/Student-Panel/StuWeeklySchedule";
import StuReportCard from "./views/Student-Panel/StuReportCard";

function App() {
  return (
    <div className="App">
      {/* <RedirectPage /> */}
      <BrowserRouter>
        <Dashboard>
          <Switch>
            <Route exact path="/StuProfile" component={StuProfile} />
            <Route exact path="/StuExamSchedule" component={StuExamSchedule} />
            <Route exact path="/StuWeeklySchedule" component={StuWeeklySchedule}/>
            <Route exact path="/StuReportCard" component={StuReportCard} />
          </Switch>
        </Dashboard>
      </BrowserRouter>
    </div>
  );
}

export default App;
