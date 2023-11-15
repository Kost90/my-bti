import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { elips, flexContainer, flexSideSecCard } from "./stylesconstans";
import EmailIcon from "../../../public/assets/svg/emailicon.svg";
import PhoneIcon from "../../../public/assets/svg/phoneicon.svg";
import LocationIcon from "../../../public/assets/svg/locationicon.svg";
import SocialIcon from "../../../public/assets/svg/socialicon.svg";
import Facebook from "../../../public/assets/svg/socialmedia/Facebook.svg";
import Twitter from "../../../public/assets/svg/socialmedia/Twitter.svg";
import Instagram from "../../../public/assets/svg/socialmedia/Instagramm.svg";

const mainBox = {
  backgroundColor: "var(--gray-900, #2A3342)",
  width: "100%",
  borderRadius: "10px",
  padding: { xs: "20px", md: "40px" },
  maxWidth: "520px",
  height: { md: "440px" },
};

const socialMediaBox = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  cursor: "pointer",
};

function SideSection() {
  return (
    <Box sx={mainBox}>
      <Box sx={flexContainer}>
        <Box sx={flexSideSecCard}>
          <Box sx={elips}>
            <Image src={EmailIcon} alt="emailicon" />
          </Box>
          <Typography>Email:</Typography>
          <Typography>mybti@gmail.com</Typography>
        </Box>

        <Box sx={flexSideSecCard}>
          <Box sx={elips}>
            <Image src={PhoneIcon} alt="phoneicon" />
          </Box>
          <Typography>Телефон:</Typography>
          <Typography>+380637306501</Typography>
        </Box>
      </Box>
      <Box sx={flexContainer}>
        <Box sx={flexSideSecCard}>
          <Box sx={elips}>
            <Image src={LocationIcon} alt="locationIcon" />
          </Box>
          <Typography>Офіс:</Typography>
          <Typography>м.Одеса,вул.Катерининська, буд.8/10</Typography>
        </Box>
        <Box sx={flexSideSecCard}>
          <Box sx={elips}>
            <Image src={SocialIcon} alt="socialIcon" />
          </Box>
          <Typography>Соціальні мережі:</Typography>
          <Box sx={socialMediaBox}>
            <Image src={Facebook} alt="facebookIcon" />
            <Image src={Twitter} alt="TwitterIcon" />
            <Image src={Instagram} alt="InstagramIcon" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SideSection;
