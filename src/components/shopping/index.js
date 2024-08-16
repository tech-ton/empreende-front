import styled from 'styled-components';
import { Link } from "react-router-dom";

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

`;

const Thead = styled.thead`
  background-color: #001151;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #555555
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #555555
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;



function StockShop () {
  return (
    <Container>
      <Header>
        <Icons>
          <LastPurchase>ÚLTIMO PEDIDO REALIZADO EM<br />11/06/2024</LastPurchase>
        </Icons>
      </Header>
      <Table>
        <Thead>
          <tr>
            <Th>PEDIDO</Th>
            <Th>CODIGO</Th>
            <Th>DATA PEDIDO</Th>
          </tr>
        </Thead>
        <tbody>
          <tr>
            <Td><Link to="/estoque/compras/itens">CALÇAS</Link></Td>
            <Td>1140</Td>
            <Td>11/06</Td>
          </tr>
          <tr>
            <Td>CAMISAS</Td>
            <Td>5425</Td>
            <Td>11/06</Td>
          </tr>
          <tr>
            <Td>MOLETONS</Td>
            <Td>1045</Td>
            <Td>05/06</Td>
          </tr>
        </tbody>
      </Table>
      <Footer/>
    </Container>
  );
};

export default StockShop;
