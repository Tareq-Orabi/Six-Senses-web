export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>
      <div className="hero-orb orb-3"></div>

      <div className="hero-content">
        <div className="hero-eyebrow">Holistic Wellness Clinic</div>
        <h1 className="hero-h1">
          Restore.<br />
          <em>Renew.</em>
          Revive.
        </h1>
        <p className="hero-desc">
          At Six Senses, we offer a curated collection of therapeutic and detoxifying treatments designed to restore balance to body, mind, and spirit — guided by experienced specialists in a serene environment.
        </p>
        <div className="hero-actions">
          <a href="#book" className="btn-primary">Book a Session</a>
          <a href="#services" className="btn-ghost">
            Explore Services
            <span className="btn-ghost-arrow">→</span>
          </a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-card">
          <div className="stat-dot"></div>
          <div>
            <div className="stat-num">10+</div>
            <div className="stat-label">Specialist<br />Treatments</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-dot"></div>
          <div>
            <div className="stat-num">3</div>
            <div className="stat-label">Curated<br />Packages</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-dot"></div>
          <div>
            <div className="stat-num">100%</div>
            <div className="stat-label">Natural<br />Approach</div>
          </div>
        </div>
      </div>
    </section>
  );
}
