import React, { Component } from 'react';
import { Card } from 'antd';
import { UserConsumer } from '../../shared/components/Context/UserContext';
import { $Axios } from '../../shared/services/api';
import axios from 'axios';
class MasterProfile extends Component{

  constructor(props){
    super(props);
    this.state={
      id : 0,
      username : '',
      firstName : '',
      email : '',
      role : ''
    }
  }

  componentDidMount(){
    const url = "/professor/profile";
     
    $Axios.get(url,
      {
        headers : {'Authorization': localStorage.getItem('authToken')}
      })
    .then(response => {
      
      this.setState(
        {
          id : response.userId,
          username   :  response.data.username,
          firstName  :  response.data.firstName,
          email      :  response.data.email,
          role       :  response.data.role
        });

    })
    .catch(err=>{
      console.log(err);
    });
    
  }

    render(){
        return (
            <div className="site-card-border-less-wrapper">
            <Card title="مشخصات استاد" bordered={false} style={{ width: 300 }}>
              
              <p>{this.state.firstName}</p>
              <div>
              <span>نام کاربری</span> : <span>{this.state.username}</span>
              </div>
              <div>
              <span>ایمیل</span> : <span>{this.state.email}</span>
              </div>

            </Card>
          </div>
        );
    }
}

export default MasterProfile;