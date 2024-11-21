import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

// Validation Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

export const Login = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const navigate = useNavigate() // Navigate hook to redirect after login

  // Get email from localStorage (if exists) on component mount
  const storedEmail = localStorage.getItem('email') || ''

  const handleLogin = (values, { setSubmitting, setErrors }) => {
    setShowLoading(true)

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
        localStorage.setItem('token', data.access_token)

        setTimeout(() => {
          setShowLoading(false)
          setShowSuccessPopup(true)
          // Redirect to the Add Pet page after successful login
          navigate('/addpet') // Redirect to Add Pet page
        }, 250)
      })
      .catch((error) => {
        setErrors({ password: 'Login failed. Please try again.' })
        setShowLoading(false)
      })
      .finally(() => setSubmitting(false))
  }

  return (
    <div className='bg-[#86daa8] flex flex-row justify-center w-full h-[100vh]'>
      <div className='bg-variable-collection-light-green w-[1512px] h-[982px] relative'>
        <Formik
          initialValues={{ email: storedEmail, password: '' }} // Autofill email if available in localStorage
          validationSchema={LoginSchema}
          onSubmit={handleLogin}>
          {({ errors, touched, isSubmitting }) => (
            <div className='absolute w-[585px] h-[690px] top-[146px] left-[140px] bg-white rounded-[30px] shadow-[0px_1px_3px_#0000001a]'>
              <div className='absolute w-[464px] h-[45px] top-[195px] left-14'>
                <div>
                  <Field
                    name='email'
                    type='text'
                    placeholder='Enter your email address'
                    className='relative pl-[15px] text-black font-semibold w-[462px] h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey'
                  />
                  {errors.email && touched.email ? (
                    <div className='text-red-500 my-[5px] text-sm'>
                      {errors.email}
                    </div>
                  ) : null}
                </div>
                <div>
                  <Field
                    name='password'
                    type='password'
                    placeholder='Enter your password'
                    className='relative pl-[15px] mt-[20px] text-black font-semibold w-[462px] h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey'
                  />
                  {errors.password && touched.password ? (
                    <div className='text-red-500 my-[5px] text-sm'>
                      {errors.password}
                    </div>
                  ) : null}
                  <div className='mb-4 text-right'>
                    <a
                      href='#'
                      className='text-sm text-blue-600 hover:underline'>
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute top-[405px] left-20 [font-family:'Instrument_Sans-Regular',Helvetica] font-normal text-variable-collection-primary-color text-base tracking-[0] leading-[normal]">
                Or continue with
              </div>

              <p className="absolute top-[646px] left-[184px] [font-family:'Instrument_Sans-Regular',Helvetica] font-normal text-[#797878] text-sm tracking-[0] leading-[normal] underline">
                <a href='/signup'>Don't have an account? Sign up</a>
              </p>

              {/* <img
          className="absolute w-[304px] h-px top-[414px] left-[214px]"
          alt="Line"
          src={line1}
        /> */}

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

              <div className='absolute w-[314px] h-[62px] top-[575px] left-[136px]'>
                <div className='relative w-[312px] h-[62px] bg-[#39628e] rounded-lg'>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className="absolute top-4 left-[123px] [font-family:'Instrument_Sans-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
                    {/* {isSubmitting ? 'Logging in...' : 'Log in'} */}
                    <a href="/addpet">Log in</a>
                  </button>
                </div>
              </div>

              <div className="absolute top-[126px] left-16 [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-variable-collection-primary-color text-2xl text-center tracking-[0.23px] leading-[normal]">
                Log in
              </div>

              <div className='absolute w-[120px] h-12 top-[63px] left-14'>
                <img
                  className='absolute w-[130px] h-[60px] mb-[40px]'
                  alt='Pet pal'
                  src='/petnobgblue.png'
                />
              </div>
            </div>
          )}
        </Formik>

        <img
          className='absolute w-[595px] h-[902px] top-[34px] left-[877px] rounded-lg '
          alt='Rectangle'
          src='/log.png'
        />
      </div>
    </div>
  )
}
