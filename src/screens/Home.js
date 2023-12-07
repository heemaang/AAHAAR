import React from "react";
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom"


export default function Home() {
  const navigate = useNavigate();

  const handleDonateClick = ()=> {
    navigate("/donate")
  }
  return (
    <div>
      <Navbar />
      <div className="ml-[53rem] absolute mt-[3rem]">
        <img
          className="w-[607px] h-[489px] flex-shrink-0 "
          src="Home.png"
          alt=""
        />
      </div>
      <div>
        <h1 className="w-[513px] text-[#2A3342] text-center mt-[5rem] ml-[5rem] font-[800] text-[110px] not-italic leading-[72px] tracking-[-2.2px] font-[Poppins]">
          Aahaar
        </h1>
        <h3 className="mt-[2rem] ml-[11rem] font-[Poppins] text-[36px] not-italic font-[500] leading-[24px] text-[#556987] ">
          an Uphaar to all
        </h3>
        <div className="absolute w-[513px] ml-[8rem] mt-[4rem]">
          <p className=" font-[Poppins] text-[20px] not-italic font-[500] leading-[30px] text-[#556987]">
            "Join Aahaar: A platform that connects surplus food donors with
            those in need. Help reduce food waste and hunger in your community."
          </p>
        </div>
        <div className="">
          <button onClick={handleDonateClick} className=" w-[14rem] flex w-302 h-56 p-[16px] justify-center items-center gap-[8px] flex-shrink-0 rounded-md bg-[#185013] shadow-md mt-[14rem] ml-[13rem] text-[#F0FDF4] font-[500] not-italic text-[18px] font-Poppins">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}
