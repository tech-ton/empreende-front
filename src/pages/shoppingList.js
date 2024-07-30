import styled from 'styled-components';
import backicon from "../images/seta-voltar.png"
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



function ShoppingList () {
  return (
    <Container>
      <Header>
        <Link to="/estoque"><BackIcon src={backicon} alt="voltar"/></Link>
        <Icons>
          <LastPurchase>ÚLTIMO PEDIDO REALIZADO EM<br />11/06/2024</LastPurchase>
        </Icons>
      </Header>
      <Table>
        <Thead>
          <tr>
            <Th>MATERIAL</Th>
            <Th>QUANTIDADE SOLICITADA</Th>
            <Th>DATA PEDIDO</Th>
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
        </tbody>
      </Table>
      <Footer/>
    </Container>
  );
};

export default ShoppingList;
