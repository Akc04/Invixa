import React from 'react';
import { Mail, Phone, MessageCircle, Send, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-top" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Let's <span className="text-gradient">Connect</span></h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              Whether you're ready to start or just have a few questions, we're here to help you grow. Reach us at info@invixa.com or ajaykumarchoudharyakc@gmail.com
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            {/* Contact Form */}
            <div className="glass-morphism" style={{ padding: '3rem', borderRadius: '40px' }}>
              <h3 style={{ marginBottom: '2rem' }}>Send us a Message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Full Name</label>
                  <input type="text" placeholder="Your Name" style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email Address</label>
                  <input type="email" placeholder="you@example.com" style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Message</label>
                  <textarea rows="4" placeholder="How can we help?" style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', outline: 'none', resize: 'none' }}></textarea>
                </div>
                <button type="button" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>

            {/* Contact Info & Direct Links */}
            <div>
              <h3 style={{ marginBottom: '2rem' }}>Quick Actions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <a href="#" className="glass-morphism" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', borderRadius: '24px', transition: 'var(--transition-smooth)' }}>
                  <div className="text-gradient"><Calendar size={28} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem' }}>Book Free Consultation</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Schedule a 15-min discovery call.</p>
                  </div>
                </a>

                <a href="https://wa.me/918302865020" target="_blank" rel="noopener noreferrer" className="glass-morphism" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', borderRadius: '24px', transition: 'var(--transition-smooth)' }}>
                  <div style={{ color: '#25D366' }}><MessageCircle size={28} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem' }}>Chat on WhatsApp</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Instant answers to your queries.</p>
                  </div>
                </a>

                <a href="tel:+918302865020" className="glass-morphism" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', borderRadius: '24px', transition: 'var(--transition-smooth)' }}>
                  <div className="text-gradient"><Phone size={28} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem' }}>Call Now</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Speak directly with our team.</p>
                  </div>
                </a>

                <div style={{ marginTop: '2rem', paddingLeft: '1.5rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Direct Email</h4>
                  <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Mail size={16} /> info@invixa.com
                  </p>
                  <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Mail size={16} /> ajaykumarchoudharyakc@gmail.com
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
    </div>
  );
};

export default Contact;