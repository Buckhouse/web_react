import { useState } from 'react'; //Import useState Hook: This React Hook adds state to our component. 
                                  // It tracks whether the mobile menu is open or closed.
import './Navbar.css'; // this is all the styling for the navbar


function Navbar() {
    //A boolean state variable (initially false)
    const [isOpen, setIsOpen] = useState(false); 
  
  //This function flips the value of isOpen when called.
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        
        {/* Desktop Menu */}
        <ul className="navbar-menu">
        <li><a href="/">✎ Art</a></li>
          <li><a href="/design">☎ 24-Hour Hotline</a></li>
          <li><a href="/library">📖 library</a></li>
          <li><a href="/film">🎬 Film</a></li>
          <li><a href="/about">👤 Buckhouse</a></li>
        </ul>
        
        {/* Hamburger Icon */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* Mobile Menu */}
        <ul className={`navbar-mobile-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="/design">☎ 24-Hour Hotline</a></li>
          <li><a href="/library">📖 library</a></li>
          <li><a href="/film">🎬 Film</a></li>
          <li><a href="/about">👤 Buckhouse</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;