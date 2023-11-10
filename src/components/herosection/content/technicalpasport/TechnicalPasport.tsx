import Link from "next/link";
import { Typography, Button, Box } from "@mui/material";
import {
  contentbox,
  heroText,
  paragraphStyle,
  btnStyle,
} from "./stylesconstans";

const TechnicalPasport = async () => {
  return (
    <Box sx={contentbox}>
      <Typography variant="h5" component="h3" align="center" sx={heroText}>
        Замовити технічний паспорт на нерухомість
      </Typography>
      <Typography align="center" paragraph sx={paragraphStyle}>
        Скористайся послугою розрахунку вартості технічного паспорту на обєкт
        нерухомості та бронювання дати та часу виїзда інженера
      </Typography>
      <Button
        component={Link}
        href="/services/technicalpasport"
        variant="contained"
        size={"medium"}
        color="success"
        sx={btnStyle}
      >
        Замовити
      </Button>
    </Box>
  );
};

export default TechnicalPasport;
