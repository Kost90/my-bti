'use client'
import { Box, Typography } from "@mui/material";
import { whyWecontent } from "./whyweData";
import {
  contrContent,
  contrCards,
  card,
  elips,
  titel,
  titelCard,
  text,
} from "./stylesconstans";

const WhyWe = () => {
  return (
    <Box sx={contrContent}>
      <Typography variant="h4" sx={titel}>
        ЧОМУ МИ?
      </Typography>
      <Box sx={contrCards}>
        {whyWecontent.map((item, i) => (
          <Box key={i} sx={card}>
            <Box sx={elips}>{item.number}</Box>
            <Typography sx={titelCard}>{item.title}</Typography>
            <Typography sx={text}>{item.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhyWe;
