import Codification from "../components/codification";
import Menu from "../components/menu";
import MenuWeb from "../components/menuWeb";
import { motion } from 'framer-motion';
import { ContainerDiv } from "../styles/containerDiv";
import { GlobalStyle } from "../styles/globalStyle";

export default function CodificationPage () {
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
                    <Codification/>
                </motion.div>
                <Menu/>
            </ContainerDiv>
        </>
    )
}