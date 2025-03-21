// src/components/Gallery/ArtworkCard.tsx

import React from 'react';
import './ArtworkCard.css';
import { Artwork } from './useGallery';

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  return (
    <div className="artwork-card">
      <img src={artwork.imageURL} alt={artwork.title} />
      <div className="artwork-card-title">{artwork.title}</div>
    </div>
  );
};

export default ArtworkCard;