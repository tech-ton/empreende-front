import styled from 'styled-components';

const HomeContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 5vw;
  margin-top: 30vh;
  max-width: 90vw;

  @media (max-width: 768px) {
    margin-left: 0vw;
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
  return (
  <HomeContainer>
    <Title>Você precisa fazer seu cadastro para acessar essa funcionalidade.</Title>
  </HomeContainer>);
};

export default UserWithnotLogin;