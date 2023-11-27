"use client";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import type { bookedArr } from "./Calendar";

interface TimePickerProps {
  time: number[];
  dates: bookedArr[];
  curentDate: string;
  onChange: (data: Date) => void;
}

function TimePicker({ dates, curentDate, onChange }: TimePickerProps) {
  const [dateObj, setDateObj] = useState<Date[]>([]);
  const [excludedTimes, setExcludedTimes] = useState<Date[]>([]);

  console.log("time component");
  useEffect(() => {
    if (curentDate) {
      const selectedDate = new Date(curentDate);
      const excludedDateTimes = dateObj.filter(
        (dateTime) => dateTime.toDateString() === selectedDate.toDateString()
      );
      setExcludedTimes(excludedDateTimes);
    }
  }, [curentDate, dateObj]);

  useEffect(() => {
    const newDateObjects: Date[] = [];

    dates.forEach((item) => {
      item.times.forEach((time) => {
        const dateString = `${item.date} ${time}:00`;
        newDateObjects.push(new Date(dateString));
      });
    });

    setDateObj(newDateObjects);
  }, [dates]);

  return (
    <>
      <h4>Обрати час:</h4>
      <DatePicker
        onChange={onChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={120}
        excludeTimes={excludedTimes}
        timeCaption="Time"
        dateFormat="h:mm aa"
        minTime={new Date(0, 0, 0, 9, 0)}
        maxTime={new Date(0, 0, 0, 18, 0)}
      />
    </>
  );
}

export default TimePicker;
