import React from "react";
import img from "../images/M.png";
import img1 from "../images/M1.png";
import img2 from "../images/M2.png";
import img3 from "../images/Mm.png";

const Asad = () => {
  return (
    <>
      <div className='flex flex-col items-center w-full bg-green-500'>
        <div className="w-1/2 ">
          <h1 className=" font-[Quicksand] font-bold w-[191px] h-[30px]">SELECTED HORSES</h1>
          <img src={img3} alt="" className="top-[200px] left-[322px] h-39 w-39" />
          <p className='font-[Quicksand] w-[36px] h-[15px] '>Harry</p>
        </div>
        <hr className="border border-double w-1/2 mt-4 hover:border-[#CACACA]" />
       
        <div className="flex w-1/2 justify-between my-5 ">
          <p className="text-[30px] font-[Quicksand]">Select Horse</p>
          <div className="flex items-center">
            <label className=" w-76 h-23 top-305 left-591 mx-4" >Select All</label>
            <input type="radio" className="h-[15px] w-[15px]"/>
          </div>
         
        </div>
        
        <input type="search" placeholder="Search" className="w-[380px] h-[45px] top-[353px] left-[321px] rounded-full p-[6px] pl-[28px] pr-[28px] pb-[6px] bg-neutral-9" />
        <div className="w-1/2 my-5 flex">
          <img src={img} alt=""  className="h-54px w-54px top-437 left-322"/>
          <div>
            <h1 className="w-47 h-23 top-439 left-387 font-[Quicksand] font-semibold text-[15px] leading-[22.5px] mx-3 ">Harry</h1>
  
              <div className="flex"><label className="flex w-131 h-18 top-466 text-[#000000] left-387 font-[Quicksand] font-semibold text-[12px] leading-[18px] mx-3">Owner: 
              <p className="w-131 h-18 top-466 text-[#5B5B5B] left-387 font-[Quicksand] font-semibold text-[12px] leading-[18px] ">Avalynn Bruce </p></label>
              {/* <p className="">Avalynn Bruce</p> */}
              <input type="radio" name="" id=""  className="ml-60 h-[15px] w-[15px] top-[642] left-[674]" />  
              </div>
          </div>
        </div>
        <hr className="border border-double w-1/2 mt-4 hover:border-[#CACACA]" />
        <div className="w-1/2 my-5 flex ">
          <img src={img1} alt=""  className="h-54px w-54px top-437 left-322"/>
          <div>
            <h1 className="w-47 h-23 top-439 left-387 font-[Quicksand] font-semibold text-[15px] leading-[22.5px] mx-3">Feris</h1>
  
              <div className="flex"><label className="flex w-131 h-18 top-466 text-[#000000]left-387 font-[Quicksand] font-semibold text-[12px] leading-[18px] mx-3">Owner: 
              <p className="w-131 h-18 top-466 text-[#5B5B5B] left-387 font-[Quicksand] font-semibold text-[12px] leading-[18px]  ">Avalynn Bruce </p></label>
              {/* <p className="">Avalynn Bruce</p> */}
              <input type="radio" name="" id=""  className="ml-60 h-[15px] w-[15px]" />   
              </div>
          </div>
        </div>
        <hr className="border border-double w-1/2 mt-4 hover:border-[#CACACA]" />
        <div className="w-1/2 my-5 flex ">
          <img src={img2} alt=""  className="h-54px w-54px top-437 left-322"/>
          <div>
            <h1 className="w-47 h-23 top-439 left-387 font-[Quicksand] font-semibold text-[15px] leading-[22.5px] mx-3">Furby</h1>
  <div className="w-fulf flex ">
              <label className="flex w-131 h-18 top-466 text-[#000000] left-387 font-[Quicksand] font-semibold text-[12px] leading-[18px] mx-3">Owner: 
              <p className="w-131 h-18 top-466 text-[#5B5B5B] left-387 font-[Quicksand] font-semibold text-[12px] leading-[18px] ">Avalynn Bruce </p></label>
              <input type="radio" name="" id=""  className="ml-60 h-[15px] w-[15px]" /></div>
              {/* <p className="">Avalynn Bruce</p> */}
          </div>
        </div>
        <hr className="border border-double w-1/2 mt-4 hover:border-[#CACACA]" />
        <div>
        <button className=" text-white w-[382px] h-[53px] top-[731px] left-[316px] rounded-full mt-5 bg-[#000032]"> Next </button>
        </div>
       </div>  

      
    </>
  );
};

export default Asad;