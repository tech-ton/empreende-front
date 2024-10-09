import Logo from "../components/Logo";
import Menu from "../components/menu"
import ReportAcess from "../components/reportAcess";
import UserWithnotLogin from "../components/userWithnotLogin";
import { motion } from "framer-motion";

export default function Report () {
    const userData = localStorage.getItem("userData");
    const userDataBusiness = localStorage.getItem("userDataBusiness");
    if (userData && userDataBusiness){
        return (
            <div>
                <Logo/>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <ReportAcess/>
                </motion.div>
                <Menu/>
            </div>
        )
    } else {
        return (
        <div>
            <Logo/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <UserWithnotLogin/>
            </motion.div>
            <Menu/>
        </div>)
    }
    
}