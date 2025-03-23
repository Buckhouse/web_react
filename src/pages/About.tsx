import React, { useEffect } from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  useEffect(() => {
    // Optional: initialize Lucide icons if you're using them
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className="about-container">
      <p className="about-description">
        James Buckhouse believes story, art, and design can bend the arc of humanity's progress, if you do it right, and brings that idea into everything he does: from movies to startups to paintings to books and to <a href="https://www.instagram.com/p/CG6c1ijpwIo/" target="_blank" rel="noreferrer">ballets</a>.

        <br /><br />
        As an artist, he has exhibited at the <a href="https://whitney.org/artists/t3540" target="_blank" rel="noreferrer">Whitney Biennial</a>, the Solomon R. Guggenheim's Works & Process Series, The Institute of Contemporary Art in London, The Berkeley Art Museum, and the Dia Center. He has collaborated with leading choreographers at the New York City Ballet, San Francisco Ballet, LA Dance Project, Oregon Ballet Theatre, and Pennsylvania Ballet.

        <br /><br />
        As <a href="https://www.sequoiacap.com/people/james-buckhouse/" target="_blank" rel="noreferrer">Design Partner</a> at Sequoia, he <a href="https://www.sequoiacap.com/article/seven-questions-with-james-buckhouse/" target="_blank" rel="noreferrer">works with founders</a> from idea to IPO and beyond to help them design their companies, products, cultures, and businesses. Buckhouse got his start in <a href="/film">film</a>, lensing shots, crafting character arcs, and punching up story for the <a href="/film">Shrek, Madagascar, and Matrix</a> series.

        <br /><br />
        He regularly guest lectures at <a href="https://buckhouse.medium.com/the-structure-of-story-reading-list-fa8308a87860" target="_blank" rel="noreferrer">Harvard GSD</a>, Yale Architecture, <a href="https://www.youtube.com/watch?v=hG5i05kRYmk" target="_blank" rel="noreferrer">Stanford GSB</a>, and d.school. Previously at Twitter, he authored <a href="https://medium.com/design-story/story-map-3cc64033128e" target="_blank" rel="noreferrer">UX patents</a> for emoji replies and social opinion polls.
      </p>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/jamesbuckhouse/" className="social-link" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i><span>LinkedIn</span>
        </a>
        <a href="https://x.com/buckhouse" className="social-link" target="_blank" rel="noreferrer">
          <i className="fab fa-x-twitter"></i><span>Twitter</span>
        </a>
        <a href="https://www.instagram.com/buckhouse/" className="social-link" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i><span>Instagram</span>
        </a>
        <a href="https://read.cv/buckhouse" className="social-link" target="_blank" rel="noreferrer">
          <i className="fas fa-file-alt"></i><span>Read.cv</span>
        </a>
        <a href="https://www.delphi.ai/buckhouse" className="social-link" target="_blank" rel="noreferrer">
          <i className="fas fa-globe"></i><span>Delphi</span>
        </a>
        <a href="https://jamesbuckhouse.substack.com/" className="social-link" target="_blank" rel="noreferrer">
          <i className="fas fa-newspaper"></i><span>Newsletter</span>
        </a>
      </div>
    </div>
  );
};

export default About;