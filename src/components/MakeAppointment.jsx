import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./MakeAppointments.css";
import SuccessMessage from "./SuccessMessage";
import FailedMessage from "./FailedMessage";

export const MakeAppointment = () => {
  const [appointmentStatus, setAppointmentStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const vetClinics = [
    { id: 1, name: "Happy Paws Clinic", location: "Downtown" },
    { id: 2, name: "VetCare Center", location: "Uptown" },
    { id: 3, name: "Purrfect Health Vet", location: "Midtown" },
    { id: 4, name: "Canine Wellness Hub", location: "Suburb" },
  ];

  const formik = useFormik({
    initialValues: {
      pet_id: "",
      location: "",
      type: "Checkup",
      date: "",
      time: "",
      priority: "Medium",
      notes: "",
    },
    validationSchema: Yup.object({
      pet_id: Yup.string().required("Pet ID is required"),
      location: Yup.string().required("Vet clinic location is required"),
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      priority: Yup.string().oneOf(["Low", "Medium", "High"], "Invalid priority"),
      notes: Yup.string().max(500, "Notes must be 500 characters or less"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const token = localStorage.getItem("access_token");
      setIsSubmitting(true);

      const appointmentDateTime = `${values.date}T${values.time}:00`;

      const appointmentData = {
        pet_id: values.pet_id,
        type: values.type,
        date: appointmentDateTime,
        location: values.location,
        status: "Pending",
        priority: values.priority,
        notes: values.notes,
      };

      try {
        const response = await fetch("http://127.0.0.1:7500/Appointment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(appointmentData),
        });

        if (response.ok) {
          setAppointmentStatus("success");
          resetForm();
        } else {
          const errorData = await response.json();
          console.error("Failed to create appointment:", errorData.message || "Unknown error");
          setAppointmentStatus("failed");
        }
      } catch (error) {
        console.error("Error submitting appointment:", error);
        setAppointmentStatus("failed");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const closeMessage = () => {
    setAppointmentStatus(null);
  };

  return (
    <div className="appointment-container">
      <h2>Make an Appointment</h2>

      <form onSubmit={formik.handleSubmit}>
        <label>
          Pet ID:
          <input
            type="text"
            name="pet_id"
            value={formik.values.pet_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.pet_id && formik.errors.pet_id && (
            <div className="error">{formik.errors.pet_id}</div>
          )}
        </label>
        <br />

        <label>
          Select Vet Clinic:
          <select
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">-- Choose a Vet Location --</option>
            {vetClinics.map((clinic) => (
              <option key={clinic.id} value={clinic.location}>
                {clinic.name} - {clinic.location}
              </option>
            ))}
          </select>
          {formik.touched.location && formik.errors.location && (
            <div className="error">{formik.errors.location}</div>
          )}
        </label>
        <br />

        <label>
          Appointment Type:
          <select
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="Checkup">Checkup</option>
            <option value="Vaccination">Vaccination</option>
            <option value="Emergency">Emergency</option>
          </select>
        </label>
        <br />

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date && formik.errors.date && (
            <div className="error">{formik.errors.date}</div>
          )}
        </label>
        <br />

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.time && formik.errors.time && (
            <div className="error">{formik.errors.time}</div>
          )}
        </label>
        <br />

        <label>
          Priority:
          <select
            name="priority"
            value={formik.values.priority}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <br />

        <label>
          Notes:
          <textarea
            name="notes"
            value={formik.values.notes}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.notes && formik.errors.notes && (
            <div className="error">{formik.errors.notes}</div>
          )}
        </label>
        <br />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Make Appointment"}
        </button>
      </form>

      {appointmentStatus === "success" && <SuccessMessage onClose={closeMessage} />}
      {appointmentStatus === "failed" && <FailedMessage onClose={closeMessage} />}
    </div>
  );
};
