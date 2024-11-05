import styled from 'styled-components';
import { useState, useEffect } from 'react';
import materialData from "../../data/materiais-data.json"
import userData from "../../data/shop-data.json";
import deleteIcon from "../../images/delete.png"
import editIcon from "../../images/editar.png"
import sendIcon from "../../images/enviar.png"
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #ffffff;
  text-align: center;

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
    padding: 15px;
    margin-top:15vh;
    img {
      width: 5vw;
      height: 5vw;
    }
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
    width: 100%;
    margin-left: 0;
    padding: 15px;
    h2 {
      font-size: 1em;
      margin-left: 1vh;
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
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin-top: 12vh;
  margin-bottom: 38vh;

  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-top: 5vh;
    margin-bottom: 15px;
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

`;

const TdCenter = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #555555;

`;

const TableLimit = styled.div`
  height: 50vh;
  overflow-y: auto;
  max-width: 100vw;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: auto;
    max-width: 100%;
  }
`;

const MainButtonAdd = styled.button`
  bottom: 10px;
  background-color: #050a30;
  color: #fff;
  border: none;
  border-radius: 25px;
  margin-right: 10vw;
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

const DivButton = styled.div`
  flex-direction: column;
  color: white;
  items-align: center;
  text-align: left;
  margin-left: 25vw;
  img {
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 90px;
    margin-left: 0vw;
  }
`;


export default function UserMaterials () {
  const [items, setItems] = useState([]);
  const [itemsUser, setItemsUser] = useState([]);
  const [editMaterial, setEditMaterial] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [newItem, setNewItem] = useState({
    categoria: '',
    material: '',
    quantidade_disponivel: 0,
    codigo: ''
  });
  const options = { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' };
  const dataBrasil = new Intl.DateTimeFormat('pt-BR', options).format(new Date());
  let category = JSON.parse(localStorage.getItem('cacheCategory'));
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('itemsUser')) || materialData;
    setItems(storedItems);

    const storedItemsUser = JSON.parse(localStorage.getItem('items')) || userData;
    setItemsUser(storedItemsUser);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleEdit = (item) => {
    setEditMaterial(true);
    item.data = dataBrasil;
    setEditItem(item);
  };

  const handleUpdate = () => {
    let updatedItem = items.map(item => item.codigo === editItem.codigo ? editItem : item);
    setItems(items.map(item => item.codigo === editItem.codigo ? editItem : item));
    setEditItem(null);
    localStorage.setItem('itemsUser', JSON.stringify(updatedItem));
    setEditMaterial(false);
  };

  const handleDelete = (codigo) => {
    let withnotItem = items.filter(item => item.codigo !== codigo);
    setItems(items.filter(item => item.codigo !== codigo));
    localStorage.setItem('itemsUser', JSON.stringify(withnotItem));
  };

  const handleSend = (item) => {
    let addedItens = [...itemsUser, item];
    localStorage.setItem('items', JSON.stringify(addedItens));
    handleDelete(item.codigo);
    alert("Item enviado para compras!");
  };

  if (editMaterial){
    let foundItem = localStorage.getItem('categorias');
    let item = (JSON.parse(localStorage.getItem('categorias')));
    if(foundItem){
      return(
        <Header>
        <h2>Editar Material</h2>
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
          <select
            name="categoria"
            value={editItem ? editItem.categoria : newItem.categoria} // Corrigido: Vinculando o valor selecionado ao estado
            onChange={e => editItem ? setEditItem({ ...editItem, categoria: e.target.value }) : handleInputChange(e)}
          >
            <option value="">Selecione uma categoria</option>
            {item.map(i => (
              <option key={i.categoria} value={i.categoria}>{i.categoria}</option> // Corrigido: valor correto de cada categoria
            ))}
          </select>
          <MainButton onClick={handleUpdate}>Atualizar</MainButton>
        </Header>
      )
    } else {
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
          <h4>Você ainda não possui uma categoria cadastrada</h4>
          <h4><Link to="../estoque/categorias" style={{textDecoration: "none"}}>Cadastrar agora</Link></h4>
          <MainButton onClick={handleUpdate}>Atualizar</MainButton>
        </Header>
      )
    }
    
  } else {
    let copyStoredItems = [...items];
    let itemFilter = copyStoredItems.filter(i => {
      return i.categoria === category[0].categoria;
    });
    if(itemFilter.length === 0){
      return(
        <Container>
            <h1>ESTOQUE DE MATERIAIS</h1>
            <Title>Você não possui nenhum produto adicionado no estoque.</Title>
            <Link to="../materiais/adicionar"><MainButton>Adicionar</MainButton></Link>
        </Container>
      )
    }
    const filteredData = itemFilter.filter((item) => {
      return (
        item.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.categoria.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    return (
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
              <Th>MATERIAL</Th>
              <Th>QUANTIDADE DISPONIVEL</Th>
              <Th>CÓDIGO</Th>
              <Th>ATUALIZAÇÃO</Th>
              <Th>AÇÕES</Th>
            </tr>
          </Thead>
          <tbody>
            {filteredData.map(item => (
                <tr key={item.codigo}>
                  <Td>
                    {item.material}</Td><TdCenter>{item.quantidade_disponivel}</TdCenter> <Td>{item.codigo}</Td><TdCenter>{item.data}</TdCenter>
                    <TdCenter>
                    <ButtonIcon onClick={() => handleSend(item)}><img src={sendIcon} alt="enviar" title='Enviar para compras'/></ButtonIcon>
                      <ButtonIcon onClick={() => handleEdit(item)} title='Editar'><img src={editIcon} alt="editar"/></ButtonIcon>
                      <ButtonIcon onClick={() => handleDelete(item.codigo)} title='Apagar'><img src={deleteIcon} alt="deletar"/></ButtonIcon>
                    </TdCenter>
                </tr>
          ))}
          </tbody>
        </Table>
        </TableLimit>
        <DivButton>
          <Link to="../materiais/adicionar"><MainButtonAdd>Adicionar</MainButtonAdd></Link>
          <Link to="../compras/relatorios"><MainButtonAdd>Relatório</MainButtonAdd></Link>
        </DivButton>
      </Container>
    );
  }
};
