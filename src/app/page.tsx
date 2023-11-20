import { Box, Container } from "@mui/material";
import Carouselsection from "@/containers/carouselsection/Carouselsection";
import Herosection from "@/ui/herosection/Herosection";
import CardList from "@/containers/listcontainer/CardList";
import AboutUs from "@/ui/aboutus/AboutUs";
import WhyWe from "@/ui/whywe/WhyWe";
import Contacts from "@/components/contacts/Contacts";
import styles from "./homepage.module.css";
import Footer from "@/components/footer/Footer";

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
        {/* <Footer/> */}
      </Box>
    </>
  );
}
