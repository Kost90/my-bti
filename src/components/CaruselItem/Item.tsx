import Link from "next/link";
import { Typography, Button, Box } from "@mui/material";
import {
  contentbox,
  heroText,
  paragraphStyle,
  btnStyle,
} from "./stylesconstants";

interface PropsParams {
  name: string;
  description: string;
  path: string;
}

const Item = async ({ name, description, path }: PropsParams) => {
  return (
    <Box sx={contentbox}>
      <Typography variant="h5" component="h3" align="center" sx={heroText}>
        {name}
      </Typography>
      <Typography align="center" paragraph sx={paragraphStyle}>
        {description}
      </Typography>
      <Button
        component={Link}
        href={path}
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

export default Item;
