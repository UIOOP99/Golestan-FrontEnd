import { useHistory } from "react-router-dom";
import { ConfigProvider } from 'antd';
import './index1.css';
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
        <div class="body">
        <div class="img"><img src="https://www.uniref.ir/images/scientometrics/17.png" width="100px" height="100px" /></div>
    <div class="main">
    <p class="b"><span>سیستم جامع دانشگاهی گلستان</span></p>
        <LoginForm handleRedirect={redirectionBaseOnRole} />
      </div>
      </div>
    </ConfigProvider>
  );
}

export default LoginPage;