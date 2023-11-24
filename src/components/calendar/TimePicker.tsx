"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TimePickerProps {
  onChange: (hours: number, minutes: number) => void;
  data: Date[];
}

function TimePicker({ onChange, data }: TimePickerProps) {
  const handelAddTime = (time: Date) => {
    const dateTime = time;
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    onChange(hours, minutes);
  };


  return (
    <DatePicker
      onChange={handelAddTime}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={120}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  );
}

export default TimePicker;
