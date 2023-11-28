"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector } from "@/lib/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { addOrder } from "@/lib/features/orders/OrderSlice";
import styles from "./BookForm.module.css";
// import { string, object, number } from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

enum TypeDevelopEnum {
  flat = "квартира",
  house = "будинок",
  other = "приміщення",
}

interface IFormInput {
  name: string;
  street: string;
  number?: number;
  typeDevelop: TypeDevelopEnum;
  phone?: string;
  email: string;
  square: number;
}

// const phoneNumberRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
// const bookSchema = {
//   name: string().trim().required().min(3).max(40),
//   email: string()
//     .email()
//     .required()
//     .matches(/@[^.]*\./),
//   phone: string().matches(phoneNumberRegex, "Is not a number"),
//   typeDevelop: string().trim().required().min(3).max(40),
//   street: string().trim().required().min(3).max(40),
//   number: number(),
//   square: number(),
// };

function BookForm() {
  const book = useAppSelector((state) => state.booking.booking);
  const order = useAppSelector((state) => state.orders.orders);

  console.log(order);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const booking = {
      ...book,
      name: data.name,
      street: data.street,
      number: data.number,
      typeDevelop: data.typeDevelop,
      phone: data.phone ?? "",
      email: data.email,
      square: data.square,
    };
    dispatch(addOrder(booking));
    reset();
  };

  return (
    <>
      {book.time !== undefined ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Ваше імя</label>
          <input
            type="text"
            className={styles.text_input}
            {...register("name")}
          />
          <label>Тип обєкту</label>
          <select {...register("typeDevelop")}>
            <option value="flat">квартира</option>
            <option value="house">будинок</option>
            <option value="other">приміщення</option>
          </select>
          <label>вулиця:</label>
          <input className={styles.text_input} {...register("street")} />
          <label>номер:</label>
          <input
            className={styles.text_input}
            {...register("number")}
            type="number"
          />
          <label>телефон:</label>
          <input
            type="text"
            className={styles.text_input}
            placeholder="Введіть Ваш телефон"
            {...register("phone")}
          />
          <label>email:</label>
          <input
            type="email"
            className={styles.text_input}
            placeholder="Введіть Ваш email"
            {...register("email")}
          />
          {errors.email?.message && (
            <div style={{ color: "red" }}>Введіть email</div>
          )}
          <label>орієнтовна площа:</label>
          <input type="number" {...register("square")} />
          <input className={styles.submit_btn} type="submit" />
        </form>
      ) : null}
    </>
  );
}

export default BookForm;
