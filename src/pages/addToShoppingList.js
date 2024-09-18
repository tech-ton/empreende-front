import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #001141;
  color: #ffffff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;

const AddButton = styled.button`
  background-color: #004080;
  color: #ffffff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0050b3;
  }
`;

const AddToShoppingList = () => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add item to shopping list
    console.log({ item, quantity });
    // Reset form fields
    setItem('');
    setQuantity('');
  };

  return (
    <Container>
      <Header>
        <h1>ADICIONAR MATERIAL</h1>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Quantidade"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <AddButton type="submit">ADICIONAR</AddButton>
      </Form>
    </Container>
  );
};

export default AddToShoppingList;