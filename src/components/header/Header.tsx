"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import Logo from "../../../public/assets/svg/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import MenuMobile from "@/components/menumobile/MenuMobile";
import styles from "./header.module.css";

const log_container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "5px 0",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handelChange = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "inherit" }}>
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={log_container}>
              <Image src={Logo} alt="logo" className={styles.logo} />
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#22C55E", fontWeight: "bold" }}
              >
                MY-BTI
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex", color: "#556987" } }}>
              <Button
                component={Link}
                href="/"
                color="inherit"
                sx={{ fontWeight: "bold" }}
              >
                Головна
              </Button>
              <Button
                component={Link}
                href="/aboutus"
                color="inherit"
                sx={{ fontWeight: "bold" }}
              >
                Про нас
              </Button>
              <Button
                component={Link}
                href="/services"
                color="inherit"
                sx={{ fontWeight: "bold" }}
              >
                Послуги
              </Button>
              <Button
                component={Link}
                href="/clients"
                color="inherit"
                sx={{ fontWeight: "bold" }}
              >
                Наші клієнти
              </Button>
              <Button
                component={Link}
                href="/contacts"
                color="inherit"
                sx={{ fontWeight: "bold" }}
              >
                Контакти
              </Button>
            </Box>
            {isOpen ? (
              <IconButton
                onClick={handelChange}
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <CloseIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={handelChange}
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {isOpen ? <MenuMobile onClick={handelChange} /> : null}
    </>
  );
};

export default Header;
