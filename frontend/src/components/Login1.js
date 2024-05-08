// import react from "react";
import { useNavigate } from "react-router-dom";
// import Home from "../screens/Home";

const Login1 = () => {

  return (
    <div className="flex  ">
      <div className="w-3/5">
        <img className="h-100 w-39" src="./Rectangle 1.png" alt="loginpage" />
      </div>

      <div className="w-1/2 h-full ">
        <div className="flex justify-center items-center">
          <img
            className="mt-[2rem] ml-[-12rem]   w-[109.316px] h-[106.047px]  flex-shrink-0 filter drop-shadow-md"
            src="./Logo.png"
            alt="logo"
          />
        </div>
        <div>
          <h1 className="text-center font-[Poppins] not-italic font-[800] leading-9 text-[#232E40] text-[64px] ml-[-11rem]">
            Aahaar
          </h1>
          <p className=" ml-[-11rem] text-center text-[#556987] font-[Poppins] not-italic text-[18px] leading-7 font-medium">
            an Uphaar to all
          </p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="text-center ">
          <input
            type="text"
            required
            placeholder="Full Name"
            className=" bg-gray-100 
          rounded-lg p-[12px] m-[10px] w-[20rem] ml-[-10rem] font-['Poppins'] font-medium"
          />

          <br></br>

          <input
            type="text"
            required
            placeholder="Email address"
            className=" bg-gray-100 rounded-lg ml-[-10rem] p-[12px] m-[10px] w-[20rem] font-['Poppins'] font-medium"
          />
          <br></br>
          <input
            type="password"
            required
            placeholder="Password"
            className=" bg-gray-100 rounded-lg p-[12px]  ml-[-10rem] m-[10px] w-[20rem] font-['Poppins'] font-medium"
          />
          <br></br>
          <p className="text-red-500 font-bold py-2 font-['Poppins'] font-medium">
          </p>
          <button className=" bg-green-900 font-medium font-['Poppins'] p-[12px] ml-[-10rem] m-[10px] w-[20rem] rounded-md  text-[#F0FDF4] font-poppins text-md font-medium leading-[24px]"></button>

          <div>
            <button className=" p-[12px] m-[10px] w-[20rem] ml-[-10rem] rounded-md border border-solid border-gray-100 bg-white box-shadow-md ">
              <img
                className="flex justify-center items-center "
                src="./Social icon.png"
                alt="logo"
              />
              <p className=" font-['Poppins'] font-medium mt-[-25px]">
                Sign in with Google
              </p>
            </button>
            <p className="py-4 cursor-pointer  font-['Poppins'] font-medium p-[12px] mt[-1remx] w-[18rem] ml-[8rem] "></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login1;
