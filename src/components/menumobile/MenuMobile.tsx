"use client";
import { memo } from "react";
import { Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { box, textWeght } from "./styleconstans";

type HamburgerProps = {
  onClick: () => void;
};

const MenuMobile = memo(({ onClick }: HamburgerProps) => {

  const MenuVariants = {
    hidden: {
      x: -100,
    },
    visible: {
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      x: -100,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div initial={"hidden"} animate={"visible"} exit={{ x: -100, transition: { duration: 0.5 } }} variants={MenuVariants}>
      <Box sx={box}>
        <Button onClick={onClick} component={Link} href="/" color="inherit" sx={textWeght}>
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
          href="/clients"
          color="inherit"
          sx={textWeght}
        >
          Наші клієнти
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


MenuMobile.displayName ='MenuMobile';

export default MenuMobile;
