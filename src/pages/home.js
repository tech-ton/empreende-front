import Logo from "../components/Logo";
import Menu from "../components/menu";
import BootAssistentRecord from "../components/bootAssistentRecord";
import UserWithnotLogin from "../components/userWithnotLogin";
import LogoGemini from "../components/LogoGemini";
import NewUserWellcome from "../components/newUser";
import { motion } from "framer-motion";

function Home() {
  const userToken = localStorage.getItem("token");
  const userData = localStorage.getItem("userData");
  const userDataBusiness = localStorage.getItem("userDataBusiness");
  if (userToken){
    if (userData && userDataBusiness) {
      return(
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <LogoGemini/>
          <Menu/>
          <BootAssistentRecord/>
        </motion.div>
      );
    } else {
      return(
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <Logo/>
          <Menu/>
          <NewUserWellcome/>
        </motion.div>
      )
    }
     
  } else {
    return (<UserWithnotLogin/>);
  }
  
}

export default Home;