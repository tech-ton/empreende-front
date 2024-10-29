import Logo from "../components/Logo";
import Menu from "../components/menu";
import MenuWeb from "../components/menuWeb";
import UserWithnotLogin from '../components/userWithnotLogin';
import { motion } from "framer-motion";
import { GlobalStyle } from "../styles/globalStyle";
import { ContainerDiv } from "../styles/containerDiv";
import Purchases from "../components/purchases";

function AllPurchases () {
  const userToken = localStorage.getItem("token");
  if (userToken){
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
          <Purchases/>
        </motion.div>
        <Menu/>
      </ContainerDiv>
      </>
    );
  } else {
    return (<div><Logo/><UserWithnotLogin/></div>)
  }
  
};

export default AllPurchases;
