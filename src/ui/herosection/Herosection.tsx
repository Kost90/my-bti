import Image from "next/image";
import { Typography, Box } from "@mui/material";
import Checkbox from "../../../public/assets/svg/Checkbox.svg";
import { title, TextContainer, listText } from "./stylesconstants";
import styles from "./Herosection.module.css";

const Herosection = () => {
  return (
    <Box sx={TextContainer}>
      <Typography variant="h4" sx={title}>
        <span style={{ textTransform: "uppercase", color: "#22C55E" }}>
          Моє БТІ
        </span>{" "}
        - це Ваш найдійний помічник з оформлення нерухомості.
      </Typography>
      <ul className={styles.ul_container}>
        <li>
          <Image src={Checkbox} alt="checkbox" />
          <Typography variant="h6" sx={listText}>
            Сучасний підхід до надання якісних послуг у сфері оформлення
            нерухомості
          </Typography>
        </li>

        <li>
          <Image src={Checkbox} alt="checkbox" />
          <Typography variant="h6" sx={listText}>
            Захист прав та інтересів клієнтів
          </Typography>
        </li>

        <li>
          <Image src={Checkbox} alt="checkbox" />
          <Typography variant="h6" sx={listText}>
            Дотримання термінів надання послуг, згідно з укладеним договором
          </Typography>
        </li>
      </ul>
    </Box>
  );
};

export default Herosection;
