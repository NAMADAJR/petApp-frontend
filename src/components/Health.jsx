import React from 'react'
import { Navbar } from './Navbar'

const Health = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-center pt-[50px]'>
        <div
          style={{
            width: '1700px',
            height: '900px',
            border: 'solid #38618D 2px',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'row',
          }}>
          <div
            style={{
              width:"60%",
              height:"100%",
              border: 'solid #38618D 2px',
              borderRadius: '15px',
              display: 'flex',
              flexDirection: 'row',
            }}>

            </div>
            <div
            style={{
              width:"60%",
              height:"100%",
              border: 'solid #38618D 2px',
              borderRadius: '15px',
              display: 'flex',
              flexDirection: 'column',
            }}></div>
        </div>
      </div>
    </>
  )
}

export default Health
