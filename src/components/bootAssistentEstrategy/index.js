import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { GoogleGenerativeAI } from "@google/generative-ai";
import dataLogin from "../../data/user-login.json"
import dataChat from "../../data/chat-data-estrategia.json"
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
    max-width: 100%;
    background-color: rgba(24, 34, 53, 0.9);
    border-radius: 30px;
    padding: 10px;
    
    @media (max-width: 768px) {
        max-width: 95%;
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

const TextContainer = styled.div`
    width: 900px;
    height: 50vh;
    overflow-y: auto;
    margin-bottom: 20px;
    

    p {
      background-color: rgba(40, 50, 69, 0.8);
      text-align: right;
      border-radius: 10px;
      margin-left: 45vw;
      padding: 10px;
      padding-left: 10px;
      display: inline-block;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      max-height: 340px;
      margin-bottom: 20px;

      p {
        text-align: right;
        font-size: 0.9em;
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

export default function BootAssistentEstrategy () {
  const [isSent, setIsSent] = useState('');
  const [loading, setLoading] = useState(false);
  const userBusiness = JSON.parse(localStorage.getItem("userData"));
  const userDataBusiness = JSON.parse(localStorage.getItem("userDataBusiness"));
  const [chat, setChat] = useState([]);
  
  useEffect(() => {
      const storedItems = JSON.parse(localStorage.getItem('userChatEstrategy')) || dataChat;
      setChat(storedItems);
    }, []);
    

  async function mainBoot(userMessage) {
    try{
      const result = await model.generateContent(`Quero que você responda somente assunto especializado sobre estrategias de empreendedorismo qualquer assunto distinto corrija para retornar sobre o assunto. O seguimento da minha loja é de ` +userBusiness.negocio+" e modelo "+userDataBusiness.tipoNegocio+" "+userMessage);
      let text = result.response.text();
      let clearText = text.replace(/[#*]/g, '');
      setChat([...chat,{pergunta: userMessage, resposta: clearText}]);
      let addedItens = [...chat,{pergunta: userMessage, resposta: clearText}];
      localStorage.setItem('userChatEstrategy', JSON.stringify(addedItens));
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
        <h1>ESTRATÉGIAS</h1>
        <Main>
          <TextContainer>
            {chat.map(chat => (
                <div>
                  <p>{chat.pergunta}</p>
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
        <h1>ESTRATÉGIAS</h1>
        <Main>
            <TextContainer>
              {chat.map(chat => (
                  <div>
                    <p>{chat.pergunta}</p>
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