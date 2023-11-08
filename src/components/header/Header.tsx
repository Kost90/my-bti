"use client";
import { useState, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import MenuMobile from "@/components/menumobile/MenuMobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handelChange = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#009688" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            My-BTI Logo
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button component={Link} href="/" color="inherit">
              Головна
            </Button>
            <Button component={Link} href="/aboutus" color="inherit">
              Про нас
            </Button>
            <Button component={Link} href="/services" color="inherit">
              Послуги
            </Button>
            <Button component={Link} href="/clients" color="inherit">
              Наші клієнти
            </Button>
            <Button component={Link} href="/contacts" color="inherit">
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
      </AppBar>
      {isOpen ? <MenuMobile onClick={handelChange} /> : null}
    </>
  );
};

export default Header;
