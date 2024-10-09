import BootAssistentPricing from "../components/bootAssistentPricing";
import LogoGemini from "../components/LogoGemini";
import Menu from "../components/menu";
import { motion } from "framer-motion";

export default function Pricing () {
    return (
        <div>
            <LogoGemini/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <BootAssistentPricing/>
            </motion.div>
            <Menu/>
        </div>
    )
}