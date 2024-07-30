import Header from '../components/header';
import Login from '../components/login';
import styled from 'styled-components';

const AppConteiner = styled.div`
  width: 500px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`
function LoginPage() {
  return (
    <AppConteiner>
      <Header/>
      <Login/>
    </AppConteiner>
  );
}

export default LoginPage;