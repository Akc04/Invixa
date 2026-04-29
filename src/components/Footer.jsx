import React from 'react';
import { Link } from 'react-router-dom';
import logoFull from '../../Assets/Invixa Tech Logo.png';
import footerVibe from '../assets/footer_vibe.png';

const Footer = () => {
  return (
    <footer style={{ 
      position: 'relative',
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${footerVibe})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderTop: '1px solid var(--glass-border)', 
      padding: '60px 0 30px 0' 
    }}>
      <div className="container">
        <div className="responsive-grid" style={{ marginBottom: '3rem', gap: '3rem' }}>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '8px' }}>
              <img src={logoFull} alt="Invixa Tech" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
              <div className="tagline" style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontWeight: 500, 
                letterSpacing: '0.25em', 
                fontSize: '11px',
                display: 'flex',
                gap: '4px',
                textTransform: 'uppercase'
              }}>
                <span style={{ color: '#000000' }}>BUILDING</span>
                <span style={{ color: '#666666' }}>DIGITAL</span>
                <span style={{ 
                  background: 'linear-gradient(to right, #2563EB, #7C3AED, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 600
                }}>GROWTH</span>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '1rem' }}>
              We build high-converting websites and AI-powered systems that actually grow your business.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <li><Link to="/services">Website Development</Link></li>
              <li><Link to="/services">SEO Optimization</Link></li>
              <li><Link to="/services">App Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Contact</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <li style={{ wordBreak: 'break-all' }}>info@invixa.com</li>
              <li style={{ wordBreak: 'break-all' }}>ajaykumarchoudharyakc@gmail.com</li>
              <li>+91 83028 65020</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Invixa Tech Pvt. Ltd. All rights reserved.
          </p>
          <p style={{ fontWeight: 600, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Powered by Invixa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
