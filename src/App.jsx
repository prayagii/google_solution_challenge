import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Community from './pages/Community/Community'
import JobSearch from './pages/JobSearch/JobSearch'
import Mentorship from './pages/Mentorship/Mentorship'
import Home from './pages/Home/Home'
import Profile from './pages/Forms/Profile'
import Notification from './pages/Notification/Notification'

const App = () => {
  return (
      <>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/community' element={<Community/>} />
          <Route path='/job' element={<JobSearch/>} />
          <Route path='/mentorship' element={<Mentorship/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/notification' element={<Notification/>} />
        </Routes>
      </>
  )
}

export default App