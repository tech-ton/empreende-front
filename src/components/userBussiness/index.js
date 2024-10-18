import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
    margin-top: 30vh;
    font-family: Arial, sans-serif;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    input {
        width: 90%;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin-bottom: 15px;
        color: #fff;
        background-color: #050a30;
        border: 1px solid #3E5066;
        border-radius: 15px;
    }

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
  background-color: #050a30;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
  border: 1px solid #3E5066;
  border-radius: 15px;

  &:hover {
    background-color: #090a90;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 8px 18px;
  }
`;

const UserText = styled.textarea`
  width: 510px;
  height: 10vh; 
  font-size: 1.1em;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 15px;
  color: #fff;
  background-color: #050a30;
  border: 1px solid #3E5066;
  border-radius: 15px;

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