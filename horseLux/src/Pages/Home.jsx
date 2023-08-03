import React, { useState } from "react";
import senior from "../images/senoir.png";
import {BsEyeFill} from 'react-icons/bs'
import {AiOutlineEyeInvisible} from 'react-icons/ai'

const Home = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-red-500">
      <div>
        <div className=" w-full h-[50vh] relative">
          <img src={senior} className="w-full h-full" />
          <div className="text-center bg-white absolute px-5 py-6 w-full top-[80%] rounded-tl-[40px] rounded-tr-[40px] h-[50vh]">
            <h1 className="text-[23px] font-[700] "> Horse Management</h1>
            <p className="text-[16px] text-[#2C3A4B] mt-3 text-justify">
              Log medical conditions, medications, rides, farrier or veterinary
              activities and much more
            </p>
            <div className="flex flex-col gap-y-4 mt-12">
              <button>Skip</button>
              <button className="w-full bg-[#000032] text-white py-2 rounded-3xl">
                Next
              </button>
            </div>
            <div className="border w-full flex py-1 rounded-lg">
              <input className="w-full outline-none "
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
              />
              <button onClick={togglePasswordVisibility}>
                {showPassword ? <BsEyeFill/> : <AiOutlineEyeInvisible/>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
