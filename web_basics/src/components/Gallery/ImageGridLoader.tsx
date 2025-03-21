import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImagePreloader from './ImagePreloader';
import './Gallery.css';

interface ImageItem {
  id: number;
  width: number;
  height: number;
  size: string;
  importance: number; // 1-10, higher = more visual importance
}

interface ImageGridLoaderProps {
  totalImages: number;
  onImagesLoaded?: (images: ImageItem[]) => void;
}

const ImageGridLoader: React.FC<ImageGridLoaderProps> = ({ totalImages, onImagesLoaded }) => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Function to determine random size class with weighted distribution
  const getSizeClass = (importance: number): string => {
    // Higher importance = higher chance of larger size
    if (importance >= 8) {
      return 'size-featured'; // Largest size for most important images
    } else if (importance >= 6) {
      return 'size-3'; // Wider
    } else if (importance >= 4) {
      return 'size-2'; // Taller
    } else {
      return 'size-1'; // Standard
    }
  };

  useEffect(() => {
    // Simulate loading and analyzing images
    const loadImages = async () => {
      // In a real app, you might load and analyze actual image dimensions 
      // Here we're just generating random data
      const imageItems: ImageItem[] = Array.from({ length: totalImages }, (_, i) => {
        // Generate some variety with random dimensions and importance
        const importance = Math.floor(Math.random() * 10) + 1;
        
        return {
          id: i + 1,
          width: 800 + Math.floor(Math.random() * 800), // Random width 800-1600px
          height: 800 + Math.floor(Math.random() * 800), // Random height 800-1600px
          size: getSizeClass(importance),
          importance
        };
      });

      // Sort by importance so most important images appear earlier in the grid
      imageItems.sort((a, b) => b.importance - a.importance);
      
      setImages(imageItems);
      setLoaded(true);
      
      if (onImagesLoaded) {
        onImagesLoaded(imageItems);
      }
    };

    loadImages();
  }, [totalImages, onImagesLoaded]);

  if (!loaded) {
    return <div className="loading">Loading images...</div>;
  }

  return (
    <div className="bento-grid">
      {images.map((image) => (
        <Link 
          to={`/artwork/${image.id}`} 
          key={image.id}
          className={`bento-item ${image.size}`}
          aria-label={`View artwork ${image.id}`}
        >
          <div className="image-container">
            <ImagePreloader 
              src={`/images/image_${image.id}_thumb.jpg`} 
              alt={`James Buckhouse - Artwork ${image.id}`}
              width="100%"
              height="100%"
            />
            <div className="image-info">
              <h3>Artwork {image.id}</h3>
              <p>{2010 + (image.id % 15)}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ImageGridLoader;
