import styled from "styled-components"
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default function StockAcess () {
    return (
        <Container>
            <Main>
                <Link to="/estoque/materiais"><MainButton>CONTROLE DE MATERIAIS</MainButton></Link>
                <Link to="/estoque/compras"><MainButton>LISTA DE COMPRAS</MainButton></Link>
            </Main>
        </Container>
    )
}