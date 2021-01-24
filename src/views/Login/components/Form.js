import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { LockTwoTone,UserOutlined,LoadingOutlined } from '@ant-design/icons';
function LoginForm() {
  var role="";
  const onFinish = (values) => {
    var apiBaseUrl="";
  var payLoad={
    "username":values.username,
    "password":values.password
  }
  axios.post(apiBaseUrl,payLoad).then(function (response) {
    if(response.data.code == 200){
    console.log("Login successfull");;
  axios.get('').then(
    response=>{
      this.role=response.data;
    }
  );
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
    else console.log("Username password do not match");
  }
  );
};
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="نام کاربری"
        name="username"
        rules={[{ required: true, pattern:"^[0-9]{9}$",message: 'لطفا نام کاربری را به درستی وارد کنید.' }]}
      >
        <Input prefix={<UserOutlined type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
      </Form.Item>

      <Form.Item
        label="رمزعبور"
        name="password"
        rules={[{ required: true,pattern:"^[0-9]{10}$", message: 'لطفا رمز عبور را به درستی وارد کنید.' }]}
      >
        <Input.Password prefix={<LockTwoTone  type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"  />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          ورود
        </Button>
      </Form.Item>
    </Form>
  );
}
export default LoginForm;