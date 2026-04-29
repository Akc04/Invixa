import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Monitor, Search, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroMain from '../assets/hero_main.png';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="section-padding page-top" style={{ 
        textAlign: 'center', 
        background: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${heroMain})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.p variants={itemVariants} className="text-gradient" style={{ fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
              Free Website Audit Available
            </motion.p>
            <motion.h1 variants={itemVariants} style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '1.5rem', maxWidth: '900px', margin: '0 auto 1.5rem auto' }}>
              Get More Customers With <span className="text-gradient">Smart Digital Systems</span>
            </motion.h1>
            <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
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
      <section style={{ padding: '40px 0', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>Trusted by growing businesses</p>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', opacity: 0.5, filter: 'grayscale(100%)' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>MEDICARE</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>CLINIC+</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>TECHFLOW</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>BIOHEALTH</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>SOLUTIONS</span>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Core Services</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Everything you need to dominate your market online.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Monitor size={32} />, title: "Website Development", desc: "Premium, conversion-focused websites tailored for clinics and modern businesses." },
              { icon: <Search size={32} />, title: "SEO Optimization", desc: "Rank higher on Google and get found by local customers exactly when they need you." },
              { icon: <Smartphone size={32} />, title: "App Development", desc: "Custom business apps and automation systems that streamline your operations." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="glass-morphism"
                style={{ padding: '3rem', borderRadius: '24px', transition: 'var(--transition-smooth)' }}
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Why Choose <span className="text-gradient">Invixa</span>?</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { title: "Fast delivery", text: "Get your project live within 48–72 hours." },
                  { title: "AI-powered systems", text: "Smart automation that handles leads for you." },
                  { title: "Built for conversions", text: "Not just pretty designs, but systems that sell." },
                  { title: "Affordable growth plans", text: "Scalable solutions for every stage of business." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                    <CheckCircle2 className="text-gradient" />
                    <div>
                      <h4 style={{ fontSize: '1.1rem' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-morphism" style={{ borderRadius: '32px', height: '400px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>“Get more customers, not just a website.”</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Success Stories</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Preview of our recent digital transformations.</p>
            </div>
            <Link to="/portfolio" className="btn-secondary">View all projects <ArrowRight size={18} /></Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {[1, 2, 3].map((item) => (
              <div key={item} className="portfolio-card" style={{ cursor: 'pointer' }}>
                <div style={{ backgroundColor: '#f0f0f5', borderRadius: '24px', height: '250px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                  {/* Placeholder for project image */}
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontSize: '3rem' }}>
                    DEMO {item}
                  </div>
                </div>
                <h3>Project Title {item}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Advanced SEO & Web Platform</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="glass-morphism" style={{ padding: '5rem 2rem', borderRadius: '48px', textAlign: 'center', background: 'var(--gradient-primary)', color: 'white' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white' }}>Let’s Build Your Digital Growth System</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>Join 50+ businesses scaling with Invixa.</p>
            <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'white', color: 'black', padding: '16px 40px' }}>Get Started</Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          h1 { font-size: 3rem !important; }
          .portfolio-card { margin-bottom: 2rem; }
        }
      `}} />
    </div>
  );
};

export default Home;