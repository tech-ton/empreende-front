import styled from "styled-components";
import { Link } from 'react-router-dom';
import iconGemini from "../../images/gemini_ia.png"

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
  font-size: 30px;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 23px;
  margin-bottom: 20px;
`;

const ImgGemini = styled.img`
    width: 15%;
    font-size: 30px;
    margin-bottom: 10px;
`;

export default function newUserWellcome () {
    return (
        <HomeContainer>
            <Main>
                <Title>
                    Olá, é bom te ver aqui!
                </Title>
                <SubTitle>
                    Para iniciarmos sua navegação 
                    selecione o item abaixo:
                </SubTitle>
                <Link to="./negocio"><ImgGemini src={iconGemini} alt="icone-gemini"/></Link>
            </Main>
        </HomeContainer>
    );
}