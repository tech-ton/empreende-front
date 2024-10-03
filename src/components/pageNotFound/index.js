import styled from 'styled-components';
import Logo from '../Logo';

const HomeContainer = styled.div`
    font-family: Arial, sans-serif;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const Title = styled.h1`
    font-size: 2em;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }
`;

function PageNotFound () {
  return (<HomeContainer><Logo/><Title>Página não encontrada</Title></HomeContainer>);
};

export default PageNotFound;