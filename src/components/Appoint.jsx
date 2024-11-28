import { useState } from 'react'
import { MissedAppointments } from './MissedAppointments'
import { CalendarView } from './CalendarView'
import { UpcomingEvents } from './UpcomingEvents'
// import Image from 'next/image'
import { isBefore, startOfDay, addDays } from 'date-fns'
import { useToast } from "./ui/Use-toast"
import { Navbar } from './Navbar'

export default function Appoint() {
  const { toast } = useToast()
  const [appointments, setAppointments] = useState([
    {
      id: '1',
      title: "Max's Vaccine",
      time: "10:44 am",
      service: "Karisa Veterinary Services",
      location: "Vet Clinic",
      date: addDays(new Date(), -2), // Example missed appointment
      day: "Wednesday"
    },
    {
      id: '2',
      title: "Max's Checkup",
      time: "2:30 pm",
      service: "Karisa Veterinary Services",
      location: "Vet Clinic",
      date: addDays(new Date(), 2), // Example upcoming appointment
      day: "Friday"
    }
  ])

  const handleAppointmentCreated = (newAppointment) => {
    setAppointments((prev) => [...prev, newAppointment]);
    toast({
      title: "Appointment Created",
      description: `${newAppointment.title} scheduled for ${newAppointment.time}.`,
    });
  };
  

  const handleAppointmentDelete = async (id) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    setAppointments(prev => prev.filter(apt => apt.id !== id))
    toast({
      title: "Appointment Deleted",
      description: "The appointment has been successfully deleted.",
    })
  }

  const handleReschedule = async (id) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    setAppointments(prev => prev.map(apt => {
      if (apt.id === id) {
        // Move the appointment to tomorrow
        const newDate = addDays(new Date(), 1)
        return {
          ...apt,
          date: newDate,
          day: newDate.toLocaleDateString('en-US', { weekday: 'long' })
        }
      }
      return apt
    }))
    toast({
      title: "Appointment Rescheduled",
      description: "The appointment has been rescheduled for tomorrow.",
    })
  }

  const handleDaySelect = (date) => {
    if (isBefore(startOfDay(date), startOfDay(new Date()))) {
      toast({
        title: "Invalid Selection",
        description: "You cannot select a date in the past.",
      });
      return;
    }
    console.log("Selected date:", date);
  };
  
//   const isPastDate = isBefore(startOfDay(newAppointment.date), startOfDay(new Date()));
// if (isPastDate) {
//   toast({
//     title: "Invalid Date",
//     description: "Appointments cannot be scheduled in the past.",
//   });
//   return;
// }

// if (!newAppointment.title || !newAppointment.date || !newAppointment.time) {
//   toast({
//     title: "Error",
//     description: "All fields are required to create an appointment.",
//   });
//   return;
// }


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <div className="w-[1600px] mx-auto grid grid-cols-12 gap-6 py-6">
        <div className="col-span-3">
          <MissedAppointments 
            appointments={appointments}
            onReschedule={handleReschedule}
            onDelete={handleAppointmentDelete}
          />
        </div>
        <div className="col-span-6">
          <CalendarView 
            appointments={appointments}
            onDaySelect={handleDaySelect}
          />
        </div>
        <div className="col-span-3">
          <UpcomingEvents 
            events={appointments}
            onAppointmentCreated={handleAppointmentCreated}
            onDelete={handleAppointmentDelete}
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg p-6 flex items-center justify-between">
          <div className="max-w-md">
            <blockquote className="text-lg font-medium text-gray-700">
              "The greatness of a nation and its moral progress can be judged by the way its animals are treated."
            </blockquote>
            <cite className="text-sm text-gray-600 mt-2 block">- Mahatma Gandhi</cite>
          </div>
          {/* <Image 
            src="/placeholder.svg" 
            alt="Illustration" 
            width={300}
            height={200}
            className="w-72"
          /> */}
        </div>
      </div>
    </div>
  )
}
