import React, { Component } from 'react';
import "../../index.css";


import "antd/dist/antd.css";
import { Descriptions } from "antd";


class StuProfile extends Component {
  render() {
    return (
        <div>

        <Descriptions
          title="مشخصات دانشجو"
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >

          <Descriptions.Item label="نام">زهرا </Descriptions.Item>
          <Descriptions.Item label="نام خانوادگی">عابدی</Descriptions.Item>
          <Descriptions.Item label="نام پدر">علی</Descriptions.Item>
          <Descriptions.Item label="شماره دانشجویی">
            123456789
          </Descriptions.Item>
          <Descriptions.Item label="کد ملی">123456789654</Descriptions.Item>
          <Descriptions.Item label="شماره تلفن همراه">
            09131234567
          </Descriptions.Item>
          <Descriptions.Item label="آدرس ">
            شهر ..
            <br />
            خیابان ...
            <br />
            کوچه ..
            <br />
            پلاک ...
            <br />
            واحد ...
          </Descriptions.Item>

          <Descriptions.Item label="ترم ورود">7931</Descriptions.Item>
          <Descriptions.Item label="دانشکده">مهندسی کامپیوتر</Descriptions.Item>
          <Descriptions.Item label="رشته"> مهندسی کامپیوتر</Descriptions.Item>
          <Descriptions.Item label="مقطع"> کارشناسی</Descriptions.Item>
        </Descriptions>
        
      </div>
    );
  }
}

export default StuProfile;
