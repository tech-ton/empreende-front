import BootAssistentPricing from "../components/bootAssistentPricing";
import LogoGemini from "../components/LogoGemini";
import Menu from "../components/menu";
import { motion } from "framer-motion";

export default function Pricing () {
    return (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          style={{height: 660}}
        >
            <LogoGemini/>
            <Menu/>
            <BootAssistentPricing/>
        </motion.div>
    )
}