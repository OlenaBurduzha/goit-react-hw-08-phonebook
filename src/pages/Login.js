import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default Login;
