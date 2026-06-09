export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-visual reveal">
          <div className="about-card-big">
            <div className="about-card-bg"></div>
            <div className="about-card-roseball"></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="about-card-label">Our Philosophy</div>
              <div className="about-card-quote">"True wellness begins when we listen to what the body has been asking for all along."</div>
            </div>
          </div>
          <div className="about-badge">
            <div className="about-badge-inner">Six<br />Senses<br />· ·<br />Clinic</div>
          </div>
        </div>
        <div className="about-text reveal">
          <div className="section-eyebrow">Who We Are</div>
          <h2 className="section-title">A sanctuary for <em>deep healing</em></h2>
          <p>Six Senses is a holistic wellness clinic offering evidence-based and traditional therapies that work in harmony to detoxify, restore, and energize the body from within.</p>
          <p>Our team of specialists blends modern clinical expertise with time-honored healing traditions, creating a truly personalized wellness experience for every client.</p>
          <div className="pillars">
            <div className="pillar">
              <div className="pillar-icon">🌿</div>
              <div>
                <div className="pillar-title">Natural Therapies</div>
                <div className="pillar-desc">Every treatment uses organic, plant-based, or clinically approved methods — no harsh chemicals.</div>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">🫀</div>
              <div>
                <div className="pillar-title">Whole-Body Approach</div>
                <div className="pillar-desc">We address root causes, not just symptoms, through integrated wellness protocols.</div>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">✨</div>
              <div>
                <div className="pillar-title">Personalized Care</div>
                <div className="pillar-desc">Each session is tailored to your health profile, goals, and current state of well-being.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
