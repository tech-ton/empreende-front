import styled from "styled-components"

const HomeContainer = styled.div`
    font-family: Arial, sans-serif;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
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


export default function BootAssistent () {
    return (
        <HomeContainer>
            <Main>
                <Title>Olá, seja bem vindo ao nosso assistente!</Title>
                <Text>Para iniciarmos sua navegação selecione os itens abaixo:</Text>
                <MainButton>QUERO ABRIR UM NEGÓCIO</MainButton>
            </Main>
        </HomeContainer>
    )
}