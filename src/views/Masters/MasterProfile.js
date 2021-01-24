import React, { Component } from 'react';
import { Card } from 'antd';
import { UserConsumer } from '../../shared/components/Context/UserContext';
class MasterProfile extends Component{
    render(){
        return (
            <div className="site-card-border-less-wrapper">
            <Card title="مشخصات استاد" bordered={false} style={{ width: 300 }}>
              
              <p>رضا محمدی</p>
              <div>
              <span>کد پرسنلی</span> : <span>25547693</span>
              </div>

            </Card>
          </div>
        );
    }
}

export default MasterProfile;




