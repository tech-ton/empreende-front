import Menu from "../components/menu";
import MenuWeb from "../components/menuWeb";
import UserCategories from "../components/userCategories";
import UserWithnotLogin from "../components/userWithnotLogin";
import { ContainerDiv } from "../styles/containerDiv";
import { GlobalStyle } from "../styles/globalStyle";
import { motion } from 'framer-motion';

export default function AddCategories () {
    const userData = localStorage.getItem("userData");
    const userDataBusiness = localStorage.getItem("userDataBusiness");
    if (userData && userDataBusiness){
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
    } else {
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
                    <UserWithnotLogin/>
                </motion.div>
                <Menu/>
            </ContainerDiv>
            </>
            )
    }
}