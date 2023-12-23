import React from 'react';

const Popup1 = ({ onClose }) => {
  return (
    <div className="py-10">
      <div className="flex justify-end">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 focus:outline-none mt-[-50px]"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="text-center">
        <img className='mx-auto' src='boltImage.png' alt="Bolt Image" />
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Task successfully created!
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600 text-[23px]">
          You can see the progress of your task in your personal account <br /> you will be notified of its completion.
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-[20px] font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const CenteredPopup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#6B7280]">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <Popup1 onClose={onClose} />
      </div>
    </div>
  );
};

export default CenteredPopup;
