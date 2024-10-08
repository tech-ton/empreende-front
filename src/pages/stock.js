import Logo from '../components/Logo';
import Menu from '../components/menu';
import StockAcess from '../components/stockAcess';
import UserWithnotLogin from '../components/userWithnotLogin'
import { motion } from 'framer-motion';

function Stock() {
  const userToken = localStorage.getItem("token");
  if (userToken){
    return (
      <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
        <Logo/>
        <Menu/>
        <StockAcess/>
      </motion.div>
    );
  } else {
    return (<UserWithnotLogin/>);
  }
  
}

export default Stock;
