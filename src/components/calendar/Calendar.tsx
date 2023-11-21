"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar() {
  const [date, setDate] = useState(new Date());

  console.log(date)

  return (
    <div>
      <h4>Оберіть дату виїзду:</h4>
      <DatePicker selected={date} onChange={(date: Date) => setDate(date)}
      dateFormat="yyyy/MM/dd" />
    </div>
  );
}
