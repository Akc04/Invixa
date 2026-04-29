import React, { useState } from 'react';
import { Check, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const PricingCard = ({ plan, popular }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`glass-morphism ${popular ? 'popular-card' : ''}`}
    style={{ 
      padding: 'clamp(2rem, 5vw, 3rem) 2rem', 
      borderRadius: '32px', 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%',
      position: 'relative',
      border: popular ? `2px solid ${plan.color || 'var(--accent-blue)'}` : '1px solid var(--glass-border)',
      background: popular ? '#fff' : 'var(--glass-bg)'
    }}
  >
    {popular && (
      <span style={{ 
        position: 'absolute', 
        top: '-15px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        backgroundColor: plan.color || 'var(--accent-blue)', 
        color: 'white', 
        padding: '4px 16px', 
        borderRadius: '20px', 
        fontSize: '0.8rem', 
        fontWeight: 600,
        whiteSpace: 'nowrap'
      }}>
        Most Popular
      </span>
    )}
    <div style={{ marginBottom: '2rem' }}>
      <p style={{ fontWeight: 600, fontSize: '0.9rem', color: plan.color || 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{plan.category}</p>
      <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
      <div style={{ marginBottom: '1rem' }}>
        <span style={{ fontSize: '2.5rem', fontWeight: 700 }}>{plan.price}</span>
        {plan.period && <span style={{ color: 'var(--text-secondary)' }}> {plan.period}</span>}
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{plan.note}</p>
    </div>

    <ul style={{ flex: 1, marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {plan.features.map((feature, i) => (
        <li key={i} style={{ display: 'flex', gap: '0.8rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
          <Check size={18} className="text-gradient" style={{ flexShrink: 0 }} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <Link 
      to="/contact" 
      className={popular ? 'btn-primary' : 'btn-secondary'} 
      style={{ width: '100%', textAlign: 'center', justifyContent: popular ? 'center' : 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
    >
      {plan.cta} {!popular && <ArrowRight size={16} />}
    </Link>
  </motion.div>
);

const Pricing = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const mainPlans = [
    {
      category: "Starter",
      name: "Starter Presence Plan",
      price: "₹5,000",
      period: "(one-time)",
      color: "#34C759", // Green
      note: "Perfect to get your business online quickly",
      features: ["1-page professional website", "Clean template-based design", "Contact form + WhatsApp integration", "Basic SEO setup", "Google Business profile guidance"],
      cta: "Get Started"
    },
    {
      category: "Foundation",
      name: "Basic Website Plan",
      price: "₹9,997",
      period: "(one-time)",
      color: "#007AFF", // Blue
      note: "Ideal for businesses starting serious digital presence",
      features: ["3–5 page professional website", "Mobile responsive design", "On-page SEO", "Speed optimization", "WhatsApp + call integration"],
      cta: "Get Started"
    },
    {
      category: "Growth",
      name: "Growth Plan",
      price: "₹11,000",
      period: "setup + ₹2,999/month",
      color: "#AF52DE", // Purple
      note: "For businesses ready for continuous growth",
      popular: true,
      features: ["Everything in Basic", "Monthly website maintenance", "Monthly SEO improvements", "4 blog posts/month", "Google ranking optimization", "Basic analytics report"],
      cta: "Get Started"
    }
  ];

  const advancedPlans = [
    {
      category: "Automation",
      name: "Business Automation Plan",
      price: "₹17,999",
      period: "setup + ₹3,999/month",
      color: "#FF9500", // Orange
      note: "Turn your website into an automated sales system",
      features: ["Everything in Growth", "AI chatbot (Website + WhatsApp)", "Lead capture system", "Automated responses & follow-ups", "Email/WhatsApp automation", "8 social media posts/month"],
      cta: "Get Started"
    },
    {
      category: "Scale",
      name: "Premium Digital Presence Plan",
      price: "₹30,000",
      period: "setup + ₹6,999/month",
      color: "#FF2D55", // Pink/Red
      note: "For businesses ready to scale aggressively",
      features: ["Everything in Automation", "Advanced SEO strategy", "12–16 social media posts/month", "Google Ads setup", "Monthly performance reports", "Landing pages"],
      cta: "Get Started"
    },
    {
      category: "Elite",
      name: "Elite Growth System",
      price: "₹60,000+",
      period: "setup + ₹11,999/month",
      color: "#5856D6", // Indigo
      note: "For high-value, growth-focused businesses",
      features: ["Everything in Premium", "Full funnel system", "Advanced AI automation", "Reputation management", "Competitor analysis", "Priority support"],
      cta: "Book Consultation"
    },
    {
      category: "Enterprise",
      name: "Custom Enterprise Plan",
      price: "₹75k+",
      period: "(custom pricing)",
      color: "#1D1D1F", // Black
      note: "Tailored solutions for large-scale businesses",
      features: ["SaaS solutions", "App development", "Full digital ecosystem", "Custom automation systems", "Dedicated execution"],
      cta: "Contact Us"
    }
  ];

  return (
    <div className="pricing-page">
      <section className="page-top" style={{ paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 3.5rem)', marginBottom: '1.5rem' }}>Flexible Plans for <span className="text-gradient">Every Stage</span></h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Start small. Scale fast. Upgrade anytime.</p>
          </div>

          <div className="responsive-grid" style={{ marginBottom: '4rem' }}>
            {mainPlans.map((plan, i) => (
              <PricingCard key={i} plan={plan} popular={plan.popular} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => setShowAdvanced(!showAdvanced)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-blue)' }}
            >
              {showAdvanced ? "Hide Advanced Plans" : "View Advanced Plans"}
              {showAdvanced ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {showAdvanced && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ overflow: 'hidden' }}
              >
                <div className="responsive-grid" style={{ marginTop: '3rem' }}>
                  {advancedPlans.map((plan, i) => (
                    <PricingCard key={i} plan={plan} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Not sure which plan is right for you?</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>Get a free consultation and let us help you decide.</p>
          <Link to="/contact" className="btn-primary" style={{ padding: '16px 40px' }}>Book Free Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
