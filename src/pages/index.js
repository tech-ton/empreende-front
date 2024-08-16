import Header from '../components/header';
import Login from '../components/login';
import styled from 'styled-components';
import Logo from '../components/Logo';

const AppConteiner = styled.div`
`

function LoginPage() {
  return (
    <AppConteiner>
      <Header/>
      <Logo/>
      <Login/>
    </AppConteiner>
  );
}

export default LoginPage;