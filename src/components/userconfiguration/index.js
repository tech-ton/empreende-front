import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #3E5066;
  border-radius: 5px;
  background-color: #182235;

  @media (max-width: 768px) {
    padding: 8px;
    gap: 8px;
  }
`;

const MenuFooter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    margin-top: 15px;
    gap: 8px;
  }
`;

const FooterLink = styled.a`
  color: #FF5F5F;
  text-decoration: none;

  &.logout {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const MainButton = styled.button`
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 10px;
  border: 1px solid #3E5066;
  border-radius: 5px;
  background-color: #182235;
  color: #FF5F5F;
  width: 200px;

  @media (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 100%;
    font-size: 0.9em;
  }
`;

export default function UserConfiguration() {

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem("userData");
    localStorage.removeItem("userDataBusiness");
    localStorage.removeItem("userChat");
    localStorage.removeItem("userChatEstrategy");
    localStorage.removeItem("userChatMetas");
    localStorage.removeItem("userChatPricing");
    alert("Tipo de negocio resetado");
  };

  return (
    <Container>
        <Menu>
              <form onSubmit={handleSubmit}>
                <MainButton type="submit">Redefinir negócio</MainButton>
              </form>
            <MenuItem>
                <span>Perfil</span>
            </MenuItem>
            <MenuItem>
                <span>Senha e segurança</span>
            </MenuItem>
        </Menu>
        <MenuFooter>
            <FooterLink>Ajuda e informação</FooterLink>
            <Link to="/">Sair da conta</Link>
        </MenuFooter>
    </Container>
  );
}
