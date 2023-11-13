import Image from "next/image";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import Link from "next/link";
import { btnStyle, cardContainer, listContainer } from "./stylesconstans";

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
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          {title}
        </Typography>
        <List sx={listContainer}>
          {services.map((item, i) => (
            <ListItem key={i}>
              <ListItemText primary={item} sx={{ color: "#556987" }} />
            </ListItem>
          ))}
          <Button
            component={Link}
            href={path}
            variant="contained"
            size={"medium"}
            color="success"
            sx={btnStyle}
          >
            Детальніше
          </Button>
        </List>
      </Box>
    </Paper>
  );
};

export default Card;
