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
      <AppBar position="static" sx={{ backgroundColor: "inherit" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "#22C55E", fontWeight: "bold" }}
          >
            My-BTI Logo
          </Typography>
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
      </AppBar>
      {isOpen ? <MenuMobile onClick={handelChange} /> : null}
    </>
  );
};

export default Header;
