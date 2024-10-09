import Header from '../components/header';
import Login from '../components/login';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';


function LoginPage() {
  return (
    <div>
      <Header/>
      <Logo/>
      <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
      >
        <Login/>
      </motion.div>
    </div>
  );
}

export default LoginPage;