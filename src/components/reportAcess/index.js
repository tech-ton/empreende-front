import styled from "styled-components"
import { Link } from 'react-router-dom';
import estrategia from "../../images/estrategia.png"
import metas from "../../images/metas.png"
import precificacao from "../../images/precificacao.png"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
    }
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

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 768px) {
        padding: 10px 20px;
        font-size: 20px;
    }
`;

const Icon = styled.img`
    position: absolute;
    transform: translate(-100%, -30%);
    width: 70px;
    height: 70px;
    z-index: 10;

    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`;

export default function ReportAcess () {
    return (
        <Container>
            <Main>
                <MainButton>
                    <Icon src={estrategia} alt="estrategia" width="70" height="70"/>
                    <Link to="/relatorio/estrategia">ESTRATÉGIAS</Link>
                </MainButton>
                <MainButton>
                    <Icon src={metas} alt="metas" width="70" height="70"/>
                    <Link to="/relatorio/meta">METAS</Link>
                </MainButton>
                <MainButton>
                    <Icon src={precificacao} alt="precificacao" width="70" height="70"/>
                    <Link to="/relatorio/precificacao">PRECIFICAÇÃO</Link>
                </MainButton>
            </Main>
        </Container>
    )
}