import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const SERVICE_DATA = {
  colon: { id: 23, category: "MEDICAL", title: 'Colon Hydrotherapy', region: 'Lower Abdomen · Gut', desc: 'Closed-system purification to optimize gut flora and enhance metabolic efficiency.', color: '#E2A9A1', priceDisplay: '75 JD', durationDisplay: '60 min', icon: '💧', gradient: 'linear-gradient(135deg, #FFB6B9 0%, #FAE3D9 50%, #BBDED6 100%)' },
  liver: { id: 25, category: "MEDICAL", title: 'Liver Cleansing', region: 'Upper Right Abdomen · Liver', desc: 'Targeted hepatic stimulation and detox support to enhance the liver\'s natural filtration capacity.', color: '#D28C78', priceDisplay: '50 JD', durationDisplay: '60 min', icon: '✦', gradient: 'linear-gradient(135deg, #FFD3B6 0%, #FF8C94 50%, #D28C78 100%)' },
  livercolon: { id: 24, category: "MEDICAL", title: 'Liver & Colon Hydrotherapy', region: 'Abdomen · Full Digestive', desc: 'A powerful synergistic detox protocol combining colon irrigation with liver stimulation for ultimate renewal.', color: '#B87864', priceDisplay: '100 JD', durationDisplay: '90 min', icon: '🔄', gradient: 'linear-gradient(135deg, #FFAAA5 0%, #FFD3B6 50%, #8B5E52 100%)' },
  ivdrip: { id: 22, category: "MEDICAL", title: 'IV Drip', region: 'Circulatory System · Intravenous', desc: 'Intravenous infusion of custom vitamins, minerals, and hydration directly into the bloodstream.', color: '#8B7D7B', priceDisplay: '250 JD', durationDisplay: '60 min', icon: '💉', gradient: 'linear-gradient(135deg, #A8E6CF 0%, #DCEDC1 50%, #FFD3B6 100%)' },
  consultation: { id: 21, category: "MEDICAL", title: 'Consultation', region: 'Clinical Consultation', desc: 'Comprehensive clinical assessment with our specialists to design your personalized wellness protocol.', color: '#D2B48C', priceDisplay: '15 JD', durationDisplay: '30 min', icon: '📋', gradient: 'linear-gradient(135deg, #D2B48C 0%, #FFD3B6 50%, #FFAAA5 100%)' },
  candida: { id: 26, category: "MEDICAL", title: 'Candida Enema', region: 'Lower Colon · Rectum', desc: 'Intestinal enema targeted at reducing yeast overgrowth, balancing gut microflora.', color: '#B8956A', priceDisplay: '25 JD', durationDisplay: '30 min', icon: '◎', gradient: 'linear-gradient(135deg, #FFE082 0%, #FFB6B9 50%, #8B7050 100%)' },
  parasite: { id: 27, category: "MEDICAL", title: 'Parasite Enema', region: 'Lower Colon · Rectum', desc: 'Specialized formulation designed to support the elimination of intestinal parasites.', color: '#B8956A', priceDisplay: '25 JD', durationDisplay: '30 min', icon: '◎', gradient: 'linear-gradient(135deg, #FFD3B6 0%, #FFAAA5 50%, #D28C78 100%)' },
  saline: { id: 28, category: "MEDICAL", title: 'Saline Enema', region: 'Lower Colon · Rectum', desc: 'Hydrating mineral enema to gently ease constipation and support electrolyte balance.', color: '#B8956A', priceDisplay: '25 JD', durationDisplay: '30 min', icon: '◎', gradient: 'linear-gradient(135deg, #DCEDC1 0%, #A8E6CF 50%, #8B7865 100%)' },
  oil: { id: 29, category: "MEDICAL", title: 'Oil Enema', region: 'Lower Colon · Rectum', desc: 'Lubricating organic herbal oil infusion to soothe dry intestinal walls and calm the nervous system.', color: '#B8956A', priceDisplay: '25 JD', durationDisplay: '30 min', icon: '◎', gradient: 'linear-gradient(135deg, #FAE3D9 0%, #FFB6B9 50%, #786050 100%)' },
  probiotics: { id: 30, category: "MEDICAL", title: 'Probiotics Enema', region: 'Lower Colon · Rectum', desc: 'Direct implantation of concentrated beneficial bacteria to repopulate gut microbiome flora.', color: '#B8956A', priceDisplay: '25 JD', durationDisplay: '30 min', icon: '◎', gradient: 'linear-gradient(135deg, #BBDED6 0%, #8B5040 50%, #887058 100%)' },
  lymphatic: { id: 11, category: "PHYSICAL_THERAPY", title: 'Lymphatic Massage', region: 'Lymphatic System · Full Body', desc: 'Gentle massage to relieve pain and swelling through targeted lymphatic drainage.', color: '#C4A882', priceDisplay: '40 JD', durationDisplay: '60 min', icon: '✧', gradient: 'linear-gradient(135deg, #D8C0A0 0%, #FFB6B9 50%, #8B7860 100%)' },
  massage: { id: 12, category: "PHYSICAL_THERAPY", title: 'Medical Massage', region: 'Muscular System · Full Body', desc: 'Clinical deep tissue massage targeting muscle knots and chronic tension to relieve pain.', color: '#A08880', priceDisplay: '40 JD', durationDisplay: '60 min', icon: '〜', gradient: 'linear-gradient(135deg, #B8A098 0%, #FFAAA5 50%, #786860 100%)' },
  reflexology: { id: 13, category: "PHYSICAL_THERAPY", title: 'Reflexology Massage', region: 'Nervous System · Feet & Hands', desc: 'Targeted zone therapy on the feet and hands to restore balance and stimulate organ healing.', color: '#D2B48C', priceDisplay: '40 JD', durationDisplay: '60 min', icon: '👣', gradient: 'linear-gradient(135deg, #E0C8A8 0%, #D2B48C 50%, #A08868 100%)' },
  relaxing: { id: 14, category: "PHYSICAL_THERAPY", title: 'Relaxing Massage', region: 'Nervous System · Full Body', desc: 'Soothe your nervous system, reduce cortisol levels, and restore inner peace.', color: '#E2A9A1', priceDisplay: '40 JD', durationDisplay: '60 min', icon: '🌸', gradient: 'linear-gradient(135deg, #F0C0B8 0%, #E2A9A1 50%, #C08878 100%)' },
  deeptissue: { id: 18, category: "PHYSICAL_THERAPY", title: 'Deep Tissue Massage', region: 'Muscular System · Deep Layers', desc: 'Firm pressure massage to relieve muscle pain and deep tension in skeletal muscle tissue.', color: '#8B7D7B', priceDisplay: '40 JD', durationDisplay: '60 min', icon: '✦', gradient: 'linear-gradient(135deg, #A89896 0%, #FFD3B6 50%, #685C5A 100%)' },
  abdominal: { id: 15, category: "PHYSICAL_THERAPY", title: 'Abdominal Massage', region: 'Digestive System · Abdomen', desc: 'Gentle visceral manipulation to support digestion, reduce bloating, and release tension.', color: '#E2A9A1', priceDisplay: '25 JD', durationDisplay: '30 min', icon: '💆', gradient: 'linear-gradient(135deg, #F0B8B0 0%, #E2A9A1 50%, #B88078 100%)' },
  acupuncture: { id: 16, category: "WELLNESS", title: 'Acupuncture', region: 'Nervous System · Energy Pathways', desc: 'Traditional Chinese medicine inserting thin needles at meridian points to restore energy balance.', color: '#D2B48C', priceDisplay: '40 JD', durationDisplay: '45 min', icon: '◈', gradient: 'linear-gradient(135deg, #E0C8A8 0%, #D2B48C 50%, #A08868 100%)' },
  cupping: { id: 17, category: "WELLNESS", title: 'Cupping Therapy', region: 'Circulatory System · Back & Shoulders', desc: 'Wet and dry cupping to create localized suction, increasing blood flow and reducing inflammation.', color: '#B87864', priceDisplay: '40 JD', durationDisplay: '45 min', icon: '◇', gradient: 'linear-gradient(135deg, #D09080 0%, #B87864 50%, #8B5848 100%)' },
  footdetox: { id: 19, category: "WELLNESS", title: 'Foot Detox', region: 'Excretory System · Feet', desc: 'Ionic foot detox utilizing electrolysis to encourage deep cellular purification through the feet.', color: '#D2B48C', priceDisplay: '20 JD', durationDisplay: '30 min', icon: '◉', gradient: 'linear-gradient(135deg, #E0C8A8 0%, #C4A078 50%, #907050 100%)' },
  redlight: { id: 20, category: "WELLNESS", title: 'Red Light Therapy', region: 'Integumentary · Cellular Level', desc: 'Wavelengths of light penetrate deep into skin layers to stimulate ATP production and speed repair.', color: '#E2A9A1', priceDisplay: '25 JD', durationDisplay: '30 min', icon: '☀', gradient: 'linear-gradient(135deg, #F0B8B0 0%, #E2A9A1 50%, #C88878 100%)' },
};

const PACKAGES = [
  { id: 101, title: 'Colon Cleansing – 3 Sessions', desc: '3 sessions including probiotic implants and specialized dietary guidance.', priceDisplay: '200 JD', durationDisplay: '3 Sessions', badge: 'Most Popular', icon: '✨', color: '#E2A9A1', gradient: 'linear-gradient(135deg, #FFB6B9 0%, #c4786b 50%, #8B5E52 100%)', services: ['Colon Hydrotherapy × 3', 'Probiotic Implants', 'Dietary Guidance'] },
  { id: 102, title: 'Colon Cleansing – 5 Sessions', desc: '5 sessions including probiotic implants and specialized dietary guidance.', priceDisplay: '300 JD', durationDisplay: '5 Sessions', badge: 'Best Value', icon: '💎', color: '#8B7050', gradient: 'linear-gradient(135deg, #A08868 0%, #FFD3B6 50%, #5C4033 100%)', services: ['Colon Hydrotherapy × 5', 'Probiotic Implants', 'Dietary Guidance'] },
  { id: 103, title: 'Colon Cleansing – 12 Sessions', desc: '12 sessions including probiotic implants and specialized dietary guidance.', priceDisplay: '600 JD', durationDisplay: '12 Sessions', badge: 'Signature Protocol', icon: '🔄', color: '#8B7D7B', gradient: 'linear-gradient(135deg, #A89896 0%, #BBDED6 50%, #5C5250 100%)', services: ['Colon Hydrotherapy × 12', 'Probiotic Implants', 'Dietary Guidance'] },
];

const allSessions = Object.values(SERVICE_DATA).map(s => ({ ...s, type: 'session' }));
const allPackages = PACKAGES.map(p => ({ ...p, type: 'package', category: 'PACKAGE' }));

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'MEDICAL', label: 'Medical' },
  { key: 'PHYSICAL_THERAPY', label: 'Therapy' },
  { key: 'WELLNESS', label: 'Wellness' },
  { key: 'PACKAGE', label: 'Packages' },
];

// ─────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────
export default function Services() {
  const [filter, setFilter] = useState('all');
  const [activeItem, setActiveItem] = useState(null);
  const isPaused = useRef(false);
  const [detailKey, setDetailKey] = useState(0);
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const scrollPos = useRef(0);
  const rafRef = useRef(null);
  const lastActiveId = useRef(null);
  const filterRefs = useRef([]);
  const filterWrapperRef = useRef(null);
  const [indStyle, setIndStyle] = useState({ left: 0, width: 0 });

  const items = useMemo(() => {
    if (filter === 'all') return [...allSessions, ...allPackages];
    if (filter === 'PACKAGE') return allPackages;
    return allSessions.filter(s => s.category === filter);
  }, [filter]);

  const doubled = useMemo(() => [...items, ...items], [items]);

  const counts = useMemo(() => ({
    all: allSessions.length + allPackages.length,
    MEDICAL: allSessions.filter(s => s.category === 'MEDICAL').length,
    PHYSICAL_THERAPY: allSessions.filter(s => s.category === 'PHYSICAL_THERAPY').length,
    WELLNESS: allSessions.filter(s => s.category === 'WELLNESS').length,
    PACKAGE: allPackages.length,
  }), []);

  // ── Indicator ──
  const updateInd = useCallback(() => {
    const idx = FILTERS.findIndex(f => f.key === filter);
    const btn = filterRefs.current[idx];
    const w = filterWrapperRef.current;
    if (btn && w) {
      const wr = w.getBoundingClientRect();
      const br = btn.getBoundingClientRect();
      setIndStyle({ left: br.left - wr.left, width: br.width });
    }
  }, [filter]);

  useEffect(() => {
    updateInd();
    window.addEventListener('resize', updateInd);
    return () => window.removeEventListener('resize', updateInd);
  }, [updateInd]);

  // ── Scroll + Detection (HORIZONTAL NATIVE) ──
  useEffect(() => {
    const container = scrollRef.current;
    const track = trackRef.current;
    if (!container || !track || !items.length) return;

    scrollPos.current = 0;
    lastActiveId.current = null;
    setActiveItem(items[0]);
    setDetailKey(k => k + 1);

    const speed = 0.5;
    let autoScrollRaf = null;

    // We calculate the width of exactly ONE complete set of cards
    // This assumes the track has 2x items.
    const getFirstSetWidth = () => {
      const cards = track.querySelectorAll('.svc-card');
      let w = 0;
      for (let i = 0; i < Math.min(items.length, cards.length); i++) {
        w += cards[i].offsetWidth + 20; // 20 is the gap defined in CSS
      }
      return w;
    };

    const handleScrollAndDetect = () => {
      const firstSetW = getFirstSetWidth();
      if (firstSetW > 0) {
        // Infinite scroll wrapping for native scroll
        if (container.scrollLeft >= firstSetW) {
          container.scrollLeft -= firstSetW;
          if (isPaused.current) scrollPos.current -= firstSetW; // sync
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += firstSetW;
          if (isPaused.current) scrollPos.current += firstSetW; // sync
        }
      }

      // Sync the accumulator if the user is scrolling manually
      if (isPaused.current) {
        scrollPos.current = container.scrollLeft;
      }

      // Detection
      const cRect = container.getBoundingClientRect();
      const scanX = cRect.left + cRect.width / 2;
      let closest = null;
      let closestDist = Infinity;
      const cards = track.querySelectorAll('.svc-card');

      cards.forEach(c => {
        const r = c.getBoundingClientRect();
        const dist = Math.abs(r.left + r.width / 2 - scanX);
        if (dist < closestDist) { closestDist = dist; closest = c; }
      });

      cards.forEach(c => c.classList.remove('active'));
      if (closest) {
        closest.classList.add('active');
        const sid = closest.dataset.sid;
        if (sid && sid !== lastActiveId.current) {
          lastActiveId.current = sid;
          const found = items.find(it => String(it.id) === sid);
          if (found) { setActiveItem(found); setDetailKey(k => k + 1); }
        }
      }
    };

    const tick = () => {
      if (!isPaused.current) {
        scrollPos.current += speed;
        // only assign if integer part changed to prevent layout thrashing
        if (Math.abs(container.scrollLeft - scrollPos.current) >= 1) {
          container.scrollLeft = Math.floor(scrollPos.current);
        }
      }
      autoScrollRaf = requestAnimationFrame(tick);
    };

    autoScrollRaf = requestAnimationFrame(tick);

    container.addEventListener('scroll', handleScrollAndDetect, { passive: true });

    // Initial detection tick
    handleScrollAndDetect();

    return () => {
      if (autoScrollRaf) cancelAnimationFrame(autoScrollRaf);
      container.removeEventListener('scroll', handleScrollAndDetect);
    };
  }, [items]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    lastActiveId.current = null;
  }, [filter]);

  return (
    <section id="services" className="svc-section">
      {/* ═══ Vibrant Decorative Background ═══ */}
      <div className="svc-deco-blob svc-deco-blob-1" />
      <div className="svc-deco-blob svc-deco-blob-2" />
      <div className="svc-deco-blob svc-deco-blob-3" />
      <div className="svc-deco-blob svc-deco-blob-4" />
      <div className="svc-deco-grid" />

      {/* ═══ Header ═══ */}
      <div className="svc-header reveal">
        <div>
          <div className="svc-eyebrow">
            <span className="svc-eyebrow-dot" />
            What We Offer
            <span className="svc-eyebrow-line" />
          </div>
          <h2 className="svc-heading">
            Our <em>services</em>
          </h2>
          <p className="svc-subheading">Discover our curated selection of wellness therapies</p>
        </div>
        <div className="svc-filter-wrap scrollbar-none" ref={filterWrapperRef}>
          <div className="svc-filter-pill" style={{ left: indStyle.left, width: indStyle.width }} />
          {FILTERS.map((f, i) => (
            <button
              key={f.key}
              ref={el => filterRefs.current[i] = el}
              className={`svc-filter-btn ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
              <span className="svc-filter-count">{counts[f.key]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ═══ Main Layout: Full Width Showcase TOP + Horizontal Scroll BOTTOM ═══ */}
      <div className="svc-main reveal">

        {/* TOP — Full Width Detail Display */}
        <div className="svc-display"
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
          onTouchStart={() => { isPaused.current = true; }}
          onTouchEnd={() => { isPaused.current = false; }}
        >
          {activeItem && (
            <div className="svc-showcase" key={detailKey}>
              <div className="svc-showcase-split">
                {/* Visual side */}
                <div className="svc-showcase-visual">
                  <div className="svc-showcase-gradient" style={{ background: activeItem.gradient }} />
                  <div className="svc-showcase-pattern" />
                  <div className="svc-showcase-icon-wrap">
                    <span className="svc-showcase-icon">{activeItem.icon}</span>
                  </div>
                  <div className="svc-showcase-price-badge">
                    <span className="svc-showcase-price-label">From</span>
                    <span className="svc-showcase-price-value">{activeItem.priceDisplay}</span>
                  </div>
                </div>

                {/* Content side */}
                <div className="svc-showcase-content">
                  <div className="svc-showcase-tags">
                    <span className="svc-tag svc-tag-category">{activeItem.type === 'package' ? '📦 Package' : activeItem.category.replace('_', ' ')}</span>
                    {activeItem.region && <span className="svc-tag svc-tag-region">📍 {activeItem.region}</span>}
                    {activeItem.badge && <span className="svc-tag svc-tag-badge">★ {activeItem.badge}</span>}
                  </div>
                  <h3 className="svc-showcase-title">{activeItem.title}</h3>
                  <p className="svc-showcase-desc">{activeItem.desc}</p>

                  {activeItem.type === 'package' && activeItem.services && (
                    <div className="svc-showcase-includes">
                      <span className="svc-showcase-includes-label">Included in this package:</span>
                      <div className="svc-showcase-includes-list">
                        {activeItem.services.map((srv, i) => (
                          <span key={i} className="svc-showcase-include-chip">✓ {srv}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="svc-showcase-footer">
                    <span className="svc-showcase-duration">⏱ {activeItem.durationDisplay}</span>
                    <a href="#book" className="svc-showcase-book magnetic-btn">Book This Treatment</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM — Horizontal Scrolling Tape */}
        <div className="svc-scroll-tape-wrap">
          <div className="svc-scroll-tape"
            ref={scrollRef}
            onMouseEnter={() => { isPaused.current = true; }}
            onMouseLeave={() => { isPaused.current = false; }}
            onTouchStart={() => { isPaused.current = true; }}
            onTouchEnd={() => { isPaused.current = false; }}
          >
            {/* Scanner Detector */}
            <div className="svc-scanner-horiz">
              <div className="svc-scanner-beam-horiz svc-scanner-beam-l" />
              <div className="svc-scanner-beam-horiz svc-scanner-beam-r" />
              <div className="svc-scanner-pulse-horiz" />
            </div>
            <div className="svc-scroll-fade-horiz svc-scroll-fade-l" />
            <div className="svc-scroll-fade-horiz svc-scroll-fade-r" />

            <div className="svc-scroll-track-horiz" ref={trackRef}>
              {doubled.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="svc-card"
                  data-sid={String(item.id)}
                  onClick={(e) => {
                    lastActiveId.current = String(item.id);
                    setActiveItem(item);
                    setDetailKey(k => k + 1);
                    const container = scrollRef.current;
                    if (container) {
                      const cRect = container.getBoundingClientRect();
                      const cardRect = e.currentTarget.getBoundingClientRect();
                      const offset = (cardRect.left + cardRect.width / 2) - (cRect.left + cRect.width / 2);
                      container.scrollBy({ left: offset, behavior: 'smooth' });
                    }
                  }}
                >
                  <div className="svc-card-icon" style={{ background: item.gradient }}>
                    <span>{item.icon}</span>
                  </div>
                  <div className="svc-card-info">
                    <span className="svc-card-cat">{item.type === 'package' ? '📦 PKG' : item.category.replace('_', ' ')}</span>
                    <h4 className="svc-card-name">{item.title}</h4>
                    <div className="svc-card-meta">
                      <span className="svc-card-price">{item.priceDisplay}</span>
                      <span className="svc-card-dur">{item.durationDisplay}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Packages guidance */}
      {filter === 'PACKAGE' && (
        <div className="svc-guidance reveal">
          <div className="svc-guidance-card">
            <h4>Not sure which package is right for you?</h4>
            <p>Our team can guide you based on your goals and assessment.</p>
            <a href="#book" className="svc-guidance-cta magnetic-btn">Get Guidance</a>
          </div>
        </div>
      )}
    </section>
  );
}
