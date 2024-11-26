import React, { useState, useEffect } from 'react'
import { DatePicker, TimePicker, Space, Button } from 'antd'
import moment from 'moment-timezone'
import Calendar from './Calendar.jsx'
import './Appoint.css'

const Appoint = () => {
  const [appointments, setAppointments] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [timeZone, setTimeZone] = useState('GMT')
  const [errorMessage, setErrorMessage] = useState('')
  const availableZones = ['GMT', 'UTC', 'PST', 'CET']

  // Retrieve appointments from localStorage when the component mounts
  useEffect(() => {
    const savedAppointments = localStorage.getItem('appointments')
    if (savedAppointments) {
      setAppointments(JSON.parse(savedAppointments))
      console.log('Appointments loaded from localStorage:', savedAppointments)
    } else {
      console.log('No appointments found in localStorage')
    }
  }, [])

  // Save appointments to localStorage whenever the appointments state changes
  useEffect(() => {
    if (appointments.length > 0) {
      localStorage.setItem('appointments', JSON.stringify(appointments))
      console.log('Appointments saved to localStorage:', appointments)
    }
  }, [appointments])

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleTimeChange = (time) => {
    setSelectedTime(time)
  }

  const handleTimeZoneChange = (e) => {
    setTimeZone(e.target.value)
  }

  const checkTimeGap = (newDate, newTime) => {
    for (let i = 0; i < appointments.length; i++) {
      const existingApptDate = moment(appointments[i].date, 'YYYY-MM-DD')
      const existingApptTime = moment(appointments[i].time, 'h:mm A')
      const existingApptDateTime = existingApptDate.clone().set({
        hour: existingApptTime.hour(),
        minute: existingApptTime.minute(),
      })

      const newApptDateTime = newDate.clone().set({
        hour: newTime.hour(),
        minute: newTime.minute(),
      })

      if (existingApptDate.isSame(newDate, 'day')) {
        const timeDiff = Math.abs(
          newApptDateTime.diff(existingApptDateTime, 'hours')
        )
        if (timeDiff < 3) {
          return false
        }
      }
    }
    return true
  }

  const handleSaveAppointment = () => {
    if (!selectedDate || !selectedTime) {
      setErrorMessage('Please select both date and time')
      return
    }

    if (!checkTimeGap(selectedDate, selectedTime)) {
      setErrorMessage('Appointments must be spaced at least 3 hours apart.')
      return
    }

    const newAppointment = {
      date: selectedDate.format('YYYY-MM-DD'),
      day: selectedDate.format('dddd'),
      time: selectedTime.format('h:mm A'),
    }

    setAppointments([...appointments, newAppointment])
    setSelectedDate(null)
    setSelectedTime(null)
    setErrorMessage('')
  }

  const handleDeleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index)
    setAppointments(updatedAppointments)
  }

  const upcomingAppointments = appointments.filter((appt) =>
    moment(appt.date).isSameOrAfter(moment(), 'day')
  )
  const missedAppointments = appointments.filter((appt) =>
    moment(appt.date).isBefore(moment(), 'day')
  )

  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[1805px] h-auto mt-[80px] flex flex-row align-middle justify-center'>
          <div className='w-full h-full flex flex-row justify-around  '>
            <div className='h-auto w-[38%] p-[10px] flex justify-start flex-col align-center border-[#38618D]'>
              <div
                style={{
                  width: '100%',
                  height: 'auto',
                  border: 'solid #38618D 2.5px',
                  padding: '10px',
                  borderRadius: '10px',
                }}>
                <p className='text-[#38618D] font-bold text-[1.7rem] text-center my-[20px]'>
                  Missed Appointments
                </p>
                {missedAppointments.length > 0 ? (
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {missedAppointments.map((appt, index) => (
                      <li
                        key={index}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          marginTop: '20px',
                        }}>
                        <img
                          src='./Lilly.png'
                          alt=''
                          style={{ width: '65px', height: '100%' }}
                        />
                        <div>
                          <p
                            style={{
                              fontSize: '1.3rem',
                              fontWeight: 'bold',
                            }}>
                            Max's Vaccine
                          </p>
                          {`  ${appt.date} | ${appt.day} | ${appt.time}`}
                          <Button
                            type='link'
                            onClick={() => handleDeleteAppointment(index)}
                            style={{ color: 'red', marginLeft: '10px' }}>
                            Delete
                          </Button>
                        </div>
                        <Button style={{ color: 'red', marginLeft: '10px' }}>
                          Reschedule
                        </Button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No missed Appointments.</p>
                )}
              </div>
            </div>
            <div className='w-[61%] h-full flex flex-col '>
              {/* Book Appointment */}
              <div className='h-auto w-full '>
                <div
                  style={{
                    width: '100%',
                    height: 'auto',
                    border: 'solid #38618D 2.5px',
                    padding: '10px',
                    borderRadius: '10px',
                  }}>
                  <h2 className='text-[#38618D] font-bold text-[1.7rem] text-center my-[20px]'>
                    Book an Appointment
                  </h2>
                  <Space direction='vertical' style={{ width: '100%' }}>
                    <DatePicker
                      style={{ width: '100%' }}
                      onChange={handleDateChange}
                      placeholder='Select Date'
                    />
                    <TimePicker
                      style={{ width: '100%' }}
                      onChange={handleTimeChange}
                      placeholder='Select Time'
                      use12Hours
                      format='h:mm A'
                    />
                    <select
                      style={{ width: '50%', padding: '8px', fontSize: '16px' }}
                      value={timeZone}
                      onChange={handleTimeZoneChange}>
                      {availableZones.map((zone) => (
                        <option key={zone} value={zone}>
                          {zone}
                        </option>
                      ))}
                    </select>
                    <Button
                      type='primary'
                      onClick={handleSaveAppointment}
                      style={{ marginTop: '10px' }}>
                      Save Appointment
                    </Button>
                  </Space>
                  {errorMessage && (
                    <p style={{ color: 'red', marginTop: '10px' }}>
                      {errorMessage}
                    </p>
                  )}
                </div>
              </div>
              {/* Selected Appointment */}
              <div>
                <div style={{ fontSize: '1.5rem', padding: '10px' }}>
                  <h3>Selected Appointment:</h3>
                  <p>
                    Date:{' '}
                    {selectedDate
                      ? selectedDate.format('YYYY-MM-DD')
                      : 'Not selected'}
                  </p>
                  <p>
                    Time:{' '}
                    {selectedTime
                      ? selectedTime.format('h:mm A')
                      : 'Not selected'}
                  </p>
                  <p>Time Zone: {timeZone}</p>
                </div>
              </div>
              {/* Quotes */}
              {/* THinking of of doing a carousel */}
              <div className='w-full h-[160px] p-[10px] flex flex-row'>
                <div>
                  <p
                    style={{
                      fontFamily: 'fantasy',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                    }}>
                    The greatness of a nation and its moral progress can be
                    judged by the way its animals are treated.
                  </p>
                  <div>
                    {' '}
                    <p
                      style={{
                        fontFamily: 'cursive',
                        fontSize: '1.8rem',
                        fontWeight: 'bolder',
                      }}>
                      Mahatma Ghandi
                    </p>{' '}
                  </div>
                </div>
                <img
                  src='./ladyy.png'
                  alt=''
                  srcset=''
                  className='w-[190px] h-full ml-1'
                />
              </div>
            </div>
          </div>
          <div className='h-auto w-[30%] p-[10px] '>
            <div>
              <Calendar appointments={appointments} />
            </div>
            <div
              style={{
                width: '100%',
                height: 'auto',
                border: 'solid #38618D 2.5px',
                padding: '10px',
                borderRadius: '10px',
                marginTop: '100px',
              }}>
              <h3 className='text-[#38618D] font-bold text-[1.7rem] text-center my-[20px]'>
                Upcoming Events
              </h3>
              {upcomingAppointments.length > 0 ? (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {upcomingAppointments.map((appt, index) => (
                    <li
                      key={index}
                      style={{ display: 'flex', flexDirection: 'row' }}>
                      <img
                        src='./Lilly.png'
                        alt=''
                        style={{ width: '65px', height: '100%' }}
                      />
                      <div>
                        <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                          Max's Vaccine
                        </p>
                        {`  ${appt.date} | ${appt.day} | ${appt.time}`}
                        <Button
                          type='link'
                          onClick={() => handleDeleteAppointment(index)}
                          style={{ color: 'red', marginLeft: '10px' }}>
                          Delete
                        </Button>
                      </div>
                      <Button style={{ color: 'red', marginLeft: '10px' }}>
                        Confirm
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No upcoming events.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

