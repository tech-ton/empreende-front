import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 650px;
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

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddButton = styled.button`
  background-color: #001151;
  color: #ffffff;
  border: none;
  padding: 10px;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: #0050b3;
  }
`;

const Tbody = styled.tbody`
  
`;

export default function UserMaterials () {
  return (
    <Container>
      <Header>
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
            <Th>CÓDIGO</Th>
          </tr>
        </Thead>
        <Tbody>
          <tr>
            <Td>CALÇA SKINNY TAM 36</Td>
            <TdCenter>10</TdCenter>
            <TdCenter>11506</TdCenter>
          </tr>
          <tr>
            <Td>CALÇA SKINNY TAM 38</Td>
            <TdCenter>5</TdCenter>
            <TdCenter>11406</TdCenter>
          </tr>
          <tr>
            <Td>CALÇA SKINNY TAM 40</Td>
            <TdCenter>15</TdCenter>
            <TdCenter>05006</TdCenter>
          </tr>
        </Tbody>
      </Table>
      <Footer>
        <AddButton>+ ADD NA LISTA DE COMPRAS</AddButton>
        <Link to="/solicitarmaterial"><AddButton>+ ADD MATERIAL</AddButton></Link>
      </Footer>
    </Container>
  );
};
