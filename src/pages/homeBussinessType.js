import Logo from "../components/Logo";
import Menu from "../components/menu";
import BusinessType from "../components/userBussinessType";
import { motion } from "framer-motion";

export default function HomeBussinessType () {
    return (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          style={{height: 660}}
        >
            <Logo/>
            <Menu/>
            <BusinessType/>
        </motion.div>
    );
}