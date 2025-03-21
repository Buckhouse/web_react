// SEO Helper functions for generating structured data

export interface ArtworkSchema {
  id: string;
  title: string;
  year: string;
  medium: string;
  size: string;
  description: string;
  imageUrl: string;
  url: string;
}

/**
 * Generates JSON-LD structured data for an artwork
 * @param artwork Artwork data
 * @returns JSON-LD structured data as a string
 */
export const generateArtworkStructuredData = (artwork: ArtworkSchema): string => {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "VisualArtwork",
    "name": artwork.title,
    "artist": {
      "@type": "Person",
      "name": "James Buckhouse"
    },
    "artform": artwork.medium,
    "dateCreated": artwork.year,
    "description": artwork.description,
    "width": artwork.size.split('×')[0].trim(),
    "height": artwork.size.split('×')[1].trim().split(' ')[0],
    "artMedium": artwork.medium,
    "url": artwork.url,
    "image": artwork.imageUrl
  };

  return JSON.stringify(structuredData);
};

/**
 * Generates JSON-LD structured data for the artist
 * @returns JSON-LD structured data as a string
 */
export const generateArtistStructuredData = (): string => {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "James Buckhouse",
    "jobTitle": "Fine Art Painter",
    "url": "https://yourdomain.com",
    "sameAs": [
      "https://instagram.com/jamesbuckhouse", // Replace with actual social links
      "https://facebook.com/jamesbuckhouse", 
      "https://linkedin.com/in/jamesbuckhouse"
    ]
  };

  return JSON.stringify(structuredData);
};

/**
 * Generates breadcrumb structured data for an artwork page
 * @param artwork Artwork data
 * @returns JSON-LD structured data as a string
 */
export const generateBreadcrumbStructuredData = (artwork: ArtworkSchema): string => {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://yourdomain.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gallery",
        "item": "https://yourdomain.com"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": artwork.title,
        "item": artwork.url
      }
    ]
  };

  return JSON.stringify(structuredData);
};
