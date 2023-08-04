import React from 'react'
import img1 from '../images/Horse Stable.png'
import img2 from '../images/Contacts.png'
import img3 from '../images/Schedule.png'
import img4 from '../images/Combo Chart.png'

const Aziz = () => {
  return (
    <div className='flex '>
      <div className='w-1/4 bg-[#F4F4F4] min-h-screen'>

    <div className=' p-5 font-semibold pt-8'>
    <div className='flex py-3'><img src={img1} alt=' Horses'/> <h1 className='pl-3 pt-2'>Horses</h1></div>
    <div className='flex py-3'><img src={img2} alt=' Horses'/> <h1 className='pl-3 pt-2'>Contacts</h1></div>
    <div className='flex py-3'><img src={img3} alt=' Horses'/> <h1 className='pl-3 pt-2'>Schedule</h1></div>
    <div className='flex py-3'><img src={img4} alt=' Horses'/> <h1 className='pl-3 pt-2'>Reports</h1></div>
    </div>
    </div>
  <div>
    <div className='pt-6 pl-36 space-x-28 font-quicksand  '>
    <button className=' border rounded-xl px-10 py-1 hover:bg-[#000032] hover:text-white '>Activiy</button>
    <button className=' border rounded-xl px-10 py-1 hover:bg-[#000032] hover:text-white '>Reminders</button>
    <button className=' border rounded-xl px-10 py-1 hover:bg-[#000032] hover:text-white '>Details</button>
    

    </div>
    <div className='  w-full pt-8 pr-12 pl-2 pb-4 h-[85%] border-b shadow-orange-50 '>
      <div className='flex-col pl-52 '>
        
        <h1 className=' font-semibold pb-2'>INFORMATION</h1>
       <div className='flex'> <h2 className=' font-semibold'>Barn Name</h2> <p className=''>: Avallyn Bruce</p></div>
       <div className='flex'>  <h2 className=' font-semibold'>Paddock Name</h2><p className=''>: Avallyn Bruce</p></div>
       <div className='flex'>  <h2 className=' font-semibold'>Paddock Location</h2><p className=''>: The highland stable</p></div>
       <div className='flex pb-2'>  <h2 className=' font-semibold'>Paddock Notes</h2><p className=''>: The exact location of highland stable</p></div>
       <hr />

       <h1 className=' font-semibold pt-2 '>STALL INFORMATION</h1>
       <div className='flex pb-2'> <h2 className=' font-semibold'>Stall #</h2> <p className=''>: 24</p></div>
       <hr />

       <h1 className=' font-semibold  pt-2 '>IMPORTANT DATES</h1>
       <div className='flex'> <h2 className=' font-semibold'>Coggins Renewal Dates</h2> <p className=''>: 25-Jun-2024</p></div>
       <div className='flex pb-2'>  <h2 className=' font-semibold'>Last Coggins Dates</h2><p className=''>: 26-Jun-2023</p></div>
       <hr />

       <h1 className=' font-semibold  pt-2 '>FEED AM SHCEDULE</h1>
       <div className='flex'> <h2 className=' font-semibold'>alfalfa cubes</h2> <p className=''>: 2 1/4 flakes</p></div>
       <div className='flex'>  <h2 className=' font-semibold'>Smartpak</h2><p className=''></p></div>
       
       <h1 className=' font-semibold  pt-2 '>LUNCH SHEDULE</h1>
       <div className='flex'> <h2 className=' font-semibold'>alfalfa cubes</h2> <p className=''>: 2 1/4 flakes</p></div>
       <div className='flex pb-2'>  <h2 className=' font-semibold'>Smartpak</h2><p className=''></p></div>
       <hr />

      </div>
    </div>
    
   </div>
    </div>
    
  )
}

export default Aziz