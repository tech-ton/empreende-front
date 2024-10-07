import styled from 'styled-components';
import Logo from '../Logo';

const HomeContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 15px;
  }
`;

function UserWithnotLogin () {
  return (<HomeContainer><Logo/><Title>Você precisa fazer seu cadastro!</Title></HomeContainer>);
};

export default UserWithnotLogin;