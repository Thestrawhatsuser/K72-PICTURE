import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Agence = () => {
  

  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray =
['https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
' https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
'https://k72.ca/uploads/teamMembers/joel_640X960_3-640x960.jpg',] 

useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        markers:false,
        start:"top 23.5%",
        end:"top -70%",
        scrub:true,
        pin:true,
        onUpdate:function(elem){
          let imageIndex;
          if(elem.progress < 1){
           imageIndex = Math.floor(elem.progress * imageArray.length)
          }else{
           imageIndex = imageArray.length -1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
        
  }
  })
})

  return (
   <div>
    <div ref={imageDivRef} className='absolute h-[20vw] rounded-[3xl] w-[15vw]  top-40  left-[30vw] '>
      <img ref={imageRef}  src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt=""/>
    </div>
     <div className='relative font-[font-1]'>
      <div className='mt-[55vh]'>
        <h1 className='text-[20vw] text-center leading-[18vw]'>
          SEVEN7Y <br />
          TWO
        </h1>
      </div>
    <div className='pl-[40%] mt-4'>
      <p className= 'text-4xl'>
         &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
      </p>
    </div>
    </div>
   </div>

  )
}

export default Agence
