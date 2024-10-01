import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

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
  width: 600px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 15px;
  margin-top: 25px;
`;

function BusinessType () {
    const [tiponegocio, settipoNegocio] = useState("");
    const [chat, setChat] = useState([]);
    const navigate = useNavigate();
    const userBusiness = JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {
      const storedItems = JSON.parse(localStorage.getItem('userChat'));
      setChat(storedItems);
    }, []);
    

    const handleBusinessType = (event) => {
        let addChat = [...chat,{pergunta: "Seu negócio é físico ou virtual?", resposta: tiponegocio}]
        localStorage.setItem('userDataBusiness', JSON.stringify({tipoNegocio: tiponegocio}));
        localStorage.setItem('userChat', JSON.stringify(addChat));
        event.preventDefault();
        navigate("/home");
    }
    
    return (
        <HomeContainer>
            <Main>
                <form onSubmit={handleBusinessType}>
                    <Title>
                        Qual tipo de negócio deseja abrir?
                    </Title>
                    <h2>{userBusiness.negocio}</h2>
                    <Title>
                        Seu negócio é físico ou virtual?
                    </Title>
                    <UserText 
                        type="tiponegocio" 
                        value={tiponegocio}
                        onChange={(e) => settipoNegocio(e.target.value)} 
                        placeholder=""
                    />
                    <br/>
                    <MainButton type="submit">Enviar</MainButton>
                </form>
            </Main>
        </HomeContainer>
    )
}

export default BusinessType;