import React from "react";
import junaidImage from "../Images/img1.png";
import pic from "../Images/Vector.png";
import pic1 from "../Images/Frame-1.png";

const SignUp = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${junaidImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white bg-black bg-opacity-70 rounded-3xl p-8 w-[928px]">
        <h1 className="px-12 font-bold">Create account,</h1>
        <h2 className="px-12 font-semibold">Sign up to get started</h2>
        <div className="flex gap-8 px-12 pt-4">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Adam Smith"
              className="text-black px-4 rounded-full w-[380px] h-[48px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">
              Password <label className="text-red-800">*</label>
            </label>
            <input
              type="password"
              id="password"
              placeholder="*****************"
              className="text-black px-4 rounded-full w-[380px] h-[48px]"
            />
          </div>
        </div>
        <div className="flex gap-8 px-12 pt-4">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Adammith@gmail.com"
              className="text-black px-4 rounded-full w-[380px] h-[48px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword">
              Confirm Password <label className="text-red-800">*</label>
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="*****************"
              className="text-black px-4 rounded-full w-[380px] h-[48px] "
            />
          </div>
        </div>
        <div className="text-black flex flex-col px-12 pt-4">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="+44 987987991"
            className="text-black px-4 rounded-full w-[380px] h-[48px]"
          />
        </div>

        <div className="pt-8 px-52">
          <button className="bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-700 w-[380px] h-[55px] rounded-3xl">
            Sign up
          </button>
          <p className="px-32 pt-2">or continue with</p>
          <div className="flex gap-8 px-16 pt-2 ">
            <img src={pic} alt="Facebook" />
            <p className="">Facebook</p>
            <img src={pic1} alt="Google" />
            <p className="">Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
