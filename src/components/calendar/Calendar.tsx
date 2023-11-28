"use client";
import { useState, useEffect, useCallback } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatesPicker from "./DatesPicker";
import TimePicker from "./TimePicker";
import styles from './Calendar.module.css'

export type bookedArr = {
  date: string;
  times: number[];
};

export default function Calendar() {
  const [currentDate, setcurrentDate] = useState<string>("");
  const [dates, setDates] = useState<bookedArr[]>([]);
  const [time, setTime] = useState<number[]>([]);

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

  const handelAddDate = useCallback((data: Date) => {
    const newDate = data.toISOString().split("T")[0];
    setcurrentDate(newDate);
  }, []);

  const handelAddTime = (data: Date) => {
    const newHour = data.getHours();
    setTime((prev) => [newHour]);
  };

  return (
    <div className={styles.container_pickers}>
      <DatesPicker onChange={handelAddDate} currentDate={currentDate} />
      {currentDate && (
        <TimePicker
          time={time}
          dates={dates}
          curentDate={currentDate}
          onChange={handelAddTime}
        />
      )}
    </div>
  );
}
