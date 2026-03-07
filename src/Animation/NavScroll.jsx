import { motion, useScroll } from "framer-motion"
import App from "../App"

export default function ScrollLinked() {
    const { scrollYProgress } = useScroll()

    return (
        <>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 100,
                    left: 0,
                    right: 0,
                    height: 6,
                    transformOrigin: "0%",
                    backgroundColor: "#8750f7",
                    zIndex: 9999
                }}
            />
            <App />
        </>
    )
}
