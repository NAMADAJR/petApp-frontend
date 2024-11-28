import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/Button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/Dialog'
import { Label } from './ui/Label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/Select'
import { Calendar } from './ui/CalendarComponents'
import { format, isSameDay } from 'date-fns'
import { CalendarIcon, Plus } from 'lucide-react'
import { useToast } from './ui/Use-toast'

export function CreateAppointment({
  onAppointmentCreated,
  existingAppointments,
}) {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState()
  const [time, setTime] = useState('')
  const [service, setService] = useState('')
  const [showForm, setShowForm] = useState(false)

  const [formInput, setFormInput] = useState({
    name: '',
    type: '',
    date: '',
    time: '',
  })

  const currentDate = new Date()

  const isTimeSlotAvailable = (selectedDate, selectedTime) => {
    return !existingAppointments.some(
      (apt) => isSameDay(apt.date, selectedDate) && apt.time === selectedTime
    )
  }

  const getAvailableTimeSlots = (selectedDate) => {
    const allTimeSlots = [
      '9:00 am',
      '10:00 am',
      '11:00 am',
      '2:00 pm',
      '3:00 pm',
      '4:00 pm',
    ]

    return allTimeSlots.filter((timeSlot) =>
      isTimeSlotAvailable(selectedDate, timeSlot)
    )
  }

  const handleFormInputChange = (e) => {
    const { name, value } = e.target
    setFormInput({ ...formInput, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newAppointment = {
      id: appointments.length + 1,
      title: formInput.title,
      name: formInput.name,
      service: formInput.service,
      date: formInput.date,
      time: formInput.time,
    }
    setAppointments([...appointments, newAppointment])
    setShowForm(false)
    setFormInput({ title: '', service: '', type: '', date: '', time: '' })
  }

  // const upcomingAppointments = appointments.filter(
  //   (appointment) => new Date(appointment.date) >= currentDate
  // );

  // const missedAppointments = appointments.filter(
  //   (appointment) => new Date(appointment.date) < currentDate
  // );

  const handleSubmitss = (e) => {
    e.preventDefault()
    if (!date || !time || !service) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      })
      return
    }

    if (!isTimeSlotAvailable(date, time)) {
      toast({
        title: 'Time Slot Unavailable',
        description: 'This hour is already booked. Please select another time.',
        variant: 'destructive',
      })
      return
    }

    const newAppointment = {
      id: Math.random().toString(36).substr(2, 9),
      title: "Max's " + service,
      time: time,
      day: format(date, 'EEEE'),
      service: `Karisa ${service} Services`,
      date: date,
    }

    onAppointmentCreated(newAppointment)
    setOpen(false)
    // Reset form
    setDate(undefined)
    setTime('')
    setService('')
  }

  return (
    <div>
      <div>
        <button onClick={() => setShowForm(true)}>Create Appointments</button>
        {showForm && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white p-6 rounded shadow-lg w-1/3'>
              <h2 className='text-lg font-bold mb-4'>Create Appointment</h2>
              <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <label className='block text-sm font-medium'>Name</label>
                  <input
                    type='text'
                    name='service'
                    value={formInput.service}
                    onChange={handleFormInputChange}
                    className='w-full p-2 border rounded'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium'>Service</label>
                  <select
                    name='type'
                    value={formInput.type}
                    onChange={handleFormInputChange}
                    className='w-full p-2 border rounded'
                    required>
                    <option value=''>Select Type</option>
                    <option value='Vaccine'>Vaccine</option>
                    <option value='Grooming'>Grooming</option>
                    <option value='Checkup'>Checkup</option>
                  </select>
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium'>Date</label>
                  <input
                    type='date'
                    name='date'
                    value={formInput.date}
                    onChange={handleFormInputChange}
                    className='w-full p-2 border rounded'
                    min={currentDate.toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium'>Time</label>
                  <input
                    type='time'
                    name='time'
                    value={formInput.time}
                    onChange={handleFormInputChange}
                    className='w-full p-2 border rounded'
                    required
                  />
                </div>
                <div className='flex justify-end'>
                  <button
                    type='button'
                    onClick={() => setShowForm(false)}
                    className='px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 mr-2'>
                    Cancel
                  </button>
                  <Link to='/community'>
                    <button
                      type='submit'
                      className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
                      Submit
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <div></div>
    </div>
  )
}
