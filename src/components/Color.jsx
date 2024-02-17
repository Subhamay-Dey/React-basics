import React from 'react'
import { useState } from 'react';


const Color = ({colorOne='red', colorTwo= '#22d3ee', colorThree= '#f9a8d4', lineOne= 'Red', lineTwo= 'Blue', lineThree= 'Pink', defaultColor='pink' , textOne= 'By UseState'}) => {
    const [Color, setColor] = useState(defaultColor)
  return (
    <>
        <div className='h-full w-screen justify-center items-center text-center relative'>
            <div className='absolute top-32 left-60 text-bold text-3xl font-bold cursor-pointer'>{textOne}</div>
            <div className='h-[350px] w-[350px] absolute top-56 left-40 rounded-lg shadow-2xl' style={{backgroundColor : Color}}></div>
            <div className='flex justify-center absolute top-[600px] left-44 gap-20'>
                <button className='text-2xl font-medium'onClick={() => setColor(colorOne)}>{lineOne}</button>
                <button className='text-2xl font-medium'onClick={() => setColor(colorTwo)}>{lineTwo}</button>
                <button className='text-2xl font-medium'onClick={() => setColor(colorThree)}>{lineThree}</button>
            </div>
        </div>
    </>
  )
}

export default Color