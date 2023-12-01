"use client";
import { motion } from "framer-motion";
import styles from "./LoopLine.module.css";

function LoopLine() {
  const variants = {
    hidden: {
      x: -450,
    },
    visible: {
      x: "100%",
      linear: "linear",
      transition: { repeat: Infinity, duration: 40 },
    },
  };
  return (
    <div className={styles.loop_container}>
      <motion.p initial="hidden" animate="visible" variants={variants}>
        отримуй знижку -10% за онлайн виклик інженера
      </motion.p>
    </div>
  );
}

export default LoopLine;
