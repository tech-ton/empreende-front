import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
    font-family: Arial, sans-serif;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const Main = styled.main`
    max-width: 80%;

    @media (max-width: 768px) {
        max-width: 95%;
    }
`;

const Title = styled.h1`
    font-size: 2em;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 1.8em;
    }
`;

const MainButton = styled.button`
  right: 10px;
  bottom: 10px;
  background-color: #9bbdf7;
  color: #0a1a42;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #82a3e6;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 8px 18px;
  }
`;

const UserText = styled.textarea`
  width: 510px;
  height: 20px; 
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  padding-right: 90px;
  font-size: 1em;
  resize: none;

  @media (max-width: 768px) {
    width: 60%;
  }
`;


function Business () {
    const [negocio, setNegocio] = useState("");
    const navigate = useNavigate();

    const handleBusiness = (event) => {
        let addChat = [{pergunta: "Qual tipo de negócio deseja abrir?", resposta: negocio}]
        localStorage.setItem('userData', JSON.stringify({negocio: negocio}));
        localStorage.setItem('userChat', JSON.stringify(addChat));
        event.preventDefault();
        navigate("../home/tiponegocio");
    }
    
    return (
        <HomeContainer>
            <Main>
                <form onSubmit={handleBusiness}>
                    <Title>Qual tipo de negócio deseja abrir?</Title>
                    <UserText 
                        type="negocio" 
                        value={negocio}
                        onChange={(e) => setNegocio(e.target.value)} 
                        placeholder=""
                    />
                    <br/>
                    <MainButton type="submit">Enviar</MainButton>
                </form>
            </Main>
        </HomeContainer>
    )
}

export default Business;