import Header from '../components/header';
import Login from '../components/login';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import styled from 'styled-components';


const ContainerLogo = styled.div`
    display:none;
    @media (max-width: 768px) {
        display: block;
    }
`;

function LoginPage() {
  return (
    <div>
      <Header/>
      <ContainerLogo><Logo/></ContainerLogo>
      <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
      >
        <Login/>
      </motion.div>
    </div>
  );
}

export default LoginPage;