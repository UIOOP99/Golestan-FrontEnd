import { Form, Input, Button } from 'antd';

function LoginForm() {
  const onFinish = (values) => {
    console.log('Success:', values);
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