import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const NGOList = ({ data }) => {
  const [searchTermCityPincode, setSearchTermCityPincode] = useState('');
  const [searchTermState, setSearchTermState] = useState('');
  const [searchResultsCityPincode, setSearchResultsCityPincode] = useState([]);
  const [searchResultsState, setSearchResultsState] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [showResultsCityPincode, setShowResultsCityPincode] = useState(false);
  const [showResultsState, setShowResultsState] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);

  useEffect(() => {
    const filterNGOsCityPincode = () => {
      const filteredNGOs = data.filter((ngo) => {
        return (
          ngo.city.toLowerCase().includes(searchTermCityPincode.toLowerCase()) ||
          ngo.pincode.toLowerCase().includes(searchTermCityPincode.toLowerCase())
        );
      });
      setSearchResultsCityPincode(filteredNGOs);
    };

    const filterNGOsState = () => {
      const filteredNGOs = data.filter((ngo) => {
        return ngo.state.toLowerCase().includes(searchTermState.toLowerCase());
      });
      setSearchResultsState(filteredNGOs);
    };

    const getUserLocation = () => {
      setLoadingLocation(true);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Fetch location details using reverse geocoding API
            fetch(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=YOUR_API_KEY`)
              .then((response) => response.json())
              .then((data) => {
                const { city, state, postcode } = data.results[0].components;
                setUserLocation({
                  city: city || '',
                  state: state || '',
                  pincode: postcode || '',
                });
                setLoadingLocation(false);
              })
              .catch((error) => {
                console.error('Error getting user location:', error);
                setLoadingLocation(false);
              });
          },
          (error) => {
            console.error('Error getting user location:', error);
            setLoadingLocation(false);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        setLoadingLocation(false);
      }
    };

    if (showResultsCityPincode) {
      filterNGOsCityPincode();
    }

    if (showResultsState) {
      filterNGOsState();
    }

    if (!userLocation) {
      getUserLocation();
    }
  }, [searchTermCityPincode, searchTermState, data, userLocation, showResultsCityPincode, showResultsState]);

  const handleSearchCityPincodeClick = () => {
    setShowResultsCityPincode(true);
    setShowResultsState(false);
  };

  const handleSearchStateClick = () => {
    setShowResultsCityPincode(false);
    setShowResultsState(true);
  };

  const handleUseLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setSearchTermCityPincode(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="image mt-[-55px]">
        <img className="p-[43px] mt-[27px]"src="ngo.png" alt="error" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Search by city or pincode"
          value={searchTermCityPincode}
          onChange={(e) => setSearchTermCityPincode(e.target.value)}
          className='p-[10px 14px] flex items-center gap-8 self-stretch mt-[-30px] ml-[12%] w-[409px] h-[33px] rounded-[6px] border-[1px] border-solid border-black bg-[var(--White, #FFF)] shadow-box'
        />
        <button onClick={handleSearchCityPincodeClick}>Search</button>
        <button disabled={loadingLocation} onClick={handleUseLocationClick}>
          Use My Location
        </button>
      </div>

      {showResultsCityPincode && (
        <div>
          {loadingLocation && <p>Loading location...</p>}
          {!loadingLocation && (
            <div>
              {searchResultsCityPincode.length > 0 ? (
                searchResultsCityPincode.map((ngo) => (
                  <div key={ngo.id}>
                    <h3>{ngo.ngoName}</h3>
                    <p>{ngo.ngoDescription}</p>
                    {/* Add other NGO information as needed */}
                  </div>
                ))
              ) : (
                <p>No NGOs found for the specified city or pincode.</p>
              )}
            </div>
          )}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search by state"
          value={searchTermState}
          onChange={(e) => setSearchTermState(e.target.value)}
          className="flex items-center gap-8 self-stretch mt-[-60px] ml-[63%] w-[409px] h-[33px] rounded-[6px] border-[1px] border-solid border-[#c0b2b2] bg-[var(--White, #FFF)] shadow-box"
        />
        <button onClick={handleSearchStateClick}>Search</button>
      </div>

      {showResultsState && (
        <div>
          {searchResultsState.length > 0 ? (
            searchResultsState.map((ngo) => (
              <div key={ngo.id}>
                <h3>{ngo.ngoName}</h3>
                <p>{ngo.ngoDescription}</p>
                {/* Add other NGO information as needed */}
              </div>
            ))
          ) : (
            <p>No NGOs found for the specified state.</p>
          )}
        </div>
      )}

      {userLocation && (
        <div>
          <h3>Your Current Location</h3>
          <p>City: {userLocation.city}</p>
          <p>State: {userLocation.state}</p>
          <p>Pincode: {userLocation.pincode}</p>
        </div>
      )}
    </div>
  );
};

export default NGOList;
