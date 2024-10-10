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

    @media (max-width: 768px) {
        margin-top: 30px;
        padding: 10px;
    }
`;

const Main = styled.main`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;

const MainButton = styled.div`
    display: flex;
    align-items: center;
    padding: 25px;
    gap: 10px;
    border: 1px solid #3E5066;
    border-radius: 5px;
    background-color: #182235;
    color: #ffffff;
    width: 200px;
    margin: 10px;
    
    &:hover {
        transform: scale(1.1);
    }
`;


const Icon = styled.img`
    width: 70px;
    height: 70px;

    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`;

export default function StockAcess () {
    return (
        <Container>
            <Main>
            <Link to="/estoque/materiais" style={{textDecoration: "none"}}>
                <MainButton>
                <Icon src={materiais} alt="materiais" width="70" height="70"/>
                CONTROLE DE MATERIAIS
                </MainButton>
            </Link>
            <Link to="/estoque/compras" style={{textDecoration: "none"}}>
              <MainButton>
                <Icon src={compras} alt="compras" width="70" height="70"/>
                LISTA DE COMPRAS
              </MainButton>
            </Link>
            </Main>
        </Container>
    )
}