import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
    <nav className={`${scrolled || isOpen ? 'glass-morphism shadow-soft' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', zIndex: 1100 }}>
          <img 
            src={logo} 
            alt="Invixa" 
            className="nav-logo"
            style={{ 
              height: '60px', 
              width: 'auto', 
              objectFit: 'contain',
              transition: 'var(--transition-smooth)'
            }} 
          />
        </Link>

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
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="mobile-toggle" 
          style={{ 
            display: 'none', 
            zIndex: 1100,
            padding: '8px',
            marginRight: '-8px'
          }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu glass-morphism ${isOpen ? 'open' : ''}`}
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '100vh',
          padding: '100px 2rem 2rem 2rem', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2rem',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1050
        }}
      >
        <Link to="/" onClick={() => setIsOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 500 }}>Home</Link>
        <Link to="/services" onClick={() => setIsOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 500 }}>Services</Link>
        <Link to="/pricing" onClick={() => setIsOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 500 }}>Pricing</Link>
        <Link to="/portfolio" onClick={() => setIsOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 500 }}>Portfolio</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 500 }}>About</Link>
        <Link to="/contact" className="btn-primary" onClick={() => setIsOpen(false)} style={{ fontSize: '1.25rem', padding: '16px' }}>Contact Us</Link>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
          .nav-logo { height: 50px !important; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
