import styled from "styled-components";
import perfilicon from "../images/icone-perfil.png"
import graficoimage from "../images/grafico-de-barras.png"
import calculadora from "../images/calculadora.png"
import menu from "../images/menu.png"
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
    margin: 0;
    font-family: Arial, sans-serif;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    position: relative;
`
const Header = styled.header`
  header {
        position: absolute;
        top: 20px;
        right: 20px;
    }
`

const UserInfo = styled.div`
    position: absolute;
    top: 20px;
    right: 150px;
    display: flex;
    flex-direction: column;
    align-items: center

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }
`

const UserName = styled.div`
  font-size: 1.2em;
`;

const Main = styled.main`
  max-width: 80%;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
`;

const MainButton = styled.button`
  background-color: #9bbdf7;
  color: #0a1a42;
  border: none;
  border-radius: 25px;
  padding: 15px 30px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #82a3e6;
  }
`;

const Icons = styled.aside`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Home() {
    return(
        <HomeContainer>
            <Header>
                <UserInfo>
                    <img src={perfilicon} alt="perfil-icon"/>
                    <UserName>SHEILA</UserName>
                </UserInfo>
            </Header>
            <Main>
                <Title>Olá, é bom te ver aqui!</Title>
                <Text>Para iniciarmos sua navegação selecione os itens abaixo:</Text>
                <MainButton>QUERO ABRIR UM NEGÓCIO</MainButton>
            </Main>
            <Icons>
                <img src={menu} alt="menu"/>
                <img src={graficoimage} alt="grafico"/>
                <Link to="/estoque"><img src={calculadora} alt="calculadora"/></Link>
            </Icons>
        </HomeContainer>
    );
}

export default Home;