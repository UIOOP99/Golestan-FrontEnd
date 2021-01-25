import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { UserProvider } from "./shared/components/Context/UserContext";

import MasterMainPage from "./views/Masters/MasterMainPage";
import AdminMainLayout from "./views/Admin";
import LoginPage from "./views/Login";
import StudentMainPage from "./views/Students";

class RedirectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JWT_token: '' //set JWT Token here
    }
  }

  render() {
    return (
      <Router>
        <UserProvider value={this.state.JWT_token}>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/login" component={LoginPage} />
            <Route path='/master' component={MasterMainPage} />
            <Route path="/admin" component={AdminMainLayout} />
            <Route path='/student' component={StudentMainPage} />
          </Switch>
        </UserProvider>
      </Router>
    );
  }
}

export default RedirectPage;