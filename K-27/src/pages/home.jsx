import React from 'react'
import Video from '../components/home/video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
const home = () => {
  return (
     <div className='h-screen w-screen overflow-hidden relative'>
      <div className='absolute inset-0 z-0'>
       <Video />
    </div>
  
  <div className='absolute inset-0 z-10 flex flex-col justify-between p-3'>
        <HomeHeroText />
        <HomeBottomText />
    </div>
   
    </div>
  )
}

export default home
