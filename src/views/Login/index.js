import { ConfigProvider } from 'antd';
 import { LockTwoTone,UserOutlined,LoadingOutlined } from '@ant-design/icons';
import './index1.css';
import LoginForm from './components/Form';

function LoginPage() {
  return (
    <ConfigProvider direction="rtl">
       <div class="body">
        <div class="img"><img src="https://www.uniref.ir/images/scientometrics/17.png" width="100px" height="100px" /></div>
    <div class="main">
    <p class="b"><span>سیستم جامع دانشگاهی گلستان</span></p>
      <h1 style={{ textAlign: 'center' }}>سیستم جامع دانشگاهی گلستان</h1>
      <div style={{ maxWidth: 300, margin: '0 auto' }}>
        <LoginForm />
      </div>
      </div>
      </div>
    </ConfigProvider>
  );
}

export default LoginPage;