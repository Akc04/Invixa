import React from 'react';
import { Link } from 'react-router-dom';
import logoFull from '../../Assets/Invixa Tech Logo.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', padding: '60px 0 30px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '8px' }}>
              <img src={logoFull} alt="Invixa Tech" style={{ height: '84px', width: 'auto', objectFit: 'contain' }} />
              <div className="tagline" style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontWeight: 500, 
                letterSpacing: '0.25em', 
                fontSize: '13px',
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
              <li>Email: info@invixa.com</li>
              <li>Email: ajaykumarchoudharyakc@gmail.com</li>
              <li>Phone: +91 83028 65020</li>
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

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .tagline { font-size: 11px !important; }
        }
      `}} />
    </footer>
  );
};

export default Footer;
