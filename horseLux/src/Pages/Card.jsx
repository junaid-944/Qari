import React from 'react'
import img from '../images/horse-head.png'
import img1 from '../images/heart.png'
import img2 from '../images/easy-installation.png'
import img3 from '../images/renewable.png'
import img4 from '../images/edit.png'
import img5 from '../images/thermometer.png'
import img6 from '../images/beehive.png'
import img7 from '../images/Contacts.png'
import img8 from '../images/Upload.png'
import img9 from '../images/User Groups.png'
import img10 from '../images/Clock.png'
import img11 from '../images/Appointment Time.png'
import img12 from '../images/To Do.png'
import img13 from '../images/Receive Dollar.png'
const Card = () => {
  return (
          <div className='ml-72 mt-2 bg-[#F4F4F4;] py-8 w-[50%] rounded-xl  '>
    <h1 className='flex justify-center font-semibold'>Horses</h1>
      <div className='flex px-4 gap-12 py-4 justify-center'>
        <img src={img} alt="horse" />
        <img src={img1} alt="horse" />
        <img src={img2} alt="horse" />
        <img src={img3} alt="horse" />
        <img src={img4} alt="horse" />
        <img src={img5} alt="horse" />
        <img src={img6} alt="horse" />
      </div>
      <div className='flex px-4 gap-8 justify-center '>
        <p>Horse</p>
        <p>Heart</p>
        <p>Service</p>
        <p>Renewal</p>
        <p>Notes</p>
        <p>Temperature</p>
        <p>Breeding</p>
        </div>
        <hr></hr>
        <h1 className='flex justify-center font-semibold'>Contacts</h1>
      <div className='flex  gap-24 py-4 justify-center'>
        <img src={img7} alt="horse" />
        <img src={img8} alt="horse" />
        <img src={img9} alt="horse" />
      </div>
      <div className='flex  gap-16 pl-8 justify-center '>
        <p>Contact</p>
        <p>Upload</p>
        <p>Owner Group</p>
        </div>
        <hr/>
        <h1 className='flex justify-center font-semibold'>Schedule</h1>
      <div className='flex  gap-20 py-4 justify-center'>
        <img src={img10} alt="horse" />
        <img src={img11} alt="horse" />
        <img src={img12} alt="horse" />
      </div>
      <div className='flex  gap-12 justify-center '>
        <p>Services</p>
        <p>Appoinments</p>
        <p>Task</p>
        </div>
        <hr/>
        <h1 className='flex justify-center font-semibold'>Financial</h1>
      <div className='flex  gap-20 py-4 justify-center'>
        <img src={img13} alt="horse" />
      </div>
      <div className='flex  gap-12 justify-center '>
        <p>Payment Recived</p>
        </div>
       

    
    </div>
  )
}

export default Card
