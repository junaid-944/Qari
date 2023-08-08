import React from 'react'
import horse from '../images/horse2.png' 
import { FaBeer } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ImBin } from 'react-icons/im'

const Dewarming = () => {
  return (
    <div className=' bg-[#efeded] w-[759px] h-[558px] absolute left-[403px] mt-4 rounded-3xl'>
   <div>
   
   </div>
    <div className='flex justify-between  mt-5'>
     <AiOutlineArrowLeft/>
      <h1 className='font-[Quicksand] font-semibold '>COGGINS</h1>
      <ImBin/>
      </div>
      <hr></hr>
      <form className='grid grid-cols-2'>
      
      <div className='flex flex-col px-6 w-1/2 gap-4'>
      <h1 className='font-semibold font-[Quicksand] pt-4'>DETAILS</h1>
      <div className='flex flex-col'><label>Date</label>
      <input type='date'className='w-[305px] h-[48px] rounded-md'></input>
      </div>
      <div className='flex flex-col'><label>Next Due Date</label>
      <input type='date' className='w-[305px] h-[48px] rounded-md'></input>
      </div>
      <div className='flex flex-col'><label>Comment</label>
      <input type='text' className='w-[305px] h-[96px] rounded-md'></input>
       </div>
      </div>
      <div className='flex flex-col justify px-6  gap-4 pt-12'>
       <label>Attachments</label>
        <img src ={horse} className='w-[270px] h-[180px] rounded-md'/>
       </div>
      
      </form>
      </div>
      
    
  )
}

export default Dewarming
