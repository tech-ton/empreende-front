import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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
  font-size: 2em;
  margin-bottom: 20px;
`;


const MainButton = styled.button`
  background-color: #9bbdf7;
  color: #0a1a42;
  border: none;
  border-radius: 25px;
  padding: 15px 30px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #82a3e6;
  }
`;

const UserText = styled.textarea`
  width: 800px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 15px
`;

function Business () {
    const [negocio, setNegocio] = useState("");
    const navigate = useNavigate();

    const handleBusiness = () => {
        localStorage.setItem('userData', JSON.stringify({negocio: negocio}));
        navigate("/home");
    }
    
    return (
        <HomeContainer>
            <Main>
                <form onSubmit={handleBusiness}>
                    <Title>Notamos que você é novo por aqui, qual seu tipo de negócio?</Title>
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