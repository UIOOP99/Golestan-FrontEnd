import React, { Component } from 'react';
import { Card } from 'antd';
import { UserConsumer } from '../../shared/components/Context/UserContext';
import axios from 'axios';
class MasterProfile extends Component{

  constructor(props){
    super(props);
    this.state={
      JWT_token : '',
      master_name : 'رضا محمدی',
      personnel_code : '25547693'
    }
  }

  componentDidMount(){
    const url = "http://localhost:8000/api";
    const config = {
      headers: { Authorization: `Bearer ${this.state.JWT_token}` }
      };
    axios.get(url,config)
    .then(response => {
      this.setState({
        master_name : response.data.name,
        personnel_code : response.data.personnel_code
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
              
              <p>{this.state.master_name}</p>
              <div>
              <span>کد پرسنلی</span> : <span>{this.state.personnel_code}</span>
              </div>

            </Card>
          </div>
        );
    }
}

export default MasterProfile;