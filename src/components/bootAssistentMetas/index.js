import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { GoogleGenerativeAI } from "@google/generative-ai";
import dataLogin from "../../data/user-login.json"
import dataChat from "../../data/chat-data-metas.json"
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

const TextContainer = styled.div`
    width: 900px;
    height: 360px;
    overflow-y: auto;
    margin-bottom: 20px;

    h1 {
      text-align: right;
      font-size: 1.5em;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      max-height: 300px;
      margin-bottom: 20px;

      h1 {
        text-align: right;
        font-size: 1.1em;
      }
    }
`;

const TextPre = styled.pre`
  font-family: Arial, sans-serif;
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;

  @media (max-width: 768px) {
      font-size: 0.9em;
  }
`;


export default function BootAssistentMetas () {
  const [isSent, setIsSent] = useState('');
  const [loading, setLoading] = useState(false);
  const userBusiness = JSON.parse(localStorage.getItem("userData"));
  const userDataBusiness = JSON.parse(localStorage.getItem("userDataBusiness"));
  const [chat, setChat] = useState([]);
  
  useEffect(() => {
      const storedItems = JSON.parse(localStorage.getItem('userChatMetas')) || dataChat;
      setChat(storedItems);
    }, []);
    

  async function mainBoot(userMessage) {
    try{
      const result = await model.generateContent(`Quero que você responda somente assunto da realização de uma meta smart de margem de lucro de 30000 focado no inicio de negócio com os topicos: Objetivo, Ação, Métrica e Base de comparação. Qualquer assunto distinto corrija para retornar sobre o assunto. O seguimento da minha loja é de ` +userBusiness.negocio+" e modelo "+userDataBusiness.tipoNegocio+" "+userMessage);
      let text = result.response.text();
      let clearText = text.replace(/[#*]/g, '');
      setChat([...chat,{pergunta: userMessage, resposta: clearText}]);
      let addedItens = [...chat,{pergunta: userMessage, resposta: clearText}];
      localStorage.setItem('userChatMetas', JSON.stringify(addedItens));
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
        <h1>METAS</h1>
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
        <h1>METAS</h1>
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