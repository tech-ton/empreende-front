import BootAssistentEstrategy from "../components/bootAssistentEstrategy";
import LogoGemini from "../components/LogoGemini";
import { motion } from "framer-motion";
import Menu from "../components/menu";
import { GlobalStyle } from "../styles/globalStyle";
import MenuWeb from "../components/menuWeb";

export default function Estrategy () {
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
                <BootAssistentEstrategy/>
            </motion.div>
            <Menu/>
        </div>
        </>
    )
}