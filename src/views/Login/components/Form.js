import { Form, Input, Button } from 'antd';

import { $Axios } from '../../../shared/services/api';
import setAxiosAuthorizationHeader from '../../../shared/services/api/axios';

function LoginForm({ handleRedirect }) {
  const handleLogin = async (values) => {
    try {
      const form = new FormData();
      form.append('username', values.username);
      form.append('password', values.password);

      const { data } = await $Axios.post('/login', form);
      
      localStorage.setItem('authToken', data.token);
      // setAxiosAuthorizationHeader(data.token);
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
        rules={[{ required: true, message: 'لطفا نام کاربری را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="رمزعبور"
        name="password"
        rules={[{ required: true, message: 'لطفا رمز عبور را وارد کنید.' }]}
      >
        <Input.Password />
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