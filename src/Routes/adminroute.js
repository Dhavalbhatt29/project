import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from '../Layout/Admin'
import AdminDashboard from '../Components/admindashboard'

function Adminroute() {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} >
        <Route path="/admin" element={<AdminDashboard /> } />
        
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  )
}

export default Adminroute