import Calendar from '@/components/calendar/Calendar'
import BookForm from '@/components/forms/bookingeneer/BookForm'
import React from 'react'

const TechnicalpasportService =async () => {
  
  return (
    <div className="container my-7 md:my-14">
      <Calendar/>
      <BookForm/>
    </div>
  )
}

export default TechnicalpasportService