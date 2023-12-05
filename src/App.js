import Login from './components/Login';
import './App.css';
// import { Provider } from 'react';
// import appStore from './components/AppStore';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './screens/Navbar';
import Home from './components/Home';
import Donate from './components/Donate';
import DonateFood from './components/DonateFood';
import DonateEssentials from './components/DonateEssentials';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donatefood" element={<DonateFood />} />
        <Route path="/donateessentials" element={<DonateEssentials />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes */}
      </Routes>
    </Router>

  );
}

export default App;
