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

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-size: contain;
`;

const ProfileIcon = styled(Icon)`
  background: url('profile-icon.png') no-repeat center center;
`;

const ProfileDetailIcon = styled(Icon)`
  background: url('profile-detail-icon.png') no-repeat center center;
`;

const SecurityIcon = styled(Icon)`
  background: url('security-icon.png') no-repeat center center;
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

export default function UserConfiguration() {
  return (
    <Container>
        <Menu>
            <MenuItem>
                <ProfileIcon />
                <span>Dados da conta</span>
            </MenuItem>
            <MenuItem>
                <ProfileDetailIcon />
                <span>Perfil</span>
            </MenuItem>
            <MenuItem>
                <SecurityIcon />
                <span>Senha e segurança</span>
            </MenuItem>
        </Menu>
        <MenuFooter>
            <FooterLink href="#">Ajuda e informação</FooterLink>
            <Link to="/">Sair da conta</Link>
        </MenuFooter>
    </Container>
  );
}
