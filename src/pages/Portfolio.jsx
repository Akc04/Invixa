import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    { title: "Dakha Devi Hospital", category: "Medical Web App", desc: "A full-stack clinic management system with appointment booking and patient records.", link: "https://akc04.github.io/dakha-devi-hospital/", isLive: true },
    { title: "FreshMart", category: "E-Commerce OS", desc: "Scalable e-commerce platform with integrated payment systems and analytics.", link: "https://akc04.github.io/FreshMart/", isLive: true },
    { title: "Invixa Automation", category: "Business Logic", desc: "Automated lead nurturing and WhatsApp integration system for local businesses.", link: "https://github.com/ajay-akc/invixa-automation", isLive: false },
    { title: "Modern Portfolio", category: "Web Design", desc: "A premium, Apple-style minimalist portfolio template for modern agencies.", link: "https://github.com/ajay-akc/premium-portfolio", isLive: false },
    { title: "SEO Analyzer AI", category: "AI Tool", desc: "An AI-powered tool that analyzes website SEO and provides automated suggestions.", link: "https://github.com/ajay-akc/seo-analyzer-ai", isLive: false },
    { title: "LeadCapture Pro", category: "Marketing Tech", desc: "High-converting landing page system with integrated CRM and email automation.", link: "https://github.com/ajay-akc/leadcapture-pro", isLive: false }
  ];

  return (
    <div className="portfolio-page">
      <section className="page-top" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Our <span className="text-gradient">Portfolio</span></h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              Showcasing our recent work in building high-performing digital systems for diverse businesses.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {projects.map((project, index) => (
              <motion.a 
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10 }}
                className="portfolio-item"
                style={{ cursor: 'pointer', display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ 
                  backgroundColor: '#f5f5f7', 
                  borderRadius: '24px', 
                  height: '350px', 
                  marginBottom: '1.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'var(--shadow-soft)'
                }}>
                  {project.isLive ? (
                    <div style={{ 
                      width: '1000px', // Large virtual width
                      height: '875px', // Large virtual height
                      transform: 'scale(0.35)', // Scale down to fit
                      transformOrigin: '0 0',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      pointerEvents: 'none' // Click passes through to <a> tag
                    }}>
                      <iframe 
                        src={project.link} 
                        title={project.title}
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                      <div style={{ fontSize: '3rem', fontWeight: 800, opacity: 0.1, color: 'var(--text-primary)', marginBottom: '1rem' }}>INVIXA</div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Source Code Preview Available on GitHub</p>
                    </div>
                  )}
                  
                  <div className="portfolio-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(255,255,255,0.4)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 2
                  }}>
                    <div className="glass-morphism" style={{ padding: '1rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ExternalLink size={32} color="var(--accent-blue)" />
                    </div>
                  </div>
                </div>
                <p style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{project.category}</p>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{project.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .portfolio-item:hover .portfolio-overlay {
          opacity: 1 !important;
        }
        iframe {
          background: white;
        }
      `}} />

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Want to see your business here?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>Let's start building your custom digital system today.</p>
          <a href="/contact" className="btn-primary" style={{ padding: '16px 40px' }}>Start Your Project</a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
