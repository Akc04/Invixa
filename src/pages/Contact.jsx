import React from 'react';
import { Mail, Phone, MessageCircle, Send, Calendar } from 'lucide-react';

const WhatsAppIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="#25D366">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
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
                  <a href="mailto:info@invixa.com" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', flexWrap: 'wrap', textDecoration: 'none' }} className="hover-link">
                    <Mail size={20} color="var(--accent-blue)" /> <span style={{ wordBreak: 'break-all' }}>info@invixa.com</span>
                  </a>
                  <a href="mailto:ajaykumarchoudharyakc@gmail.com" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', flexWrap: 'wrap', textDecoration: 'none' }} className="hover-link">
                    <GmailIcon size={20} /> <span style={{ wordBreak: 'break-all' }}>ajaykumarchoudharyakc@gmail.com</span>
                  </a>
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
        .hover-link:hover {
          color: var(--accent-blue) !important;
          transform: translateX(5px);
          transition: all 0.3s ease;
        }
      `}} />
    </div>
  );
};

export default Contact;