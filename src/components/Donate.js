import React from "react";
import Navbar from "../screens/Navbar";
import { useNavigate } from "react-router-dom";
// import { Carousel } from 'flowbite-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function Donate() {

  const navigate = useNavigate();

  const handleDonateFoodClick = () => {
    navigate("/donatefood");
  };
  const handleDonateEssentialsClick = () => {
    navigate("/donateessentials");
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds (e.g., 5000 for 5 seconds)
  };
  return (
    <div>
      <Navbar />
      <Slider {...settings}>
      <div>
        <img className="max-w-full" src="donate2.png" alt="Slide 1" />
      </div>
      <div>
        <img className="max-w-full" src="donate1.png" alt="Slide 2" />
      </div>
      <div>
        <img className="w-[1900px]" src="donate3.png" alt="Slide 3" />
      </div>
      <div>
        <img className="w-[1920px]" src="donate4.png" alt="Slide 3" />
      </div>
    </Slider>
      <div className="mt-[2rem] absolute ml-[18rem] w-[132vh]">
        <p className="text-[#6B7280] text-center font-Poppins text-[60]px not-italic font-[700] leading-[72px] tracking-[-1.08px] text-[36px] mt-[-3%]">
          Transform compassion into action.{" "}
          <span className="text-[#232E40] text-center font-Poppins text-[60]px not-italic font-[700] leading-[72px] tracking-[-1.08px] text-[30px] mt-[-3%]">
            Donate today, make a difference.
          </span>
        </p>
        {/* <div className="mt-[2rem] absolute ml-[12rem] w-[79vh]">
          <p className="text-[#556987] font-Poppins text-[20px] not-italic font-[500] leading-[30px] text-center ">
            Lorem ipsum dolor sit amet consectetur. Commodo id ut tellus metus
            vel. Ullamcorper mauris et imperdiet ornare.
          </p>
        </div> */}
        <div className="buttons absolute mt-[-24%]">
          <div className=" ">
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
      </div>
    </div>
  );
}
