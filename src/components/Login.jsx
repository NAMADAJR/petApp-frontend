
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";


// Validation Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

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


    fetch('https://petapp-backend-abg7.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Login failed. Please check your credentials.')
        }
        return response.json()
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
      .finally(() => setSubmitting(false))
  }


  if (isLoading) {
    // If still loading, you can render a loading spinner or some other indicator
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#86daa8] flex flex-row justify-center w-full h-screen">
      <div className="bg-variable-collection-light-green w-[1512px] h-screen relative">
        <div className="absolute w-[585px] h-[690px] top-[20px] left-[140px] bg-white rounded-[30px] shadow-[0px_1px_3px_#0000001a]">

          {/* Form Header */}
          <div className="absolute top-[95px] left-14 font-semibold text-variable-collection-primary-color text-2xl">
            Log In
          </div>

          {/* Only render Formik when initialEmail is set */}
          <Formik
            initialValues={{ email: initialEmail, password: "" }} // Use email from state
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="absolute w-[466px] top-[146px] left-14">
                <div className="mb-6">
                  <Field
                    name="email"
                    type="email"
                    className="w-full h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey p-3 text-sm text-[#90a0b7] font-semibold"
                    placeholder="Email address"
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-sm mt-0.1">{errors.email}</div>
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
                    className="absolute right-3 top-0.5 bg-greyish text-black"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                  {errors.password && touched.password && (
                    <div className="text-red-500 text-sm mt-0.1">{errors.password}</div>
                  )}
                </div>

                {/* Forgot Password */}
                <div className="text-right mb-6">
                  <a href="#" className="text-sm text-blue-600 hover:underline">

                    Forgot Password?
                  </a>
                </div>


                {/* Social Login */}
                <div className="text-center my-4 text-gray-500">Or continue with</div>
                <div className="flex justify-center space-x-4">
                  <button className="relative w-[131px] h-[67px] bg-[#f7f7f7] rounded-[10px] flex justify-center items-center">
                    <img
                      className="absolute w-[45px] h-[39px] top-3.5 left-[46px]"
                      alt="Google Icon"
                      src="/icongoogle.png"
                    />
                  </button>
                  <button className="relative w-[136px] h-[71px] bg-[#f7f7f7] rounded-[10px] flex justify-center items-center">
                    <img
                      className="absolute w-[45px] h-[39px] top-3.5 left-[46px]"
                      alt="Meta Icon"
                      src="/iconmeta.png"
                    />
                  </button>
                  <button className="relative w-[137px] h-[71px] bg-[#f7f7f7] rounded-[10px] flex justify-center items-center">
                    <img
                      className="absolute w-[45px] h-[39px] top-3.5 left-[46px]"
                      alt="Apple Icon"
                      src="/iconapple.png"

                    />
                  </button>
                </div>


                {/* Submit Button */}
                <div className="absolute left-[80px] mb-2 mt-5 w-[314px]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[62px] bg-[#39628e] rounded-lg text-white text-2xl"
                  >
                    {isSubmitting ? "Logging in..." : "Log In"}
                  </button>
                </div>

                {/* Sign Up Link */}
                <div className=" absolute top-[385px] left-[130px] text-center text-sm">
                  Don't have an account?{" "}
                  <a href="/signup" className="text-blue-600 hover:underline">
                    Sign Up
                  </a>
                </div>

              </Form>
            )}
          </Formik>
        </div>


        {/* Right Section (Image) */}
        <img
          className="absolute w-[500px] h-[700px] top-[15px] left-[871px] "
          alt="Pug"
          src="/log.png"
        />
      </div>
    </div>
  );
};

