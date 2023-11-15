import { Container } from "@mui/material";
import Contacts from "@/components/contacts/Contacts";

const ContactsPage = async () => {
  return (
    <div style={{ width: "100%" }}>
      <Container
        sx={{
          paddingTop: { xs: "40px", md: "80px" },
          paddingBottom: { xs: "40px", md: "80px" },
        }}
      >
        <Contacts />
      </Container>
    </div>
  );
};

export default ContactsPage;
