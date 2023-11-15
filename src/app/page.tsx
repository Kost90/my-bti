import { Box, Container } from "@mui/material";
import Carouselsection from "@/components/carouselsection/Carouselsection";
import Herosection from "@/components/herosection/Herosection";
import CardList from "@/components/cards/CardList";
import AboutUs from "@/components/aboutus/AboutUs";
import WhyWe from "@/components/whywe/WhyWe";
import Contacts from "@/components/contacts/Contacts";
import styles from "./homepage.module.css";

const contrStyles = {
  paddingTop: { xs: "40px", md: "80px" },
  paddingBottom: { xs: "40px", md: "80px" },
}

export default function Home() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <section className={styles.hero_section_bg}>
          <Container
            sx={{
              paddingTop: { xs: "40px", md: "80px" },
              paddingBottom: { xs: "40px", md: "80px" },
              display: { xs: "block", md: "flex" },
              gap: "80px",
            }}
          >
            <Herosection />
            <Carouselsection />
          </Container>
        </section>
        <section className={styles.card_list_section}>
          <Container
            sx={contrStyles}
          >
            <CardList />
          </Container>
        </section>
        <section className={styles.aboutus_section}>
          <Container
            sx={contrStyles}
          >
            <AboutUs />
          </Container>
        </section>
        <section className={styles.why_we_section}>
          <Container
            sx={contrStyles}
          >
            <WhyWe />
          </Container>
        </section>
        <section className={styles.contacts_section}>
          <Container
            sx={contrStyles}
          >
            <Contacts />
          </Container>
        </section>
      </Box>
    </>
  );
}
