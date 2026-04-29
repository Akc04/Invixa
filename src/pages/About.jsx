import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      {/* Intro */}
      <section className="page-top" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="text-gradient" style={{ fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase' }}>About Us</p>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>More Than Just a <span className="text-gradient">Tech Company.</span></h1>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Invixa Tech is a digital systems company focused on helping businesses grow online. We don't just build websites; we architect growth systems that convert visitors into loyal customers.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                Founded with a vision to simplify digital growth, we bridge the gap between complex technology and business success, specifically for clinics and modern service providers in India.
              </p>
            </div>
            <div className="glass-morphism" style={{ borderRadius: '48px', height: '500px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={`${import.meta.env.BASE_URL}about_vision.png`} alt="Vision" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="text-gradient" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              <Target size={48} />
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Mission</h2>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.6', fontWeight: 500 }}>
              “To simplify digital growth using modern technology and AI, making premium business tools accessible to every visionary entrepreneur.”
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {[
              { icon: <Zap />, title: "Speed & Precision", text: "We deliver high-quality systems in record time without compromising on detail." },
              { icon: <Target />, title: "Results Driven", text: "Every pixel we place and every line of code we write is focused on your growth." },
              { icon: <Heart />, title: "Client Success", text: "Your success is our reputation. We treat your business like our own." }
            ].map((value, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div className="text-gradient" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
                  {React.cloneElement(value.icon, { size: 40 })}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{value.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding" style={{ background: '#000', color: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div className="glass-morphism" style={{ borderRadius: '32px', height: '450px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              <img src={`${import.meta.env.BASE_URL}about_founder.png`} alt="Visionary Leader" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            </div>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#fff' }}>The Vision Behind Invixa</h2>
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