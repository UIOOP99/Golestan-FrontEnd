import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { UserProvider } from "./shared/components/Context/UserContext";

import MasterMainPage from "./views/Masters/MasterMainPage";
import AdminMainLayout from "./views/Admin";
import LoginPage from "./views/Login";
import StudentMainPage from "./StudentMainPage";

class Redirect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JWT_token: '' //set JWT Token here
    }
  }

  render() {
    return (
      <Router>

        <div>
          <Link to='/admin'>پنل ادمین</Link>
        </div>

        <div>
          <Link to='/master'> پنل استاد</Link>
        </div>
        
        <div>
          <Link to='/student'>پنل دانشجو</Link>
        </div>

        <UserProvider value={this.state.JWT_token}>
          <Route path="/login" component={LoginPage} />
          <Route path='/master' component={MasterMainPage} />
          <Route path="/admin" component={AdminMainLayout} />
          <Route path='/student' component={StudentMainPage} />
        </UserProvider>

      </Router>
    );
  }
}

export default Redirect;