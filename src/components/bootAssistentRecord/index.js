import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { GoogleGenerativeAI } from "@google/generative-ai";
import dataLogin from "../../data/user-login.json"
import dataChat from "../../data/chat-data.json"
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
        padding: 10px;
    }
`;

const Main = styled.main`
    max-width: 80%;

    @media (max-width: 768px) {
        max-width: 95%;
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
        font-size: 1em;
        padding: 12px 25px;
    }
`;

const UserText = styled.textarea`
    width: 600px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

const TextContainer = styled.div`
    width: 800px;
    height: 419px;
    overflow-y: auto;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        max-height: 300px;
    }
`;

const TextPre = styled.pre`
    font-family: Arial, sans-serif;

    @media (max-width: 768px) {
        font-size: 0.9em;
    }
`;


export default function BootAssistentRecord () {
  const [isSent, setIsSent] = useState('');
  const [loading, setLoading] = useState(false);
  const userBusiness = JSON.parse(localStorage.getItem("userData"));
  const userDataBusiness = JSON.parse(localStorage.getItem("userDataBusiness"));
  const [chat, setChat] = useState([]);
  
  useEffect(() => {
      const storedItems = JSON.parse(localStorage.getItem('userChat')) || dataChat;
      setChat(storedItems);
    }, []);
    

  async function mainBoot(userMessage) {
    try{
      const result = await model.generateContent(`Quero que você responda somente assunto sobre empreendedorismo qualquer assunto distinto corrija para retornar sobre o assunto e edite o texto da resposta para cada linha ter no máximo 120 caracteres e se ultrapassar use quebra de linha. O seguimento da minha loja é de ` +userBusiness.negocio+" e modelo "+userDataBusiness.tipoNegocio+" "+userMessage);
      let text = result.response.text();
      let clearText = text.replace(/[#*]/g, '');
      setChat([...chat,{pergunta: userMessage, resposta: clearText}]);
      let addedItens = [...chat,{pergunta: userMessage, resposta: clearText}];
      localStorage.setItem('userChat', JSON.stringify(addedItens));
    }catch (error) {
      console.error('Erro ao buscar dados da IA', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    mainBoot(isSent);
    setIsSent("");
  };

  const handleInputChange = (event) => {
    setIsSent(event.target.value); 
  };

  if (loading) {
    
    return (
      <HomeContainer>
        <Main>
          <TextContainer>
            {chat.map(chat => (
                <div>
                  <h1>{chat.pergunta}</h1>
                  <TextPre>{chat.resposta}</TextPre>
                </div>
            ))}
            <h1>
              Carregando resposta...
            </h1>
          </TextContainer>
          
          <form onSubmit={handleSubmit}>
            <UserText
                value={isSent}
                onChange={handleInputChange}
                placeholder="Digite sua pergunta aqui..."
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
            <TextContainer>
              {chat.map(chat => (
                  <div>
                    <h1>{chat.pergunta}</h1>
                    <TextPre>{chat.resposta}</TextPre>
                  </div>
              ))}
            </TextContainer>
            
            <form onSubmit={handleSubmit}>
              <UserText
                  value={isSent}
                  onChange={handleInputChange}
                  placeholder="Digite sua pergunta aqui..."
                />
                <br/>
                <MainButton type="submit">Enviar</MainButton>
              </form>
          </Main>
    </HomeContainer>
  );
}