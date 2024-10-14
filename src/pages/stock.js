import Logo from '../components/Logo';
import Menu from '../components/menu';
import StockAcess from '../components/stockAcess';
import UserWithnotLogin from '../components/userWithnotLogin'
import { motion } from 'framer-motion';
import { GlobalStyle } from '../styles/globalStyle';
import MenuWeb from '../components/menuWeb';

function Stock() {
  const userToken = localStorage.getItem("token");
  if (userToken){
    return (
      <>
      <GlobalStyle/>
      <div>
        <MenuWeb/>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <StockAcess/>
        </motion.div>
        <Menu/>
      </div>
      </>
    );
  } else {
    return (<div><Logo/><UserWithnotLogin/></div>);
  }
  
}

export default Stock;
