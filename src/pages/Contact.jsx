import React from 'react';
import { Mail, Phone, MessageCircle, Send, Calendar } from 'lucide-react';

const WhatsAppIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366">
    <path d="M12.011 2c-5.522 0-9.99 4.478-9.99 10 0 1.761.462 3.468 1.341 4.974l-1.362 5.026 5.155-1.353c1.47.8 3.125 1.222 4.811 1.222 5.522 0 10-4.478 10-10s-4.478-10-10-10zm5.461 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.123.571-.081 1.758-.716 2.006-1.408.248-.693.248-1.288.174-1.409-.074-.121-.272-.194-.57-.343z" />
  </svg>
);

const GmailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.075 3 1.5 3H2.812l9.188 6.59L21.188 3H22.5c.425 0 .8.162 1.069.432.269.268.431.643.431 1.068z" fill="#EA4335"/>
  </svg>
);

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-top" style={{ paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 10vw, 5rem)' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 3.5rem)', marginBottom: '1.5rem' }}>Let's <span className="text-gradient">Connect</span></h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              Whether you're ready to start or just have a few questions, we're here to help you grow. Reach us at info@invixa.com or ajaykumarchoudharyakc@gmail.com
            </p>
          </div>

          <div className="responsive-grid" style={{ gap: '3rem' }}>
            {/* Contact Form */}
            <div className="glass-morphism" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '40px' }}>
              <h3 style={{ marginBottom: '2rem' }}>Send us a Message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Full Name</label>
                  <input type="text" placeholder="Your Name" style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', outline: 'none', width: '100%' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', outline: 'none', width: '100%' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email Address</label>
                  <input type="email" placeholder="you@example.com" style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', outline: 'none', width: '100%' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Message</label>
                  <textarea rows="4" placeholder="How can we help?" style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', outline: 'none', resize: 'none', width: '100%' }}></textarea>
                </div>
                <button type="button" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', width: '100%' }}>
                   Send Message <Send size={18} />
                </button>
              </form>
            </div>

            {/* Contact Info & Direct Links */}
            <div>
              <h3 style={{ marginBottom: '2rem' }}>Quick Actions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <a href="#" className="glass-morphism contact-action-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', borderRadius: '24px', transition: 'var(--transition-smooth)' }}>
                  <div style={{ flexShrink: 0, color: 'var(--accent-blue)' }}><Calendar size={28} fill="rgba(0,113,227,0.1)" /></div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem' }}>Book Free Consultation</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Schedule a 15-min discovery call.</p>
                  </div>
                </a>

                <a href="https://wa.me/918302865020" target="_blank" rel="noopener noreferrer" className="glass-morphism contact-action-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', borderRadius: '24px', transition: 'var(--transition-smooth)' }}>
                  <div style={{ flexShrink: 0 }}><WhatsAppIcon size={28} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem' }}>Chat on WhatsApp</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Instant answers to your queries.</p>
                  </div>
                </a>

                <a href="tel:+918302865020" className="glass-morphism contact-action-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', borderRadius: '24px', transition: 'var(--transition-smooth)' }}>
                  <div style={{ flexShrink: 0, color: 'var(--accent-pink)' }}><Phone size={28} fill="rgba(255,45,85,0.1)" /></div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem' }}>Call Now</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Speak directly with our team.</p>
                  </div>
                </a>

                <div style={{ marginTop: '2rem', paddingLeft: '1rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Direct Email</h4>
                  <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
                    <Mail size={18} color="var(--accent-blue)" /> <span style={{ wordBreak: 'break-all' }}>info@invixa.com</span>
                  </p>
                  <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
                    <GmailIcon /> <span style={{ wordBreak: 'break-all' }}>ajaykumarchoudharyakc@gmail.com</span>
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-action-card:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.9);
          border-color: var(--accent-blue);
        }
      `}} />
    </div>
  );
};

export default Contact;