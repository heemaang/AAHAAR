// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './screens/Navbar';
// import Home from './screens/Home';
// import Donate from './components/Donate';
// import DonateFood from './components/DonateFood';
// import DonateEssentials from './components/DonateEssentials';
// import Foodbank from './screens/Foodbank';
// import Ngo from './screens/Ngo';
// import Contact from './components/Contact';
// import ngoData from './Data/ngoData.json';
// import Footer from './components/Footer';
// import Login from './components/Login';
// import { NGORegistrationForm, RegistrationForm } from './screens/NGORegistrationForm';
// import { useSpring, animated } from 'react-spring';
// import Contactus from './screens/Contactus';
// import Info from './screens/Info';
// import { FoodbanksForm } from './screens/FoodbanksForm';


// import ChatBot from 'react-simple-chatbot';
// import { Button, Dropdown } from 'semantic-ui-react';
// import React, { useEffect, useState } from "react";




// const LandingPage = () => {
//   const [showLandingPage, setShowLandingPage] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setShowLandingPage(false);
//     }, 3000);
    
//   }, []);

  

//   const fadeInOutAnimation = useSpring({
//     opacity: showLandingPage ? 1 : 0,
//     from: { opacity: 0 },
//     config: { duration: 2000 },
//   });

//   return (
//     <animated.div className="landing-page" style={fadeInOutAnimation}>
//       <h1 className="w-[513px] absolute text-[#2A3342] text-center mt-[18rem] ml-[35rem] font-[800] text-[110px] not-italic leading-[72px] tracking-[-2.2px] font-[Poppins] drop-shadow-lg">
//         Aahaar
//       </h1>
//       <div>
//         <animated.img
//           className="absolute w-[120px] h-[120px] ml-[35%] mt-[17%] flex-shrink-0 filter drop-shadow-lg"
//           src="logo.png"
//           alt=""
//         />
//       </div>
//     </animated.div>
//   );
// };
// const App = () => {
//   const [showLandingPage, setShowLandingPage] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setShowLandingPage(false);
//     }, 3000); 
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {showLandingPage ? (
//           // Show the landing page during the specified time
//           <Route path="/" element={<LandingPage />} />
//         ) : (
//           // Show the main content after the landing page duration
//           <>
//             <Route path="/" element={<Navbar />} />
//             <Route index element={<Home />} />
//             <Route path="/donate" element={<Donate />} />
//             <Route path="/foodbank" element={<Foodbank />} />
//             <Route path="/ngo" element={<Ngo data={ngoData} />} />
//             <Route path="/donatefood" element={<DonateFood />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/info" element={<Info />} />
//             <Route path="/contactus" element={<Contactus/>} />
//             <Route path="/donateessentials" element={<DonateEssentials />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/registrationform" element={<NGORegistrationForm />} />
//             <Route path="/foodbanksform" element={<FoodbanksForm />} />
//             <Route path="/footer" element={<Footer />} />
//             {/* Add other routes */}
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

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
import { NGORegistrationForm, RegistrationForm } from './screens/NGORegistrationForm';
import { useSpring, animated } from 'react-spring';
import Contactus from './screens/Contactus';
import Info from './screens/Info';
import { FoodbanksForm } from './screens/FoodbanksForm';

import ChatBot from 'react-simple-chatbot';
import { Button, Dropdown } from 'semantic-ui-react';
// import React, { useEffect, useState } from 'react';

const steps = [
  {
    id: 'Greet',
    message: 'Hello, Welcome to our shop',
    trigger: 'Done',
  },
  {
    id: 'Done',
    message: 'Please enter your name!',
    trigger: 'waiting1',
  },
  {
    id: 'waiting1',
    user: true,
    trigger: 'Name',
  },
  {
    id: 'Name',
    message: 'Hi {previousValue}, Please select your issue',
    trigger: 'issues',
  },
  {
    id: 'issues',
    options: [
      {
        value: 'React',
        label: 'React',
        trigger: 'React',
      },
      { value: 'Angular', label: 'Angular', trigger: 'Angular' },
    ],
  },
  {
    id: 'React',
    message: 'Thanks for letting your React issue, Our team will resolve your issue ASAP',
    end: true,
  },
  {
    id: 'Angular',
    message: 'Thanks for letting your Angular issue, Our team will resolve your issue ASAP',
    end: true,
  },
];

const ChatBotComponent = () => {
  const [trigger, setTrigger] = useState(null);

  useEffect(() => {
    if (trigger) {
      // Use a delay to prevent rapid triggering of the next step
      setTimeout(() => {
        setTrigger(null);
      }, 100);
    }
  }, [trigger]);

  return (
    <ChatBot
      steps={steps}
      floating={true} // This makes the chatbot floating
      opened={true} // Open the chatbot by default
      headerTitle="AI Legal Decision System"
      //botAvatar="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" // Set your own avatar image
      trigger={trigger}
      handleEnd={() => setTrigger(null)}
    />
  );
};

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

  const [showChatBot, setShowChatBot] = useState(false);

  const handleChatBotToggle = () => {
    setShowChatBot(!showChatBot);
  };

  return (
    <>
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
              <Route path="/info" element={<Info />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/donateessentials" element={<DonateEssentials />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registrationform" element={<NGORegistrationForm />} />
              <Route path="/foodbanksform" element={<FoodbanksForm />} />
              <Route path="/footer" element={<Footer />} />
              {/* Add other routes */}
            </>
          )}
        </Routes>
      </Router>

      <div style={{ position: 'fixed', bottom: 20, right: 20, opacity: 150 }}>
        <Button onClick={handleChatBotToggle} primary>
          <img
            src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
            alt="ChatBot"
          />
        </Button>
        {showChatBot && <ChatBotComponent />}
      </div>
    </>
  );
};

export default App;

