import React, { useState } from 'react';
import styled from "styled-components"
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyDj-P5kJUhpevSXJpWpCRHL0ZHoWMsXRhY");
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

const Text = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
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
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 15px
`;

async function mainBoot(userMessage) {
  try{
    const result = await model.generateContent(userMessage);
    console.log(result.response.text());
    return result.response.text();

  }catch (error) {
    console.error("Erro:", error);
    return "Erro ao enviar a mensagem";
  }
}

export default function BootAssistent () {
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [bootMessage, setBootMessage] = useState('');
  let vetorMessage = [];

  const handleSubmit = (event) => {
    event.preventDefault();
    setBootMessage(mainBoot(message));
    
    vetorMessage[0] =  bootMessage;
    setIsSent(true);
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
    setIsSent(false); 
  };
  
  return (
    <HomeContainer>
        <Main>
            <Title>Em que posso te ajudar?</Title>
            <form onSubmit={handleSubmit}>
              <UserText
                  value={message}
                  onChange={handleInputChange}
                  placeholder="Digite sua mensagem aqui..."
                />
                <br/>
                <MainButton type="submit">Enviar</MainButton>
              </form>
        
              {isSent && <Text>{vetorMessage[0]}</Text>}
          </Main>
    </HomeContainer>
  )
}