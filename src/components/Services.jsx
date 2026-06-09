import { useState } from 'react';

const sessions = [
  { name: 'Colon Cleansing', price: '50 JOD', desc: 'Deep hydration and internal waste removal for digestive restoration.', duration: '45–60 min' },
  { name: 'Liver Cleansing', price: '65 JOD', desc: 'Targeted detoxification to support hepatic function and bile flow.', duration: '60 min' },
  { name: 'Enema', price: '30 JOD', desc: 'Focused lower-bowel flush using specialized herbal or organic solutions.', duration: '30 min' },
  { name: 'Medical Massage', price: '45 JOD', desc: 'Therapeutic manipulation focused on clinical recovery and pain relief.', duration: '60 min' },
  { name: 'Acupuncture', price: '40 JOD', desc: 'Traditional needle therapy to balance energy and reduce inflammation.', duration: '45 min' },
  { name: 'Cupping', price: '35 JOD', desc: 'Suction-based therapy to improve blood flow and release toxins.', duration: '45 min' },
  { name: 'Red Light Therapy', price: '25 JOD', desc: 'Photobiomodulation for cellular repair and collagen boost.', duration: '20 min' },
  { name: 'Lymphatic Massage', price: '55 JOD', desc: 'Gentle rhythmic strokes to stimulate fluid drainage and immunity.', duration: '60 min' },
  { name: 'Deep Tissue Massage', price: '50 JOD', desc: 'Intense pressure targeting chronic muscle tension and knots.', duration: '60 min' },
  { name: 'Foot Detox', price: '20 JOD', desc: 'Ionic bath system to draw out impurities through the feet.', duration: '30 min' }
];

const packages = [
  { name: 'Signature Detox Program', price: '120 JOD', desc: '3 sessions including probiotic implants and specialized dietary guidance.', duration: '12 Sessions' },
  { name: '5-Session Wellness Bundle', price: '185 JOD', desc: 'Our most comprehensive internal cleansing journey for long-term health.', duration: '20 Sessions' },
  { name: 'Total Body Renewal', price: '110 JOD', desc: 'Combination of Colon Cleansing, Lymphatic Massage, and Red Light Therapy.', duration: '5 Sessions' }
];

export default function Services() {
  const [filter, setFilter] = useState('all');

  const displaySessions = filter === 'all' || filter === 'session';
  const displayPackages = filter === 'all' || filter === 'package';

  return (
    <section id="services">
      <div className="services-header reveal">
        <div>
          <div className="section-eyebrow">What We Offer</div>
          <h2 className="section-title">Our <em>treatments</em></h2>
        </div>
        <div className="services-tabs">
          <button className={`tab-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`tab-btn ${filter === 'session' ? 'active' : ''}`} onClick={() => setFilter('session')}>Sessions</button>
          <button className={`tab-btn ${filter === 'package' ? 'active' : ''}`} onClick={() => setFilter('package')}>Packages</button>
        </div>
      </div>

      <div className="services-grid" id="servicesGrid">
        {displaySessions && sessions.map((s, i) => (
          <div key={i} className="service-card visible">
            <div className="service-card-top">
              <span className="service-badge badge-session">Session</span>
              <span className="service-price">{s.price}</span>
            </div>
            <div className="service-name">{s.name}</div>
            <div className="service-desc">{s.desc}</div>
            <div className="service-duration">⏱ {s.duration}</div>
          </div>
        ))}

        {displayPackages && packages.map((p, i) => (
          <div key={i} className="service-card visible">
            <div className="service-card-top">
              <span className="service-badge badge-package">Package</span>
              <span className="service-price">{p.price}</span>
            </div>
            <div className="service-name">{p.name}</div>
            <div className="service-desc">{p.desc}</div>
            <div className="service-duration">⏱ {p.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
