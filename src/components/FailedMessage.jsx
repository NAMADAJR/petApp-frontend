import React from 'react'
import "./MakeAppointments.css"

const FailedMessage = ({ onClose }) => (
    <div className="message-container failed">
      <p>❌ The doctor is not available at this time. Please choose another time.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
  
  export default FailedMessage;