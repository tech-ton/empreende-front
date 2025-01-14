import Logo from '../components/Logo';
import Menu from '../components/menu';
import StockAcess from '../components/stockAcess';
import UserWithnotLogin from '../components/userWithnotLogin'
import { motion } from 'framer-motion';
import { GlobalStyle } from '../styles/globalStyle';
import MenuWeb from '../components/menuWeb';
import { ContainerDiv } from '../styles/containerDiv';

function Stock() {
  const userToken = localStorage.getItem("token");
  const userData = localStorage.getItem("userData");
  const userDataBusiness = localStorage.getItem("userDataBusiness");
  if (userToken){
    if (userData && userDataBusiness){
      return (
        <>
        <GlobalStyle/>
        <ContainerDiv>
          <MenuWeb/>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            <StockAcess/>
          </motion.div>
          <Menu/>
        </ContainerDiv>
        </>
      );
    } else {
      return(
        <>
        <GlobalStyle/>
        <ContainerDiv>
          <MenuWeb/>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            <UserWithnotLogin/>
          </motion.div>
          <Menu/>
        </ContainerDiv>
        </>
      )
    }
    
  } else {
    return (<div><Logo/><UserWithnotLogin/></div>);
  }
  
}

export default Stock;
