"use client";
import Carousel from "react-material-ui-carousel";
import Item from "../caruseiItem/Item";
import styles from "./Carousel.module.css";

const content = [
  {
    name: "Замовити послугу з офрмлення нерухомості",
    description:
      "Скористайся послугою розрахунку вартості оформлення обєкту нерухомості та бронювання дати та часу зустрічі з юристом",
    path: "/services/property",
  },
  {
    name: "Замовити технічний паспорт на нерухомість",
    description:
      "Скористайся послугою розрахунку вартості технічного паспорту на обєкт нерухомості та бронювання дати та часу виїзда інженера",
    path: "/services/technicalpasport",
  },
];

function CarouselComponent() {
  return (
    <Carousel
      className={styles.carousel}
      interval={5000}
      activeIndicatorIconButtonProps={{ style: { color: "#22C55E" } }}
      indicatorIconButtonProps={{ style: { color: "white" } }}
    >
      {content.map((item, i) => (
        <Item
          key={i}
          name={item.name}
          description={item.description}
          path={item.path}
        />
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
