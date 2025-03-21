import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import data from "./data.json"; // Adjust path if needed
import { generateArtistStructuredData } from "../../utils/seo-helpers";
import "./Gallery.css";

const Gallery: React.FC = () => {
  return (
    <div className="gallery-container">
      <Helmet>
        <title>James Buckhouse | Fine Art Painter | Gallery</title>
        <meta
          name="description"
          content="Explore the fine art paintings collection by James Buckhouse. Original oil paintings capturing moments of beauty and contemplation in everyday life."
        />
        <meta
          name="keywords"
          content="James Buckhouse, fine art, paintings, gallery, oil painting, contemporary art, artist"
        />
        <script type="application/ld+json">
          {generateArtistStructuredData()}
        </script>
      </Helmet>

      <header className="gallery-header">
        <h1>James Buckhouse: Selected Works</h1>
        <p className="gallery-intro">
          Explore my collection of fine art paintings that capture moments of contemplation and beauty in everyday life. Each piece reflects my ongoing exploration of light, form, and emotion through traditional oil painting techniques.
        </p>
      </header>

      <section className="gallery-filters">
        <div className="filter-notice">
          <p>Viewing all {data.images.length} artworks</p>
        </div>
      </section>

      {/* Use the bento-grid container so grid styles apply */}
      <section className="bento-grid">
        {data.images.map((image) => (
          <Link to={`/artwork/${image.id}`} key={image.id}>
            <div className={`bento-item ${image.featured ? "size-featured" : ""}`}>
              <div className="image-container">
                <img src={image.imageURL} alt={image.title} />
              </div>
              <p>{image.title}</p>
            </div>
          </Link>
        ))}
      </section>

      <footer className="gallery-footer">
        <p>
          For purchase inquiries, commissions, or to schedule a studio visit, please <a href="/contact">contact me</a>.
        </p>
      </footer>
    </div>
  );
};

export default Gallery;