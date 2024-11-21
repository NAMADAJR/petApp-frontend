import React from 'react'
import "./MakeAppointments.css"

const SuccessMessage = ({ onClose }) => (
    <div className="message-container success">
      <p>🎉 Appointment confirmed! The doctor is available.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );

  export default SuccessMessage