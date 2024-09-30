import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { GoogleGenerativeAI } from "@google/generative-ai";
import dataLogin from "../../data/user-login.json"
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
  margin-bottom: 15px
`;

const Form = styled.form`
  margin-top:290px;
`; 

const TextContainer = styled.div`
  width: 800px;
  height: 419px;
  overflow-y: auto;
`;


export default function BootAssistent () {
  const [data, setData] = useState('');
  const [isSent, setIsSent] = useState('');
  const [loading, setLoading] = useState(true);
  const userBusiness = JSON.parse(localStorage.getItem("userData"));
  const [userAsk, setUserAsk] = useState('');

  async function mainBoot(userMessage) {
    try{
      const result = await model.generateContent(`Quero que você responda somente assunto sobre empreendedorismo qualquer assunto distinto corrija para retornar sobre o assunto de empreendedorismo do texto a seguir: o seguimento da minha loja é ` +userBusiness.negocio+" e "+ userMessage);
      let text = result.response.text();
      let clearText = text.replace(/[#*]/g, '');
      setData(clearText);
    }catch (error) {
      console.error('Erro ao buscar dados da IA', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mainBoot(isSent);
    setUserAsk(isSent);
    setIsSent("");
  };

  const handleInputChange = (event) => {
    setIsSent(event.target.value); 
  };

  const TypewriterEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
  
    useEffect(() => {
      let index = 0;
  
      const intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);
  
      return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    }, [text, speed]);
  
    return <div>{displayedText}</div>;
  };
  const speed = 20;
  if (loading) {
    
    return (
        <HomeContainer>
          <Main>
              <Title>Este é um atendimento automatizado com IA, pronto para te ajudar rapidamente! Tenho várias dicas para {userBusiness.negocio}. Em que posso te ajudar?</Title>
              <Form onSubmit={handleSubmit}>
                <UserText
                    value={isSent}
                    onChange={handleInputChange}
                    placeholder="Digite sua mensagem aqui..."
                  />
                  <br/>
                  <MainButton type="submit">Enviar</MainButton>
                </Form>
            </Main>
      </HomeContainer>
    )
  }
  
  return (
    
    <HomeContainer>
        <Main>
            <TextContainer>
              <h1>{userAsk}</h1>
              <div>{data}</div>
            </TextContainer>
            <form onSubmit={handleSubmit}>
              <UserText
                  value={isSent}
                  onChange={handleInputChange}
                  placeholder="Digite sua mensagem aqui..."
                />
                <br/>
                <MainButton type="submit">Enviar</MainButton>
              </form>
          </Main>
    </HomeContainer>
  );
}