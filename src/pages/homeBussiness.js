import Logo from "../components/Logo";
import Menu from "../components/menu";
import Business from "../components/userBussiness"
import { motion } from "framer-motion";

export default function homeBussiness () {
    return (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
            <Logo/>
            <Menu/>
            <Business/>
        </motion.div>
    );
}