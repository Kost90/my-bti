import Calendar from '@/components/calendar/Calendar'
import BookForm from '@/components/forms/bookingeneer/BookForm'
import TextContent from '@/ui/textcontent/bookingeneerpage/TextContent'

const TechnicalpasportService =async () => {
  
  return (
    <div className="container my-7 md:my-14 flex items-center flex-col gap-8 md:gap-14 min-h-screen">
      <TextContent/>
      <Calendar/>
      <BookForm/>
    </div>
  )
}

export default TechnicalpasportService