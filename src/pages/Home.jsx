import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Monitor, Search, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroMain from '../assets/hero_vibe.png';

const GithubIcon = ({ size = 16 }) => (
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

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="section-padding page-top" style={{ 
        textAlign: 'center', 
        background: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${heroMain})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.p variants={itemVariants} className="text-gradient" style={{ fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>
              Free Website Audit Available
            </motion.p>
            <motion.h1 variants={itemVariants} className="hero-title" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: '1.1', marginBottom: '1.5rem', maxWidth: '900px', margin: '0 auto 1.5rem auto' }}>
              Get More Customers With <span className="text-gradient">Smart Digital Systems</span>
            </motion.h1>
            <motion.p variants={itemVariants} style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
              We build high-converting websites and AI-powered systems that actually grow your business.
            </motion.p>
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>Book Free Consultation</Link>
              <Link to="/pricing" className="btn-secondary" style={{ padding: '16px 32px' }}>View Pricing <ArrowRight size={20} /></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ padding: '60px 0', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '3rem' }}>Trusted by growing businesses</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '3rem', opacity: 0.5, filter: 'grayscale(100%)' }}>
            {['MEDICARE', 'CLINIC+', 'TECHFLOW', 'BIOHEALTH', 'SOLUTIONS'].map((brand) => (
              <span key={brand} style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.1em' }}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>Our Core Services</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Everything you need to dominate your market online.</p>
          </div>
          <div className="responsive-grid">
            {[
              { icon: <Monitor size={32} color="var(--accent-blue)" fill="rgba(0,113,227,0.1)" />, title: "Website Development", desc: "Premium, conversion-focused websites tailored for clinics and modern businesses." },
              { icon: <Search size={32} color="var(--accent-pink)" fill="rgba(255,45,85,0.1)" />, title: "SEO Optimization", desc: "Rank higher on Google and get found by local customers exactly when they need you." },
              { icon: <Smartphone size={32} color="var(--accent-blue)" fill="rgba(0,113,227,0.1)" />, title: "App Development", desc: "Custom business apps and automation systems that streamline your operations." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="glass-morphism"
                style={{ padding: '2.5rem', borderRadius: '24px', transition: 'var(--transition-smooth)' }}
              >
                <div className="text-gradient" style={{ marginBottom: '1.5rem' }}>{service.icon}</div>
                <h3 style={{ marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{service.desc}</p>
                <Link to="/services" className="btn-secondary">Learn more <ArrowRight size={16} /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="responsive-grid" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '2rem' }}>Why Choose <span className="text-gradient">Invixa</span>?</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { title: "Fast delivery", text: "Get your project live within 48–72 hours." },
                  { title: "AI-powered systems", text: "Smart automation that handles leads for you." },
                  { title: "Built for conversions", text: "Not just pretty designs, but systems that sell." },
                  { title: "Affordable growth plans", text: "Scalable solutions for every stage of business." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                    <CheckCircle2 className="text-gradient" style={{ flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: '1.1rem' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-morphism" style={{ borderRadius: '32px', height: '350px', padding: '2rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.8rem', lineHeight: '1.3' }}>“Get more customers, <br/>not just a website.”</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>Success Stories</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Preview of our recent digital transformations.</p>
            </div>
            <Link to="/portfolio" className="btn-secondary">View all projects <ArrowRight size={18} /></Link>
          </div>
          <div className="responsive-grid">
            {[
              { 
                title: "Dakha Devi Hospital", 
                category: "Medical Web App", 
                link: "https://akc04.github.io/dakha-devi-hospital/",
                repo: "https://github.com/akc04/dakha-devi-hospital"
              },
              { 
                title: "FreshMart", 
                category: "E-Commerce OS", 
                link: "https://akc04.github.io/FreshMart/",
                repo: "https://github.com/akc04/FreshMart"
              },
              { 
                title: "Invixa Automation", 
                category: "Business Logic", 
                link: "https://github.com/ajay-akc/invixa-automation",
                repo: "https://github.com/ajay-akc/invixa-automation"
              }
            ].map((project, index) => (
              <div key={index} className="home-portfolio-card" style={{ cursor: 'pointer' }}>
                <div style={{ 
                  backgroundColor: '#f5f5f7', 
                  borderRadius: '24px', 
                  height: '280px', 
                  marginBottom: '1.5rem', 
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid var(--glass-border)'
                }}>
                  {project.link.includes('github.io') ? (
                    <div className="home-iframe-scroller" style={{ 
                      width: 'calc(100% / 0.25)', 
                      height: '3500px',
                      transform: 'scale(0.25)',
                      transformOrigin: '0 0',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      transition: 'transform 8s ease-in-out',
                      pointerEvents: 'none'
                    }}>
                      <iframe 
                        src={project.link} 
                        title={project.title}
                        style={{ width: '100%', height: '100%', border: 'none', background: 'white' }}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f5' }}>
                       <div style={{ fontSize: '2rem', fontWeight: 800, opacity: 0.1 }}>INVIXA</div>
                    </div>
                  )}
                  <Link to="/portfolio" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{project.category}</p>
                    <h3 style={{ fontSize: '1.25rem' }}>{project.title}</h3>
                  </div>
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                      <GithubIcon size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .home-portfolio-card:hover .home-iframe-scroller {
          transform: scale(0.25) translateY(-2800px) !important;
        }
      `}} />

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="glass-morphism cta-card" style={{ padding: 'clamp(2rem, 10vw, 5rem) 2rem', borderRadius: '48px', textAlign: 'center', background: 'var(--gradient-primary)', color: 'white' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '1.5rem', color: 'white' }}>Let’s Build Your Digital Growth System</h2>
            <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', marginBottom: '2.5rem', opacity: 0.9 }}>Join 50+ businesses scaling with Invixa.</p>
            <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'white', color: 'black', padding: '16px 40px' }}>Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;