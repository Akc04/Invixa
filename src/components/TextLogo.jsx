import React from 'react';

const TextLogo = ({ size = '1.8rem' }) => {
  return (
    <div style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      fontFamily: "'Outfit', sans-serif", 
      fontWeight: 800, 
      fontSize: size,
      letterSpacing: '-0.03em',
      cursor: 'pointer'
    }}>
      <span style={{ 
        background: 'linear-gradient(135deg, #0071e3, #ff2d55)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginRight: '2px'
      }}>
        Invixa
      </span>
      <span style={{ color: '#1d1d1f' }}>Tech</span>
    </div>
  );
};

export default TextLogo;
