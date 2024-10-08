import Header from '../components/header';
import Login from '../components/login';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';


function LoginPage() {
  return (
    <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
      <Header/>
      <Logo/>
      <Login/>
    </motion.div>
  );
}

export default LoginPage;