import React, { useState, useEffect } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import './App.css'
import './index.css'
import { Overview } from './components/Overview'

import { Login } from './components/Login'
import { AddPet } from './components/Addpet'
import { Community } from './components/Community'
import { MakeAppointment } from './components/MakeAppointment'
import { SignUp } from './components/SignUp'
import { ProfilePage } from './components/ProfilePage'
import { SettingsPage } from './components/SettingsPage'
import {Appoint} from './components/Appoint'
import Health from './components/Health'
// import { Appointment } from './components/Appointment'


const Layout = () => {
  return (
    <>
     
      <Outlet />
    </>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check if the user has dark mode enabled in localStorage
    const savedMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(savedMode)
    if (savedMode) {
      document.body.classList.add('dark-mode')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.body.classList.add('dark-mode')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.body.classList.remove('dark-mode')
      localStorage.setItem('darkMode', 'false')
    }
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/health' element={<Health/>} />
        {/* <Route path='/appointment' element={<Appointment />} /> */}
        <Route path='/community' element={<Community />} />
        <Route path='/appointment' element={<Appoint/>} />
        <Route path='/addpet' element={<AddPet />} />
        <Route path='/makeAppointment' element={<MakeAppointment />} />
        <Route path='profilePage' element={<ProfilePage />} />
        <Route
          path='/settingsPage'
          element={
            <SettingsPage
              onLogout={() => alert('Logging out!')}
              toggleDarkMode={toggleDarkMode}
            />
          }
        />
      </Route>
    </Routes>
  )
}

export default App
