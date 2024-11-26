import React from "react";
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
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
    .required("Password is required"),
});

export const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
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
          .catch((error) => {
            console.error("Error during signup:", error);
          })
          .finally(() => setSubmitting(false));
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <div className="bg-[#86daa8] flex flex-row justify-center w-full h-[100vh]">
            <div className="bg-variable-collection-light-green w-[1512px] h-screen relative">
              <div className="absolute w-[585px] h-[690px] top-[20px] left-[140px] bg-white rounded-[30px] shadow-[0px_1px_3px_#0000001a]">
                
                {/* Username Field */}
                <div className="absolute w-[466px] top-48 left-14">
                  <Field
                    name="username"
                    className="w-full h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey p-3 text-sm text-[#90a0b7] font-semibold"
                    placeholder="Name"
                  />
                  {errors.username && touched.username && (
                    <div className="text-red-500 text-sm mt-0.1">{errors.username}</div>
                  )}
                </div>

                {/* Email Field */}
                <div className="absolute w-[466px] top-[261px] left-14 pt-2">
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
                <div className="absolute w-[466px] top-[322px] left-14 pt-6">
                  <div className="relative">
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
                  </div>
                  {errors.password && touched.password && (
                    <div className="text-red-500 text-sm mt-0.1">{errors.password}</div>
                  )}
                </div>



                {/* Continue with Section */}
                <div className="absolute top-[405px] left-20 font-normal text-variable-collection-primary-color text-base pt-7">
                  Or continue with
                </div>

                {/* Google Login */}
                <button className="absolute w-[131px] h-[67px] top-[461px] left-20 bg-[#f7f7f7] rounded-[10px]">
                  <img
                    className="absolute w-[45px] h-[39px] top-3.5 left-[46px]"
                    alt="Google Icon"
                    src="/icongoogle.png"
                  />
                </button>

                {/* Meta Login */}
                <button className="absolute w-[136px] h-[71px] top-[457px] left-[232px] bg-[#f7f7f7] rounded-[10px]">
                  <img
                    className="absolute w-[46px] h-[38px] top-[21px] left-[45px]"
                    alt="Meta Icon"
                    src="/iconmeta.png"
                  />
                </button>

                {/* Apple Login */}
                <button className="absolute w-[137px] h-[71px] top-[457px] left-[383px] bg-[#f7f7f7] rounded-[10px]">
                  <img
                    className="absolute w-[40px] h-[40px] top-4 left-[51px]"
                    alt="Apple Icon"
                    src="/iconapple.png"
                  />
                </button>

                {/* Submit Button */}
                <div className="absolute w-[314px] h-[62px] top-[545px] left-[136px]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-[312px] h-[62px] bg-[#39628e] rounded-lg text-white text-2xl"
                  >
                    {isSubmitting ? "Creating..." : "Create account"}
                  </button>
                </div>

                {/* Login Link */}
                <div className="absolute top-[620px] left-[180px] text-center text-sm">
                  Already have an account?{" "}
                  <a href="/" className="text-blue-600 hover:underline">
                    Login
                  </a>
                </div>

                <div className="absolute top-[126px] left-14 font-semibold text-variable-collection-primary-color text-2xl">
                  Sign Up
                </div>
              </div>
              <img
                className="absolute w-[500px] h-[700px] top-[15px] left-[871px]"
                alt="Rectangle"
                src="/sign.png"
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
