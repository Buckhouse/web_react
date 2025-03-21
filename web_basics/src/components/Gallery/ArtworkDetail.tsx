import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useGallery from './useGallery';
import './ArtworkDetail.css';

const ArtworkDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { artworks } = useGallery();

  const currentIndex = artworks.findIndex((art) => art.id === id);
  const artwork = artworks[currentIndex];

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleArtwork, setVisibleArtwork] = useState(artwork);

  useEffect(() => {
    if (!artwork || artwork.id === visibleArtwork?.id) return;

    setIsTransitioning(true);
    const timeout = setTimeout(() => {
      setVisibleArtwork(artwork);
      setIsTransitioning(false);
    }, 300); // match fade duration

    return () => clearTimeout(timeout);
  }, [artwork]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, artworks]);

  if (!artworks.length) return null;
  if (!artwork) return <p>Artwork not found.</p>;
  if (!visibleArtwork) return null;

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

      <div className={`artwork-detail ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <img src={visibleArtwork.imageURL} alt={visibleArtwork.title} />
        <h2>{visibleArtwork.title}</h2>
        <p><strong>Medium:</strong> {visibleArtwork.media}</p>
        <p><strong>Date:</strong> {visibleArtwork.date}</p>
        <p>{visibleArtwork.description}</p>
      </div>
    </div>
  );
};

export default ArtworkDetail;