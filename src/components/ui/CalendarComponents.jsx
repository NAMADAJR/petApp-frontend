import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

// Named export for Calendar if needed elsewhere
export { Calendar };

// Main CalendarComponent
export const CalendarComponents = ({ selected, onSelect, className }) => {
  const [currentDate, setCurrentDate] = useState(selected || new Date());

  const handleDateChange = (date) => {
    setCurrentDate(date); // Update local state
    if (onSelect) {
      onSelect(date); // Pass the selected date to the parent handler
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Calendar
        onChange={handleDateChange} // Handle date selection
        value={currentDate} // Controlled component for the selected date
      />
    </div>
  );
};
