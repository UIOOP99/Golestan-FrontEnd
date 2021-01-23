import { formatCountdown } from "antd/lib/statistic/utils";
import React , { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import MasterMainPage from "./views/Masters/MasterMainPage";
class Redirect extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){

        return(
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
        
        <Route path='/master' component={MasterMainPage} />

        </Router>
        );
        }


}

export default Redirect;