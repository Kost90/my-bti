"use client";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./contactForm.module.css";

type Inputs = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const phoneNumberRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const contactSchema = {
  name: string().trim().required().min(3).max(40),
  email: string()
    .email()
    .required()
    .matches(/@[^.]*\./),
  phone: string().matches(phoneNumberRegex, "Is not a number"),
  message: string().trim().required().min(3),
};

function ContactForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(contactSchema)),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
    router.replace("/services/modalwindow")
  };
  return (
    <form className={styles.contactform} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Введіть Ваше імя"
        className={styles.text_input}
        {...register("name", { required: true })}
      />
      {errors.name?.message && (
        <div style={{ color: "red" }}>Імя це обовязкове поле</div>
      )}

      <input
        type="email"
        placeholder="Введіть Ваш email"
        className={styles.text_input}
        {...register("email", { required: true })}
      />
      {errors.email?.message && (
        <div style={{ color: "red" }}>Введіть email</div>
      )}

      <input
        type="text"
        placeholder="Введіть Ваш телефон"
        className={styles.text_input}
        {...register("phone", { required: true })}
      />
      {errors.phone?.message && (
        <div style={{ color: "red" }}>Введіть номер телефону</div>
      )}

      <textarea
        placeholder="Ваше повідомлення"
        {...register("message", { required: true })}
        className={styles.textarea}
      />

      {errors.message?.message && (
        <div style={{ color: "red" }}>Введіть повідомлення</div>
      )}
      <Button type={"submit"}>
        Надіслати
      </Button>
    </form>
  );
}

export default ContactForm;
