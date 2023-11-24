"use client";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import TimePicker from "./TimePicker";
import { isWeekdayAndPassday } from "./helpers";

type bookedArr = {
  date: string;
  times: number[];
};

export default function Calendar() {
  const [currentDate, setcurrentDate] = useState<string>();
  const [dates, setDates] = useState<bookedArr[]>([]);
  const [dateObj, setDateObj] = useState<Date[]>([]);
  const [time, setTime] = useState<number[]>([]);
  const [excludedTimes, setExcludedTimes] = useState<Date[]>([]);

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

  useEffect(() => {
    if (currentDate) {
      const selectedDate = new Date(currentDate);
      const excludedDateTimes = dateObj.filter(
        (dateTime) => dateTime.toDateString() === selectedDate.toDateString()
      );
      setExcludedTimes(excludedDateTimes);

    }
  }, [currentDate, dateObj]);

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
        // filterDate={(date) => !excludedDates.includes(date.toISOString().split("T")[0])}
        filterDate={isWeekdayAndPassday}
        // selected={new Date()}
        onChange={handelAddDate}
        dateFormat={"dd.MM.yyyy"}
        // excludeDates={dateObj}
        timeIntervals={120}
        // filterTime={filterTime}
        placeholderText="Оберіть свободну дату"
      />
      <DatePicker
        onChange={handelAddTime}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={120}
        excludeTimes={excludedTimes}
        timeCaption="Time"
        dateFormat="h:mm aa"
        minTime={new Date(0, 0, 0, 9, 0)}
        maxTime={new Date(0, 0, 0, 18, 0)}
      />
      {/* <TimePicker onChange={handelChange} data={dates} /> */}
    </div>
  );
}
