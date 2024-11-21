import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import SuccessMessage from "./SuccessMessage";
import FailedMessage from "./FailedMessage";
import "./MakeAppointments.css";

export const MakeAppointment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [appointment, setAppointment] = useState({
    vet: "",
    date: "",
    time: "",
  });
  const [appointmentStatus, setAppointmentStatus] = useState(null); // null, "success", or "failed"
  const [isChecking, setIsChecking] = useState(false);

  // Sample list of vet clinics
  const vetClinics = [
    { id: 1, name: "Happy Paws Clinic", location: "Downtown" },
    { id: 2, name: "VetCare Center", location: "Uptown" },
    { id: 3, name: "Purrfect Health Vet", location: "Midtown" },
    { id: 4, name: "Canine Wellness Hub", location: "Suburb" },
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      // Filter suggestions based on input
      const filteredSuggestions = vetClinics.filter((clinic) =>
        clinic.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleMakeAppointment = () => {
    if (!appointment.vet || !appointment.date || !appointment.time) {
      alert("Please fill out all fields!");
      return;
    }

    setIsChecking(true);
    setTimeout(() => {
      // Simulating API response for availability
      const isAvailable = Math.random() > 0.5; // Random success/fail
      setIsChecking(false);
      setAppointmentStatus(isAvailable ? "success" : "failed");
    }, 2000); // Simulate a 2-second check
  };

  const closeMessage = () => {
    setAppointmentStatus(null);
  };

  return (
    <div className="appointment-container">
      <h2>Make an Appointment</h2>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for a vet clinic or location"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {suggestions.length > 0 && (
          <div className="autocomplete-dropdown">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="autocomplete-item"
                onClick={() => {
                  setAppointment({ ...appointment, vet: suggestion.name });
                  setSearchTerm(suggestion.name);
                  setSuggestions([]);
                }}
              >
                {suggestion.name} - {suggestion.location}
              </div>
            ))}
          </div>
        )}
      </div>

      <h3 style={{ marginTop: "10px", marginBottom: "10px", color: "rgba(56, 97, 141, 1)" }}>
        Or
      </h3>

      {/* Appointment Form */}
      <form>
        <label>
          Select Vet Clinic:
          <select
            name="vet"
            value={appointment.vet}
            onChange={(e) => setAppointment({ ...appointment, vet: e.target.value })}
          >
            <option value="">-- Choose a Vet --</option>
            {vetClinics.map((clinic) => (
              <option key={clinic.id} value={clinic.name}>
                {clinic.name} - {clinic.location}
              </option>
            ))}
          </select>
        </label>
        <br />

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
          />
        </label>
        <br />

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={(e) => setAppointment({ ...appointment, time: e.target.value })}
          />
        </label>
        <br />

        <button
          type="button"
          onClick={handleMakeAppointment}
          disabled={isChecking}
        >
          {isChecking ? "Checking Availability..." : "Make Appointment"}
        </button>
      </form>

      {appointmentStatus === "success" && <SuccessMessage onClose={closeMessage} />}
      {appointmentStatus === "failed" && <FailedMessage onClose={closeMessage} />}
    </div>
  );
};
