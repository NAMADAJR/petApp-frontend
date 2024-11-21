import React from 'react'
;('use client')
import { Formik, Form, Field, FieldArray } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { CalendarIcon, ChevronDownIcon, XIcon } from 'lucide-react'
// import bxCheckbox from "./bx-checkbox.svg";
// import fluentIosArrow24Filled2 from "./fluent-ios-arrow-24-filled-2.svg";
// import fluentIosArrow24Filled from "./fluent-ios-arrow-24-filled.svg";
// import frame14 from "./frame-14.svg";
// import hugeiconsCancel012 from "./hugeicons-cancel-01-2.svg";
// import hugeiconsCancel013 from "./hugeicons-cancel-01-3.svg";
// import hugeiconsCancel01 from "./hugeicons-cancel-01.svg";
// import image from "./image.svg";
// import vector2 from "./vector-2.svg";
// import vector from "./vector.svg";

const validationSchema = Yup.object().shape({
  petName: Yup.string().required("Pet's name is required"),
  petType: Yup.string().required('Pet type is required'),
  petBreed: Yup.string().required("Pet's breed is required"),
  petGender: Yup.string().required("Pet's gender is required"),
  dateOfBirth: Yup.date().required('Date of birth is required'),
  lastWeightCheck: Yup.string().required('Last weight check is required'),
  operations: Yup.string().required(
    "Pet's last operation requied, Type None if there is no last operation"
  ),
  vaccinations: Yup.array().of(Yup.string()),
  foodAllergies: Yup.array().of(Yup.string()),
  lastVetVisit: Yup.date().required('Last vet visit is required'),
  termsAccepted: Yup.boolean().oneOf(
    [true],
    'You must accept the terms and conditions'
  ),
})

export const AddPet = () => {
  const [activeTab, setActiveTab] = useState('vaccination')

  const initialValues = {
    petName: '',
    petType: '',
    petBreed: '',
    petGender: 'male',
    dateOfBirth: '',
    lastWeightCheck: '',
    operations: '',
    vaccinations: [''],
    foodAllergies: [''],
    lastVetVisit: '',
    termsAccepted: false,
  }

  return (
    <div className='bg-[#deefdf] flex flex-row justify-center w-full'>
      <div className='bg-[#deefdf] w-[1512px] h-[1589px]'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}>
          {({ errors, touched }) => (
            <Form>
              <div className='relative w-[1361px] h-[1444px] top-[68px] left-16 bg-[#ffffff] rounded-[10px] shadow-[0px_1px_3px_#0000001a]'>
                <div className='flex flex-col w-[1133px] items-start gap-[33px] absolute top-[72px] left-[67px]'>
                  <div className='relative text-[2rem] font-bold text-[#39628e] '>
                    Add Pet Details
                  </div>

                  <div className='flex items-start gap-[173px] relative self-stretch w-full flex-[0_0_auto]'>
                    <div className='flex flex-col w-[480px] items-start gap-[37px] relative'>
                      <div className='gap-[13px] self-stretch w-full flex flex-col items-start relative'>
                        <label
                          htmlFor='petName'
                          className='text-[1.5rem] font-bold mt-[-1.00px] text-[#38618d]'>
                          Pet’s Name
                        </label>

                        <div className='flex h-[40px] items-center p-1.0 relative self-stretch w-full bg-greyish rounded-[10px] border border-solid border-[#b3b3b3] text-[1.4rem]'>
                          <Field
                            name='petName'
                            type='text'
                            placeholder="Enter Pet's Name"
                            className='p-2 block h-full w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                          />
                        </div>
                        {errors.petName && touched.petName && (
                          <div className='text-red-500 text-sm mt-1'>
                            {errors.petName}
                          </div>
                        )}
                      </div>

                      <div className='gap-[13px] self-stretch w-full flex flex-col items-start relative'>
                        <label
                          htmlFor='petName'
                          className='text-[1.5rem] font-bold mt-[-1.00px] text-[#38618d]'>
                          Pet’s Breed
                        </label>

                        <div className='flex h-[40px] items-center p-1.0 relative self-stretch w-full bg-greyish rounded-[10px] border border-solid border-[#b3b3b3] text-[1.4rem]'>
                          <Field
                            name='petBreed'
                            type='text'
                            placeholder="Enter Pet's Breed"
                            className='p-2 block h-full w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                          />
                        </div>
                        {errors.petBreed && touched.petBreed && (
                          <div className='text-red-500 text-sm mt-1'>
                            {errors.petBreed}
                          </div>
                        )}
                      </div>

                      <div className='gap-[13px] self-stretch w-full flex flex-col items-start relative'>
                        <label
                          htmlFor='petName'
                          className='text-[1.5rem] font-bold mt-[-1.00px] text-[#38618d]'>
                          Date of Birth
                        </label>

                        <div className='flex h-[40px] items-center p-1.0 relative self-stretch w-full bg-greyish rounded-[10px] border border-solid border-[#b3b3b3] text-[1.4rem]'>
                          <Field
                            name='dateOfBirth'
                            type='date'
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                          />
                        </div>
                        {errors.dateOfBirth && touched.dateOfBirth && (
                          <div className='text-red-500 text-sm mt-1'>
                            {errors.dateOfBirth}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className='flex flex-col w-[480px] items-start gap-[41px] relative'>
                      <div className='gap-[13px] self-stretch w-full flex flex-col items-start relative'>
                        <label
                          htmlFor='petName'
                          className='text-[1.5rem] font-bold mt-[-1.00px] text-[#38618d]'>
                          Pet’s Type
                        </label>

                        <div className='flex h-[50px] items-center p-1.0 relative self-stretch w-full bg-greyish rounded-[10px] border border-solid border-[#b3b3b3] text-[1.1rem]'>
                          <Field
                            name='petType'
                            placeholder='Enter what type of pet it is (e.g. cat, dog,
                              rabbit)'
                            as='select'
                            className='mt-0 pl-[1rem] block h-full w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 appearance-none'>
                            <option value='Horse'>Horse</option>
                            <option value='cat'>Cat</option>
                            <option value='dog'>Dog</option>
                            <option value='rabbit'>Rabbit</option>
                          </Field>
                          <ChevronDownIcon className='absolute right-2 top-3 h-5 w-5 text-gray-400' />
                        </div>
                        {errors.petType && touched.petType && (
                          <div className='text-red-500 text-sm mt-1'>
                            {errors.petType}
                          </div>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor='petGender'
                          className='text-[1.6rem] font-bold mt-[-1.00px] text-[#38618d]'>
                          Pet’s Gender
                        </label>
                        <div className='mt-2 text-[1.5rem] space-x-4'>
                          <label className='inline-flex items-center'>
                            <Field
                              type='radio'
                              name='petGender'
                              value='male'
                              className='form-checkbox h-[25px] w-[25px] text-blue-600'
                            />
                            <span className='ml-2'>Male</span>
                          </label>
                          <label className='inline-flex items-center'>
                            <Field
                              type='radio'
                              name='petGender'
                              value='female'
                              className='form-checkbox h-[25px] w-[25px] text-blue-600'
                            />
                            <span className='ml-2'>Female</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col w-[1133px] items-start gap-[33px] absolute top-[567px] left-[67px]'>
                  <div className='relative mt-[100px] text-[2rem] font-bold text-[#39628e] '>
                    Add Health Details
                  </div>

                  <div className='flex items-start gap-[172px] relative self-stretch w-full flex-[0_0_auto]'>
                    <div className='flex flex-col w-[481px] items-start gap-[38px] relative'>
                      <div className='gap-[10px] self-stretch w-full flex flex-col items-start relative'>
                        <label
                          htmlFor='petName'
                          className='text-[1.5rem] font-bold mt-[-1.00px] text-[#38618d]'>
                          Last Weight Check
                        </label>

                        <div className='flex h-[50px] items-center p-1.0 relative self-stretch w-full bg-greyish rounded-[10px] border border-solid border-[#b3b3b3] text-[1.4rem]'>
                          <Field
                            name='lastWeightCheck'
                            type='text'
                            placeholder="Enter Pet's Last weight checked"
                            className='p-2 block h-full w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                          />
                        </div>
                        {errors.lastWeightCheck && touched.lastWeightCheck && (
                          <div className='text-red-500 text-sm mt-1'>
                            {errors.lastWeightCheck}
                          </div>
                        )}
                      </div>

                      <div className='flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]'>
                        <label
                          htmlFor='petallergy'
                          className='text-[1.5rem] font-bold mt-[-1.00px] text-[#38618d]'>
                          Medical Check
                        </label>
                        <div>
                          <div className='flex border-b border-gray-200'>
                            <button
                              type='button'
                              className={`py-2 px-4 text-[1rem] ${
                                activeTab === 'vaccination'
                                  ? 'border-b-2 border-blue-500 h-full rounded-lg bg-blue-600 text-white text-[1rem]'
                                  : 'text-gray-500'
                              }`}
                              onClick={() => setActiveTab('vaccination')}>
                              Vaccination
                            </button>
                            <button
                              type='button'
                              className={`py-2 px-4 text-[1rem] ${
                                activeTab === 'medication'
                                  ? 'border-b-2  border-blue-500 rounded-lg bg-blue-600 text-white text-[1rem]'
                                  : 'text-gray-500'
                              }`}
                              onClick={() => setActiveTab('medication')}>
                              Medication
                            </button>
                          </div>
                          {activeTab === 'vaccination' && (
                            <FieldArray name='vaccinations'>
                              {({ push, remove }) => (
                                <div>
                                  {initialValues.vaccinations.map(
                                    (_, index) => (
                                      <div
                                        key={index}
                                        className='flex items-center mt-2'>
                                        <Field
                                          name={`vaccinations.${index}`}
                                          type='text'
                                          placeholder='Enter Vaccination Name'
                                          className='text-[1.4rem] block h-[40px] w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                                        />

                                        <button
                                          type='button'
                                          onClick={() => remove(index)}
                                          className='ml-2 text-red-500'>
                                          <XIcon className='h-5 w-5' />
                                        </button>
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                            </FieldArray>
                          )}
                          {activeTab === 'medication' && (
                            <FieldArray name='vaccinations'>
                              {({ push, remove }) => (
                                <div>
                                  {initialValues.vaccinations.map(
                                    (_, index) => (
                                      <div
                                        key={index}
                                        className='flex items-center mt-2'>
                                        <Field
                                          name={`vaccinations.${index}`}
                                          type='text'
                                          placeholder='Enter Medication Name'
                                          className='text-[1.4rem] block h-[40px] w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                                        />

                                        <button
                                          type='button'
                                          onClick={() => remove(index)}
                                          className='ml-2 text-red-500'>
                                          <XIcon className='h-5 w-5' />
                                        </button>
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                            </FieldArray>
                          )}
                          {activeTab === 'vaccination' && (
                            <FieldArray name='vaccinations'>
                              {({ push, remove }) => (
                                <div>
                                  {initialValues.vaccinations.map(
                                    (_, index) => (
                                      <div
                                        key={index}
                                        className='flex items-center mt-2'>
                                        <Field
                                          name={`vaccinations.${index}`}
                                          type='text'
                                          placeholder='Enter Vaccination Name'
                                          className='text-[1.4rem] block h-[40px] w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                                        />

                                        <button
                                          type='button'
                                          onClick={() => remove(index)}
                                          className='ml-2 text-red-500'>
                                          <XIcon className='h-5 w-5' />
                                        </button>
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                            </FieldArray>
                          )}
                          {activeTab === 'medication' && (
                            <FieldArray name='vaccinations'>
                              {({ push, remove }) => (
                                <div>
                                  {initialValues.vaccinations.map(
                                    (_, index) => (
                                      <div
                                        key={index}
                                        className='flex items-center mt-2'>
                                        <Field
                                          name={`vaccinations.${index}`}
                                          type='text'
                                          placeholder='Enter Medication Name'
                                          className='text-[1.4rem] block h-[40px] w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                                        />

                                        <button
                                          type='button'
                                          onClick={() => remove(index)}
                                          className='ml-2 text-red-500'>
                                          <XIcon className='h-5 w-5' />
                                        </button>
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                            </FieldArray>
                          )}
                        </div>
                      </div>

                      <div className='relative self-stretch w-full h-[88px]'>
                      <label
                          htmlFor='petName'
                          className='text-[1.5rem] font-bold mt-[-1.00px] text-[#38618d]'>
                          Last Vet Visit
                        </label>

                        <div className='flex h-[40px] items-center p-1.0 relative self-stretch w-full bg-greyish rounded-[10px] border border-solid border-[#b3b3b3] text-[1.4rem]'>
                          <Field
                            name='dateOfBirth'
                            type='date'
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col w-[480px] items-start gap-[37px] relative'>
                      <div className='flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]'>
                        <label
                          htmlFor='petName'
                          className='text-[1.5rem] font-bold mt-[-1.00px] text-[#38618d]'>
                          Operation/Major Procedures
                        </label>

                        <div className='relative self-stretch w-full h-[45px] bg-greyish rounded-lg border border-solid border-dark-grey'>
                          <Field
                            name='operations'
                            as='select'
                            className='pl-[1rem] block h-full w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 appearance-none'>
                            <option value='tumor'>Tumor removal</option>
                            <option value='fracture'>Fracture Repair</option>
                            <option value='spaying'>Spaying</option>
                            <option value='neutering'>Neutering</option>
                            <option value='dental'>Dental Surgery</option>
                          </Field>
                          <ChevronDownIcon className='absolute right-2 top-3 h-5 w-5 text-gray-400' />
                        </div>
                      </div>

                      <div className='gap-[10px] self-stretch w-full flex flex-col items-start relative'>
                        <label
                          htmlFor='petallergy'
                          className='text-[1.5rem] font-bold mt-[-1.00px] text-[#38618d]'>
                          Food Allergies
                        </label>

                        <div className='flex h-[50px] items-center p-1.0 relative self-stretch w-full bg-greyish rounded-[10px] border border-solid border-[#b3b3b3] text-[1.4rem]'>
                          <Field
                            name='petallergy'
                            type='text'
                            placeholder='Enter food allergy'
                            className='p-2 block h-full w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                          />
                        </div>
                        <div className='flex h-[50px] items-center p-1.0 relative self-stretch w-full bg-greyish rounded-[10px] border border-solid border-[#b3b3b3] text-[1.4rem]'>
                          <Field
                            name='petallergy'
                            type='text'
                            placeholder='Enter food allergy'
                            className='p-2 block h-full w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                          />
                        </div>
                        <div className='flex h-[50px] items-center p-1.0 relative self-stretch w-full bg-greyish rounded-[10px] border border-solid border-[#b3b3b3] text-[1.4rem]'>
                          <Field
                            name='petallergy'
                            type='text'
                            placeholder='Enter food allergy'
                            className='p-2 block h-full w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col w-[286px] items-start gap-[38px] absolute top-[1176px] left-[67px]'>
                  <div className='mt-6 w-[600px]'>
                    <label className='inline-flex items-center'>
                      <Field
                        type='checkbox'
                        name='termsAccepted'
                        className='form-checkbox mt-[50px] h-[20px] w-[20px] text-blue-600'
                      />
                      <span className='ml-2 mt-[50px] text-[1.4rem] text-gray-700'>
                        I agree to all Terms and Conditions
                      </span>
                    </label>
                    {errors.termsAccepted && touched.termsAccepted && (
                      <div className='text-red-500 text-sm mt-1'>
                        {errors.termsAccepted}
                      </div>
                    )}
                  </div>

                  <button className='all-[unset] box-border flex h-[66px] items-center justify-center gap-2.5 px-[60px] py-[11px] relative self-stretch w-full'>
                    <div className='absolute w-[286px] h-[66px] top-0 left-0 bg-[#39628e] rounded-[10px]' />

                    <div className='relative w-[125px] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-[#ffffff] text-[length:var(--sub-heading-font-size)] text-center tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]'>
                      <a href='/overview'>Submit</a>
                    </div>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
