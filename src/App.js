import Login from './components/Login';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './screens/Navbar';
import Home from './screens/Home';
import Donate from './components/Donate';
import DonateFood from './components/DonateFood';
import DonateEssentials from './components/DonateEssentials';
import Foodbank from './screens/Foodbank';
import Ngo from './screens/Ngo';
import Contactus from './screens/Contactus';
import ngoData from './Data/ngoData.json';
import Info from './components/Info';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/foodbank"element={<Foodbank />} />
        <Route path="/ngo" element={<Ngo data={ngoData} />} /> {/* Pass the data prop */}
        {/* <Route path="/ngo" element={<Ngo />} /> */}
        <Route path="/donatefood" element={<DonateFood />} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/donateessentials" element={<DonateEssentials />} />
        <Route path="/login" element={<Login />} />
        <Route path="/footer" element={<Footer/>} />
        {/* Add other routes */}
      </Routes>
    </Router>

  );
}

export default App;

