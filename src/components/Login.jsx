import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

// Validation Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const Login = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate(); // Navigate hook to redirect after login

  // Get email from localStorage (if exists) on component mount
  const storedEmail = localStorage.getItem("email") || "";

  const handleLogin = (values, { setSubmitting, setErrors }) => {
    setShowLoading(true);

    fetch("https://petapp-backend-abg7.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed. Please check your credentials.");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.access_token);

        setTimeout(() => {
          setShowLoading(false);
          setShowSuccessPopup(true);
          // Redirect to the Add Pet page after successful login
          navigate("/addpet"); // Redirect to Add Pet page
        }, 250);
      })
      .catch((error) => {
        setErrors({ password: "Login failed. Please try again." });
        setShowLoading(false);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <>
    
    <div className="flex h-screen bg-green-200">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center">
        <Formik
          initialValues={{ email: storedEmail, password: "" }} // Autofill email if available in localStorage
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="bg-white p-8 rounded-lg shadow-lg w-3/4">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">PetPal</h1>
                <p className="text-gray-600">Log In</p>
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <Field
                  name="email"
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.email && touched.email ? (
                  <div className="text-red-500 text-sm">{errors.email}</div>
                ) : null}
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.password && touched.password ? (
                  <div className="text-red-500 text-sm">{errors.password}</div>
                ) : null}
              </div>

              <div className="mb-4 text-right">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                {isSubmitting ? "Logging in..." : "Log in"}
              </button>

              <div className="my-4 text-center text-gray-500">Or continue with</div>
              <div className="flex justify-center space-x-4 mb-4">

                <button className="bg-gray-100  p-2 rounded-full">
                  <img src="/icongoogle.png" alt="Google" className="h-10 " />
                </button>
                <button className="bg-gray-100 p-2 rounded-full">
                  <img src="/iconmeta.png" alt="Facebook" className="h-10 w-30" />
                </button>
                <button className="bg-gray-100 p-2 rounded-full">
                  <img src="/iconapple.png" alt="Apple" className="h-10 w-30" />
                </button>

              </div>

              <p className="text-center text-sm">
                Don't have an account?{" "}
                <a href="/signup" className="text-blue-600 hover:underline">
                  Sign up
                </a>
              </p>
            </Form>
          )}
        </Formik>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-yellow-400 flex items-center justify-center">
        <img
          src="/log.png"
          alt="Pug"
          className="w-2/3 rounded-lg shadow-lg"
        />
      </div>
    </div>
    </>
  );

};

