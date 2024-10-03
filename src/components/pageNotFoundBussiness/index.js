import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

export default function PageNotFoundBussiness () {
  return (<HomeContainer><Logo/><Title>Tipo de negócio inválido! Escolha físico ou virtual.</Title><Link to="../home/tiponegocio">VOLTAR</Link></HomeContainer>);
};