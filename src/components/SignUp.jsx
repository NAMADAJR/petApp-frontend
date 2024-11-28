import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// Validation Schema
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .max(20, "Password cannot exceed 20 characters")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (values, { setSubmitting }) => {
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Signup failed. Please try again.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Signup successful:", data);
        localStorage.setItem("email", values.email);
        navigate("/");
      })
      .catch((error) => console.error("Error during signup:", error))
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="bg-[#86daa8] flex w-full h-screen">
      <div className="w-full h-full flex">
        {/* Left Side - Sign Up Form */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-[585px] bg-white rounded-[30px] shadow-[0px_1px_3px_#0000001a] p-8">
            {/* Form Header */}
            <div className="font-semibold text-variable-collection-primary-color text-2xl mb-6">
              Sign Up
            </div>

            <Formik
              initialValues={{ username: "", email: "", password: "" }}
              validationSchema={SignupSchema}
              onSubmit={handleSignup}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="w-full">
                  {/* Username Field */}
                  <div className="mb-6">
                    <Field
                      name="username"
                      className="w-full h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey p-3 text-sm text-[#90a0b7] font-semibold"
                      placeholder="Name"
                    />
                    {errors.username && touched.username && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.username}
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
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
                  <div className="relative mb-6">
                    <Field
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="w-full h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey p-3 text-sm text-[#90a0b7] font-semibold"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1 bg-transparent text-black"
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

                  {/* Submit Button */}
                  <div className="mb-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-[62px] bg-[#39628e] rounded-lg text-white text-2xl"
                    >
                      {isSubmitting ? "Creating..." : "Create Account"}
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

                  {/* Login Link */}
                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <a href="/" className="text-blue-600 hover:underline">
                      Login
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
            alt="Sign Up"
            src="/sign.png"
          />
        </div>
      </div>
    </div>
  );
};
