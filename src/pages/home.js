import Logo from "../components/Logo";
import Menu from "../components/menu";
import BootAssistentRecord from "../components/bootAssistentRecord";
import UserWithnotLogin from "../components/userWithnotLogin";
import LogoGemini from "../components/LogoGemini";
import NewUserWellcome from "../components/newUser";
import { motion } from "framer-motion";
import MenuWeb from "../components/menuWeb";
import { GlobalStyle } from "../styles/globalStyle";


function Home() {
  const userToken = localStorage.getItem("token");
  const userData = localStorage.getItem("userData");
  const userDataBusiness = localStorage.getItem("userDataBusiness");
  if (userToken){
    if (userData && userDataBusiness) {
      return(
        <>
        <GlobalStyle/>
        <div>
          <MenuWeb/>
          <LogoGemini/>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            <BootAssistentRecord/>
          </motion.div>
          <Menu/>
        </div>
        </>
      );
    } else {
      return(
        <>
        <GlobalStyle/>
        <div>
          <MenuWeb/>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            <NewUserWellcome/>
          </motion.div>
          <Menu/>
        </div>
        </>
      )
    }
     
  } else {
    return (<div><Logo/><UserWithnotLogin/></div>);
  }
  
}

export default Home;