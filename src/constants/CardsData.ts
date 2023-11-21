import TechnicalIcon from "../../public/assets/svg/TechnicalInvertIcon.svg";
import PropertyServIcon from "../../public/assets/svg/PropertyServIcon.svg";

export const cardContent = [
  {
    title: "Технічна інвентаризація",
    services: [
      "- виготовлення технічного паспорту",
      "- виготовлення технічної документації щодо поділу/обєднання обєкту",
      "- технічне обстеження/технічний звіт",
    ],
    path: "services/bookingeneer",
    src: TechnicalIcon,
  },
  {
    title: "Оформлення нерухомості",
    services: [
      "- Введення в експлуатація новобудови",
      "- Реконструкція обєкту",
      "- Обєднання/поділ обєкту",
      "- Зміна цільового призначення обєкту",
    ],
    path: "services/calcpropertyservices",
    src: PropertyServIcon,
  },
];
