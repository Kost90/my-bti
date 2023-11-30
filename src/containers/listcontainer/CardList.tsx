import { Box } from "@mui/material";
import Card from "../../components/cards/Card";
import { cardContent } from "@/constants/CardsData";
import { flexContainer } from "../../components/cards/stylesconstans";
import styles from "./CardList.module.css";

const CardList = async () => {
  return (
    <Box>
      <h4 className={styles.h4}>НАШІ ПОСЛУГИ:</h4>
      <Box sx={flexContainer}>
        {cardContent.map((item, i) => (
          <Card
            key={i}
            title={item.title}
            services={item.services}
            path={item.path}
            src={item.src}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CardList;
