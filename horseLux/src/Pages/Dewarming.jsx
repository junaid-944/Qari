import React from 'react'
import horse from '../images/horse1.png'

const Dewarming = () => {
  return (
    <div className=' bg-[#b8afaf] w-[759px] h-[558px] absolute left-[403px] mt-4 rounded-3xl'>
    <div className='flex justify-center font-bold'>
      <h1 className='font-[Quicksand]'>Dewarming</h1>
      </div>
      <hr></hr>
      <form className='grid grid-cols-2'>
      
      <div className='flex flex-col px-6 w-1/2 gap-4'>
      <h1 className='font-bold'>Details</h1>
      <div className='flex flex-col'><label>Date</label>
      <input type='date'className='w-[305px] h-[48px] rounded-md'></input>
      </div>
      <div className='flex flex-col'><label>Next Due Date</label>
      <input type='date' className='w-[305px] h-[48px] rounded-md'></input>
      </div>
      <div className='flex flex-col'>
      <label >Type</label>
      <input type='text'className='w-[305px] h-[48px] rounded-md'></input>
      </div>
      <div className='flex flex-col'>
      <label>Administered By</label>
      <select className='w-[305px] h-[48px] rounded-md'>
        <option>option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
      </select>
      
      </div>
      </div>
      <div className='flex flex-col justify px-6  gap-4 pt-4'>
        <label>Price</label>
        <input type='number' className='w-[305px] h-[48px] rounded-md'></input>
       <div className='flex flex-col'><label>Comment</label>
      <input type='text' className='w-[305px] h-[96px] rounded-md'></input>
       </div>
       <div>
        <img src ={horse} className='w-[270px] h-[180px] rounded-md'/>
       </div>
      </div>
      
      
      </form>
      </div>
      
    
  )
}

export default Dewarming
