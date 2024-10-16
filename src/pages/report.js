import Menu from "../components/menu"
import ReportAcess from "../components/reportAcess";
import UserWithnotLogin from "../components/userWithnotLogin";
import { motion } from "framer-motion";
import { GlobalStyle } from "../styles/globalStyle";
import MenuWeb from "../components/menuWeb";
import { ContainerDiv } from "../styles/containerDiv";

export default function Report () {
    const userData = localStorage.getItem("userData");
    const userDataBusiness = localStorage.getItem("userDataBusiness");
    if (userData && userDataBusiness){
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
                    <ReportAcess/>
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