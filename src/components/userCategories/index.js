import styled from "styled-components"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


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
    margin-top: 20vh; 
  }
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  height: 50vh;
  overflow-y: auto;
  max-width: 70vw;
  flex-wrap: wrap;
  margin-bottom: 3vh;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 15hv; 
    max-width: 100%; 
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin-top: 10vh;
  margin-bottom: 30vh;

  @media (max-width: 768px) {
    font-size: 1.2em; 
    margin-bottom: 15px;
    margin-top: 5vh; 
  }
`;

const Header = styled.div`
  width: 400px;
  background-color: rgba(24, 34, 53, 0.9);
  margin-top: 20vh;
  padding: 20px;
  border-radius: 15px;
  color: white;
  margin-left: 30vw;
  items-align: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 80%; 
    margin-left: 5vw; 
    margin-top: 35vh; 
  }

  h2 {
    text-align: left;
    margin-bottom: 1vh;
    margin-left: 3vh;
    font-size: 1.1em;

    @media (max-width: 768px) {
      text-align: center;
      margin-left: 0;
    }
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1.3em; 
    }
  }

  input {
    width: 90%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 15px;
    color: #fff;
    background-color: #050a30;
    border: 1px solid #3E5066;
    border-radius: 15px;

    @media (max-width: 768px) {
      width: 100%; 
    }
  }
`;

const Button = styled.button`
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

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  padding: 25px;
  gap: 10px;
  border: 1px solid #3E5066;
  border-radius: 5px;
  background-color: #182235;
  color: #ffffff;
  width: 170px;
  height: 75px;
  margin: 10px;
  font-size: 1em;

  @media (max-width: 768px) {
    padding: 15px; 
    width: 120px; 
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const DivLink = styled.div`
  display: flex;
  gap: 70px;
`;


export default function UserCategories () {
    const [allowCategory, setAllowCategory] = useState(false);
    const navigate = useNavigate();
    const [newItem, setNewItem] = useState({
        categoria: ''
      });

    const categories = localStorage.getItem('categorias');
  

    const handleSwitch = () => {
        setAllowCategory(true);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleReload = (e) => {
        localStorage.setItem('cacheCategory', JSON.stringify([{categoria: e.target.value}]));
        navigate("../estoque");
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
          return(
            <HomeContainer>
              <Main>
                {item.map(i => (
                  <MenuItem onClick={handleReload} value={i.categoria}>{i.categoria}</MenuItem>
                ))}
              </Main>
              <DivLink>
                <Button onClick={handleSwitch}>Add Categorias</Button>
              </DivLink>
            </HomeContainer>
                );
            } else{
                return(
                  <HomeContainer>
                    <Title>Você não possui nenhuma categoria cadastrada no momento</Title>
                    <Button onClick={handleSwitch}>Add Categorias</Button>
                  </HomeContainer>
                )
              }
          }
}