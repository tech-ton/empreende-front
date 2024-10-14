import Menu from "../components/menu";
import MenuWeb from "../components/menuWeb";
import Business from "../components/userBussiness"
import { motion } from "framer-motion";
import { GlobalStyle } from "../styles/globalStyle";

export default function homeBussiness () {
    return (
        <>
        <GlobalStyle/>
        <div>
            <MenuWeb/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
            <Business/>
            </motion.div>
            <Menu/>
        </div>
        </>
    );
}