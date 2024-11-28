// import Image from 'next/image'
import { useState } from 'react'
import { Button } from "./ui/Button"
import { Trash2 } from 'lucide-react'
import { isBefore, startOfDay } from 'date-fns'

export function MissedAppointments({ appointments, onReschedule, onDelete }) {
  const [rescheduling, setRescheduling] = useState([])
  const [deleting, setDeleting] = useState([])

  const missedAppointments = appointments.filter(appointment => 
    isBefore(appointment.date, startOfDay(new Date()))
  )

  const handleReschedule = async (id) => {
    setRescheduling([...rescheduling, id])
    try {
      await onReschedule(id)
    } finally {
      setRescheduling(rescheduling.filter(item => item !== id))
    }
  }

  const handleDelete = async (id) => {
    setDeleting([...deleting, id])
    try {
      await onDelete(id)
    } finally {
      setDeleting(deleting.filter(item => item !== id))
    }
  }

  return (
    <div className="p-4 w-[400px]">
      <h2 className="text-lg font-semibold mb-4">Missed Appointments</h2>
      <div className="space-y-3">
        {missedAppointments.map((appointment) => (
          <div key={appointment.id} className="flex items-center justify-between w-auto bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center space-x-3">
              <img
                src="/Lilly.png" 
                alt="Pet"
                width={40} 
                height={40} 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-medium">{appointment.title}</div>
                <div className="text-sm text-red-500">{appointment.time}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => handleReschedule(appointment.id)}
                disabled={rescheduling.includes(appointment.id)}
                variant="outline"
                size="sm"
              >
                {rescheduling.includes(appointment.id) ? 'Rescheduling...' : 'Reschedule'}
              </Button>
              <Button
                onClick={() => handleDelete(appointment.id)}
                disabled={deleting.includes(appointment.id)}
                variant="ghost"
                size="sm"
                className="text-red-500 hover:text-red-700 bg-transparent"
              >
                <Trash2 className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
        ))}
        {missedAppointments.length === 0 && (
          <div className="text-center text-gray-500 py-4">
            No missed appointments
          </div>
        )}
      </div>
    </div>
  )
}
