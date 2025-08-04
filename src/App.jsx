import React from 'react'
import MainPage from './components/mainPage'
import { Routes, Route } from 'react-router-dom'
import SchoolWebsite from './components/SchoolWebsite'
import AboutUs from './components/Pages/AboutUs'
import Courses from './components/Navbar/Courses'
import CooperateTrainingProgram from './components/Navbar/CooperateTrainingProgram'
import News from './components/Navbar/News'

const App = () => {
  return (
    <div>

      <Routes>


        <Route path='' element={<SchoolWebsite />} >
          <Route path='' element={<MainPage />} >
          </Route>
          <Route path='Aboutus' element={<AboutUs />} />
          <Route path='Courses' element={<Courses />} />
          <Route path='CorporateTraining' element={<CooperateTrainingProgram />} />
          <Route path='News&Updates' element={<News />} />



        </Route>

      </Routes>



    </div>
  )
}

export default App