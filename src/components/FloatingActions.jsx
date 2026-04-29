import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999, pointerEvents: 'none' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', pointerEvents: 'auto' }}>
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/918302865020"
          target="_blank"
          rel="noopener noreferrer"
          drag
          dragConstraints={{ left: -window.innerWidth + 100, right: 0, top: -window.innerHeight + 100, bottom: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#25D366',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
            cursor: 'grab',
            color: 'white'
          }}
        >
          <MessageCircle size={32} fill="white" />
        </motion.a>

        {/* Call Button */}
        <motion.a
          href="tel:+918302865020"
          drag
          dragConstraints={{ left: -window.innerWidth + 100, right: 0, top: -window.innerHeight + 100, bottom: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#0071e3',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
            cursor: 'grab',
            color: 'white'
          }}
        >
          <Phone size={30} fill="white" />
        </motion.a>
      </div>
    </div>
  );
};

export default FloatingActions;
