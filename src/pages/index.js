import Header from '../components/header';
import Login from '../components/login';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import styled from 'styled-components';
import { ContainerDiv } from '../styles/containerDiv';
import { GlobalStyle } from '../styles/globalStyle';


const ContainerLogo = styled.div`
    display:none;
    @media (max-width: 768px) {
        display: block;
    }
`;

function LoginPage() {
  return (
    <ContainerDiv>
    <GlobalStyle/>
      <Header/>
      <ContainerLogo><Logo/></ContainerLogo>
      <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
      >
        <Login/>
      </motion.div>
    </ContainerDiv>
  );
}

export default LoginPage;