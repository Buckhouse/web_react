// src/components/Gallery/ArtworkCard.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './ArtworkCard.css';
import { Artwork } from './useGallery';

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  return (
    <Link to={`/art/${artwork.id}`} className="artwork-card-link">
      <div className="artwork-card">
        <img src={artwork.imageURL} alt={artwork.title} />
        <div className="artwork-card-title">{artwork.title}</div>
      </div>
    </Link>
  );
};

export default ArtworkCard;