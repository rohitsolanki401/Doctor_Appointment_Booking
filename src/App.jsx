import React from 'react'
import { Routes,Route} from 'react-router-dom'
import MyAppointments from './pages/MyAppointments'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointments'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-10 sm-mx-[10%]'>
     <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:speciality' element={<Doctors />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/my-profile' element={<MyProfile />} />
      <Route path='/my-appointments' element={<MyAppointments />} />
      <Route path='/Appointment/:docId' element={<MyAppointment />} />
    </Routes>
    <Footer />
  </div>
  )
}

export default App
