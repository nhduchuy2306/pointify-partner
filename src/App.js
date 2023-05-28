import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import BaseLayout from './components/BaseLayout/BaseLayout'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<BaseLayout/>} />
      <Route exact path="/login" element={<Login />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App