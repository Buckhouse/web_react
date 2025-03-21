import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import ArtworkDetail from './components/Gallery/ArtworkDetail';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/art/:id" element={<ArtworkDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;