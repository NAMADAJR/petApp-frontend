import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

// Validation Schema
const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        fetch("https://petapp-backend-abg7.onrender.com/register", {
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
            navigate("/login");
          })
          .catch((error) => {
            console.error("Error during signup:", error);
            setErrors({
              password: error.message || "Signup failed. Please try again.",
            });
          })
          .finally(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="bg-[#86daa8] flex flex-row justify-center w-full h-[100vh]">
            <div className="bg-variable-collection-light-green w-[1512px] h-[982px] relative">
              <div className="absolute w-[585px] h-[690px] top-[146px] left-[140px] bg-white rounded-[30px] shadow-[0px_1px_3px_#0000001a]">
                <div className="absolute w-[131px] h-[67px] top-[459px] left-20 bg-[#f7f7f7] rounded-[10px]"></div>
                <div className="absolute w-[136px] h-[71px] top-[457px] left-[232px] bg-[#f7f7f7] rounded-[10px]"></div>
                <div className="absolute w-[137px] h-[71px] top-[457px] left-[383px] bg-[#f7f7f7] rounded-[10px]"></div>
                <div className="absolute w-[466px] h-[45px] top-48 left-14">
                  <Field
                    name="username"
                    className="w-[464px] h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey p-3 text-sm text-[#90a0b7] font-semibold"
                    placeholder="Name/ Nickname"
                  />
                </div>
                <div className="absolute w-[466px] h-[45px] top-[261px] left-14">
                  <Field
                    name="email"
                    type="email"
                    className="w-[464px] h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey p-3 text-sm text-[#90a0b7] font-semibold"
                    placeholder="Email address / Phone No. / Username"
                  />
                </div>
                <div className="absolute w-[466px] h-[45px] top-[322px] left-14">
                  <Field
                    name="password"
                    type="password"
                    className="w-[464px] h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey p-3 text-sm text-[#90a0b7] font-semibold"
                    placeholder="Password"
                  />
                </div>
                <div className="absolute top-[405px] left-20 font-normal text-variable-collection-primary-color text-base">
                  Or continue with
                </div>
                <button className='absolute w-[131px] h-[67px] top-[461px] left-20 bg-[#f7f7f7] rounded-[10px]'>
                <img
                  className='absolute w-[45px] h-[39px] top-3.5 left-[46px]'
                  alt='Flat color icons'
                  src='/icongoogle.png'
                />
              </button>

              <button className='absolute w-[136px] h-[71px] top-[457px] left-[232px] bg-[#f7f7f7] rounded-[10px]'>
                <img
                  className='absolute w-[46px] h-[38px] top-[21px] left-[45px]'
                  alt='Logos meta icon'
                  src='/iconmeta.png'
                />
              </button>

              <button className='absolute w-[137px] h-[71px] top-[457px] left-[383px] bg-[#f7f7f7] rounded-[10px]'>
                <img
                  className='absolute w-[40px] h-[40px] top-4 left-[51px]'
                  alt='Devicon apple'
                  src='/iconapple.png'
                />
              </button>

                <div className="absolute w-[314px] h-[62px] top-[575px] left-[136px]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-[312px] h-[62px] bg-[#39628e] rounded-lg text-white text-2xl"
                  >
                    <a href="/login">Create account</a>
                  </button>
                </div>
                <div className="absolute top-[126px] left-14 font-semibold text-variable-collection-primary-color text-2xl">
                  Sign Up
                </div>
              </div>
              <img
                className="absolute w-[597px] h-[903px] top-[35px] left-[871px] rounded-lg"
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
