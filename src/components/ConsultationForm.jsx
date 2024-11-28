import React, { useState } from 'react'

export default function Consultation() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    petType: '',
    petName: '',
    reason: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailBody = `
      Name: ${formData.name}
      Type of Pet: ${formData.petType}
      Pet's Name: ${formData.petName}
      Reason for Consultation: ${formData.reason}
    `

    // Replace with actual email-sending logic, e.g., using an API like EmailJS or a backend endpoint.
    alert('Email Sent:\n' + emailBody)
    setFormData({ name: '', petType: '', petName: '', reason: '' })
    setIsFormOpen(false)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen p-4 bg-[#38618d]'>
      {!isFormOpen ? (
        <div className='space-y-[20px] flex flex-col'>
          <button
            onClick={() => setIsFormOpen(true)}
            className='text-[2rem] px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
            Open Consultation Form
          </button>
          <button
            onClick={() => window.history.back()}
            className='text-[1.8rem] px-4 py-2 bg-red-500 text-white rounded hover:bg-gray-600'>
            Go Back
          </button>
        </div>
      ) : (
        <div className='bg-white p-6 rounded-[15px] shadow-lg border-[2px] w-[40%] h-auto object-contain mt-[100px]'>
          <div className='flex justify-between items-center mt-6'>
            <h2 className='text-lg font-bold text-[2rem]'>Consultation Form</h2>
            <button
              onClick={() => setIsFormOpen(false)}
              className='bg-red-500 hover:border-1px hover:bg-white hover:text-red-500 font-bold text-[1.5rem]'>
              Close
            </button>
          </div>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 text-[1.2rem] mt-[20px]'>
                Your Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                className='mt-1 text-[1rem] block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                required
              />
            </div>
            <div>
              <label
                htmlFor='petType'
                className='block text-sm font-medium text-gray-700 text-[1.2rem] mt-[20px]'>
                Type of Pet
              </label>
              <input
                type='text'
                id='petType'
                name='petType'
                value={formData.petType}
                onChange={handleInputChange}
                className='mt-1 block text-[1rem] w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                required
              />
            </div>
            <div>
              <label
                htmlFor='petName'
                className='block text-sm font-medium text-gray-700 text-[1.2rem] mt-[20px]'>
                Pet's Name
              </label>
              <input
                type='text'
                id='petName'
                name='petName'
                value={formData.petName}
                onChange={handleInputChange}
                className='mt-1 block w-full text-[1rem] p-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                required
              />
            </div>
            <div>
              <label
                htmlFor='reason'
                className='block text-sm font-medium text-gray-700 text-[1.2rem] mt-[20px]'>
                Reason for Consultation
              </label>
              <textarea
                id='reason'
                name='reason'
                value={formData.reason}
                onChange={handleInputChange}
                className='mt-1 block w-full h-auto p-2 border border-gray-300 text-[1.3rem] rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                rows='4'
                required></textarea>
            </div>
            <div className='flex justify-between'>
              <button
                type='button'
                onClick={() => setIsFormOpen(false)}
                className='px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400'>
                Cancel
              </button>
              <button
                type='submit'
                className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
