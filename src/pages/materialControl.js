import Logo from "../components/Logo";
import Menu from "../components/menu";
import UserMaterials from "../components/userMaterials";
import UserWithnotLogin from '../components/userWithnotLogin'
import { motion } from "framer-motion";
import { GlobalStyle } from "../styles/globalStyle";
import MenuWeb from "../components/menuWeb";

export default function Inventory () {
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
          <UserMaterials/>
        </motion.div>
        <Menu/>
      </div>
      </>
    );
  } else {
    return(<div><Logo/><UserWithnotLogin/></div>);
  }
  
};
