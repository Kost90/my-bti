import Image from "next/image";
import Link from "next/link";
import Greenelipsis from "../../../public/assets/svg/greenelipsis.svg";
import Orangevector from "../../../public/assets/svg/orangvector.svg";
import Dangervector from "../../../public/assets/svg/dangervector.svg";
import Purpleelipsis from '../../../public/assets/svg/purpleelipsis.svg'
import { Typography, Button, Box, IconButton, Container } from "@mui/material";
import styles from "./Herosection.module.css";

const HerosectionPasport = async () => {
  return (
    <Box
      sx={{
        borderRadius: "24px",
        background: "var(--gray-900, #2A3342)",
        position: "relative",
        padding: "2px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        src={Orangevector}
        alt="orange vector"
        className={styles.orange_vector}
      />
      <Image
        src={Greenelipsis}
        alt="svg elipsis"
        className={styles.green_elipsis}
      />
      <Typography
        variant="h5"
        component="h3"
        align="center"
        sx={{ padding: "70px 0 20px 0", color: "white" }}
      >
        Замовити технічний паспорт на нерухомість
      </Typography>
      <Typography
        align="center"
        paragraph
        sx={{ color: "#8896AB", fontSize: { xs: "14px", md: "20px" } }}
      >
        Скористайся послугою розрахунку вартості технічного паспорту на обєкт
        нерухомості та бронювання дати та часу виїзда інженера
      </Typography>
      <Button
        component={Link}
        href="/services/technicalpasport"
        variant="contained"
        size={"medium"}
        color="success"
        sx={{ width: "120px", margin: "10px 0" }}
      >
        Замовити
      </Button>
      <Image
        src={Dangervector}
        alt="danger vector"
        className={styles.purple_vector}
      />
      <Image
        src={Purpleelipsis}
        alt="purple elipsis"
        className={styles.purple_elipsis}
      />
    </Box>
  );
};

export default HerosectionPasport;
