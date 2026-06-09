import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMobileNav = () => setIsMobileNavOpen(true);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <>
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-brand">
          <div className="nav-logo-ring">SS</div>
          <div>
            <div className="nav-title">Six Senses</div>
            <div className="nav-sub">Holistic Wellness</div>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#process">How It Works</a></li>
          <li><a href="#book">Contact</a></li>
        </ul>
        <a href="#book" className="nav-cta">Book Now</a>
        <button className="nav-burger" onClick={openMobileNav} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-nav ${isMobileNavOpen ? 'open' : ''}`} id="mobileNav">
        <div className="mobile-nav-overlay" onClick={closeMobileNav}></div>
        <div className="mobile-nav-drawer">
          <button className="mobile-nav-close" onClick={closeMobileNav}>✕</button>
          <ul className="mobile-nav-links">
            <li><a href="#about" onClick={closeMobileNav}>About</a></li>
            <li><a href="#services" onClick={closeMobileNav}>Services</a></li>
            <li><a href="#packages" onClick={closeMobileNav}>Packages</a></li>
            <li><a href="#process" onClick={closeMobileNav}>How It Works</a></li>
            <li><a href="#book" onClick={closeMobileNav}>Book Now</a></li>
          </ul>
          <a href="#book" className="btn-primary" onClick={closeMobileNav}>Book Appointment</a>
        </div>
      </div>
    </>
  );
}
