import { ConfigProvider } from 'antd';

import LoginForm from './components/Form';

function LoginPage() {
  return (
    <ConfigProvider direction="rtl">
      <h1 style={{ textAlign: 'center' }}>سیستم جامع دانشگاهی گلستان</h1>
      <div style={{ maxWidth: 300, margin: '0 auto' }}>
        <LoginForm />
      </div>
    </ConfigProvider>
  );
}

export default LoginPage;