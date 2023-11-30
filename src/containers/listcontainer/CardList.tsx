"use client";
import { useState } from "react";
import { cardContent } from "@/constants/CardsData";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CardList.module.css";
import Link from "next/link";
import Image from "next/image";

const CardList = () => {
  const [selectedId, setSelectedId] = useState("");

  return (
    <motion.div>
      <motion.h4
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className={styles.h4}
      >
        НАШІ ПОСЛУГИ:
      </motion.h4>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.grid_container}
      >
        {cardContent.map((item) => (
          <motion.div
            className={`${styles.card_container} ${
              selectedId === item.id ? "card-selected" : ""
            }`}
            layoutId={`card-container-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            key={item.id}
            initial={{ scale: 1 }}
            animate={{ scale: selectedId === item.id ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.card_content}>
              <Image src={item.src} alt="icon" />
              <motion.h2>{item.title}</motion.h2>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className={styles.selected_card_container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {cardContent.map(
              (item) =>
                item.id === selectedId && (
                  <motion.div
                    className={styles.selected_card}
                    layoutId={`card-container-${item.id}`}
                    key={item.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <motion.div className={styles.relative}>
                      <div className={styles.container_close_btn}>
                        <Image src={item.src} alt="icon" />
                        <button
                          className={styles.close_btn}
                          onClick={() => setSelectedId("")}
                        >
                          X
                        </button>
                      </div>

                      <motion.h2>{item.title}</motion.h2>
                      <motion.ul>
                        {item.services.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </motion.ul>
                      <button type="button">
                        <Link href={item.path} key={item.id}>
                          Детальніше
                        </Link>
                      </button>
                    </motion.div>
                  </motion.div>
                )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CardList;
