import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
//import { Link } from "react-router-dom";
import materialData from "../../data/shop-data.json"
import userData from "../../data/materiais-data.json"

const Container = styled.div`
    max-width: 650px;
    margin: auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    color: #ffffff;
`;

const Header = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    max-width: 100px;
    padding: 5px;
    margin-bottom: 15px;
    margin-left: 25px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  button {
    padding: 10px 20px;
    margin-top: 10px;
    margin-left: 15px;
    border: none;
    border-radius: 5px;
    background-color: #28a745;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #218838;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

`;

const Thead = styled.thead`
  background-color: #001151;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #555555
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #555555
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;



function StockShop () {
  const [items, setItems] = useState([]);
  const [itemsUser, setItemsUser] = useState([]);
  const [newItem, setNewItem] = useState({
    categoria: '',
    material: '',
    quantidade_disponivel: 0,
    codigo: ''
  });
  const [editItem, setEditItem] = useState(null);

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
    setItems([...items, newItem]);
    let addedItens = [...items, newItem];
    localStorage.setItem('items', JSON.stringify(addedItens));
    setNewItem({
      categoria: '',
      material: '',
      quantidade_disponivel: 0,
      codigo: ''
    });
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleUpdate = () => {
    let updatedItem = items.map(item => item.codigo === editItem.codigo ? editItem : item);
    setItems(items.map(item => item.codigo === editItem.codigo ? editItem : item));
    setEditItem(null);
    localStorage.setItem('items', JSON.stringify(updatedItem));
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

  return (
    <Container>
      <Header>
        <h2>{editItem ? 'Editar Item' : 'Adicionar Item'}</h2>
        <input
          type="text"
          name="categoria"
          placeholder="Categoria"
          value={editItem ? editItem.categoria : newItem.categoria}
          onChange={e => editItem ? setEditItem({ ...editItem, categoria: e.target.value }) : handleInputChange(e)}
        />
        <input
          type="text"
          name="material"
          placeholder="Material"
          value={editItem ? editItem.material : newItem.material}
          onChange={e => editItem ? setEditItem({ ...editItem, material: e.target.value }) : handleInputChange(e)}
        />
        <input
          type="number"
          name="quantidade_disponivel"
          placeholder="Quantidade Disponível"
          value={editItem ? editItem.quantidade_disponivel : newItem.quantidade_disponivel}
          onChange={e => editItem ? setEditItem({ ...editItem, quantidade_disponivel: Number(e.target.value) }) : handleInputChange(e)}
        />
        <input
          type="text"
          name="codigo"
          placeholder="Código"
          value={editItem ? editItem.codigo : newItem.codigo}
          onChange={e => editItem ? setEditItem({ ...editItem, codigo: e.target.value }) : handleInputChange(e)}
        />
        {editItem ? (
          <button onClick={handleUpdate}>Atualizar</button>
        ) : (
          <button onClick={handleAdd}>Adicionar</button>
        )}
      </Header>
      <Table>
        <Thead>
          <tr>
            <Th>PEDIDO</Th>
            <Th>QUANTIDADE</Th>
            <Th>CODIGO</Th>
          </tr>
        </Thead>
        <tbody>
          {items.map(item => (
              <tr key={item.codigo}>
                <Td>
                  {item.material}</Td><Td>{item.quantidade_disponivel}</Td> <Td>{item.codigo}</Td> 
                  <button onClick={() => handleEdit(item)}>Editar</button>
                  <button onClick={() => handleDelete(item.codigo)}>Deletar</button>
                  <button onClick={() => handleSend(item)}>Enviar</button>
              </tr>
            ))}
        </tbody>
      </Table>
      <Footer/>
    </Container>
  );
};

export default StockShop;
