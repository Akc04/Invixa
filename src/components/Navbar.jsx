import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import TextLogo from './TextLogo';
import logo from '../../Assets/Invixa Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? 'glass-morphism shadow-soft' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', padding: '0 16px' }}>
          <img 
            src={logo} 
            alt="Invixa" 
            className="nav-logo"
            style={{ 
              height: '84px', 
              width: 'auto', 
              objectFit: 'contain'
            }} 
          />
        </Link>

        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            .nav-logo { height: 68px !important; }
          }
        `}} />

        {/* Desktop Nav */}
        <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact" className="btn-primary" style={{ padding: '8px 20px' }}>Contact</Link></li>
        </ul>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="mobile-toggle" style={{ display: 'none' }}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu glass-morphism" style={{ position: 'absolute', top: '96px', left: 0, right: 0, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="btn-primary" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
