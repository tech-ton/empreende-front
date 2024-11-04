import styled from 'styled-components';
import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import dataLogin from "../../data/user-login.json"
const genAI = new GoogleGenerativeAI(dataLogin[0].secret);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const HomeContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  background-color: rgba(24, 34, 53, 0.7);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 5vw;
  max-width: 90vw;

  @media (max-width: 768px) {
    padding: 20px;

    h2 {
      font-size: 1.1em;
    }
  }
`;

const TextContainer = styled.div`
    width: 900px;
    height: 60vh;
    overflow-y: auto;
    margin-bottom: 20px;
`; 

const Title = styled.h1`
  font-size: 2em;

  @media (max-width: 768px) {
    margin-top: 60px;
    font-size: 1.1em;
    margin-bottom: 15px;
  }
`;

const TextPre = styled.pre`
  font-family: Arial, sans-serif;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;

  @media (max-width: 768px) {
      font-size: 0.9em;
  }
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 25px;
    gap: 10px;
    border: 1px solid #3E5066;
    border-radius: 5px;
    background-color: #050a30;
    color: #ffffff;
    width: 200px;
    margin: 10px;
    
    &:hover {
        transform: scale(1.1);
    }
`;

function IaReports () {
    const [loading, setLoading] = useState(true);
    const [loadingIa, setLoadingIa] = useState(true);
    const [boot, setBoot] = useState('');

    async function mainBoot(userMessage) {
        const stock = localStorage.getItem("itemsUser");
        let category = JSON.parse(localStorage.getItem('cacheCategory'));
        const storedItems = JSON.parse(stock);
        let itemFilter = storedItems.filter(i => {
            return i.categoria === category[0].categoria;
        });

        try{
            const result = await model.generateContent("Quero que você gere um relatorio que auxilie no empreendedorismo "+userMessage+" com os meus dados a seguir sem levar em conta a coluna de codigo: "+JSON.stringify(itemFilter)+". Caso não houver dados retorne alumas dicas");
            let text = result.response.text();
            let clearText = text.replace(/[#*]/g, '');
            setBoot(clearText);
        } catch (error) {
            console.error('Erro ao buscar dados da IA', error);
        } finally {
            setLoadingIa(false);
        }
      };

    const handleMonthly = (event) => {
        event.preventDefault();
        mainBoot("mensal");
        setLoading(false);
        setLoadingIa(true);
    };

    const handleWeekly = (event) => {
        event.preventDefault();
        mainBoot("de sete dias");
        setLoading(false);
        setLoadingIa(true);
    };

    const handleSwitch = (event) => {
        event.preventDefault();
        setLoading(true);
    };

    if(loading){
        return (
            <HomeContainer>
                <Title>
                    PARA AUXILIAR NO SEU NEGÓCIO, PODEMOS
                    GERAR UM RELATÓRIO DO ESTOQUE DOS SEUS MATERIAIS COM IA.
                </Title>
                <h2>
                    AQUI VOCÊ PODE GERAR UM RELATÓRIO MENSAL
                    OU SEMANAL DO SEU NEGÓCIO QUANDO QUISER!
                </h2>
                <h2>
                    Deseja gerar um relatório do seu estoque? 
                    Após escolher mensal ou semanal o relatório será gerado automaticamente, 
                    basta clicar o botão abaixo:
                </h2>
                <Button type="submit" onClick={handleMonthly}>Gerar Relatório Mensal</Button>
                <Button type="submit" onClick={handleWeekly}>Gerar Relatório Semanal</Button>
            </HomeContainer>
        );
    } else {
        if(loadingIa){
            return(
                <HomeContainer>
                    <br/><br/><br/><br/><br/><br/>
                    <Title>
                        Gerando Relatório com IA. Aguarde um instante.
                    </Title>
                </HomeContainer>
            )
        } else {
            return (
                <HomeContainer>
                    <TextContainer>
                        <TextPre>{boot}</TextPre>
                    </TextContainer>
                    <Button type="submit" onClick={handleSwitch}>voltar</Button>
                </HomeContainer>
            );
        }
    
    }
};

export default IaReports;