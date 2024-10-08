import BootAssistentEstrategy from "../components/bootAssistentEstrategy";
import LogoGemini from "../components/LogoGemini";
import { motion } from "framer-motion";
import Menu from "../components/menu";

export default function Estrategy () {
    return(
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
            <LogoGemini/>
            <Menu/>
            <BootAssistentEstrategy/>
        </motion.div>
    )
}