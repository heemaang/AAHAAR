import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

const NGOSearch = ({ data }) => {
  const [searchInput, setSearchInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const searchByCityOrPin = () => {
    const searchValue = searchInput.toUpperCase();
    let result = [];

    for (const state in data.STATE) {
      for (const cityData of data.STATE[state]) {
        for (const city in cityData.CITY) {
          for (const ngo of cityData.CITY[city]) {
            if (
              ngo.PINCODE === parseInt(searchValue) ||
              city.toUpperCase() === searchValue
            ) {
              result.push({ state, city, ngo });
            }
          }
        }
      }
    }

    setSearchResult(result);
    setHasSearched(true);
  };

  const searchByState = () => {
    const searchValue = stateInput.toUpperCase();
    let result = [];

    if (data.STATE[searchValue]) {
      for (const cityData of data.STATE[searchValue]) {
        for (const city in cityData.CITY) {
          for (const ngo of cityData.CITY[city]) {
            result.push({ state: searchValue, city, ngo });
          }
        }
      }
    }

    setSearchResult(result);
    setHasSearched(true);
  };

  return (
    <div>
      <Navbar />
      <div className="image mt-[-55px]">
        <img className="p-[43px] mt-[27px]" src="ngo.png" alt="error" />
      </div>
      <div>
        <p className="text-center font-Poppins text-2xl font-extrabold leading-18 tracking-tighter text-gray-900 mt-[-34px]">
        Discover Nearby Food Banks : Connect with local resources through 
        <span className="">AAHAAR</span>
        </p>
      </div>
      <label htmlFor="searchInput"></label>
      <input
        type="text"
        id="searchInput"
        placeholder="Enter City or PIN Code"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="p-[10px 14px] flex items-center gap-8 self-stretch mt-[-30px] ml-[12%] w-[409px] h-[33px] rounded-[6px] border-[1px] border-solid border-black bg-[var(--White, #FFF)] shadow-box"
      />
      <button
        onClick={searchByCityOrPin}
        className="ml-[86vh] mt-[-26px] absolute border-collapse"
      >
        Search
      </button>

      <br />

      <label htmlFor="stateInput">:</label>
      <input
        type="text"
        id="stateInput"
        placeholder="Enter State"
        value={stateInput}
        onChange={(e) => setStateInput(e.target.value)}
        className="flex items-center gap-8 self-stretch mt-[-77px] ml-[58%] w-[409px] h-[33px] rounded-[6px] border-[1px] border-solid border-[#c0b2b2] bg-[var(--White, #FFF)] shadow-box  border-black"
      />
      <button
        onClick={searchByState}
        className="ml-[185vh] mt-[-26px] absolute border-collapse"
      >
        Search
      </button>

      <div>
        {hasSearched && searchResult.length === 0 ? (
          <p>NGO not found</p>
        ) : (
          <ul>
            {searchResult.map((item, index) => (
              <li key={index}>
                {item.ngo.NGO} - {item.ngo.ADDRESS}, {item.city}, {item.state}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default NGOSearch;
