import { useState } from 'react'
import { Button } from "./ui/Button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/Dialog"
import { Label } from "./ui/Label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/Select"
import { Calendar } from "./ui/CalendarComponents"
import { format, isSameDay } from "date-fns"
import { CalendarIcon, Plus } from 'lucide-react'
import { useToast } from "./ui/Use-toast"

export function CreateAppointment({ onAppointmentCreated, existingAppointments }) {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState()
  const [time, setTime] = useState('')
  const [service, setService] = useState('')

  const isTimeSlotAvailable = (selectedDate, selectedTime) => {
    return !existingAppointments.some(apt => 
      isSameDay(apt.date, selectedDate) && apt.time === selectedTime
    )
  }

  const getAvailableTimeSlots = (selectedDate) => {
    const allTimeSlots = [
      "9:00 am", "10:00 am", "11:00 am", 
      "2:00 pm", "3:00 pm", "4:00 pm"
    ]

    return allTimeSlots.filter(timeSlot => 
      isTimeSlotAvailable(selectedDate, timeSlot)
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!date || !time || !service) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive"
      })
      return
    }

    if (!isTimeSlotAvailable(date, time)) {
      toast({
        title: "Time Slot Unavailable",
        description: "This hour is already booked. Please select another time.",
        variant: "destructive"
      })
      return
    }

    const newAppointment = {
      id: Math.random().toString(36).substr(2, 9),
      title: "Max's " + service,
      time: time,
      day: format(date, 'EEEE'),
      service: `Karisa ${service} Services`,
      date: date
    }

    onAppointmentCreated(newAppointment)
    setOpen(false)
    // Reset form
    setDate(undefined)
    setTime('')
    setService('')
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Create Appointment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Appointment</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="service">Service Type</Label>
            <Select value={service} onValueChange={setService}>
              <SelectTrigger>
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Vaccine">Vaccine</SelectItem>
                <SelectItem value="Grooming">Grooming</SelectItem>
                <SelectItem value="Checkup">Checkup</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Select 
              value={time} 
              onValueChange={setTime} 
              disabled={!date}
            >
              <SelectTrigger>
                <SelectValue placeholder={date ? "Select time" : "Please select a date first"} />
              </SelectTrigger>
              <SelectContent>
                {date && getAvailableTimeSlots(date).map((timeSlot) => (
                  <SelectItem key={timeSlot} value={timeSlot}>
                    {timeSlot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Create Appointment
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
