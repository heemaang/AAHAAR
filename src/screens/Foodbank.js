// import React, { useState, useEffect } from 'react';

// const NGOList = ({ data }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [userLocation, setUserLocation] = useState(null);

//   useEffect(() => {
//     const filterNGOs = () => {
//       const filteredNGOs = data.filter((ngo) => {
//         return (
//           ngo.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           ngo.pincode.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           ngo.state.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//       });
//       setSearchResults(filteredNGOs);
//     };

//     const getUserLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             setUserLocation({
//               latitude: position.coords.latitude,
//               longitude: position.coords.longitude,
//             });
//           },
//           (error) => {
//             console.error('Error getting user location:', error);
//           }
//         );
//       } else {
//         console.error('Geolocation is not supported by this browser.');
//       }
//     };

//     filterNGOs();

//     if (!userLocation) {
//       getUserLocation();
//     }
//   }, [searchTerm, data, userLocation]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by city, pincode, or state"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <div>
//         {searchResults.length > 0 ? (
//           searchResults.map((ngo) => (
//             <div key={ngo.id}>
//               <h3>{ngo.ngoName}</h3>
//               <p>{ngo.ngoDescription}</p>
//               {/* Add other NGO information as needed */}
//             </div>
//           ))
//         ) : (
//           <p>No NGOs found for the specified location.</p>
//         )}
//       </div>

//       {userLocation && (
//         <div>
//           <h3>Your Current Location</h3>
//           <p>Latitude: {userLocation.latitude}</p>
//           <p>Longitude: {userLocation.longitude}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NGOList;
