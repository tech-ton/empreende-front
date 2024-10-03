import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useNavigate } from 'react-router-dom';
import dataLogin from "../../data/user-login.json";
const genAI = new GoogleGenerativeAI(dataLogin[0].secret);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
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

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 1em;
  }
`;

const UserText = styled.textarea`
  width: 600px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 15px;
  margin-top: 25px;

  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
  }
`;

function BusinessType () {
    const [tiponegocio, settipoNegocio] = useState("");
    const [loading, setLoading] = useState(false);
    const [chat, setChat] = useState([]);
    const navigate = useNavigate();
    const userBusiness = JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {
      const storedItems = JSON.parse(localStorage.getItem('userChat'));
      setChat(storedItems);
    }, []);

    async function mainBoot(tipoNegocio) {
      let addedItens = [];
      try{
        const result = await model.generateContent("Estou abrindo um negocio no modelo loja "+tipoNegocio+" e no ramo de "+userBusiness.negocio+" e gostaria de dicas com os topicos de: Escolha do Nicho, Pesquisa de Mercado, Plano de Negócio, Registro e Legalização, Logística e Operações Sistema de pagamento. Edite o texto da resposta para cada linha ter no máximo 120 caracteres e se ultrapassar use quebra de linha.");
        let text = result.response.text();
        let clearText = text.replace(/[#*]/g, '');
        setChat([...chat,{pergunta: "Siga os passos abaixo antes de abrir o seu negócio:", resposta: clearText}]);
        addedItens = [...chat,{pergunta: "Siga os passos abaixo antes de abrir o seu negócio:", resposta: clearText}];
      }catch (error) {
        console.error('Erro ao buscar dados da IA', error);
      } finally {
        setLoading(false);
        localStorage.setItem('userChat', JSON.stringify(addedItens));
        navigate("/home");
      }
    };
    

    const handleBusinessType = (event) => {
      let stringMin = tiponegocio.toLowerCase();
      if(stringMin === "virtual" || stringMin === "fisico" || stringMin === "físico") {
        setLoading(true);
        let addChat = [...chat,{pergunta: "Seu negócio é físico ou virtual?", resposta: tiponegocio}]
        localStorage.setItem('userDataBusiness', JSON.stringify({tipoNegocio: tiponegocio}));
        localStorage.setItem('userChat', JSON.stringify(addChat));
        event.preventDefault();
        mainBoot(tiponegocio);
      } else {
        alert("Tipo de negócio invalido! escolha fisico ou virtual");
      }
    }
    if(loading){
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
                    <Title>Aguardando resposta da IA</Title>
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