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
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">Your Logo</a>
        </div>
        
        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        
        {/* Hamburger Icon */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* Mobile Menu */}
        <ul className={`navbar-mobile-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;