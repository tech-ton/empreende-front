import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useNavigate } from 'react-router-dom';
import dataLogin from "../../data/user-login.json";
const genAI = new GoogleGenerativeAI(dataLogin[0].secret);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const HomeContainer = styled.div`
  margin-top: 20vh;
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
        const result = await model.generateContent("Estou abrindo um negocio no modelo loja "+tipoNegocio+" e no ramo de "+userBusiness.negocio+" e gostaria de dicas com os topicos de: Escolha do Nicho, Pesquisa de Mercado, Plano de Negócio, Registro e Legalização, Logística e Operações Sistema de pagamento.");
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
      let stringMin = tiponegocio.toLowerCase().trim();
      if(stringMin === "virtual" || stringMin === "fisico" || stringMin === "físico") {
        setLoading(true);
        let addChat = [...chat,{pergunta: "Seu negócio é físico ou virtual?", resposta: tiponegocio}]
        localStorage.setItem('userDataBusiness', JSON.stringify({tipoNegocio: tiponegocio}));
        localStorage.setItem('userChat', JSON.stringify(addChat));
        event.preventDefault();
        mainBoot(tiponegocio);
      } else {
        alert("Tipo de negocio inválido! Escolha virtual, ou físico.");
      }
    }
    if(loading){
      return (
        <HomeContainer>
            <Main>
              <Title>
                Qual tipo de negócio deseja abrir?
              </Title>
              <h2>{userBusiness.negocio}</h2>
              <Title>
                Seu negócio é físico ou virtual?
              </Title>
              <Title>Cadastro realizado!</Title>
              <h2>Aguardando resposta da IA</h2>
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