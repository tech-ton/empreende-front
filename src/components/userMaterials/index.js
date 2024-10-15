import styled from 'styled-components';
import { useState, useEffect } from 'react';
import materialData from "../../data/materiais-data.json"

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #ffffff;
  text-align: center;
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

  const handleEdit = (item) => {
    setEditItem(item);
    localStorage.setItem('editMaterial', JSON.stringify(item));
  };

  const handleUpdate = () => {
    let updatedItem = items.map(item => item.codigo === editItem.codigo ? editItem : item);
    setItems(items.map(item => item.codigo === editItem.codigo ? editItem : item));
    setEditItem(null);
    localStorage.setItem('itemsUser', JSON.stringify(updatedItem));
    localStorage.removeItem('editMaterial');
  };

  const handleDelete = (codigo) => {
    let withnotItem = items.filter(item => item.codigo !== codigo);
    setItems(items.filter(item => item.codigo !== codigo));
    localStorage.setItem('itemsUser', JSON.stringify(withnotItem));
  };
  const editMaterial = localStorage.getItem('editMaterial');
  if (editMaterial){
    return(
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
        <button onClick={handleUpdate}>Atualizar</button>
      </Header>
    )
  } else {
    return (
      <Container>
        <h1>MATERIAIS</h1>
        <Table>
          <Thead>
            <tr>
              <Th>MATERIAL</Th>
              <Th>QUANTIDADE DISPONIVEL</Th>
              <Th>CÓDIGO</Th>
              <Th>DATA</Th>
            </tr>
          </Thead>
          <tbody>
            {items.map(item => (
                <tr key={item.codigo}>
                  <Td>
                    {item.material}</Td><TdCenter>{item.quantidade_disponivel}</TdCenter> <Td>{item.codigo}</Td><Td>{item.data}</Td>
                    <button onClick={() => handleEdit(item)}>Editar</button>
                    <button onClick={() => handleDelete(item.codigo)}>Deletar</button>
                </tr>
          ))}
          </tbody>
        </Table>
      </Container>
    );
  }
};
