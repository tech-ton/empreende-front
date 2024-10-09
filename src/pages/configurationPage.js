import Logo from '../components/Logo';
import Menu from '../components/menu';
import UserConfiguration from '../components/userconfiguration';
import UserWithnotLogin from '../components/userWithnotLogin'
import { motion } from 'framer-motion';

function ConfigurationPage() {
  const userToken = localStorage.getItem("token");
  if(userToken){
    return (
      <div>
        <Logo/>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <UserConfiguration/>
        </motion.div>
        <Menu/>
      </div>
    );
  } else {
    return (<div><Logo/><UserWithnotLogin/></div>);
  }
  
}

export default ConfigurationPage;
