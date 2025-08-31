import React from 'react'
import '../../index.css'
import video from '../../../public/video.mp4'

const HomeHeroText = () => { 
    return (
        <div className='font-[font-1]  mt-72 lg:mt-0 pt-5 text-center'>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]' >
                The spark for
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]' >
                all
            <div >
              <video  autoPlay loop muted  className='h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden ' src="../../../public/video.mp4"></video>
            </div>
                things
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]' >
                creative
            </div>
        </div>
    )
}

export default HomeHeroText
