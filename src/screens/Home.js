import React from "react";
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom"
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export default function Home() {
  const navigate = useNavigate();

  const handleDonateClick = ()=> {
    navigate("/donate")
  }
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img className="w-full" src="\images\homeimg.svg" alt="" />
        <h2 className="absolute text-[98px] font-[800] font-Poppins-Medium text-[#0d0f13] top-1/4 left-1/4 ml-[-280px] mt-[-70px]">Aahaar</h2>
        <h3 className="absolute text-[30px] font-[25px] font-Poppins-Medium text-[#0d0f13] top-1/4 left-1/4 ml-[-280px] mt-[44px]">an Uphaar to all</h3>
        <h4 className="absolute w-[350px] leading-[1.5rem] text-[18px] font-bold font-Poppins-Medium text-[#191d25] top-1/4 left-1/4 ml-[-275px] mt-[120px]">Join Aahaar: A platform that connects surplus food donors with those in need. Help reduce food waste and hunger in your community."</h4>
        <div className="z-40 mt-[-540px] ml-[900px] absolute bottom-5 bg-black opacity-75 h-[540px] w-[520px]">
          <h3 className="text-[#F0FDF4] font-[600] text-[70px] w-12 p-[40px]">Elevate Lives, Unite Hearts: Your Gateway to Positive Change</h3>
      </div>
      <div className="z-40 mt-[-674.5px] ml-[900px] absolute bottom-5 bg-black opacity-75 h-[135px] w-[15px]">
      </div>
      <div className="z-40 mt-[-674.5px] ml-[1405px] absolute bottom-5 bg-black opacity-75 h-[135px] w-[15px]">
      </div>
        <div className="">
          <button onClick={handleDonateClick} className="absolute top-1/4 left-1/4  flex w-[290px] h-[45px] p-[16px] justify-center items-center gap-[8px] flex-shrink-0 rounded-md bg-[#185013] mt-[320px] shadow-md ml-[-275px] text-[#F0FDF4] font-[500] not-italic text-[18px] outline outline-[#0d0f13] outline-2 font-Poppins-Medium">
            Donate Now<img src="\images\right.svg" alt="" />
          </button>
          <button onClick={handleDonateClick} className="absolute top-1/4 left-1/4 flex w-[290px] h-[45px] ml-[30px] p-[16px] justify-center items-center gap-[8px] flex-shrink-0 rounded-md mt-[320px] shadow-md bg-[#F0FDF4] text-[#185013] font-[500] not-italic text-[18px] outline outline-[#0c3a08] outline-2 font-Poppins-Medium hover:text-white hover:bg-[#185013] focus:outline-black">
            Support Us
          </button>
        </div>
      </div>
      <div className="absolute w-full h-[620px] mb-39" style={{background: `radial-gradient(50% 50% at 50% 50%, #106109 0%, #185013 100%)` }}>
        
        <h1 className="text-[#F0FDF4] text-[70px] ml-[120px] mt-[90px] font-700 w-[600px] font-Poppins-Medium">Be a part of the Change!</h1>
        <h4 className="text-[#b5b5b5] ml-[120px] mt-[10px] text-[18px] w-[440px] leading-[27px] font-Poppins-Medium">Join Aahaar and make a difference by sharing your surplus food or finding affordable, delicious meals near you. Together, we can combat food waste and help those in need.</h4>
        <div className="mt-[-320px] ml-[860px]">
      <iframe className="h-[300px] w-[550px] rounded-lg" 
      src="https://www.youtube.com/embed/UQ7MOASf78A?si=9mfLZvgBTFjMhq0s" title="YouTube video player"        frameborder="0" autoplay></iframe>
      </div>
        
        <div className="flex flex-row gap-[90px] text-yellow-50 ml-[120px] mt-[60px]">
          <div>
            <h1 className="font-700 font-Poppins-Medium text-[50px]">1.3</h1>
            <h2 className="font-700 font-Poppins-Medium text-[30px]">Billion</h2>
            <h4 className="text-[#b5b5b5] mt-[15px] text-[18px] w-[340px] leading-[27px] font-Poppins-Medium">tons of food is wasted annually
that’s about 1/3 of food produced</h4>
          </div>
          <div>
            <h1 className="font-700 font-Poppins-Medium text-[50px]">194</h1>
            <h2 className="font-700 font-Poppins-Medium text-[30px]">Million</h2>
            <h4 className="text-[#b5b5b5] mt-[15px] text-[18px] w-[340px] leading-[27px] font-Poppins-Medium">4.3% of the population are not receiving adequate nutrition in India or are affected by hunger</h4></div>
          <div>
          <h1 className="font-700 font-Poppins-Medium text-[50px]">107</h1>
            <h4 className="text-[#b5b5b5] mt-[35px] text-[18px] w-[340px] leading-[27px] font-Poppins-Medium">out of 121 countries in the Global Hunger Index</h4>
          </div>
        </div>
      </div>
      <img className="mt-[619px]" src="\images\upwave.svg" alt="" />
      
        
      <div>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}
