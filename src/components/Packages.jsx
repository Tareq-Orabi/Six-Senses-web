export default function Packages() {
  return (
    <section id="packages">
      <div className="packages-wrap">
        <div className="packages-header reveal">
          <div className="section-eyebrow">Value Bundles</div>
          <h2 className="section-title">Curated <em>programs</em></h2>
        </div>
        <div className="packages-grid">
          <div className="pkg-card reveal">
            <div className="pkg-icon">🌱</div>
            <div className="pkg-name">Total Body Renewal</div>
            <div className="pkg-desc">A harmonious combination of Colon Cleansing, Lymphatic Massage, and Red Light Therapy designed to reset your system from the inside out.</div>
            <div className="pkg-meta">
              <div className="pkg-price">110 JOD</div>
              <div className="pkg-sessions">5 Sessions</div>
            </div>
            <a href="#book" className="pkg-btn">Book This Package</a>
          </div>
          <div className="pkg-card featured reveal">
            <div className="pkg-icon">✨</div>
            <div className="pkg-name">Signature Detox Program</div>
            <div className="pkg-desc">Our flagship program featuring 3 premium sessions with probiotic implants and a personalized dietary guidance plan by our specialists.</div>
            <div className="pkg-meta">
              <div className="pkg-price">120 JOD</div>
              <div className="pkg-sessions">12 Sessions</div>
            </div>
            <a href="#book" className="pkg-btn">Book This Package</a>
          </div>
          <div className="pkg-card reveal">
            <div className="pkg-icon">🫧</div>
            <div className="pkg-name">Wellness Bundle</div>
            <div className="pkg-desc">Our most comprehensive internal cleansing journey — a long-term commitment to sustained health, energy, and wellbeing.</div>
            <div className="pkg-meta">
              <div className="pkg-price">185 JOD</div>
              <div className="pkg-sessions">20 Sessions</div>
            </div>
            <a href="#book" className="pkg-btn">Book This Package</a>
          </div>
        </div>
      </div>
    </section>
  );
}
