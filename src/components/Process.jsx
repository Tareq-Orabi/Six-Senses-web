import { useEffect, useRef } from 'react';

const WHY_ITEMS = [
  {
    title: "Jordan's First Clinic",
    desc: "Jordan's first professional colon hydrotherapy clinic — setting the standard.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#c4786b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Private & Calming',
    desc: 'Completely private and calming treatment rooms designed for deep comfort.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#c4786b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Appointment-Only',
    desc: 'Exclusive appointment-only experience for absolute focus on your session.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#c4786b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Personalised',
    desc: "Customised wellness approach designed around your body's unique profile.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#c4786b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Professionally Trained',
    desc: 'A highly trained, certified professional team dedicated to your wellbeing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#c4786b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Support',
    desc: 'Continuous care and guidance before, during, and long after your session.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#c4786b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: 'Proven Track Record',
    desc: '10+ years of experience serving more than 12,000 satisfied clients.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#c4786b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
];

export default function Process() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    cardsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="bg-brown py-28 px-12 max-md:py-20 max-md:px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="process-inner max-w-[1200px] mx-auto relative z-10">
        <div className="process-header reveal mb-16">
          <div className="text-[0.58rem] font-bold tracking-[0.3em] uppercase text-rose flex items-center gap-[0.8rem] mb-4 after:content-[''] after:flex-1 after:max-w-[60px] after:h-[1px] after:bg-rose/40">Your Journey</div>
          <h2 className="font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-[1.1] text-cream [&_em]:italic [&_em]:not-italic [&_em]:text-rose">How it <em>works</em></h2>
        </div>
        <div className="relative">
          {/* Animated Progress Line */}
          <div className="absolute top-8 left-[12%] h-[1px] bg-gradient-to-r from-transparent via-rose/50 to-rose/50 z-0 max-lg:hidden progress-line-animated reveal w-0"></div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-0 max-lg:gap-10 relative z-10 reveal-stagger">
            <div className="step flex flex-col items-center text-center px-6 group">
              <div className="w-[64px] h-[64px] rounded-full border-[1.5px] border-white/10 bg-[#32221a] flex items-center justify-center font-serif italic text-[1.4rem] text-cream font-semibold mb-6 transition-all duration-300 shadow-[0_0_0_8px_rgba(61,42,32,1)] group-hover:bg-rose group-hover:border-rose group-hover:text-white step-ripple reveal">1</div>
              <div className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-cream mb-2.5">Intake & Assessment</div>
              <div className="text-[0.8rem] text-cream/60 leading-[1.7]">Complete your health intake form so our specialists can understand your needs and goals.</div>
            </div>
            <div className="step flex flex-col items-center text-center px-6 group">
              <div className="w-[64px] h-[64px] rounded-full border-[1.5px] border-white/10 bg-[#32221a] flex items-center justify-center font-serif italic text-[1.4rem] text-cream font-semibold mb-6 transition-all duration-300 shadow-[0_0_0_8px_rgba(61,42,32,1)] group-hover:bg-rose group-hover:border-rose group-hover:text-white step-ripple reveal" style={{ animationDelay: '0.2s' }}>2</div>
              <div className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-cream mb-2.5">Personalized Plan</div>
              <div className="text-[0.8rem] text-cream/60 leading-[1.7]">We recommend a tailored selection of treatments or a package aligned with your wellness goals.</div>
            </div>
            <div className="step flex flex-col items-center text-center px-6 group">
              <div className="w-[64px] h-[64px] rounded-full border-[1.5px] border-white/10 bg-[#32221a] flex items-center justify-center font-serif italic text-[1.4rem] text-cream font-semibold mb-6 transition-all duration-300 shadow-[0_0_0_8px_rgba(61,42,32,1)] group-hover:bg-rose group-hover:border-rose group-hover:text-white step-ripple reveal" style={{ animationDelay: '0.4s' }}>3</div>
              <div className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-cream mb-2.5">Your Sessions</div>
              <div className="text-[0.8rem] text-cream/60 leading-[1.7]">Experience your treatments in a calm, professional environment with full specialist support.</div>
            </div>
            <div className="step flex flex-col items-center text-center px-6 group">
              <div className="w-[64px] h-[64px] rounded-full border-[1.5px] border-white/10 bg-[#32221a] flex items-center justify-center font-serif italic text-[1.4rem] text-cream font-semibold mb-6 transition-all duration-300 shadow-[0_0_0_8px_rgba(61,42,32,1)] group-hover:bg-rose group-hover:border-rose group-hover:text-white step-ripple reveal" style={{ animationDelay: '0.6s' }}>4</div>
              <div className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-cream mb-2.5">Ongoing Wellness</div>
              <div className="text-[0.8rem] text-cream/60 leading-[1.7]">Follow up with progress tracking, dietary guidance, and ongoing support for lasting results.</div>
            </div>
          </div>
        </div>

        {/* Ornament divider */}
        <div className="flex items-center gap-[14px] my-20 reveal-scale">
          <div className="flex-1 h-px bg-white/5" />
          <div className="flex gap-[6px] items-center">
            <div className="w-[4px] h-[4px] rounded-full bg-rose/40" />
            <div className="w-[6px] h-[6px] rotate-45 bg-rose" />
            <div className="w-[4px] h-[4px] rounded-full bg-rose/40" />
          </div>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* ── Why Choose Us ── */}
        <div className="text-center mb-16 reveal">
          <span className="block text-[10px] font-bold tracking-[0.28em] uppercase mb-[14px] text-rose">
            Why Choose Us
          </span>
          <h3
            className="font-light leading-[1.2] font-serif text-[clamp(28px,3.5vw,40px)] text-cream"
          >
            Why clients choose Six Senses
          </h3>
          <p className="text-xs mt-2 font-light tracking-[0.06em] text-cream/60">
            A private, clinical experience tailored to your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[14px] max-xs:grid-cols-1">
          {WHY_ITEMS.map((item, i) => (
            <div
              key={i}
              ref={el => (cardsRef.current[i] = el)}
              className="bg-[#32221a] rounded-[20px] p-[22px] cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{
                border: '1px solid rgba(255,255,255,0.05)',
                opacity: 0,
                transform: 'translateY(16px)',
                transition: `opacity 0.5s ${0.05 * i}s, transform 0.5s ${0.05 * i}s, box-shadow 0.25s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.3)';
                e.currentTarget.style.borderColor = 'rgba(226,169,161,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              }}
            >
              <div
                className="w-[44px] h-[44px] rounded-[14px] flex items-center justify-center mb-4 bg-rose/10"
              >
                {item.icon}
              </div>
              <div className="text-[11px] font-bold uppercase tracking-[0.15em] mb-2 text-cream">
                {item.title}
              </div>
              <p className="text-[12.5px] leading-[1.65] font-light text-cream/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
