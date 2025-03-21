// src/components/Gallery/Gallery.tsx

import React from 'react';
import useGallery from './useGallery';
import ArtworkCard from './ArtworkCard';
import './Gallery.css';

const Gallery: React.FC = () => {
  const { artworks } = useGallery();

  return (
    <div className="gallery-grid">
      {artworks.map((art) => (
        <ArtworkCard key={art.id} artwork={art} />
      ))}
    </div>
  );
};

export default Gallery;
