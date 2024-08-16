import styled from 'styled-components';

const Container = styled.div`
  max-width: 650px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #ffffff;
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

const Tbody = styled.tbody`
  
`;

export default function ShopUserItens () {
  return (
    <Container>
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
    </Container>
  );
};
