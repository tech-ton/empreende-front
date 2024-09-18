import styled from "styled-components"
import { Link } from 'react-router-dom';
import compras from "../../images/compras.png"
import materiais from "../../images/materiais.png"

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

const MainButton = styled.div`
  color: #ffffff;
  padding: 15px 30px;
  font-size: 25px;
  cursor: pointer;
  margin: 10px 0;
  transition: background-color 0.3s;
  position: relative;
  text-align: center;
`;

const Icon = styled.img`
  position: absolute;
  transform: translate(-100%, -30%); 
  width: 70; 
  height: 70; 
  z-index: 10; 
`;

export default function StockAcess () {
    return (
        <Container>
            <Main>
              <MainButton>
                <Icon src={materiais} alt="materiais" width="70" height="70"/>
                <Link to="/estoque/materiais">CONTROLE DE MATERIAIS</Link>
              </MainButton>
              <MainButton>
                <Icon src={compras} alt="compras" width="70" height="70"/>
                <Link to="/estoque/compras">LISTA DE COMPRAS</Link>
              </MainButton>
            </Main>
        </Container>
    )
}