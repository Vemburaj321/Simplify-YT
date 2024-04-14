// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Summary from './components/Summary';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Verify from './components/Verify';

function App() {
  const headerProps = 'SimplifyYT';
  const footerProps1 = '© 2024 Copyright: ';
  const footerProps2 = 'SimplifyYT.com';

  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <Header />
      <NavBar headerProps={headerProps} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* Use :url to capture the videoUrl as a parameter */}
        <Route path="/summary/:url" element={<Summary />} />
        <Route path="/verify/:url" element={<Verify />} />
      </Routes>
      <Footer footerProps={{ footerProps1, footerProps2 }} />
    </div>
  );
}

export default App;
