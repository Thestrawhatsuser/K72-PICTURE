import React from 'react'
import Home from './pages/home'
import Agence from './pages/agence'
import Projects from './pages/projects'
import { Route , Routes } from 'react-router-dom'
import './index.css'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
const App = () => {

useGSAP(function(){

  const tl = gsap.timeline()



  tl.from('.stair',{
    scaleY: 0,  
    transformOrigin: "top",// Instead of just scaleY
    duration: 0.5,
    stagger: {
      each: 0.1
      
    }
  })
  tl.to('.stair',{
      y: '100%',
      duration: 0.5,
      stagger: {
        each: 0.1}
  })


})



  return (
    <div className='text-white'> 

   <div className='stair h-screen w-full fixed z-20 top-0 flex '>
   <div className='stair h-full w-1/5 bg-black'> </div>
   <div className='stair h-full w-1/5 bg-black'> </div>
   <div className='stair h-full w-1/5 bg-black'> </div>
   <div className='stair h-full w-1/5 bg-black'> </div>
   <div className='stair h-full w-1/5 bg-black'> </div>
         

    </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agence/>}/>
        <Route path='/projects' element={<Projects/>}/>
        
      </Routes>
    
    </div>
  )
}

export default App
