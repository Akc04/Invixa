import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Heart, BarChart3 } from 'lucide-react';
import aboutVision from '../assets/about_vision.png';
import aboutFounder from '../assets/about_founder.png';

const DartboardIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" stroke="#333" />
    <circle cx="12" cy="12" r="6" stroke="#ff2d55" fill="rgba(255,45,85,0.1)" />
    <circle cx="12" cy="12" r="2" fill="#ff2d55" stroke="#ff2d55" />
    <path d="m22 2-10 10" stroke="#333" strokeWidth="3" />
    <path d="m22 2-1 3" stroke="#333" />
    <path d="m22 2-3 1" stroke="#333" />
  </svg>
);

const About = () => {
  return (
    <div className="about-page">
      {/* Intro */}
      <section className="page-top" style={{ paddingBottom: '60px' }}>
        <div className="container">
          <div className="responsive-grid" style={{ alignItems: 'center' }}>
            <div>
              <p className="text-gradient" style={{ fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase' }}>About Us</p>
              <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 3.5rem)', marginBottom: '2rem' }}>More Than Just a <span className="text-gradient">Tech Company.</span></h1>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Invixa Tech is a digital systems company focused on helping businesses grow online. We don't just build websites; we architect growth systems that convert visitors into loyal customers.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Founded with a vision to simplify digital growth, we bridge the gap between complex technology and business success, specifically for clinics and modern service providers in India.
              </p>
            </div>
            <div className="glass-morphism" style={{ borderRadius: '48px', height: 'clamp(300px, 50vh, 500px)', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={aboutVision} alt="Vision" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="text-gradient" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              <DartboardIcon size={48} />
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1.5rem' }}>Our Mission</h2>
            <p style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', lineHeight: '1.6', fontWeight: 500 }}>
              “To simplify digital growth using modern technology and AI, making premium business tools accessible to every visionary entrepreneur.”
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }} className="parallel-values">
            {[
              { icon: <Zap color="#FFD700" fill="rgba(255,215,0,0.1)" />, title: "Speed & Precision", text: "We deliver high-quality systems in record time without compromising on detail." },
              { icon: <BarChart3 color="var(--accent-blue)" />, title: "Results Driven", text: "Every pixel we place and every line of code we write is focused on your growth." },
              { icon: <Heart color="var(--accent-pink)" fill="rgba(255,45,85,0.1)" />, title: "Client Success", text: "Your success is our reputation. We treat your business like our own." }
            ].map((value, i) => (
              <div key={i} style={{ textAlign: 'center', minWidth: '250px' }}>
                <div className="text-gradient" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
                  {React.cloneElement(value.icon, { size: 40 })}
                </div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{value.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding" style={{ background: '#000', color: '#fff' }}>
        <div className="container">
          <div className="responsive-grid" style={{ gap: 'clamp(3rem, 10vw, 5rem)', alignItems: 'center' }}>
            <div className="glass-morphism" style={{ borderRadius: '32px', height: 'clamp(300px, 45vh, 450px)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              <img src={aboutFounder} alt="Visionary Leader" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            </div>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '2rem', color: '#fff' }}>The Vision Behind Invixa</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.8, marginBottom: '1.5rem' }}>
                Invixa was born from a simple observation: most businesses have a website, but very few have a system that actually grows their business.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.8, marginBottom: '1.5rem' }}>
                As a solo founder with an ambitious vision, I started Invixa to change how doctors and clinic owners view the digital world. Technology shouldn't be a hurdle; it should be your most powerful employee.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.8 }}>
                Today, we are a small but focused team dedicated to building the future of digital business systems, one successful client at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;