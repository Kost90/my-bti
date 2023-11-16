import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "../../components/cards/Card";
import { cardContent } from "@/constants/CardsData";
import { title, flexContainer } from "../../components/cards/stylesconstans";

const CardList = async () => {
  return (
    <Box>
      <Typography variant="h4" sx={title}>
        НАШІ ПОСЛУГИ:
      </Typography>
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
