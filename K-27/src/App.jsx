import React from 'react'
import Home from './pages/home'
import Agence from './pages/agence'
import Projects from './pages/projects'
import { Route , Routes } from 'react-router-dom'
import './index.css'

const App = () => {
  return (
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agence/>}/>
        <Route path='/projects' element={<Projects/>}/>
        
      </Routes>
    
    </div>
  )
}

export default App
