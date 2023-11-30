import Image from "next/image";
import Button from "../button/Button";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { cardContainer, listContainer } from "./stylesconstans";

interface PropsParams {
  title: string;
  services: string[];
  path: string;
  src: string;
}

const Card = async ({ title, services, path, src }: PropsParams) => {
  return (
    <Paper>
      <Box sx={cardContainer}>
        <Image src={src} alt="icon" />
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {title}
        </Typography>
        <List sx={listContainer}>
          {services.map((item, i) => (
            <ListItem key={i}>
              <ListItemText primary={item} sx={{ color: "#556987" }} />
            </ListItem>
          ))}
          <Button type={"button"}>
            <Link href={path} key={path}>Детальніше</Link>
          </Button>
        </List>
      </Box>
    </Paper>
  );
};

export default Card;
