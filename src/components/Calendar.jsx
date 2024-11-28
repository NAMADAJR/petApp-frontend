import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Button } from 'antd';

const Calendar = ({ appointments }) => {
  const [currentDate, setCurrentDate] = useState(moment());

  // Generate the dates for the current month
  const generateCalendarDates = () => {
    const startOfMonth = currentDate.clone().startOf('month');
    const endOfMonth = currentDate.clone().endOf('month');

    let days = [];
    let day = startOfMonth.clone().startOf('week'); // Start from the previous Sunday

    // Generate days for the whole month, including padding days from previous/next month
    while (day.isBefore(endOfMonth, 'day') || day.isBefore(startOfMonth, 'day')) {
      days.push(day.clone());
      day.add(1, 'day');
    }

    return days;
  };

  // Highlight dates that have appointments
  const getHighlightedDates = () => {
    const highlightedDates = new Set();
    appointments.forEach((appt) => {
      const apptDate = moment(appt.date);
      highlightedDates.add(apptDate.format('YYYY-MM-DD'));
    });
    return highlightedDates;
  };

  // Handler to go to the previous month
  const goToPreviousMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'month'));
  };

  // Handler to go to the next month
  const goToNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, 'month'));
  };

  const highlightedDates = getHighlightedDates();
  const calendarDates = generateCalendarDates();

  const handleDateClick = (date) => {
    alert(`You clicked on ${date.format('YYYY-MM-DD')}`);
    // Add further functionality as needed (e.g., select date for appointment)
  };

  // Get the day of the week headers
  const getDayHeaders = () => {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  };

  return (
    <div style={{ width: '100%', maxWidth: '500px', margin: 'auto' }}>
      {/* Month Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <Button onClick={goToPreviousMonth}>&lt;</Button>
        <h2>{currentDate.format('MMMM YYYY')}</h2>
        <Button onClick={goToNextMonth}>&gt;</Button>
      </div>

      {/* Day of the week headers */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        {getDayHeaders().map((day, index) => (
          <div key={index} style={{ width: '14%', textAlign: 'center', fontWeight: 'bold' }}>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Dates */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {calendarDates.map((date) => (
          <div
            key={date.format('YYYY-MM-DD')}
            style={{
              width: '14%',
              padding: '10px',
              textAlign: 'center',
              border: '1px solid #ccc',
              cursor: 'pointer',
              backgroundColor: highlightedDates.has(date.format('YYYY-MM-DD'))
                ? '#ffeb3b'
                : date.isBefore(moment(), 'day')
                ? '#f0f0f0'  // Light gray for past dates
                : '#fff', // White for future dates
              borderRadius: '5px',
              margin: '2px',
              fontWeight: date.month() !== currentDate.month() ? 'light' : 'normal', // Differentiate current month dates
            }}
            onClick={() => handleDateClick(date)}
          >
            {date.date()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
