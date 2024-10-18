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
`;

const Main = styled.main`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 190px;
        margin-right: 20px;
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
    background-color: #050a30;
    color: #ffffff;
    width: 200px;
    margin: 10px;
    margin-top: 200px;
    
    &:hover {
        transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
        margin-top: 20px;
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

export default function ReportAcess () {
    return (
        <Container>
            <Main>
                <Link to="/relatorio/estrategia" style={{textDecoration: "none"}}>
                    <MainButton>
                        <Icon src={estrategia} alt="estrategia" width="70" height="70"/>
                        ESTRATÉGIAS
                    </MainButton>
                </Link>
                <Link to="/relatorio/meta" style={{textDecoration: "none"}}>
                    <MainButton>
                        <Icon src={metas} alt="metas" width="70" height="70"/>
                        METAS
                    </MainButton>
                </Link>
                <Link to="/relatorio/precificacao" style={{textDecoration: "none"}}>
                    <MainButton>
                        <Icon src={precificacao} alt="precificacao" width="70" height="70"/>
                        PRECIFICAÇÃO
                    </MainButton>
                </Link>
            </Main>
        </Container>
    )
}