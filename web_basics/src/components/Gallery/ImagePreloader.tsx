import { useState, useEffect } from 'react';
import './ImagePreloader.css';

interface ImagePreloaderProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({
  src,
  alt,
  className = '',
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setError(true);
      setIsLoaded(true); // Still mark as loaded to remove loading state
    };
    
    img.src = src;
    
    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={`image-preloader-container ${className}`} style={{ width, height }}>
      {!isLoaded && (
        <div className="image-preloader-skeleton">
          <div className="image-preloader-pulse"></div>
        </div>
      )}
      
      {error ? (
        <div className="image-preloader-error">
          <span>Image not available</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`image-preloader ${isLoaded ? 'loaded' : 'loading'}`}
          width={width}
          height={height}
        />
      )}
    </div>
  );
};

export default ImagePreloader;
