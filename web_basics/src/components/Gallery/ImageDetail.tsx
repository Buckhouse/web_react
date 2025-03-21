import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "./data.json"; // Adjust path if necessary
import "./ImageDetail.css";

interface ImageData {
  id: string;
  featured: boolean;
  date: string;
  imageURL: string;
  title: string;
  description: string;
  media: string;
}

const ImageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [artwork, setArtwork] = useState<ImageData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const foundImage = data.images.find((img) => img.id === id);
      setArtwork(foundImage || null);
    } else {
      setArtwork(null);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!artwork) {
    return <div className="loading">Artwork not found.</div>;
  }

  // Determine current index, next image, and previous image
  const currentIndex = data.images.findIndex((img) => img.id === id);
  const nextImage =
    currentIndex >= 0 && currentIndex < data.images.length - 1
      ? data.images[currentIndex + 1]
      : null;
  const prevImage = currentIndex > 0 ? data.images[currentIndex - 1] : null;

  const handleKeyNavigation = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight" && nextImage) {
      navigate(`/artwork/${nextImage.id}`);
    } else if (e.key === "ArrowLeft" && prevImage) {
      navigate(`/artwork/${prevImage.id}`);
    } else if (e.key === "Escape") {
      navigate("/");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyNavigation);
    return () => {
      document.removeEventListener("keydown", handleKeyNavigation);
    };
  }, [nextImage, prevImage]);

  return (
    <>
      <Helmet>
        <title>{`${artwork.title} | James Buckhouse Art`}</title>
        <meta
          name="description"
          content={`${artwork.title} - ${artwork.media}. ${artwork.description.substring(
            0,
            155
          )}...`}
        />
        {/* Additional meta tags as needed */}
      </Helmet>
      <div className="artwork-detail-container">
        <div className="artwork-navigation">
          <Link to="/" className="back-button">
            ← Gallery
          </Link>
          <div className="artwork-navigation-controls">
            {prevImage && (
              <Link to={`/artwork/${prevImage.id}`} className="nav-button prev-button">
                ← Previous
              </Link>
            )}
            {nextImage && (
              <Link to={`/artwork/${nextImage.id}`} className="nav-button next-button">
                Next →
              </Link>
            )}
          </div>
        </div>
        <div className="artwork-detail">
          <div className="artwork-image-container">
            <img
              src={artwork.imageURL}
              alt={`${artwork.title} - ${artwork.date}`}
              className="artwork-image"
            />
          </div>
          <div className="artwork-info">
            <h1>{artwork.title}</h1>
            <p>{artwork.date}</p>
            <p>{artwork.media}</p>
            <p>{artwork.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageDetail;