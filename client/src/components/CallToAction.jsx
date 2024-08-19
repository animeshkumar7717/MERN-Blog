import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
        <div className="flex flex-col sm:flex-row p-3 border border-teal-600 justify-center items-center text-center rounded-tl-3xl rounded-br-3xl">
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className='text-2xl'>Want to learn more about javascript</h2>
            <p className='text-gray-500 my-2'>Checkout these resources with 100 Javascript project</p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href='https://www.100jsprojects.com' target='_blank' rel='noopener noreferrer'>
                    Learn More
                </a>
            </Button>
        </div>
        <div className="flex-1 p-7 ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfSKH1xleFawwRlK-wVY0HihiPEYMc3sFHtwHoD5iLLN7MhRoBfktmaIIVVodpw-5E46Y&usqp=CAU" alt="javascript" />
        </div>
        </div>
  )
}
