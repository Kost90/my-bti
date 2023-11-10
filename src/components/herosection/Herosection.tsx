import Image from "next/image";
import Greenelipsis from "../../../public/assets/svg/greenelipsis.svg";
import Orangevector from "../../../public/assets/svg/orangvector.svg";
import Dangervector from "../../../public/assets/svg/dangervector.svg";
import Purpleelipsis from "../../../public/assets/svg/purpleelipsis.svg";
import { Box} from "@mui/material";
import TechnicalPasport from "./content/technicalpasport/TechnicalPasport";
import styles from "./Herosection.module.css";
import { mainbox, realtivebox} from "./styleconstans";

const HerosectionPasport = async () => {
  return (
    <Box sx={mainbox}>
      <Box
        sx={realtivebox}
      >
        <Image
          src={Orangevector}
          alt="orange vector"
          className={styles.orange_vector}
        />
        <Image
          src={Greenelipsis}
          alt="svg elipsis"
          className={styles.green_elipsis}
        />
        <TechnicalPasport/>
        <Image
          src={Dangervector}
          alt="danger vector"
          className={styles.danger_vector}
        />
        <Image
          src={Purpleelipsis}
          alt="purple elipsis"
          className={styles.purple_elipsis}
        />
      </Box>
    </Box>
  );
};

export default HerosectionPasport;
