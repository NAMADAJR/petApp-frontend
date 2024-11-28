// import Image from 'next/image'
import { useState } from 'react'
import { format, isAfter, isBefore, startOfDay } from 'date-fns'
import { Button } from "./ui/Button"
import { Trash2 } from 'lucide-react'
import { CreateAppointment } from './CreateAppointmentModal'

export function UpcomingEvents({ events, onAppointmentCreated, onDelete }) {
  const [selectedEventId, setSelectedEventId] = useState(null)
  const [deleting, setDeleting] = useState([])

  const sortedEvents = [...events].sort((a, b) => {
    if (isBefore(a.date, b.date)) return -1
    if (isAfter(a.date, b.date)) return 1
    return 0
  })

  const upcomingEvents = sortedEvents.filter(event => 
    isAfter(event.date, startOfDay(new Date()))
  )

  const handleDelete = async (e, id) => {
    e.stopPropagation()
    setDeleting([...deleting, id])
    try {
      await onDelete(id)
    } finally {
      setDeleting(deleting.filter(item => item !== id))
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
      <CreateAppointment 
        onAppointmentCreated={onAppointmentCreated}
        existingAppointments={events.map(event => ({
          date: event.date,
          time: event.time
        }))}
      />
      <div className="space-y-3 mt-4">
        {upcomingEvents.map((event) => (
          <div 
            key={event.id}
            onClick={() => setSelectedEventId(event.id)}
            className={`flex items-center justify-between rounded-lg p-3 cursor-pointer transition-colors
              ${selectedEventId === event.id ? 'bg-[#C8E6C9]' : 'bg-[#E8F5E9] hover:bg-[#C8E6C9]'}`}
          >
            <div className="flex items-center space-x-3">
              <img 
                src="/Lilly.png" 
                alt="Pet" 
                width={50} 
                height={50} 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-medium">{event.title}</div>
                <div className="text-sm text-gray-600">
                  {`${event.time} | ${format(event.date, 'EEEE, MMM d')}`}
                </div>
              </div>
            </div>
            <Button
              onClick={(e) => handleDelete(e, event.id)}
              disabled={deleting.includes(event.id)}
              variant="ghost"
              size="sm"
              className="text-red-500 hover:text-red-700 bg-transparent"
            >
              <Trash2 className="h-6 w-6 bg-transparent" />
            </Button>
          </div>
        ))}
        {upcomingEvents.length === 0 && (
          <div className="text-center text-gray-500 py-4">
            No upcoming appointments
          </div>
        )}
      </div>
    </div>
  )
}
