import React from 'react';

export default function Popup2({ onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#6B7280]">
      <div className="relative w-[500px] h-[500px] flex flex-col items-center justify-center rounded-md border bg-white">
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <img
          src="popup2_image.png"
          alt="img"
          className="h-[300px] w-full rounded-md object-cover mb-[20px]"
        />
        <div className="p-4 text-center">
          <h1 className="text-lg font-extrabold font-inter text-[30px]">Yeahhhh🎉</h1>
          <p className="mt-3 text-base text-[24px] text-gray-600 mb-[16px] mt-[20px]">
            Thank you for your subscription. You will be sent the next issue of our newsletter shortly.
          </p>
          <button
            type="button"
            className="mt-4 rounded-lg bg-[#2563EB] px-4 py-2 text-base text-[21px] font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Got it
          </button>
          <button
            type="button"
            className="inline-flex items-center mt-4 px-4 py-2 text-base text-[21px] font-semibold text-[#2563EB] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-blue-900"
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}
