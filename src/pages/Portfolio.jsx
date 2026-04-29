import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const GithubIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Portfolio = () => {
  const projects = [
    { 
      title: "Dakha Devi Hospital", 
      category: "Medical Web App", 
      desc: "A full-stack clinic management system with appointment booking and patient records.", 
      link: "https://akc04.github.io/dakha-devi-hospital/", 
      repo: "https://github.com/akc04/dakha-devi-hospital",
      isLive: true 
    },
    { 
      title: "FreshMart", 
      category: "E-Commerce OS", 
      desc: "Scalable e-commerce platform with integrated payment systems and analytics.", 
      link: "https://akc04.github.io/FreshMart/", 
      repo: "https://github.com/akc04/FreshMart",
      isLive: true 
    },
    { 
      title: "Invixa Automation", 
      category: "Business Logic", 
      desc: "Automated lead nurturing and WhatsApp integration system for local businesses.", 
      link: "https://github.com/ajay-akc/invixa-automation", 
      repo: "https://github.com/ajay-akc/invixa-automation",
      isLive: false 
    },
    { 
      title: "Modern Portfolio", 
      category: "Web Design", 
      desc: "A premium, Apple-style minimalist portfolio template for modern agencies.", 
      link: "https://github.com/ajay-akc/premium-portfolio", 
      repo: "https://github.com/ajay-akc/premium-portfolio",
      isLive: false 
    },
    { 
      title: "SEO Analyzer AI", 
      category: "AI Tool", 
      desc: "An AI-powered tool that analyzes website SEO and provides automated suggestions.", 
      link: "https://github.com/ajay-akc/seo-analyzer-ai", 
      repo: "https://github.com/ajay-akc/seo-analyzer-ai",
      isLive: false 
    },
    { 
      title: "LeadCapture Pro", 
      category: "Marketing Tech", 
      desc: "High-converting landing page system with integrated CRM and email automation.", 
      link: "https://github.com/ajay-akc/leadcapture-pro", 
      repo: "https://github.com/ajay-akc/leadcapture-pro",
      isLive: false 
    }
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

          <div className="responsive-grid" style={{ gap: '3rem' }}>
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="portfolio-item-wrapper"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div className="portfolio-preview-window" style={{ 
                  backgroundColor: '#f5f5f7', 
                  borderRadius: '24px', 
                  height: '350px', 
                  marginBottom: '1.5rem', 
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'var(--shadow-soft)'
                }}>
                  {project.isLive ? (
                    <div className="iframe-scroller" style={{ 
                      width: 'calc(100% / 0.3)', // Use 0.3 scale for ~1200px virtual width on 360px container
                      height: '4000px', // Tall internal height
                      transform: 'scale(0.3)',
                      transformOrigin: '0 0',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      transition: 'transform 10s ease-in-out',
                      pointerEvents: 'none'
                    }}>
                      <iframe 
                        src={project.link} 
                        title={project.title}
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
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
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(0px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    opacity: 0,
                    transition: 'all 0.3s ease',
                    zIndex: 2
                  }}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '12px 24px', fontSize: '0.9rem', gap: '0.5rem' }}>
                      <ExternalLink size={18} /> View Live Site
                    </a>
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="glass-morphism" style={{ padding: '12px 24px', borderRadius: '980px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                        <GithubIcon size={18} /> View Source
                      </a>
                    )}
                  </div>
                </div>

                <div style={{ padding: '0 0.5rem' }}>
                  <p style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>{project.category}</p>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.5' }}>{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .portfolio-item-wrapper:hover .portfolio-overlay {
          opacity: 1 !important;
          backdrop-filter: blur(8px) !important;
          background: rgba(255,255,255,0.5) !important;
        }
        .portfolio-item-wrapper:hover .iframe-scroller {
          transform: scale(0.3) translateY(-3000px) !important;
        }
        iframe {
          background: white;
        }
      `}} />

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1.5rem' }}>Want to see your business here?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>Let's start building your custom digital system today.</p>
          <Link to="/contact" className="btn-primary" style={{ padding: '16px 40px' }}>Start Your Project</Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
