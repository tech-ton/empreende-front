import Logo from '../components/Logo';
import Menu from '../components/menu';
import UserConfiguration from '../components/userconfiguration';
import UserWithnotLogin from '../components/userWithnotLogin'
import { motion } from 'framer-motion';

function ConfigurationPage() {
  const userToken = localStorage.getItem("token");
  if(userToken){
    return (
      <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          style={{height: 660}}
        >
        <Logo/>
        <Menu/>
        <UserConfiguration/>
      </motion.div>
    );
  } else {
    return (<UserWithnotLogin/>);
  }
  
}

export default ConfigurationPage;
