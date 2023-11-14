"use client";
import { useForm } from "react-hook-form";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import styles from './contactForm.module.css'

const phoneNumberRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const contactSchema = {
  name: string().trim().required().min(3).max(40).label("Your Firstname"),
  email: string()
    .email()
    .required()
    .matches(/@[^.]*\./)
    .label("Your email"),
  phone: string()
    .matches(phoneNumberRegex, "Is not a number")
    .label("Phone Number"),
  messagge: string().trim().required().min(3).label("Your message"),
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(contactSchema)),
  });
  return (
    <form className={styles.contactform}>
      <TextField
        label="Введіть Ваше імя"
        variant="outlined"
        type="text"
        fullWidth
        sx={{ "& fieldset": { borderColor: "#D5DAE1", background: "white" } }}
        {...register("name", { required: true })}
      />
      {errors.name?.message && (
        <div style={{ color: "red" }}>{errors.name.message}</div>
      )}

      <TextField
        label="Введіть Ваш email"
        variant="outlined"
        type="email"
        fullWidth
        sx={{ "& fieldset": { borderColor: "#D5DAE1", background: "white" } }}
        {...register("email", { required: true })}
      />
      {errors.email?.message && (
        <div style={{ color: "red" }}>{errors.email.message}</div>
      )}

      <TextField
        label="Введіть Ваш телефон"
        variant="outlined"
        type="phone"
        fullWidth
        sx={{ "& fieldset": { borderColor: "#D5DAE1", background: "white" } }}
        {...register("phone", { required: true })}
      />
      {errors.phone?.message && (
        <div style={{ color: "red" }}>{errors.phone.message}</div>
      )}

      <Textarea
        minRows={2}
        size="lg"
        variant="outlined"
        maxRows={100}
        placeholder="Ваше повідомлення"
        sx={{ width:'100%',
          "& fieldset": {
            borderColor: "#D5DAE1",
            background: "white",
            "&::placeholder": {
              color: "#D5DAE1",
            },
          },
        }}
        {...register("messagge", { required: true })}
      />
      {errors.messagge?.message && (
        <div style={{ color: "red" }}>{errors.messagge.message}</div>
      )}

      <Button type="submit" variant="contained" color="success">
        Надіслати
      </Button>
    </form>
  );
}

export default ContactForm;
