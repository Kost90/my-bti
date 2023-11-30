import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { aboutUs } from "@/constants/aboutUsData";
import {
  containerContent,
  listText,
  TextContainer,
} from "./stylesconstans";
import AboutUsImg from "../../../public/assets/svg/AboutUsImg.png";
import styles from "./aboutus.module.css";

const AboutUs = async () => {
  return (
    <Box sx={containerContent}>
      <Image src={AboutUsImg} alt="image" className={styles.img} />
      <Box sx={TextContainer}>
        <h4 className={styles.h4}>
          {aboutUs.title}
        </h4>
        <Typography variant="h5" sx={listText}>
          {aboutUs.text}
        </Typography>
        <Typography variant="h5" sx={listText}>
          {aboutUs.aim}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
