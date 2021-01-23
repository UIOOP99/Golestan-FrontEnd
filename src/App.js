import React, { Component } from 'react';
import './ant.css';
import './index.css';
import  {useState , useEffect} from 'react';
import { Form, Input, Button, Checkbox, Result } from 'antd';
import { render } from '@testing-library/react';
import axios from 'axios';
import AnchorLink from 'antd/lib/anchor/AnchorLink';
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      role:''
    }
  }
  handleRole(role){
    if(role==="STUDENT")
    //Link;
   console.log("Student")
    else if(role==="PROFESSOR")
   // Link;
   console.log("Professor")
    else if( role==="ADMIN")
    console.log("Admin")
   // Link;
  }
  handleClick(event){
  var apiBaseUrl="";
  var payLoad={
    "username":this.state.username,
    "password":this.state.password
  }
  axios.post(apiBaseUrl+'login',payLoad);
  axios.get('').then(
    response=>{
      this.setState({role:response.data})
    }
  );
  this.handleRole(this.role);
  }
render(){
  
  return (

    <div class="body">
        <div class="img"><img src="https://www.uniref.ir/images/scientometrics/17.png" width="100px" height="100px" /></div>
    <div class="main">
    <p class="b"><span>سیستم جامع دانشگاهی گلستان</span></p>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
    
    >
      <Form.Item
        label="نام کاربری"
        name="username1"
        
        rules={[
          {
            required: true,
            message: 'لطفا نام کاربری را به درستی  وارد کنید',
            pattern:"^[0-9]{10}$",
            //newvalue:{username},
          },
        ]}
        onChange = {(event,newValue)=>this.setState({username:newValue})}
        
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="کلمه عبور"
        name="password1"
        
        rules={[
          {
            required: true,
            message: 'لطفا کلمه عبور را به درستی  وارد کنید',
            pattern:"^[0-9]{10}$",
          //  value:{password},
          },
        ]}
        onChange = {(event,newValue)=>this.setState({password:newValue})}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>مرا به خاطر بسپار</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick = {(event)=> this.handleClick(event)}>
          ورود
        </Button>
      </Form.Item>
    </Form>
   </div>
    </div>
  );
      }
    }
export default App;
