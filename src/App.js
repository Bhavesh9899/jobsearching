import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Companies from './pages/Companies'
import Jobs from './pages/Jobs'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Contactus from './pages/Contactus'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/contact-us" element={<Contactus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App