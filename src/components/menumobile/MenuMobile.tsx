"use client";
import { memo } from "react";
import { Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

type HamburgerProps = {
  onClick: () => void;
};

const MenuMobile = memo(({ onClick }: HamburgerProps) => {
  const MenuVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div initial={"hidden"} animate={"visible"} variants={MenuVariants}>
      <Box
        sx={{
          position: "absolute",
          display: {
            xs: "flex",
            md: "none",
          },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          width: "50%",
          height: "100vh",
          backgroundColor: "#009688",
          color: "white",
        }}
      >
        <Button onClick={onClick} component={Link} href="/" color="inherit">
          Головна
        </Button>
        <Button
          onClick={onClick}
          component={Link}
          href="/aboutus"
          color="inherit"
        >
          Про нас
        </Button>
        <Button
          onClick={onClick}
          component={Link}
          href="/services"
          color="inherit"
        >
          Послуги
        </Button>
        <Button
          onClick={onClick}
          component={Link}
          href="/clients"
          color="inherit"
        >
          Наші клієнти
        </Button>
        <Button
          onClick={onClick}
          component={Link}
          href="/contacts"
          color="inherit"
        >
          Контакти
        </Button>
      </Box>
    </motion.div>
  );
});

export default MenuMobile;
