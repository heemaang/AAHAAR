import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './screens/Navbar';
import Home from './screens/Home';
import Donate from './components/Donate';
import DonateFood from './components/DonateFood';
import DonateEssentials from './components/DonateEssentials';
import Foodbank from './screens/Foodbank';
import Ngo from './screens/Ngo';
import Contact from './components/Contact';
import ngoData from './Data/ngoData.json';
import Footer from './components/Footer';
import Login from './components/Login';
import { RegistrationForm } from './screens/RegistrationForm';
import { useSpring, animated } from 'react-spring';
import Contactus from './screens/Contactus';

// const LandingPage = () => {
//   return (
//     <div className="landing-page">
//         <h1 className="w-[513px] absolute text-[#2A3342] text-center mt-[18rem] ml-[35rem] font-[800] text-[110px] not-italic leading-[72px] tracking-[-2.2px] font-[Poppins] drop-shadow-lg">
//           Aahaar
//         </h1>
//         <div>
//           <img
//             className="absolute w-[120px] h-[120px] ml-[35%] mt-[17%] flex-shrink-0 filter drop-shadow-lg"
//             src="logo.png"
//             alt=""
//           />
//         </div>
//       </div>
//   );
// };
const LandingPage = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLandingPage(false);
    }, 3000);
    
  }, []);

  

  const fadeInOutAnimation = useSpring({
    opacity: showLandingPage ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  return (
    <animated.div className="landing-page" style={fadeInOutAnimation}>
      <h1 className="w-[513px] absolute text-[#2A3342] text-center mt-[18rem] ml-[35rem] font-[800] text-[110px] not-italic leading-[72px] tracking-[-2.2px] font-[Poppins] drop-shadow-lg">
        Aahaar
      </h1>
      <div>
        <animated.img
          className="absolute w-[120px] h-[120px] ml-[35%] mt-[17%] flex-shrink-0 filter drop-shadow-lg"
          src="logo.png"
          alt=""
        />
      </div>
    </animated.div>
  );
};
const App = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLandingPage(false);
    }, 3000); 
  }, []);

  return (
    <Router>
      <Routes>
        {showLandingPage ? (
          // Show the landing page during the specified time
          <Route path="/" element={<LandingPage />} />
        ) : (
          // Show the main content after the landing page duration
          <>
            <Route path="/" element={<Navbar />} />
            <Route index element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/foodbank" element={<Foodbank />} />
            <Route path="/ngo" element={<Ngo data={ngoData} />} />
            <Route path="/donatefood" element={<DonateFood />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contactus" element={<Contactus/>} />
            <Route path="/donateessentials" element={<DonateEssentials />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrationform" element={<RegistrationForm />} />
            <Route path="/footer" element={<Footer />} />
            {/* Add other routes */}
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;


