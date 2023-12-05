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
import Greenelipsis from "../../../public/assets/svg/greenelipsis.svg";
import Orangevector from "../../../public/assets/svg/orangvector.svg";
import Dangervector from "../../../public/assets/svg/dangervector.svg";
import Purpleelipsis from "../../../public/assets/svg/purpleelipsis.svg";
import styles from './contacts.module.css'

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
    <div className={styles.side_contr}>
      <Image src={Orangevector} alt="svg_icon" className={styles.orange_vector}/>
      <Image src={Greenelipsis} alt="svg_icon" className={styles.green_elipsis}/>
      <div className={styles.flex_container}>
        <div className={styles.side_sec_card}>
          <div className={styles.elips}>
            <Image src={EmailIcon} alt="emailicon" />
          </div>
          <p>Email:</p>
          <p>mybti@gmail.com</p>
        </div>

        <div className={styles.side_sec_card}>
          <div className={styles.elips}>
            <Image src={PhoneIcon} alt="phoneicon" />
          </div>
          <p>Телефон:</p>
          <p>+380637306501</p>
        </div>
      </div>
      <div className={styles.flex_container}>
        <div className={styles.side_sec_card}>
          <div className={styles.elips}>
            <Image src={LocationIcon} alt="locationIcon" />
          </div>
          <p>Офіс:</p>
          <p>м.Одеса,вул.Катерининська,</p>
          <p>буд.8/10</p>
        </div>
        <div className={styles.side_sec_card}>
          <div className={styles.elips}>
            <Image src={SocialIcon} alt="socialIcon" />
          </div>
          <p>Соціальні мережі:</p>
          <Box sx={socialMediaBox}>
            <Image src={Facebook} alt="facebookIcon" />
            <Image src={Twitter} alt="TwitterIcon" />
            <Image src={Instagram} alt="InstagramIcon" />
          </Box>
        </div>
      </div>
      <Image src={Purpleelipsis} alt="svg_icon" className={styles.purple_elipsis}/>
      <Image src={Dangervector} alt="svg_icon" className={styles.danger_vector}/>
    </div>
  );
}

export default SideSection;
