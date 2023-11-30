"use client";
import { memo } from "react";
import { Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { box, textWeght } from "./styleconstans";
import styles from './MenuMobile.module.css'

type HamburgerProps = {
  onClick: () => void;
  isOpen: boolean;
};

const MenuMobile = memo(({ onClick, isOpen }: HamburgerProps) => {
  const MenuVariants = {
    hidden: {
      x: "-50vw",
    },
    visible: {
      x: "0vw",
      transition: { duration: 0.5 },
    },
    exit: {
      x: "-50vw",
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial={"hidden"}
      animate={isOpen ? "visible" : "exit"}
      variants={MenuVariants}
      className={styles.menu}
    >
      <Box sx={box}>
        <Button
          onClick={onClick}
          component={Link}
          href="/"
          color="inherit"
          sx={textWeght}
        >
          Головна
        </Button>
        <Button
          onClick={onClick}
          component={Link}
          href="/aboutus"
          color="inherit"
          sx={textWeght}
        >
          Про нас
        </Button>
        <Button
          onClick={onClick}
          component={Link}
          href="/services"
          color="inherit"
          sx={textWeght}
        >
          Послуги
        </Button>
        <Button
          onClick={onClick}
          component={Link}
          href="/contacts"
          color="inherit"
          sx={textWeght}
        >
          Контакти
        </Button>
      </Box>
    </motion.div>
  );
});

MenuMobile.displayName = "MenuMobile";

export default MenuMobile;
