import Menu from "../components/menu";
import BusinessType from "../components/userBussinessType";
import { motion } from "framer-motion";
import { GlobalStyle } from "../styles/globalStyle";
import MenuWeb from "../components/menuWeb";

export default function HomeBussinessType () {
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
                <BusinessType/>
            </motion.div>
            <Menu/>
        </div>
        </>
    );
}