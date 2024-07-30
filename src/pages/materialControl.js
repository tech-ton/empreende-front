import styled from 'styled-components';
import backicon from "../images/seta-voltar.png";
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #ffffff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const BackIcon = styled.img`
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;


const SearchBar = styled.input`
  width: 300px;
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LastPurchase = styled.p`
  margin: 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const Thead = styled.thead`
  background-color: #004080;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #004080;
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
  border: 1px solid #004080;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
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

function Inventory () {
  return (
    <Container>
      <Header>
        <Link to="/estoque"><BackIcon src={backicon} alt="voltar"/></Link>
        <SearchBar type="text" placeholder="CALÇA SKINNY" />
        <Icons>
          <LastPurchase>ÚLTIMA COMPRA REALIZADA EM<br />30/06/2024</LastPurchase>
        </Icons>
      </Header>
      <Table>
        <Thead>
          <tr>
            <Th>MATERIAL</Th>
            <Th>QUANTIDADE DISPONIVEL</Th>
            <Th>ATUALIZAÇÃO</Th>
          </tr>
        </Thead>
        <tbody>
          <tr>
            <Td>CALÇA SKINNY TAM 36</Td>
            <Td>10</Td>
            <Td>11/06</Td>
          </tr>
          <tr>
            <Td>CALÇA SKINNY TAM 38</Td>
            <Td>5</Td>
            <Td>11/06</Td>
          </tr>
          <tr>
            <Td>CALÇA SKINNY TAM 40</Td>
            <Td>15</Td>
            <Td>05/06</Td>
          </tr>
          <tr>
            <Td>CALÇA SKINNY TAM 42</Td>
            <Td>5</Td>
            <Td>24/05</Td>
          </tr>
          <tr>
            <Td>CALÇA SKINNY TAM 44</Td>
            <Td>5</Td>
            <Td>24/05</Td>
          </tr>
        </tbody>
      </Table>
      <Footer>
        <AddButton>+ ADD NA LISTA DE COMPRAS</AddButton>
        <Link to="/solicitarmaterial"><AddButton>+ ADD MATERIAL</AddButton></Link>
      </Footer>
    </Container>
  );
};

export default Inventory;
