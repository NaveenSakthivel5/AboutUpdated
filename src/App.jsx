import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import About from './pages/About';
import Contact1 from './pages/Contact1';
import Header from './pages/Header';

export default function App() {
  return (
    <Router>
      <div className="Main">
        {/* The Header is always displayed */}

        {/* Navigation links (optional) */}
       
        {/* Define routes */}
        <Routes>
          {/* Home route: Exact match */}

          {/* About and Contact routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact1 />} />
        </Routes>
      </div>
    </Router>
  );
}



