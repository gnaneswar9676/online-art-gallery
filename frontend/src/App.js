import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import your Navbar
import Home from './components/Home';
import Services from './components/Services';
import SignIn from './components/login';
import SignUp from './components/Signup';
import Virtualtour from './components/Virtualtour';
import gallery from './components/gallery';
import SwipwerSlider from './components/SwiperSlider';
import'./App.css';
import UseDataPage from './components/UseDataPage';

function App() {
    return (
        <Router>
            <Navbar />
     
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usedatapage" element={<UseDataPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/Virtualtour" element={<Virtualtour />} />
                <Route path="/gallery" element={<gallery />} />
                <Route path="/SwiperSlider" element={<SwipwerSlider />} />
                
            </Routes>
        </Router>
    );
}

export default App;
