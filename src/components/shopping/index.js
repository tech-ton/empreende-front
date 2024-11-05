import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import materialData from "../../data/shop-data.json";
import userData from "../../data/materiais-data.json";
import dataLogin from "../../data/user-login.json";
import deleteIcon from "../../images/delete.png";
import sendIcon from "../../images/enviar.png"
import barrasIcon from "../../images/barras-codigo.png"
import { Link } from 'react-router-dom';
const genAI = new GoogleGenerativeAI(dataLogin[0].secret);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Container = styled.div`
  max-width: 900px;
  text-align: center;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #ffffff;

  input, select {
    width: 70%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 15px;
    color: #fff;
    margin-right: 20px;
    background-color: #050a30;
    border: 1px solid #3E5066;
    border-radius: 15px;
  }

  img {
    background-color: transparent;
    width: 2vw;
    height: 2vw;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px;
    margin-top: 15vh;
    img {
      width: 5vw;
      height: 5vw;
    }
    
  }
`;

const ButtonIcon = styled.button`
  background-color: transparent;
  margin-left: 5px;
  margin-top: 2px;

  &:hover {
    background-color: #090a90;
  }

  @media (max-width: 768px) {
    margin-left: 2px;
    margin-top: 1px;
  }
`;

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

const TableLimit = styled.div`
  height: 50vh;
  overflow-y: auto;
  max-width: 100vw;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 35vh;
    max-width: 100%;
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

const Title = styled.h1`
  font-size: 1.5em;
  margin-top: 12vh;
  margin-bottom: 38vh;

  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 15px;
    margin-top: 35vh;
  }
`;

const Table = styled.table`
  width: 900px;
  border-collapse: collapse;
  background-color: rgba(24, 34, 53, 0.9);

  @media (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const TdCenter = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #555555;

  @media (max-width: 768px) {
    padding: 8px;
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

function StockShop () {
  const [items, setItems] = useState([]);
  const [looding, setlooding] = useState(false);
  const [addShopping, setaddShopping] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsUser, setItemsUser] = useState([]);
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
      categoria: category[0].categoria,
      material: '',
      quantidade_disponivel: 0,
      codigo: '',
      data: dataBrasil
    });
  };

  const handleAddWithnotAutoCode = () => {
    setlooding(false);
    setaddShopping(false);
    setItems([...items, newItem]);
    let addedItens = [...items, newItem];
    localStorage.setItem('items', JSON.stringify(addedItens));    
    setNewItem({
      categoria: category[0].categoria,
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
            <h2>Gerando codigo automático.</h2>
          </Header>
        )
      } else{
        let foundActivation = localStorage.getItem('BootDesactivation');
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
      
    } else {
    let copyStoredItems = [...items];
    let itemFilter = copyStoredItems.filter(i => {
      return i.categoria === category[0].categoria;
    });
      if(itemFilter.length === 0){
        return(
          <Container>
              <h1>COMPRAS</h1>
              <Title>Você não possui nenhum produto cadastrado na lista de compras</Title>
              <MainButton onClick={handleSwitch}>Adicionar</MainButton>
          </Container>
        )
      }
      const filteredData = itemFilter.filter((item) => {
        return (
          item.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.categoria.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      return(
        <Container>
          <input
            type="text"
            name="pesquisa"
            placeholder="Pesquisa"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <TableLimit>
          <Table>
            <Thead>
              <tr>
                <Th>PEDIDO</Th>
                <Th>QUANTIDADE</Th>
                <Th>CODIGO</Th>
                <Th>DATA</Th>
                <Th>AÇÕES</Th>
              </tr>
            </Thead>
            <tbody>
              {filteredData.map(item => (
                  <tr key={item.codigo}>
                    <Td>
                      {item.material}</Td><TdCenter>{item.quantidade_disponivel}</TdCenter> <TdCenter>{item.codigo}</TdCenter><TdCenter>{item.data}</TdCenter>
                      <TdCenter>
                      <ButtonIcon onClick={() => handleSend(item)}><img src={sendIcon} alt="enviar" title='Enviar para o estoque'/></ButtonIcon>
                        <ButtonIcon onClick={() => handleDelete(item.codigo)} title='Apagar'><img src={deleteIcon} alt="deletar"/></ButtonIcon>
                      </TdCenter>
                  </tr>
                ))}
            </tbody>
          </Table>
          </TableLimit>
          <MainButton onClick={handleSwitch}>Adicionar</MainButton>
        </Container>
      )
    }
};

export default StockShop;
