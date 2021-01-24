import { Form, Input, Button } from 'antd';
import { LockTwoTone,UserOutlined } from '@ant-design/icons';
import { $Axios } from '../../../shared/services/api';
import setAxiosAuthorizationHeader from '../../../shared/services/api/axios';

function LoginForm({ handleRedirect }) {
  const handleLogin = async (values) => {
    try {
      const form = new FormData();
      form.append('username', values.username);
      form.append('password', values.password);

      const { data } = await $Axios.post('/login', form);
      
      setAxiosAuthorizationHeader(data.token);
      handleRedirect(data.role);
    } catch (e) {
      console.log('Error logging in!!', e);
    }
  };

  return (
    <Form
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={handleLogin}
    >
      <Form.Item
        label="نام کاربری"
        name="username"
        rules={[{ required: true,pattern:"^[0-9]{9}$", message: 'لطفا نام کاربری را به درستی وارد کنید.' }]}
      >
        <Input prefix={<UserOutlined type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        label="رمزعبور"
        name="password"
        rules={[{ required: true, pattern:"^[0-9]{10}$", message: 'لطفا رمز عبور را به درستی وارد کنید.' }]}
      >
        <Input.Password prefix={<LockTwoTone  type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"  />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
          ورود
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;