import Image from "next/image";
import { Box, Typography } from "@mui/material";
import ContactForm from "../forms/contactForm/ContactForm";
import { title } from "./stylesconstans";

function Contacts() {
  return (
    <Box>
      <Typography variant="h4" sx={title}>
        ЗАЛИШИТИ ПОВІДОМЛЕННЯ
      </Typography>
      <Box>
        <ContactForm />
      </Box>
    </Box>
  );
}

export default Contacts;
