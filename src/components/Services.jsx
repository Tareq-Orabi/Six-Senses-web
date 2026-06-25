import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// ─── IMPORT IMAGES ───
// Your existing images
import colonImg from '../assets/colonImg.jpeg';
import massageImg from '../assets/massageImg.jpeg';
import redLightTherapyImg from '../assets/redLightTherapyImg.jpeg';
import sixSensesImg from '../assets/sixSensesImage.jpg';


// ─── SERVICE DATA WITH ALL IMAGES ASSIGNED ───
const SERVICE_DATA = {
  colon: {
    id: 23,
    category: "MEDICAL",
    title: 'Colon Hydrotherapy',
    region: 'Lower Abdomen · Gut',
    desc: 'Closed-system purification to optimize gut flora and enhance metabolic efficiency.',
    color: '#E2A9A1',
    priceDisplay: '75 JD',
    durationDisplay: '45 min',
    icon: '💧',
    gradient: 'linear-gradient(135deg, #FFB6B9 0%, #FAE3D9 50%, #BBDED6 100%)',
    img: colonImg
  },
  liver: {
    id: 25,
    category: "MEDICAL",
    title: 'Liver Cleansing',
    region: 'Upper Right Abdomen · Liver',
    desc: 'Targeted hepatic stimulation and detox support to enhance the liver\'s natural filtration capacity.',
    color: '#D28C78',
    priceDisplay: '50 JD',
    durationDisplay: '60 min',
    icon: '✦',
    gradient: 'linear-gradient(135deg, #FFD3B6 0%, #FF8C94 50%, #D28C78 100%)',
    img: liverImg
  },
  livercolon: {
    id: 24,
    category: "MEDICAL",
    title: 'Liver & Colon Hydrotherapy',
    region: 'Abdomen · Full Digestive',
    desc: 'A powerful synergistic detox protocol combining colon irrigation with liver stimulation for ultimate renewal.',
    color: '#B87864',
    priceDisplay: '100 JD',
    durationDisplay: '90 min',
    icon: '🔄',
    gradient: 'linear-gradient(135deg, #FFAAA5 0%, #FFD3B6 50%, #8B5E52 100%)',
    img: colonImg // Reuse colon image
  },
  ivdrip: {
    id: 22,
    category: "MEDICAL",
    title: 'IV Drip',
    region: 'Circulatory System · Intravenous',
    desc: 'Intravenous infusion of custom vitamins, minerals, and hydration directly into the bloodstream.',
    color: '#8B7D7B',
    priceDisplay: '250 JD',
    durationDisplay: '1 - 3 hours',
    icon: '💉',
    gradient: 'linear-gradient(135deg, #A8E6CF 0%, #DCEDC1 50%, #FFD3B6 100%)',
    img: ivDripImg
  },
  consultation: {
    id: 21,
    category: "MEDICAL",
    title: 'Consultation',
    region: 'Clinical Consultation',
    desc: 'Comprehensive clinical assessment with our specialists to design your personalized wellness protocol.',
    color: '#D2B48C',
    priceDisplay: '15 JD',
    durationDisplay: '30 min',
    icon: '📋',
    gradient: 'linear-gradient(135deg, #D2B48C 0%, #FFD3B6 50%, #FFAAA5 100%)',
    img: consultationImg
  },
  candida: {
    id: 26,
    category: "MEDICAL",
    title: 'Candida Enema',
    region: 'Lower Colon · Rectum',
    desc: 'Intestinal enema targeted at reducing yeast overgrowth, balancing gut microflora.',
    color: '#B8956A',
    priceDisplay: '25 JD',
    durationDisplay: '10 min',
    icon: '◎',
    gradient: 'linear-gradient(135deg, #FFE082 0%, #FFB6B9 50%, #8B7050 100%)',
    img: colonImg // Reuse colon image
  },
  parasite: {
    id: 27,
    category: "MEDICAL",
    title: 'Parasite Enema',
    region: 'Lower Colon · Rectum',
    desc: 'Specialized formulation designed to support the elimination of intestinal parasites.',
    color: '#B8956A',
    priceDisplay: '25 JD',
    durationDisplay: '10 min',
    icon: '◎',
    gradient: 'linear-gradient(135deg, #FFD3B6 0%, #FFAAA5 50%, #D28C78 100%)',
    img: colonImg // Reuse colon image
  },
  saline: {
    id: 28,
    category: "MEDICAL",
    title: 'Saline Enema',
    region: 'Lower Colon · Rectum',
    desc: 'Hydrating mineral enema to gently ease constipation and support electrolyte balance.',
    color: '#B8956A',
    priceDisplay: '25 JD',
    durationDisplay: '10 min',
    icon: '◎',
    gradient: 'linear-gradient(135deg, #DCEDC1 0%, #A8E6CF 50%, #8B7865 100%)',
    img: colonImg // Reuse colon image
  },
  oil: {
    id: 29,
    category: "MEDICAL",
    title: 'Oil Enema',
    region: 'Lower Colon · Rectum',
    desc: 'Lubricating organic herbal oil infusion to soothe dry intestinal walls and calm the nervous system.',
    color: '#B8956A',
    priceDisplay: '25 JD',
    durationDisplay: '10 min',
    icon: '◎',
    gradient: 'linear-gradient(135deg, #FAE3D9 0%, #FFB6B9 50%, #786050 100%)',
    img: oilMassageImg
  },
  probiotics: {
    id: 30,
    category: "MEDICAL",
    title: 'Probiotics Enema',
    region: 'Lower Colon · Rectum',
    desc: 'Direct implantation of concentrated beneficial bacteria to repopulate gut microbiome flora.',
    color: '#B8956A',
    priceDisplay: '25 JD',
    durationDisplay: '10 min',
    icon: '◎',
    gradient: 'linear-gradient(135deg, #BBDED6 0%, #8B5040 50%, #887058 100%)',
    img: probioticImg
  },
  lymphatic: {
    id: 11,
    category: "PHYSICAL_THERAPY",
    title: 'Lymphatic Massage',
    region: 'Lymphatic System · Full Body',
    desc: 'Gentle massage to relieve pain and swelling through targeted lymphatic drainage.',
    color: '#C4A882',
    priceDisplay: '40 JD',
    durationDisplay: '60 min',
    icon: '✧',
    gradient: 'linear-gradient(135deg, #D8C0A0 0%, #FFB6B9 50%, #8B7860 100%)',
    img: lymphaticImg
  },
  massage: {
    id: 12,
    category: "PHYSICAL_THERAPY",
    title: 'Medical Massage',
    region: 'Muscular System · Full Body',
    desc: 'Clinical deep tissue massage targeting muscle knots and chronic tension to relieve pain.',
    color: '#A08880',
    priceDisplay: '40 JD',
    durationDisplay: '60 min',
    icon: '〜',
    gradient: 'linear-gradient(135deg, #B8A098 0%, #FFAAA5 50%, #786860 100%)',
    img: massageImg
  },
  reflexology: {
    id: 13,
    category: "PHYSICAL_THERAPY",
    title: 'Reflexology Massage',
    region: 'Nervous System · Feet & Hands',
    desc: 'Targeted zone therapy on the feet and hands to restore balance and stimulate organ healing.',
    color: '#D2B48C',
    priceDisplay: '40 JD',
    durationDisplay: '60 min',
    icon: '👣',
    gradient: 'linear-gradient(135deg, #E0C8A8 0%, #D2B48C 50%, #A08868 100%)',
    img: reflexologyImg
  },
  relaxing: {
    id: 14,
    category: "PHYSICAL_THERAPY",
    title: 'Relaxing Massage',
    region: 'Nervous System · Full Body',
    desc: 'Soothe your nervous system, reduce cortisol levels, and restore inner peace.',
    color: '#E2A9A1',
    priceDisplay: '40 JD',
    durationDisplay: '60 min',
    icon: '🌸',
    gradient: 'linear-gradient(135deg, #F0C0B8 0%, #E2A9A1 50%, #C08878 100%)',
    img: relaxingImg
  },
  deeptissue: {
    id: 18,
    category: "PHYSICAL_THERAPY",
    title: 'Deep Tissue Massage',
    region: 'Muscular System · Deep Layers',
    desc: 'Firm pressure massage to relieve muscle pain and deep tension in skeletal muscle tissue.',
    color: '#8B7D7B',
    priceDisplay: '40 JD',
    durationDisplay: '60 min',
    icon: '✦',
    gradient: 'linear-gradient(135deg, #A89896 0%, #FFD3B6 50%, #685C5A 100%)',
    img: deepTissueImg
  },
  abdominal: {
    id: 15,
    category: "PHYSICAL_THERAPY",
    title: 'Abdominal Massage',
    region: 'Digestive System · Abdomen',
    desc: 'Gentle visceral manipulation to support digestion, reduce bloating, and release tension.',
    color: '#E2A9A1',
    priceDisplay: '25 JD',
    durationDisplay: '60 min',
    icon: '💆',
    gradient: 'linear-gradient(135deg, #F0B8B0 0%, #E2A9A1 50%, #B88078 100%)',
    img: abdominalImg
  },
  acupuncture: {
    id: 16,
    category: "WELLNESS",
    title: 'Acupuncture',
    region: 'Nervous System · Energy Pathways',
    desc: 'Traditional Chinese medicine inserting thin needles at meridian points to restore energy balance.',
    color: '#D2B48C',
    priceDisplay: '40 JD',
    durationDisplay: '60 min',
    icon: '◈',
    gradient: 'linear-gradient(135deg, #E0C8A8 0%, #D2B48C 50%, #A08868 100%)',
    img: acupunctureImg
  },
  cupping: {
    id: 17,
    category: "WELLNESS",
    title: 'Cupping Therapy',
    region: 'Circulatory System · Back & Shoulders',
    desc: 'Wet and dry cupping to create localized suction, increasing blood flow and reducing inflammation.',
    color: '#B87864',
    priceDisplay: '40 JD',
    durationDisplay: '60 min',
    icon: '◇',
    gradient: 'linear-gradient(135deg, #D09080 0%, #B87864 50%, #8B5848 100%)',
    img: cuppingImg
  },
  footdetox: {
    id: 19,
    category: "WELLNESS",
    title: 'Foot Detox',
    region: 'Excretory System · Feet',
    desc: 'Ionic foot detox utilizing electrolysis to encourage deep cellular purification through the feet.',
    color: '#D2B48C',
    priceDisplay: '20 JD',
    durationDisplay: '30 min',
    icon: '◉',
    gradient: 'linear-gradient(135deg, #E0C8A8 0%, #C4A078 50%, #907050 100%)',
    img: footDetoxImg
  },
  redlight: {
    id: 20,
    category: "WELLNESS",
    title: 'Red Light Therapy',
    region: 'Integumentary · Cellular Level',
    desc: 'Wavelengths of light penetrate deep into skin layers to stimulate ATP production and speed repair.',
    color: '#E2A9A1',
    priceDisplay: '25 JD',
    durationDisplay: '30 min',
    icon: '☀',
    gradient: 'linear-gradient(135deg, #F0B8B0 0%, #E2A9A1 50%, #C88878 100%)',
    img: redLightTherapyImg
  },
};

const PACKAGES = [
  { id: 101, title: 'Colon Cleansing – 3 Sessions', priceDisplay: '200 JD', durationDisplay: '3 Sessions', badge: 'Most Popular', icon: '✨', color: '#E2A9A1', gradient: 'linear-gradient(135deg, #FFB6B9 0%, #c4786b 50%, #8B5E52 100%)' },
  { id: 102, title: 'Colon Cleansing – 5 Sessions', priceDisplay: '300 JD', durationDisplay: '5 Sessions', badge: 'Best Value', icon: '💎', color: '#8B7050', gradient: 'linear-gradient(135deg, #A08868 0%, #FFD3B6 50%, #5C4033 100%)' },
  { id: 103, title: 'Colon Cleansing – 12 Sessions', priceDisplay: '600 JD', durationDisplay: '12 Sessions', badge: 'Signature Protocol', icon: '🔄', color: '#8B7D7B', gradient: 'linear-gradient(135deg, #A89896 0%, #BBDED6 50%, #5C5250 100%)' },
];

const allSessions = Object.values(SERVICE_DATA).map(s => ({ ...s, type: 'session' }));
const allPackages = PACKAGES.map(p => ({ ...p, type: 'package', category: 'PACKAGE' }));

const FILTERS = [
  { key: 'SERVICES', label: 'Services' },
  { key: 'PACKAGE', label: 'Packages' },
];

export default function Services() {
  const [filter, setFilter] = useState('SERVICES');
  const [activeItem, setActiveItem] = useState(null);

  const filterWrapperRef = useRef(null);
  const filterRefs = useRef([]);
  const [indStyle, setIndStyle] = useState({ left: 0, width: 0 });

  const items = useMemo(() => {
    if (filter === 'PACKAGE') return allPackages;
    return allSessions;
  }, [filter]);

  const counts = useMemo(() => ({
    SERVICES: allSessions.length,
    PACKAGE: allPackages.length,
  }), []);

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

  useEffect(() => {
    if (items.length > 0 && !activeItem) {
      setActiveItem(items[0]);
    }
  }, [items, activeItem]);

  const handleSelectItem = (item) => {
    setActiveItem(item);
  };

  const handleFilterChange = (key) => {
    setFilter(key);
    const newItems = key === 'PACKAGE' ? allPackages : allSessions;
    if (newItems.length > 0) {
      setActiveItem(newItems[0]);
    }
  };

  // Determine background image
  const getBackgroundImage = () => {
    if (filter === 'PACKAGE') {
      return sixSensesImg;
    }
    return activeItem?.img || null;
  };

  const bgImage = getBackgroundImage();

  const isActive = (item) => activeItem?.id === item.id;

  return (
    <section id="services" className="w-full bg-[#f5f3f0] py-16 md:py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">

        {/* ═══ HEADER ═══ */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#8B7050]/40" />
            <span className="text-[11px] font-semibold tracking-[3px] uppercase text-[#8B7050]">
              What We Offer
            </span>
            <span className="w-8 h-px bg-[#8B7050]/40" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1a1a1a] mb-4 tracking-tight">
            Our <em className="italic text-[#8B7050] font-medium">Services</em>
          </h2>
          <p className="text-base md:text-lg text-[#888] font-light max-w-md mx-auto">
            Curated wellness therapies designed for your transformation
          </p>

          {/* Filter Tabs */}
          <div
            className="inline-flex items-center gap-1 bg-white/80 backdrop-blur p-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] mt-8 relative border border-[#e8e4df]"
            ref={filterWrapperRef}
          >
            <div
              className="absolute top-1.5 bottom-1.5 rounded-full bg-[#8B7050] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ left: indStyle.left, width: indStyle.width }}
            />
            {FILTERS.map((f, i) => (
              <button
                key={f.key}
                ref={el => filterRefs.current[i] = el}
                className={`relative z-10 px-7 py-3 rounded-full text-[13px] font-semibold tracking-wide transition-colors duration-300 ${filter === f.key ? 'text-white' : 'text-[#777] hover:text-[#555]'
                  }`}
                onClick={() => handleFilterChange(f.key)}
              >
                {f.label}
                <span className={`inline-block ml-2 text-[10px] font-bold px-2.5 py-1 rounded-full ${filter === f.key ? 'bg-white/20 text-white' : 'bg-[#8B7050]/8 text-[#8B7050]'
                  }`}>
                  {counts[f.key]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ═══ MAIN LAYOUT: IMAGE LEFT (55%) + LIST RIGHT (45%) ═══ */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

          {/* LEFT — Clean Image Display (NO text overlay) */}
          <div className="w-full lg:w-[55%] xl:w-[52%]">
            <div className="lg:sticky lg:top-8">
              <div className="relative w-full h-[320px] md:h-[420px] lg:h-[640px] rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)]">

                {/* Background Image */}
                {bgImage ? (
                  <img
                    src={bgImage}
                    alt={activeItem?.title || 'Six Senses'}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                  />
                ) : (
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{ background: activeItem?.gradient || 'linear-gradient(135deg, #8B7050, #D2B48C)' }}
                  >
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                      backgroundSize: '40px 40px'
                    }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[140px] lg:text-[180px] opacity-15 select-none">{activeItem?.icon || '✨'}</span>
                    </div>
                  </div>
                )}

                {/* Subtle vignette for depth only */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  boxShadow: 'inset 0 0 120px rgba(0,0,0,0.12)'
                }} />
              </div>
            </div>
          </div>

          {/* RIGHT — Services List with EXPANDABLE Details (SLIDE DOWN) */}
          <div className="w-full lg:w-[45%] xl:w-[48%]">
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`w-full rounded-2xl transition-all duration-500 overflow-hidden ${isActive(item)
                    ? 'bg-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] ring-1'
                    : 'bg-white/50 hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)]'
                    }`}
                  style={{
                    ringColor: isActive(item) ? item.color : 'transparent'
                  }}
                >
                  {/* Collapsed Header — Always Visible */}
                  <button
                    onClick={() => handleSelectItem(item)}
                    className="w-full text-left p-4 md:p-5 group relative"
                  >
                    {/* Active left accent */}
                    <div
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full transition-all duration-300"
                      style={{
                        background: item.color,
                        opacity: isActive(item) ? 1 : 0
                      }}
                    />

                    <div className="flex items-center gap-4 pl-2">
                      {/* Icon */}
                      <div
                        className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-lg md:text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                        style={{ background: item.gradient }}
                      >
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[9px] font-bold tracking-[1.5px] uppercase text-[#aaa]">
                            {item.type === 'package' ? 'Package' : item.category.replace('_', ' ')}
                          </span>
                          {item.badge && (
                            <span className="text-[8px] font-bold bg-[#1a1a1a] text-white px-1.5 py-0.5 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <h4 className="text-[14px] md:text-[15px] font-semibold text-[#1a1a1a] truncate mb-0.5">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[13px]">
                          <span className="font-bold" style={{ color: item.color }}>
                            {item.priceDisplay}
                          </span>
                          <span className="text-[#ccc]">·</span>
                          <span className="text-[#999] text-xs">{item.durationDisplay}</span>
                        </div>
                      </div>

                      {/* Expand/Collapse Arrow */}
                      <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isActive(item) ? 'bg-[#1a1a1a] text-white rotate-90' : 'bg-[#f0ede8] text-[#bbb] group-hover:bg-[#e8e4df]'
                        }`}>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* ═══ EXPANDED DETAILS — SLIDES DOWN ═══ */}
                  <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive(item) ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}>
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-7 pb-5 md:pb-6 pt-1">

                        {/* Divider */}
                        <div className="flex items-center gap-3 mb-5">
                          <div className="h-px flex-1 bg-[#e8e4df]" />
                          <span className="text-lg opacity-30">{item.icon}</span>
                          <div className="h-px flex-1 bg-[#e8e4df]" />
                        </div>

                        {/* Region */}
                        {item.region && (
                          <div className="flex items-center gap-2 text-[13px] text-[#666] font-medium mb-4">
                            <svg className="w-3.5 h-3.5 text-[#8B7050]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {item.region}
                          </div>
                        )}

                        {/* Description */}
                        <p className="text-[14px] leading-[1.75] text-[#555] mb-6">
                          {item.desc}
                        </p>

                        {/* Price & Duration Row */}
                        <div className="flex items-center gap-6 mb-6 p-4 rounded-xl bg-[#faf9f7]">
                          <div className="flex-1">
                            <span className="block text-[9px] font-bold tracking-[2px] uppercase text-[#aaa] mb-1">Price</span>
                            <span className="text-xl font-bold text-[#1a1a1a]">{item.priceDisplay}</span>
                          </div>
                          <div className="w-px h-10 bg-[#e0dbd4]" />
                          <div className="flex-1">
                            <span className="block text-[9px] font-bold tracking-[2px] uppercase text-[#aaa] mb-1">Duration</span>
                            <span className="text-xl font-bold text-[#1a1a1a]">{item.durationDisplay}</span>
                          </div>
                        </div>

                        {/* Book Button */}
                        <a
                          href="#book"
                          className="group inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#1a1a1a] text-white rounded-xl text-[13px] font-semibold tracking-wide hover:bg-[#8B7050] transition-all duration-400 shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
                        >
                          Book This Treatment
                          <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packages guidance */}
        {filter === 'PACKAGE' && (
          <div className="mt-14 text-center">
            <div className="inline-block bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] max-w-lg border border-[#e8e4df]">
              <h4 className="font-serif text-2xl font-semibold text-[#1a1a1a] mb-3">
                Not sure which package is right?
              </h4>
              <p className="text-[15px] text-[#777] mb-6 leading-relaxed">
                Our specialists will assess your goals and recommend the perfect protocol.
              </p>
              <a
                href="#book"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1a1a1a] text-white rounded-full text-sm font-semibold hover:bg-[#8B7050] transition-all duration-300"
              >
                Get Guidance
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </section>
  );
}