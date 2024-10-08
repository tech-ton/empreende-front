import Logo from "../components/Logo";
import Menu from "../components/menu";
import StockShop from "../components/shopping";
import UserWithnotLogin from '../components/userWithnotLogin';
import { motion } from "framer-motion";

function ShoppingList () {
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
        <StockShop/>
      </motion.div>
    );
  } else {
    return (<UserWithnotLogin/>)
  }
  
};

export default ShoppingList;
