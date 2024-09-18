import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import materialData from "../data/materiais-data.json";

const Container = styled.div`
  max-width: 650px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #ffffff;
`;

const StockTests = () => {
  const [items, setItems] = useState([]);
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
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAdd = () => {
    setItems([...items, newItem]);
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('items', JSON.stringify(items));
    setNewItem({
      categoria: '',
      material: '',
      quantidade_disponivel: 0,
      codigo: ''
    });
  };

  const handleEdit = (item) => {
    setEditItem(item);
    localStorage.setItem('items', JSON.stringify(item));
  };

  const handleUpdate = () => {
    setItems(items.map(item => item.codigo === editItem.codigo ? editItem : item));
    setEditItem(null);
    localStorage.setItem('items', JSON.stringify(items));
  };

  const handleDelete = (codigo) => {
    let withnotItem = items.filter(item => item.codigo !== codigo);
    localStorage.setItem('items', JSON.stringify(withnotItem));
  };

  return (
    <Container>
      <h1>CRUD com LocalStorage</h1>
      
      <div>
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
      </div>

      <div>
        <h2>Lista de Itens</h2>
        <ul>
          {items.map(item => (
            <li key={item.codigo}>
              {item.categoria} - {item.material} - {item.quantidade_disponivel} - {item.codigo}
              <button onClick={() => handleEdit(item)}>Editar</button>
              <button onClick={() => handleDelete(item.codigo)}>Deletar</button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default StockTests;
