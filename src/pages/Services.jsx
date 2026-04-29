import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Search, Smartphone, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import serviceWebDev from '../assets/service_web_dev.png';
import serviceSeo from '../assets/service_seo.png';
import serviceAppDev from '../assets/service_app_dev.png';

const ServiceSection = ({ icon: Icon, title, description, benefits, whoItsFor, reverse, image }) => (
  <section className="section-padding">
    <div className="container">
      <div style={{ 
        display: 'flex', 
        flexDirection: reverse ? 'row-reverse' : 'row', 
        alignItems: 'center', 
        gap: 'clamp(2rem, 5vw, 4rem)', 
        flexWrap: 'wrap' 
      }}>
        <div style={{ flex: '1', minWidth: 'min(100%, 400px)' }}>
          <div className="text-gradient" style={{ marginBottom: '1.5rem' }}>
            <Icon size={48} />
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1.5rem' }}>{title}</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>{description}</p>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>Key Benefits:</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {benefits.map((benefit, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                  <Check size={18} className="text-gradient" /> {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <p><strong>Who it’s for:</strong> <span style={{ color: 'var(--text-secondary)' }}>{whoItsFor}</span></p>
          </div>

          <Link to="/contact" className="btn-primary">Get Started</Link>
        </div>
        <div style={{ flex: '1', minWidth: 'min(100%, 400px)' }}>
          <div className="glass-morphism" style={{ borderRadius: '40px', height: 'clamp(300px, 50vh, 400px)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
             <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-top" style={{ textAlign: 'center', background: 'var(--bg-secondary)', paddingBottom: '60px' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 3.5rem)', marginBottom: '1.5rem' }}>Our <span className="text-gradient">Expertise</span></h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            We combine design, technology, and strategy to build digital systems that deliver real business results.
          </p>
        </div>
      </section>

      <ServiceSection 
        icon={Monitor}
        title="Website Development"
        description="We don't just build websites; we build conversion machines. Our designs are inspired by Apple’s minimalism—clean, fast, and intuitive."
        benefits={[
          "Conversion-focused design",
          "Mobile & Tablet optimized",
          "Lightning-fast load speeds",
          "SEO-ready architecture"
        ]}
        whoItsFor="Doctors, clinics, and modern businesses looking for a premium online presence."
        image={serviceWebDev}
      />

      <ServiceSection 
        icon={Search}
        title="SEO Optimization"
        description="Get found by the right people at the right time. Our SEO strategies are designed to put your business at the top of search results."
        benefits={[
          "High-intent keyword optimization",
          "Local SEO dominance for clinics",
          "Continuous ranking improvements",
          "Competitor gap analysis"
        ]}
        whoItsFor="Businesses wanting to reduce ad spend and grow organic customer acquisition."
        reverse={true}
        image={serviceSeo}
      />

      <ServiceSection 
        icon={Smartphone}
        title="App Development"
        description="Simple, scalable, and business-focused. We build mobile and web applications that solve specific business problems and automate tasks."
        benefits={[
          "Intuitive UI/UX for better engagement",
          "Secure and scalable infrastructure",
          "Custom business logic integration",
          "Cross-platform compatibility"
        ]}
        whoItsFor="Companies looking for bespoke tools to manage their growth and operations."
        image={serviceAppDev}
      />

      {/* CTA */}
      <section className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '2rem' }}>Ready to transform your business?</h2>
          <Link to="/contact" className="btn-primary" style={{ padding: '16px 40px' }}>Book Your Free Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;