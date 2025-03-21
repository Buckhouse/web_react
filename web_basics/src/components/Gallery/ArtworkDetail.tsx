// src/components/Gallery/ArtworkDetail.tsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useGallery from './useGallery';
import './ArtworkDetail.css';

const ArtworkDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { artworks } = useGallery();

  const currentIndex = artworks.findIndex((art) => art.id === id);
  const currentArtwork = artworks[currentIndex];

  const [previousArtwork, setPreviousArtwork] = useState<typeof currentArtwork | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (!currentArtwork) return;

    setPreviousArtwork(currentArtwork);
    setTransitioning(true);

    const timeout = setTimeout(() => {
      setPreviousArtwork(null);
      setTransitioning(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [currentArtwork]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      else if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, artworks]);

  if (!artworks.length) return null;
  if (!currentArtwork) return <p>Artwork not found.</p>;

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    navigate(`/art/${artworks[prevIndex].id}`);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % artworks.length;
    navigate(`/art/${artworks[nextIndex].id}`);
  };

  const handleBackToGallery = () => {
    navigate('/');
  };

  return (
    <div className="artwork-detail-container">
      <div className="detail-buttons">
        <button onClick={handlePrevious}>← Previous</button>
        <button onClick={handleBackToGallery}>⤺ Gallery</button>
        <button onClick={handleNext}>Next →</button>
      </div>

      <div className="artwork-image-wrapper">
        <div className="artwork-image-inner" onClick={handleNext} style={{ cursor: 'pointer' }}>
          {previousArtwork && previousArtwork.id !== currentArtwork.id && (
            <img
              src={previousArtwork.imageURL}
              alt={previousArtwork.title}
              className="artwork-image fading-out"
              style={{ position: 'absolute' }}
            />
          )}
          <img
            src={currentArtwork.imageURL}
            alt={currentArtwork.title}
            className={`artwork-image ${transitioning ? 'fading-in' : ''}`}
          />
        </div>
      </div>

      <div className="artwork-detail">
        <h2>{currentArtwork.title}</h2>
        <p><strong>Medium:</strong> {currentArtwork.media}</p>
        <p><strong>Date:</strong> {currentArtwork.date}</p>
        <p>{currentArtwork.description}</p>
      </div>
    </div>
  );
};

export default ArtworkDetail;