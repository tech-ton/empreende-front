import Menu from "../components/menu";
import BusinessType from "../components/userBussinessType";
import { motion } from "framer-motion";
import { GlobalStyle } from "../styles/globalStyle";
import MenuWeb from "../components/menuWeb";
import { ContainerDiv } from "../styles/containerDiv";

export default function HomeBussinessType () {
    return (
        <>
        <GlobalStyle/>
        <ContainerDiv>
            <MenuWeb/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <BusinessType/>
            </motion.div>
            <Menu/>
        </ContainerDiv>
        </>
    );
}