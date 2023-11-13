import { Box, Container } from "@mui/material";
import Carouselsection from "@/components/carouselsection/Carouselsection";
import Herosection from "@/components/Herosection/Herosection";
import CardList from "@/components/cards/CardList";
import styles from "./homepage.module.css";

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
            sx={{
              paddingTop: { xs: "40px", md: "80px" },
              paddingBottom: { xs: "40px", md: "80px" },
            }}
          >
            <CardList />
          </Container>
        </section>
      </Box>
    </>
  );
}
