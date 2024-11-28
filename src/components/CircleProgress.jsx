import React, { useState } from 'react'
import { format, addDays, subDays, isAfter, isBefore } from 'date-fns'
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'
import { Calendar } from './ui/CalendarComponents'
import { Popover, PopoverContent, PopoverTrigger } from './ui/Popover'

function CircleProgress({ label, value, color, subtitle }) {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <Card className='p-4 flex flex-col h-full w-full items-center'>
      <div className='flex items-center justify-between w-full mb-2'>
        <span className='font-medium text-sm'>{label}</span>
        <span className='text-xs text-muted-foreground'>{subtitle}</span>
      </div>
      <div className='relative w-32 h-32 flex items-center justify-center'>
        <svg className='transform -rotate-90 w-32 h-32'>
          <circle
            cx='64'
            cy='64'
            r={radius}
            stroke='#ebebeb'
            strokeWidth='8'
            fill='none'
            className='text-muted/20 w-[200px]'
          />
          <circle
            cx='64'
            cy='64'
            r={radius}
            stroke={color}
            strokeWidth='8'
            fill='none'
            strokeLinecap='round'
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              transition: 'stroke-dashoffset 0.5s ease',
            }}
          />
        </svg>
        <span className='absolute text-2xl font-bold'>{value}%</span>
      </div>
    </Card>
  )
}

export default function ProgressCircles() {
  const [activity, setActivity] = useState(0)
  const [sleep, setSleep] = useState(0)
  const [feeding, setFeeding] = useState(0)
  const [timeframe, setTimeframe] = useState('daily')
  const [date, setDate] = useState(new Date())

  const generateRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const updateValues = () => {
    setActivity(generateRandomValue(0, 100))
    setSleep(generateRandomValue(20, 50))
    setFeeding(generateRandomValue(40, 80))
  }

  const handleDateChange = (newDate) => {
    const today = new Date()
    if (isAfter(newDate, today)) return // Prevent future dates
    setDate(newDate)
    updateValues()
  }

  return (
    <div className='flex flex-col items-center gap-6 p-4 w-[75%] mx-auto'>
      <div className='flex gap-4 flex-wrap w-full h-[40px] justify-center'>
        {/* <Button
          onClick={() => setTimeframe('daily')}
          variant={timeframe === 'daily' ? 'default' : 'outline'}
          style={{ height: '100%', width: '80px' }}>
          Daily
        </Button> */}

        <div className='flex items-center'>
          <Button
            variant='outline'
            onClick={
              () => handleDateChange(subDays(date, 1)) // Move to the previous day
            }
            className='h-[40px] w-[50px] mr-2 flex items-center justify-center'>
            <ChevronLeft />
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant='outline'
                className='w-auto h-[40px] justify-start text-left font-normal'>
                <CalendarIcon className='mr-2 h-4 w-4' />
                {format(date, 'PPP')}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                onChange={(selectedDate) =>
                  handleDateChange(selectedDate || new Date())
                }
                value={date}
                tileDisabled={({ date }) => date > new Date()} // Disable future dates
              />
            </PopoverContent>
          </Popover>
          <Button
            variant='outline'
            onClick={
              () =>
                !isAfter(addDays(date, 1), new Date()) &&
                handleDateChange(addDays(date, 1)) // Move to the next day only if it's not a future date
            }
            className='h-[40px] w-[50px] ml-2 flex items-center justify-center'>
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-4 h-[80%] w-full'>
        <CircleProgress
          label='Activity'
          value={activity}
          color='#4F46E5'
          subtitle={timeframe === 'daily' ? 'Daily' : 'Weekly'}
          className='w-[400px] h-[400px]'
        />
        <CircleProgress
          label='Sleep'
          value={sleep}
          color='#10B981'
          subtitle={timeframe === 'daily' ? 'Daily' : 'Weekly'}
        />
        <CircleProgress
          label='Feeding'
          value={feeding}
          color='#F59E0B'
          subtitle={timeframe === 'daily' ? 'Daily' : 'Weekly'}
        />
      </div>
    </div>
  )
}
