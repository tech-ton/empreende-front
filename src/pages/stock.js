import styled from 'styled-components';
import setavoltar from "../images/seta-voltar.png"
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: #ffffff;
  position: relative;
`;

const Header = styled.header`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackIcon = styled.img`
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50%;
      font-size: 30px;
      margin-bottom: 50px;
    }   
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px; /* ajusta conforme necessário */
`;

const MainButton = styled.button`
  background-color: #9bbdf7;
  color: #0a1a42;
  border: none;
  border-radius: 25px;
  padding: 15px 30px;
  font-size: 1.2em;
  cursor: pointer;
  margin: 10px 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: #82a3e6;
  }
`;

function Stock() {
  return (
    <Container>
      <Header>
        <Link to="/home"><BackIcon src={setavoltar} alt="voltar"/></Link>
        <Title>
          <img src={logo} alt="logo"/>
        </Title>
      </Header>
      <Main>
        <Link to="/materiais"><MainButton>CONTROLE DE MATERIAIS</MainButton></Link>
        <Link to="/compras"><MainButton>LISTA DE COMPRAS</MainButton></Link>
      </Main>
    </Container>
  );
}

export default Stock;
