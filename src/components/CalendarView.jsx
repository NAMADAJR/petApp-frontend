import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { format, isSameDay } from 'date-fns'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/Select"

const TIME_ZONES = [
  {
    region: "Africa",
    zones: [
      { value: "Africa/Cairo", label: "Egypt (GMT+2)" },
      { value: "Africa/Lagos", label: "Nigeria (GMT+1)" },
      { value: "Africa/Johannesburg", label: "South Africa (GMT+2)" },
      { value: "Africa/Nairobi", label: "Kenya (GMT+3)" }
    ]
  },
  {
    region: "Asia",
    zones: [
      { value: "Asia/Dubai", label: "UAE (GMT+4)" },
      { value: "Asia/Tokyo", label: "Japan (GMT+9)" },
      { value: "Asia/Shanghai", label: "China (GMT+8)" },
      { value: "Asia/Singapore", label: "Singapore (GMT+8)" },
      { value: "Asia/Seoul", label: "South Korea (GMT+9)" },
      { value: "Asia/Kolkata", label: "India (GMT+5:30)" },
      { value: "Asia/Jakarta", label: "Indonesia (GMT+7)" }
    ]
  },
  {
    region: "Europe",
    zones: [
      { value: "Europe/London", label: "United Kingdom (GMT+0/+1)" },
      { value: "Europe/Paris", label: "France (GMT+1/+2)" },
      { value: "Europe/Berlin", label: "Germany (GMT+1/+2)" },
      { value: "Europe/Rome", label: "Italy (GMT+1/+2)" },
      { value: "Europe/Madrid", label: "Spain (GMT+1/+2)" },
      { value: "Europe/Moscow", label: "Russia (GMT+3)" }
    ]
  },
  {
    region: "North America",
    zones: [
      { value: "America/New_York", label: "USA Eastern (GMT-5/-4)" },
      { value: "America/Chicago", label: "USA Central (GMT-6/-5)" },
      { value: "America/Denver", label: "USA Mountain (GMT-7/-6)" },
      { value: "America/Los_Angeles", label: "USA Pacific (GMT-8/-7)" },
      { value: "America/Toronto", label: "Canada Eastern (GMT-5/-4)" },
      { value: "America/Vancouver", label: "Canada Pacific (GMT-8/-7)" }
    ]
  },
  {
    region: "South America",
    zones: [
      { value: "America/Sao_Paulo", label: "Brazil (GMT-3)" },
      { value: "America/Buenos_Aires", label: "Argentina (GMT-3)" },
      { value: "America/Santiago", label: "Chile (GMT-4/-3)" },
      { value: "America/Lima", label: "Peru (GMT-5)" }
    ]
  },
  {
    region: "Oceania",
    zones: [
      { value: "Australia/Sydney", label: "Australia Eastern (GMT+10/+11)" },
      { value: "Australia/Perth", label: "Australia Western (GMT+8)" },
      { value: "Pacific/Auckland", label: "New Zealand (GMT+12/+13)" },
      { value: "Pacific/Fiji", label: "Fiji (GMT+12)" }
    ]
  }
]

export function CalendarView({ appointments, onDaySelect }) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [timeZone, setTimeZone] = useState('Europe/London')
  const [selectedDay, setSelectedDay] = useState(null)

  const navigateMonth = (direction) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate)
      if (direction === 'prev') {
        newDate.setMonth(prevDate.getMonth() - 1)
      } else {
        newDate.setMonth(prevDate.getMonth() + 1)
      }
      return newDate
    })
  }

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDay = new Date(year, month, 1).getDay()
    return { daysInMonth, firstDay }
  }

  const { daysInMonth, firstDay } = getDaysInMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const handleDayClick = (day) => {
    setSelectedDay(day)
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    onDaySelect(selectedDate)
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Appointments</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span>
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
            </span>
            <div className="flex space-x-1">
              <button 
                onClick={() => navigateMonth('prev')}
                className="p-1 text-white hover:text-black hover:bg-gray-100 rounded"
              >
                <ChevronLeft className="w-4 h-4 " />
              </button>
              <button 
                onClick={() => navigateMonth('next')}
                className="p-1 text-white hover:text-black  hover:bg-gray-100 rounded"
              >
                <ChevronRight className="w-4 h-4 " />
              </button>
            </div>
          </div>
          <Select 
            value={timeZone}
            onValueChange={setTimeZone}
          >
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select time zone" />
            </SelectTrigger>
            <SelectContent>
              {TIME_ZONES.map((region) => (
                <SelectGroup key={region.region}>
                  <SelectLabel>{region.region}</SelectLabel>
                  {region.zones.map((zone) => (
                    <SelectItem 
                      key={zone.value} 
                      value={zone.value}
                    >
                      {zone.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 mb-4">
        {['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="text-center font-medium">
            {day}
          </div>
        ))}
        {Array.from({ length: firstDay - 1 }).map((_, index) => (
          <div key={`empty-${index}`} className="h-8" />
        ))}
        {days.map((day) => {
          const currentDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
          const hasAppointments = appointments.some(apt => isSameDay(apt.date, currentDayDate))
          
          return (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              className={`h-8 rounded-full flex items-center justify-center transition-colors relative
                ${selectedDay === day ? 'bg-blue-500 text-[1.2rem] text-white' : 'hover:bg-gray-100 hover:text-black'}
                ${hasAppointments ? 'font-bold' : ''}`}
            >
              {day}
              {hasAppointments && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
              )}
            </button>
          )
        })}
      </div>

      <div className="mt-8 space-y-4">
        {appointments
          .filter(appointment => 
            selectedDay ? 
              isSameDay(appointment.date, new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay)) 
              : true
          )
          .map((appointment) => (
            <div 
              key={appointment.id}
              className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-lg">{appointment.title}</h3>
                  <p className="text-gray-600">{appointment.service}</p>
                </div>
                <span className="text-gray-600">{appointment.time}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
