import React from 'react'
import qari, { asad, aziz, junaid } from '../Config/Qari'
const Card = () => {
  return (
          <div className='ml-72 mt-2 bg-[#F4F4F4;] py-8 w-[746px] h-[590px] l-[346px] r-[20px] rounded-xl  '>
    <h1 className='flex justify-center font-semibold'>Horses</h1>
      <div className='flex gap-x-12  items-center'>
        {
          qari.map((asad)=>(
            <>
              <div className='w-28 h-28  flex flex-col justify-center items-center'>
                <img src={asad.img} className='w-[36px] h-[36px]'/>
                <p>{asad.text}</p>
              </div>
            </>
          ))
        }
      </div>
      <hr/>
      <h1 className='flex justify-center font-semibold'>Contacts</h1>
      <div className='flex gap-x-12  items-center justify-center'>
        {
          aziz.map((asad)=>(
            <>
              <div className='w-28 h-28  flex flex-col justify-center items-center'>
                <img src={asad.img} className='w-[36px] h-[36px]'/>
                <p>{asad.text}</p>
              </div>
            </>
          ))
        }
      </div>
      <hr/>
      <h1 className='flex justify-center font-semibold'>Schedule</h1>
      <div className='flex gap-x-12  items-center justify-center'>
        {
          junaid.map((asad)=>(
            <>
              <div className='w-28 h-28  flex flex-col justify-center items-center'>
                <img src={asad.img} className='w-[36px] h-[36px]'/>
                <p>{asad.text}</p>
              </div>
            </>
          ))
        }
      </div>
      <hr/>
      <h1 className='flex justify-center font-semibold'>Financial</h1>
      <div className='flex gap-x-12  items-center justify-center'>
        {
          asad.map((asad)=>(
            <>
              <div className='w-36 h-28 flex flex-col justify-center items-center'>
                <img src={asad.img} className='w-[36px] h-[36px]'/>
                <p className='text-center'>{asad.text}</p>
              </div>
            </>
          ))
        }
      </div>
      <hr/>

    
    </div>
  )
}

export default Card
