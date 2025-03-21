import React from 'react';
import { Link } from 'react-router-dom';
import './ArtworkCard.css';
import { Artwork } from './useGallery';

interface ArtworkCardProps {
  artwork: Artwork;
  className?: string;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, className = '' }) => {
  return (
    <Link to={`/art/${artwork.id}`} className={`artwork-card-link ${className}`}>
      <div className={`artwork-card ${className}`}>
        <img src={artwork.imageURL} alt={artwork.title} />
        <div className="artwork-card-title">{artwork.title}</div>
      </div>
    </Link>
  );
};

export default ArtworkCard;