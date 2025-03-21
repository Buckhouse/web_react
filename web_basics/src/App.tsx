import React from "react";
import { Helmet } from "react-helmet"; // or "react-helmet-async"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import ImageDetail from "./components/Gallery/ImageDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Helmet>
        <title>James Buckhouse | Fine Art Painter</title>
        <meta
          name="description"
          content="The fine art paintings of James Buckhouse."
        />
        <meta
          name="keywords"
          content="James Buckhouse, fine art, painter, oil paintings, art gallery, contemporary art"
        />
        <meta property="og:title" content="James Buckhouse | Fine Art Painter" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://jamesbuckhouse.com/images/featured-artwork.jpg"
        />
        <meta property="og:url" content="https://jamesbuckhouse.com" />
        <meta
          property="og:description"
          content="Artist, writer, and designer, James Buckhouse."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://jamesbuckhouse.com" />
      </Helmet>

      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/artwork/:id" element={<ImageDetail />} />
      </Routes>
    </Router>
  );
}

export default App;