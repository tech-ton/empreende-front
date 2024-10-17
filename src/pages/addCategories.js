import Menu from "../components/menu";
import MenuWeb from "../components/menuWeb";
import UserCategories from "../components/userCategories";
import { ContainerDiv } from "../styles/containerDiv";
import { GlobalStyle } from "../styles/globalStyle";
import { motion } from 'framer-motion';

export default function AddCategories () {
    return(
        <>
        <GlobalStyle/>
        <ContainerDiv>
            <MenuWeb/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <UserCategories/>
            </motion.div>
            <Menu/>
        </ContainerDiv>
        </>
    )
}