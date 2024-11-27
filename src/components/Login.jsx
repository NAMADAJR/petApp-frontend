import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";

// Validation Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [initialEmail, setInitialEmail] = useState(""); // State for the email
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const navigate = useNavigate(); // Navigate hook to redirect after login

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setInitialEmail(storedEmail); // Set email from localStorage if available
    }
    setIsLoading(false); // Set loading state to false after checking for email
  }, []);

  const handleLogin = (values, { setSubmitting, setErrors }) => {
    setSubmitting(true);

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
        localStorage.setItem("email", values.email); // Save email in localStorage after successful login
        setTimeout(() => {
          navigate("/addpet"); // Redirect to Add Pet page
        }, 250);
      })
      .catch((error) => {
        setErrors({ password: "Login failed. Please try again." });
      })
      .finally(() => setSubmitting(false));
  };

  if (isLoading) {
    // If still loading, you can render a loading spinner or some other indicator
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#86daa8] flex w-full h-screen">
      <div className="w-full h-full flex">
        {/* Left Side - Login Form */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-[585px] bg-white rounded-[30px] shadow-[0px_1px_3px_#0000001a] p-8">
            {/* Form Header */}
            <div className="font-semibold text-variable-collection-primary-color text-2xl mb-6">
              Log In
            </div>

            <Formik
              initialValues={{ email: initialEmail, password: "" }} // Use email from state
              validationSchema={LoginSchema}
              onSubmit={handleLogin}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="w-full">
                  <div className="mb-6">
                    <Field
                      name="email"
                      type="email"
                      className="w-full h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey p-3 text-sm text-[#90a0b7] font-semibold"
                      placeholder="Email address"
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Password Field */}
                  <div className="relative mb-1">
                    <Field
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="w-full h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey p-3 text-sm text-[#90a0b7] font-semibold"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-3 bg-transparent text-black"
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                    {errors.password && touched.password && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </div>
                    )}
                  </div>

                  {/* Forgot Password */}
                  <div className="text-right mb-6">
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      Forgot Password?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <div className="mb-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-[62px] bg-[#39628e] rounded-lg text-white text-2xl"
                    >
                      {isSubmitting ? "Logging in..." : "Log In"}
                    </button>
                  </div>

                  {/* Social Login */}
                  <div className="text-center my-4 text-gray-500">
                    Or continue with
                  </div>
                  <div className="flex justify-center space-x-4 mb-6">
                    <button className="w-[131px] h-[67px] bg-[#f7f7f7] rounded-[10px] flex justify-center items-center">
                      <img
                        className="w-[45px] h-[39px]"
                        alt="Google Icon"
                        src="/icongoogle.png"
                      />
                    </button>
                    <button className="w-[136px] h-[71px] bg-[#f7f7f7] rounded-[10px] flex justify-center items-center">
                      <img
                        className="w-[45px] h-[39px]"
                        alt="Meta Icon"
                        src="/iconmeta.png"
                      />
                    </button>
                    <button className="w-[137px] h-[71px] bg-[#f7f7f7] rounded-[10px] flex justify-center items-center">
                      <img
                        className="w-[45px] h-[39px]"
                        alt="Apple Icon"
                        src="/iconapple.png"
                      />
                    </button>
                  </div>

                  {/* Sign Up Link */}
                  <div className="text-center text-sm">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-blue-600 hover:underline">
                      Sign Up
                    </a>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="p-4 w-1/2">
          <img
            className="w-full h-full object-cover"
            alt="Pug"
            src="/log.png"
          />
        </div>
      </div>
    </div>
  );
};
