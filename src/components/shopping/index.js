import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import materialData from "../../data/shop-data.json"
import userData from "../../data/materiais-data.json"
import dataLogin from "../../data/user-login.json"
const genAI = new GoogleGenerativeAI(dataLogin[0].secret);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Container = styled.div`
  max-width: 900px;
  text-align: center;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #ffffff;
`;

const Header = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 15px;
  color: white;
  margin-left: 25vw;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  input {
    width: 90%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  button {
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
`;

const Table = styled.table`
  width: 900px;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #001151;
`;

const Th = styled.th`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #555555;
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #555555;

`;

const TdCenter = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #555555;

`;

function StockShop () {
  const [items, setItems] = useState([]);
  const [looding, setlooding] = useState(false);
  const [addShopping, setaddShopping] = useState(false);
  const [itemsUser, setItemsUser] = useState([]);
  const options = { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' };
  const dataBrasil = new Intl.DateTimeFormat('pt-BR', options).format(new Date());
  const [newItem, setNewItem] = useState({
    categoria: '',
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
      setItems([...items, newItem]);
      newItem.codigo = clearText;
      let addedItens = [...items, newItem];
      localStorage.setItem('items', JSON.stringify(addedItens));
    }catch (error) {
      console.error('Erro ao buscar dados da IA', error);
    } finally {
      setlooding(false);
      setaddShopping(false);
    }
  };

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || materialData;
    setItems(storedItems);

    const storedItemsUser = JSON.parse(localStorage.getItem('itemsUser')) || userData;
    setItemsUser(storedItemsUser);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAdd = () => {
    setlooding(true);
    mainBoot(newItem.material);    
    setNewItem({
      categoria: '',
      material: '',
      quantidade_disponivel: 0,
      codigo: '',
      data: dataBrasil
    });
  };

  const handleDelete = (codigo) => {
    let withnotItem = items.filter(item => item.codigo !== codigo);
    setItems(items.filter(item => item.codigo !== codigo));
    localStorage.setItem('items', JSON.stringify(withnotItem));
  };

  const handleSend = (item) => {
    let addedItens = [...itemsUser, item];
    localStorage.setItem('itemsUser', JSON.stringify(addedItens));
    handleDelete(item.codigo);
    alert("Item enviado para o estoque!");
  };

  const handleSwitch = () => {
    setaddShopping(true);
  }

  if (addShopping){
    if (looding){
      return(
        <Header>
          <h1>COMPRAS</h1>
          <h2>Produto Adicionado!</h2> 
          <h3>Gerando codigo automático.</h3>
        </Header>
      )
    } else{
      return (
        <Header>
          <h2>Adicionar Item</h2>
          <input
            type="text"
            name="material"
            placeholder="Material"
            value={newItem.material}
            onChange={e => handleInputChange(e)}
          />
          <input
            type="number"
            name="quantidade_disponivel"
            placeholder="Quantidade Disponível"
            value={newItem.quantidade_disponivel}
            onChange={e => handleInputChange(e)}
          />
          <button onClick={handleAdd}>Adicionar</button>
        </Header>
      );
    } 
    
  } else {
    return(
      <Container>
        <h1>COMPRAS</h1>
        <Table>
          <Thead>
            <tr>
              <Th>PEDIDO</Th>
              <Th>QUANTIDADE</Th>
              <Th>CODIGO</Th>
              <Th>DATA</Th>
            </tr>
          </Thead>
          <tbody>
            {items.map(item => (
                <tr key={item.codigo}>
                  <Td>
                    {item.material}</Td><TdCenter>{item.quantidade_disponivel}</TdCenter> <Td>{item.codigo}</Td><Td>{item.data}</Td>
                    <button onClick={() => handleDelete(item.codigo)}>Deletar</button>
                    <button onClick={() => handleSend(item)}>Enviar</button>
                </tr>
              ))}
          </tbody>
        </Table>
        <Header>
          <button onClick={handleSwitch}>Adicionar</button>
        </Header>
      </Container>
    )
  }
  
};

export default StockShop;
