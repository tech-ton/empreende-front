import BootAssistentMetas from "../components/bootAssistentMetas";
import LogoGemini from "../components/LogoGemini";
import Menu from "../components/menu";
import { motion } from "framer-motion";
import { GlobalStyle } from "../styles/globalStyle";
import MenuWeb from "../components/menuWeb";

export default function Metas () {
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
            <BootAssistentMetas/>
            </motion.div>
            <Menu/>
        </div>
        </>
    )
}