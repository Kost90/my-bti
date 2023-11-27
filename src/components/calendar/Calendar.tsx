"use client";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "./TimePicker";
import { isWeekdayAndPassday } from "./helpers";

export type bookedArr = {
  date: string;
  times: number[];
};

export default function Calendar() {
  const [currentDate, setcurrentDate] = useState<string>("");
  const [dates, setDates] = useState<bookedArr[]>([]);
  const [time, setTime] = useState<number[]>([]);
  console.log("date component");
  useEffect(() => {
    if (currentDate) {
      const index = dates.findIndex((item) => item.date === currentDate);

      if (index !== -1) {
        setDates((prev) =>
          prev.map((item, i) => {
            if (i === index) {
              return { ...item, times: [...item.times, ...time] };
            } else {
              return item;
            }
          })
        );
      } else {
        setDates((prevDates) => [
          ...prevDates,
          {
            date: currentDate,
            times: [...time],
          },
        ]);
      }
    }
  }, [time]);

  const handelAddDate = (data: Date) => {
    const newDate = data.toISOString().split("T")[0];
    setcurrentDate(newDate);
  };

  const handelAddTime = (data: Date) => {
    const newHour = data.getHours();
    setTime((prev) => [newHour]);
  };

  return (
    <div>
      <h4>Оберіть дату виїзду:</h4>
      <DatePicker
        filterDate={isWeekdayAndPassday}
        onChange={handelAddDate}
        dateFormat={"dd.MM.yyyy"}
        timeIntervals={120}
        placeholderText="Оберіть свободну дату"
      />
      <TimePicker
        time={time}
        dates={dates}
        curentDate={currentDate}
        onChange={handelAddTime}
      />
    </div>
  );
}
