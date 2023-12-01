import Image from "next/image";
import { Box, Container } from "@mui/material";
import Carouselsection from "@/containers/carouselsection/Carouselsection";
import Herosection from "@/ui/herosection/Herosection";
import CardList from "@/containers/listcontainer/CardList";
import AboutUs from "@/ui/aboutus/AboutUs";
import WhyWe from "@/ui/whywe/WhyWe";
import Contacts from "@/components/contacts/Contacts";
import "./globals.css";
import styles from "./homepage.module.css";
import ThemeContainer from "@/containers/themecontainer/ThemeContainer";
import waveSvg from "../../public/assets/svg/bg/waveherosec.svg";
import tiltWHywe from "../../public/assets/svg/bg/tiltwhysec.svg";
import LoopLine from "@/ui/loopline/LoopLine";

const contrStyles = {
  paddingTop: { xs: "40px", md: "80px" },
  paddingBottom: { xs: "40px", md: "80px" },
};

export default function Home() {
  return (
    <ThemeContainer>
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
            <Image src={waveSvg} alt="bg" className={styles.wave} />
          </Container>
        </section>
        <section className={styles.card_list_section}>
          <Container sx={contrStyles}>
            <CardList />
          </Container>
          <LoopLine />
        </section>
        <section className={styles.aboutus_section}>
          <Container sx={contrStyles}>
            <AboutUs />
            <Image src={tiltWHywe} alt="svg" className={styles.tilt} />
          </Container>
        </section>
        <section className={styles.why_we_section}>
          <Container sx={contrStyles}>
            <WhyWe />
          </Container>
        </section>
        <section className={styles.contacts_section}>
          <Container sx={contrStyles}>
            <Contacts />
          </Container>
        </section>
      </Box>
    </ThemeContainer>
  );
}
