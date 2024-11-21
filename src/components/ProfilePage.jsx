import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ProfilePage.css";

export const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [profileData, setProfileData] = useState({});
  const [showMessage, setShowMessage] = useState(false);

  // Fetch user profile when component loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://petapp-backend-abg7.onrender.com/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data);
        // Set the profile picture preview if it exists
        if (data.image) {
          setProfilePicture(data.image);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        alert("Failed to load profile.");
      });
  }, []);

  // Get email from localStorage for initial values
  const getInitialEmail = () => {
    return localStorage.getItem("email") || "";
  };

  // Validation schema using Yup
  const ProfileSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(2, "Username must be at least 2 characters"),
  });

  // Handle file upload
  const handleFileChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file)); // Preview image
      setFieldValue("image", file); // Update Formik's field value with the file
    }
  };

  // Save profile (PUT logic)
  const handleSave = (values) => {
    // Create form data object for profile picture
    const formData = new FormData();
    formData.append("username", values.username);
    if (values.image) {
      formData.append("image", values.image); // Ensure it's sent with the 'image' field name
    }

    // Log the data that will be posted
    console.log("Data to be posted:", {
      email: getInitialEmail(), // Log email fetched from localStorage
      username: values.username,
      profilePicture: values.image ? values.image.name : null, // Log file name or null if no file
    });

    // PUT request to the backend
    const token = localStorage.getItem("token");
    fetch("https://petapp-backend-abg7.onrender.com/me", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`, // Add token if required
      },
      body: formData, // Send as FormData for file uploads
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update profile");
        }
        return response.json();
      })
      .then((data) => {
        // Show success message
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000); // Hide success message after 3 seconds
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        alert("An error occurred while updating the profile. Please try again.");
      });
  };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>

      <Formik
        initialValues={{
          email: getInitialEmail(), // Get email from localStorage
          username: profileData.username || "", // Adjusted to match the field
          image: null, // Using 'image' for the profile picture field
        }}
        validationSchema={ProfileSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSave(values);
          setSubmitting(false);
        }}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            {/* Profile Picture */}
            <div className="profile-picture-section">
              <label htmlFor="image" className="profile-picture-label">
                {profilePicture ? (
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="profile-picture-preview"
                  />
                ) : (
                  <span>Upload Profile Picture</span>
                )}
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e, setFieldValue)}
              />
            </div>

            {/* Email (Read-only) */}
            <div className="profile-info-section">
              <label>
                Email Address:
                <Field
                  type="email"
                  name="email"
                  value={getInitialEmail()} // Use the email from localStorage
                  disabled
                  className="disabled-input"
                />
              </label>

              {/* Username */}
              <label>
                Username:
                <Field
                  type="text"
                  name="username" // Adjusted to match the field name
                  className="input-field"
                  placeholder="Enter your username"
                />
                <ErrorMessage
                  name="username" // Adjusted to match the field name
                  component="div"
                  className="error-message"
                />
              </label>
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="save-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Profile"}
            </button>
          </Form>
        )}
      </Formik>

      {/* Success Message */}
      {showMessage && (
        <div className="pop-up-message">
          <p>Your profile has been successfully saved!</p>
        </div>
      )}
    </div>
  );
};
