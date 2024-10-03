import styled from 'styled-components';
import { useState, useEffect } from 'react';
import materialData from "../../data/materiais-data.json"

const Container = styled.div`
  max-width: 650px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 100%;
  }
`;

const Header = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1.5em;
    }
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

    @media (max-width: 768px) {
      max-width: 100%;
      margin-left: 0;
    }
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

    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
    }
  }

  button:hover {
    background-color: #218838;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const Thead = styled.thead`
  background-color: #001151;
`;

const Th = styled.th`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #555555;

  @media (max-width: 768px) {
    padding: 8px;
  }
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

const Tbody = styled.tbody`
  
`;

export default function UserMaterials () {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    categoria: '',
    material: '',
    quantidade_disponivel: 0,
    codigo: ''
  });
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('itemsUser')) || materialData;
    setItems(storedItems);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAdd = () => {
    setItems([...items, newItem]);
    let addedItens = [...items, newItem];
    localStorage.setItem('itemsUser', JSON.stringify(addedItens));
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
    localStorage.setItem('itemsUser', JSON.stringify(updatedItem));
  };

  const handleDelete = (codigo) => {
    let withnotItem = items.filter(item => item.codigo !== codigo);
    setItems(items.filter(item => item.codigo !== codigo));
    localStorage.setItem('itemsUser', JSON.stringify(withnotItem));
  };

  return (
    <Container>
      <Header>
      <h2>{editItem ? 'Editar Material' : 'Adicionar Material'}</h2>
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
            <Th>MATERIAL</Th>
            <Th>QUANTIDADE DISPONIVEL</Th>
            <Th>CÓDIGO</Th>
          </tr>
        </Thead>
        <Tbody>
          {items.map(item => (
              <tr key={item.codigo}>
                <Td>
                  {item.material}</Td><TdCenter>{item.quantidade_disponivel}</TdCenter> <Td>{item.codigo}</Td> 
                  <button onClick={() => handleEdit(item)}>Editar</button>
                  <button onClick={() => handleDelete(item.codigo)}>Deletar</button>
              </tr>
        ))}
        </Tbody>
      </Table>
    </Container>
  );
};
