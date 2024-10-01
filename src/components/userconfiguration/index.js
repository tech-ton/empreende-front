import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #3E5066;
  border-radius: 5px;
  background-color: #182235;
  
`;

const MenuFooter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled.a`
  color: #FF5F5F;
  text-decoration: none;

  &.logout {
    font-weight: bold;
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
`;

export default function UserConfiguration() {

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem("userData");
    localStorage.removeItem("userDataBusiness");
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
