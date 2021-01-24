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
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img src="ui-logo.png" alt="University of Isfahan Logo" style={{ maxWidth: 125}} />
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>سیستم جامع دانشگاهی گلستان</h1>
        <div style={{ maxWidth: 300, margin: '0 auto' }}>
          <LoginForm handleRedirect={redirectionBaseOnRole} />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default LoginPage;