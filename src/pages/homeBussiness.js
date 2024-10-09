import Logo from "../components/Logo";
import Menu from "../components/menu";
import Business from "../components/userBussiness"
import { motion } from "framer-motion";

export default function homeBussiness () {
    return (
        <div>
            <Logo/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
            <Business/>
            </motion.div>
            <Menu/>
        </div>
    );
}