import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 5vw;
  max-width: 90vw;

  @media (max-width: 768px) {
    padding: 20px;

    h2 {
      font-size: 1.1em;
    }
  }
`;

const Title = styled.h1`
  font-size: 2em;

  @media (max-width: 768px) {
    margin-top: 60px;
    font-size: 1.1em;
    margin-bottom: 15px;
  }
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 25px;
    gap: 10px;
    border: 1px solid #3E5066;
    border-radius: 5px;
    background-color: #050a30;
    color: #ffffff;
    width: 200px;
    margin: 10px;
    
    &:hover {
        transform: scale(1.1);
    }
`;

function Codification () {
  const navigate = useNavigate();

  const handleBootDesactivation = (event) => {
    event.preventDefault();
    localStorage.setItem('BootDesactivation', JSON.stringify({boot: "off"}));
    alert("Codigo automático desligado");
    navigate("../estoque/compras");
  };

  const handleBootActivation = (event) => {
    event.preventDefault();
    localStorage.removeItem("BootDesactivation");
    alert("Codigo automático Ativado");
    navigate("../estoque/compras");
  };

  const foundBoot = localStorage.getItem('BootDesactivation');
  if(!foundBoot){
    return (
      <HomeContainer>
        <Title>
            PARA FACILITAR A ORGANIZAÇÃO DOS 
            SEUS MATERIAIS UTILIZAMOS A CODIFICAÇÃO.
        </Title>
        <h2>
            A MELHOR CODIFICAÇÃO PARA O SEU NEGOCIO É A 
            CODIFICAÇÃO POR CATEGORIA E SUBCATEGORIA!
        </h2>
        <h2>
            EXEMPLO: Calça Social Feminina, Tamanho Medio:
            Código: CAL-SOC- F-M
        </h2>
        <h2>
            Deseja codificar o seu estoque de materiais? 
            Todos irão ser codificados automaticamente, 
            basta ativar o botão abaixo:
        </h2>
        <form onSubmit={handleBootDesactivation}>
          <Button type="submit">Desativar Codigo Automático</Button>
        </form>
      </HomeContainer>);
  } else {
    return (
      <HomeContainer>
        <Title>
            PARA FACILITAR A ORGANIZAÇÃO DOS 
            SEUS MATERIAIS UTILIZAMOS A CODIFICAÇÃO.
        </Title>
        <h2>
            A MELHOR CODIFICAÇÃO PARA O SEU NEGOCIO É A 
            CODIFICAÇÃO POR CATEGORIA E SUBCATEGORIA!
        </h2>
        <h2>
            EXEMPLO: Calça Social Feminina, Tamanho Medio:
            Código: CAL-SOC- F-M
        </h2>
        <h2>
            Deseja codificar o seu estoque de materiais? 
            Todos irão ser codificados automaticamente, 
            basta ativar o botão abaixo:
        </h2>
        <form onSubmit={handleBootActivation}>
          <Button type="submit">Ativar Codigo Automático</Button>
        </form>
      </HomeContainer>);
  }
};

export default Codification;