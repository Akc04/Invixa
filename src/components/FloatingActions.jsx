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
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="white"
            style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}
          >
            <path d="M12.011 2c-5.522 0-9.99 4.478-9.99 10 0 1.761.462 3.468 1.341 4.974l-1.362 5.026 5.155-1.353c1.47.8 3.125 1.222 4.811 1.222 5.522 0 10-4.478 10-10s-4.478-10-10-10zm5.461 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.123.571-.081 1.758-.716 2.006-1.408.248-.693.248-1.288.174-1.409-.074-.121-.272-.194-.57-.343z" />
          </svg>
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
