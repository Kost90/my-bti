"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {format} from 'date-fns'


export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [dates,setDates] = useState<Date[]>([])
  
console.log(dates)

// const weekend = (date:Date) => new Date() < date || date.getDay() === 6 || date.getDay() === 0

// || date.getDay() === 6 || date.getDay() === 0

dates.map((date) => {
  console.log(date.toLocaleDateString())
})

const handelAdd = (data:Date) => {
  const date = data
  setDates(prev => [...prev,date])
}



  return (
    <div>
      <h4>Оберіть дату виїзду:</h4>
      <DatePicker
      // filterDate={weekend}
        selected={date}
        onChange={handelAdd}
        dateFormat={"dd.MM.yyyy"}
        excludeDates={dates}
        showTimeSelect
        minTime={new Date(0, 0, 0, 9, 0)}
        maxTime={new Date(0, 0, 0, 18, 0)}
      />
    </div>
  );
}
