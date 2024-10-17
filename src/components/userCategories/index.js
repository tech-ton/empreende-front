import styled from "styled-components"
import { useState } from 'react';


const HomeContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const Main = styled.main`
    display: flex;
    align-items: center;
    height: 50vh;
    overflow-y: auto;
    max-width: 70vw;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 15px;
  }
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
`;

const Button = styled.button`
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
`

const MenuItem = styled.button`
    display: flex;
    align-items: center;
    padding: 25px;
    gap: 10px;
    border: 1px solid #3E5066;
    border-radius: 5px;
    background-color: #182235;
    color: #ffffff;
    width: 150px;
    height: 15px;
    margin: 10px;
    
    &:hover {
        transform: scale(1.1);
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

export default function UserCategories () {
    const [allowCategory, setAllowCategory] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [newItem, setNewItem] = useState({
        categoria: ''
      });

    const categories = localStorage.getItem('categorias');
  

    const handleSwitch = () => {
        setAllowCategory(true);
    }

    const handleSwitchCategory = (i) => {
        setCategoryFilter(false);
        setSelectedCategory(i.target.value);
        
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleAdd = () => {
        if(categories){
            let item = (JSON.parse(localStorage.getItem('categorias')))
            let addedItens = [...item, newItem];
            localStorage.setItem('categorias', JSON.stringify(addedItens));
        } else {
            let addedItens = [newItem];
            localStorage.setItem('categorias', JSON.stringify(addedItens));
        }
        setNewItem({
          categoria: ''
        });
        setAllowCategory(false);
      };

    if(allowCategory) {
        return (
            <Header>
              <h2>Adicionar Categoria</h2>
              <input
                type="text"
                name="categoria"
                placeholder="Categoria"
                value={newItem.categoria}
                onChange={e => handleInputChange(e)}
              />
              <Button onClick={handleAdd}>Adicionar</Button>
            </Header>
          );
    } else {
        if(categories){
            let item = (JSON.parse(localStorage.getItem('categorias')))
            if(categoryFilter){
                return(
                    <HomeContainer>
                        <Main>
                            {item.map(i => (
                                <MenuItem onClick={handleSwitchCategory} value={i.categoria}>{i.categoria}</MenuItem>
                            ))}
                        </Main>
                        <Button onClick={handleSwitch}>Cadastrar</Button>
                    </HomeContainer>
                );
            } else {
                let item = (JSON.parse(localStorage.getItem('itemsUser')));
                let itemFilter = item.filter(i => {
                    return i.categoria === selectedCategory;
                });
                return(
                    <HomeContainer>
                        <Table>
                            <Thead>
                                <tr>
                                    <Th>MATERIAL</Th>
                                    <Th>QUANTIDADE DISPONIVEL</Th>
                                    <Th>CÓDIGO</Th>
                                    <Th>ATUALIZAÇÃO</Th>
                                </tr>
                            </Thead>
                            <tbody>
                                {itemFilter.map(item => (
                                    <tr key={item.codigo}>
                                        <Td>
                                            {item.material}</Td><TdCenter>{item.quantidade_disponivel}</TdCenter> <Td>{item.codigo}</Td><TdCenter>{item.data}</TdCenter>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Button onClick={handleSwitch}>Cadastrar</Button>
                    </HomeContainer>
                );
            }
            
        } else{
            return(
                <HomeContainer>
                    <Title>Você não possui nenhuma categoria cadastrada no momento</Title>
                    <Button onClick={handleSwitch}>Cadastrar</Button>
                </HomeContainer>
            )
        }
    }
}