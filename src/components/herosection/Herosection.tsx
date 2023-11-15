import Image from "next/image";
import { Typography, Box, List, ListItem, Stack } from "@mui/material";
import Checkbox from "../../../public/assets/svg/Checkbox.svg";
import { title, TextContainer, listText } from "./stylesconstants";

const Herosection = () => {
  return (
    <Box sx={TextContainer}>
      <Typography variant="h4" sx={title}>
        <span style={{ textTransform: "uppercase", color: "#22C55E" }}>
          Моє БТІ
        </span>{" "}
        - це Ваш найдійний помічник з оформлення нерухомості.
      </Typography>
      <List dense={true}>
        <Stack spacing={2}>
          <ListItem>
            <Image src={Checkbox} alt="checkbox" />
            <Typography variant="h6" sx={listText}>
              Сучасний підхід до надання якісних послуг у сфері оформлення
              нерухомості
            </Typography>
          </ListItem>

          <ListItem>
            <Image src={Checkbox} alt="checkbox" />
            <Typography variant="h6" sx={listText}>
              Захист прав та інтересів клієнтів
            </Typography>
          </ListItem>

          <ListItem>
            <Image src={Checkbox} alt="checkbox" />
            <Typography variant="h6" sx={listText}>
              Дотримання термінів надання послуг, згідно з укладеним договором
            </Typography>
          </ListItem>
        </Stack>
      </List>
    </Box>
  );
}

export default Herosection;
