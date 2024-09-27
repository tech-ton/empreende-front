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
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

function UserWithnotLogin () {
  return (<HomeContainer><Logo/><Title>Você não está logado!</Title></HomeContainer>);
};

export default UserWithnotLogin;