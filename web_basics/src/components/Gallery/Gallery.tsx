// src/components/Gallery/Gallery.tsx

import React from 'react';
import useGallery from './useGallery';
import './Gallery.css';

const Gallery: React.FC = () => {
  const { artworks } = useGallery();

  console.log('Loaded artworks:', artworks);

  return (
    <div className="gallery-grid">
      {/* Temporary: List titles to test */}
      {artworks.map((art) => (
        <div key={art.id}>{art.title}</div>
      ))}
    </div>
  );
};

export default Gallery;
