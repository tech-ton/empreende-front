import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 230px;
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

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    padding: 25px;
    gap: 10px;
    border: 1px solid #3E5066;
    border-radius: 5px;
    background-color: #050a30;
    color: #ffffff;
    width: 150px;
    height: 15px;
    margin: 10px;
    
    &:hover {
        transform: scale(1.1);
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

export default function UserConfiguration() {

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem("userData");
    localStorage.removeItem("userDataBusiness");
    localStorage.removeItem("categorias");
    localStorage.removeItem("items");
    localStorage.removeItem("itemsUser");
    localStorage.removeItem("userChat");
    localStorage.removeItem("userChatEstrategy");
    localStorage.removeItem("userChatMetas");
    localStorage.removeItem("userChatPricing");
    alert("Tipo de negocio resetado");
  };

  return (
    <Container>
        <Main>
            <form onSubmit={handleSubmit}>
                <Button type="submit">Redefinir negócio</Button>
            </form>
            <Link to="/" style={{textDecoration: "none"}}>
                <MenuItem>
                    Sair
                </MenuItem>
            </Link>
        </Main>
    </Container>
  );
}
