import React from 'react'
import '../../index.css'
import Video from '../home/video'
const HomeHeroText = () => {
    return (
        <div className='font-[font-1] pt-5 text-center'>
            <div className='text-[9.5vw]  justify-center flex item-center uppercase leading-[8vw]' >
                The spark for
            </div>
            <div className='text-[9.5vw] justify-center flex item-center uppercase leading-[8vw]' >
                all
            <div className='h-[7vw] w-[15vw] rounded-full overflow-hidden '>
                    <Video className='h-[7vw] w-[15vw] rounded-full overflow-hidden '  />
            </div>
                things
            </div>
            <div className='text-[9.5vw]  justify-center flex item-center uppercase leading-[8vw]' >
                creative
            </div>
        </div>
    )
}

export default HomeHeroText
