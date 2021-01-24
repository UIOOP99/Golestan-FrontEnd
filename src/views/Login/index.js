import { useHistory } from "react-router-dom";
import { ConfigProvider } from 'antd';

import LoginForm from './components/Form';

const ROLE_ROUTES = {
  PROFESSOR: '/master',
  STUDENT: '/student',
  ADMIN: '/admin',
};

function LoginPage() {
  const history = useHistory();

  function redirectionBaseOnRole(role) {
    history.push(ROLE_ROUTES[role]);
  }

  return (
    <ConfigProvider direction="rtl">
      <h1 style={{ textAlign: 'center' }}>سیستم جامع دانشگاهی گلستان</h1>
      <div style={{ maxWidth: 300, margin: '0 auto' }}>
        <LoginForm handleRedirect={redirectionBaseOnRole} />
      </div>
    </ConfigProvider>
  );
}

export default LoginPage;