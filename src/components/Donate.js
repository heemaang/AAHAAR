import React from "react";
import Navbar from "../screens/Navbar";
import { useNavigate } from "react-router-dom";

export default function Donate() {
  const navigate = useNavigate();

  const handleDonateFoodClick = () => {
    navigate("/donatefood");
  };
  const handleDonateEssentialsClick = () => {
    navigate("/donateessentials");
  };
  return (
    <div>
      <Navbar />
      <div className="mt-[2rem] absolute ml-[18rem] w-[132vh]">
        <p className="text-[#2A3342] text-center font-Poppins text-[60]px not-italic font-[700] leading-[72px] tracking-[-1.2px] text-[60px]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="mt-[2rem] absolute ml-[12rem] w-[79vh]">
          <p className="text-[#556987] font-Poppins text-[20px] not-italic font-[500] leading-[30px] text-center ">
            Lorem ipsum dolor sit amet consectetur. Commodo id ut tellus metus
            vel. Ullamcorper mauris et imperdiet ornare.
          </p>
        </div>
        <div className="">
          <button
            onClick={handleDonateEssentialsClick}
            className=" w-[14rem] flex w-302 h-56 p-[16px] justify-center items-center gap-[8px] flex-shrink-0 rounded-md bg-[#185013] shadow-md mt-[14rem] ml-[13rem] text-[#F0FDF4] font-[500] not-italic text-[18px] font-Poppins"
          >
            Donate Essentials
          </button>
        </div>
        <div className="">
          <button
            onClick={handleDonateFoodClick}
            className=" w-[14rem] flex w-302 h-56 p-[16px] justify-center items-center gap-[8px] flex-shrink-0 rounded-md bg-[#185013] shadow-md mt-[-58px] ml-[33rem] text-[#F0FDF4] font-[500] not-italic text-[18px] font-Poppins"
          >
            Donate Food
          </button>
        </div>
      </div>
      {/* <div className="mt-[2rem] ml-[69rem] ">
        <img  className="w-[423px] h-[434]" src="donate.png
        " alt="" srcset="" />
      </div> */}
    </div>
  );
}
