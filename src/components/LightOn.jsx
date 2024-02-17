import React from 'react'
import { useState } from 'react';

const LightOn = () => {
    const [isLightOn, setIsLightOn] = useState('white');

  return (
    <>
    <div className='w-full h-screen items  justify-center text-center  relative' >
        <div className='w-[500px] h-[500px] bg-black flex justify-center items-center rounded-lg shadow-xl ' style={{backgroundColor : isLightOn}}>
        <img className='w-[300px] h-[300px] rounded-[50%] flex justify-center items-center text-center' src="https://cdn2.iconfinder.com/data/icons/accessibility-6/24/dark_light_mode_night_lamp_bulb_ui-512.png" alt=""  />
        </div>
        <div className='absolute top-[550px] left-[100px] flex gap-[100px]'>
        <button className=' w-[100px] h-[60px] rounded-xl text-2xl text-white bg-blue-400'onClick={() => setIsLightOn('white')}>On</button>
        <button className=' w-[100px] h-[60px] rounded-xl text-2xl text-white  bg-lime-600'onClick={() => setIsLightOn('black')}>Off</button>
        </div>
       
    </div>
    </>
  )
}

export default LightOn