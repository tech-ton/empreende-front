import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useNavigate } from 'react-router-dom';
import materialData from "../../data/shop-data.json";
import dataLogin from "../../data/user-login.json";
import barrasIcon from "../../images/barras-codigo.png"
const genAI = new GoogleGenerativeAI(dataLogin[0].secret);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Header = styled.div`
  width: 400px;
  background-color: rgba(24, 34, 53, 0.9);
  margin-top: 10vh;
  padding: 20px;
  border-radius: 15px;
  color: white;
  margin-left: 30vw;
  items-align: center;
  text-align: center;

  h2 {
    text-align: left;
    margin-bottom: 1vh;
    margin-left: 3vh;
    font-size: 1.1em;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  input, select {
    width: 90%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 15px;
    color: #fff;
    background-color: #050a30;
    border: 1px solid #3E5066;
    border-radius: 15px;
  }

  @media (max-width: 768px) {
    width: 94%;
    margin-left: 0;
    padding: 15px;

    h2 {
      font-size: 1em;
      margin-left: 1vh;
      
    }
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

const DivCod = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  items-align: center;
  text-align: left;
  margin-left: 25vw;
  img {
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    margin-top: 90px;
  }
`;

export default function AddMaterials () {
    const [items, setItems] = useState([]);
    const [looding, setlooding] = useState(false);
    const navigate = useNavigate();
    const options = { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' };
    const dataBrasil = new Intl.DateTimeFormat('pt-BR', options).format(new Date());
    let category = JSON.parse(localStorage.getItem('cacheCategory'));
    const [newItem, setNewItem] = useState({
        categoria: category[0].categoria,
        material: '',
        quantidade_disponivel: 0,
        codigo: "",
        data: dataBrasil
    });

    async function mainBoot(userMessage) {
        try{
            const result = await model.generateContent("quero que gere uma palavra com o padrão de tres letras ou tres numeros  iniciais da palavra a cada espaçamento e separados por hifen. somente a palavra sem nenhum texto a mais. palavra a seguir: "+userMessage);
            let text = result.response.text();
            let clearText = text.replace(/[#*]/g, '');
            console.log(clearText);
            setItems([...items, newItem]);
            newItem.codigo = clearText;
            let addedItens = [...items, newItem];
            localStorage.setItem('itemsUser', JSON.stringify(addedItens));
        }catch (error) {
            console.error('Erro ao buscar dados da IA', error);
        }finally {
            navigate("/estoque/materiais");
        }
    };

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('itemsUser')) || materialData;
        setItems(storedItems);
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleAdd = () => {
        mainBoot(newItem.material);    
        setNewItem({
            categoria: category[0].categoria,
            material: '',
            quantidade_disponivel: 0,
            codigo: '',
            data: dataBrasil
        });
        setlooding(true);
    };

    const handleAddWithnotAutoCode = () => {
        setItems([...items, newItem]);
        let addedItens = [...items, newItem];
        localStorage.setItem('itemsUser', JSON.stringify(addedItens));    
        setNewItem({
            categoria: category[0].categoria,
            material: '',
            quantidade_disponivel: 0,
            codigo: '',
            data: dataBrasil
        });
        navigate("/estoque/materiais");
      };

    let foundActivation = localStorage.getItem('BootDesactivation');
    if (looding){
        return(
            <Header>
                <h1>COMPRAS</h1>
                <h2>Produto Adicionado!</h2> 
                <h2>Gerando codigo automático.</h2>
            </Header>
        )
    } else {
        if(!foundActivation) {
            return (
                <div>
                    <Header>
                        <DivCod>
                            <Link to="../codificacao"><img src={barrasIcon} alt='codigo-barras' width='70px'/></Link>
                            Codificação
                        </DivCod>
                        <h2>Material</h2>
                        <input
                            type="text"
                            name="material"
                            placeholder="Material"
                            value={newItem.material}
                            onChange={e => handleInputChange(e)}
                        />
                        <h2>Quantidade</h2>
                        <input
                            type="number"
                            name="quantidade_disponivel"
                            placeholder="Quantidade Disponível"
                            value={newItem.quantidade_disponivel}
                            onChange={e => handleInputChange(e)}
                        />
                        <MainButton onClick={handleAdd}>Adicionar</MainButton>
                    </Header>
                </div>
            );
            } else {
                return (
                    <div>
                    <Header>
                        <DivCod>
                            <Link to="../codificacao"><img src={barrasIcon} alt='codigo-barras' width='70px'/></Link>
                            Codificação
                        </DivCod>
                        <h2>Codigo</h2>
                        <input
                            type="text"
                            name="codigo"
                            placeholder="Codigo"
                            value={newItem.codigo}
                            onChange={e => handleInputChange(e)}
                        />
                        <h2>Material</h2>
                        <input
                            type="text"
                            name="material"
                            placeholder="Material"
                            value={newItem.material}
                            onChange={e => handleInputChange(e)}
                        />
                        <h2>Quantidade</h2>
                        <input
                            type="number"
                            name="quantidade_disponivel"
                            placeholder="Quantidade Disponível"
                            value={newItem.quantidade_disponivel}
                            onChange={e => handleInputChange(e)}
                        />
                        <MainButton onClick={handleAddWithnotAutoCode}>Adicionar</MainButton>
                    </Header>
                    </div>
                );
            }
    }
}