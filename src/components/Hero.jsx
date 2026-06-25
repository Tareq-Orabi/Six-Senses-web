import { useState, useEffect, useRef } from 'react';
import sixSensesVideo from '../assets/sixSensesVideo.MOV';

/* ── Floating Particles Component ── */
function FloatingParticles() {
  const particles = [
    { size: 4, x: '12%', y: '25%', dur: '8s', delay: '0s', anim: 'particleDrift1' },
    { size: 3, x: '78%', y: '18%', dur: '10s', delay: '2s', anim: 'particleDrift2' },
    { size: 5, x: '88%', y: '60%', dur: '9s', delay: '1s', anim: 'particleDrift3' },
    { size: 3, x: '22%', y: '72%', dur: '11s', delay: '3s', anim: 'particleDrift1' },
    { size: 4, x: '55%', y: '85%', dur: '7s', delay: '4s', anim: 'particleDrift2' },
    { size: 2, x: '40%', y: '10%', dur: '12s', delay: '1.5s', anim: 'particleDrift3' },
    { size: 3, x: '65%', y: '45%', dur: '9s', delay: '2.5s', anim: 'particleDrift1' },
    { size: 2, x: '5%', y: '55%', dur: '10s', delay: '0.5s', anim: 'particleDrift2' },
  ];

  return (
    <>
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            background: i % 2 === 0
              ? 'rgba(226,169,161,0.5)'
              : 'rgba(210,180,140,0.4)',
            boxShadow: `0 0 ${p.size * 2}px rgba(226,169,161,0.3)`,
            animation: `${p.anim} ${p.dur} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}
    </>
  );
}

/* ── Split Text Animation Component ── */
function SplitText({ children, className = '', style = {} }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const words = containerRef.current?.querySelectorAll('.split-word');
          words?.forEach((w, i) => {
            setTimeout(() => w.classList.add('visible'), i * 120);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Process children to split into words
  const renderWords = (content, keyPrefix = '') => {
    if (typeof content === 'string') {
      return content.split(' ').map((word, i) => (
        <span key={`${keyPrefix}${i}`} className="split-word">
          {word}&nbsp;
        </span>
      ));
    }
    // Handle JSX children (like <em>, <br/>, etc.)
    if (Array.isArray(content)) {
      return content.map((child, i) => renderWords(child, `${keyPrefix}${i}-`));
    }
    if (content?.type === 'br') {
      return <br key={`${keyPrefix}br`} />;
    }
    if (content?.props?.children) {
      const Tag = content.type;
      return (
        <Tag key={`${keyPrefix}tag`} {...content.props}>
          {renderWords(content.props.children, `${keyPrefix}inner-`)}
        </Tag>
      );
    }
    return content;
  };

  return (
    <div ref={containerRef} className={className} style={{ ...style, perspective: '600px' }}>
      {renderWords(children)}
    </div>
  );
}

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center px-12 pt-32 pb-20 max-md:pt-28 max-md:px-6 max-md:pb-16"
      id="home"
      style={{ background: '#faf8f5' }}
    >
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Ambient Orbs with Parallax */}
      <div
        className="absolute pointer-events-none rounded-full"
        data-parallax="-0.08"
        style={{ width: 600, height: 600, top: -160, right: -80, background: 'radial-gradient(circle, rgba(209,155,139,0.18) 0%, transparent 70%)', filter: 'blur(70px)' }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        data-parallax="0.06"
        style={{ width: 340, height: 340, bottom: -80, left: 0, background: 'radial-gradient(circle, rgba(193,165,130,0.14) 0%, transparent 70%)', filter: 'blur(55px)' }}
      />
      {/* Extra orb for more depth */}
      <div
        className="absolute pointer-events-none rounded-full"
        data-parallax="-0.12"
        style={{ width: 200, height: 200, top: '40%', left: '30%', background: 'radial-gradient(circle, rgba(226,169,161,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1200px] mx-auto w-full">

        {/* ── Left Column ── */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-7 reveal" style={{ transitionDelay: '0.1s' }}>
            <span className="block w-8 h-px" style={{ background: '#c4786b' }} />
            <span className="text-[10px] font-semibold tracking-[0.28em] uppercase" style={{ color: '#c4786b' }}>
              Colon Cleansing & Wellness Clinic
            </span>
          </div>

          {/* Headline — Split Text Animation */}
          <SplitText
            className="font-light leading-[0.92] mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(52px, 7vw, 80px)',
              color: '#3d2a20',
              letterSpacing: '-0.01em',
            }}
          >
            {['Feel Lighter.', <br key="br1" />, <em key="em1" className="italic block" style={{ color: '#c4786b' }}>Healthier.</em>, 'Rebalanced.']}
          </SplitText>

          {/* Ornament Divider */}
          <div className="flex items-center gap-3 my-5 reveal" style={{ transitionDelay: '0.6s' }}>
            <div className="flex-1 h-px" style={{ background: 'rgba(61,42,32,0.1)' }} />
            <div className="w-[5px] h-[5px] rotate-45 shrink-0" style={{ background: '#c4786b' }} />
            <div className="flex-1 h-px" style={{ background: 'rgba(61,42,32,0.1)' }} />
          </div>

          {/* Description */}
          <p className="text-[14.5px] leading-[1.85] max-w-[420px] mb-9 reveal" style={{ color: '#7a6258', transitionDelay: '0.7s' }}>
            Jordan's first professional colon hydrotherapy and wellness clinic, offering personalized programs to support digestion, detoxification, energy,
            and overall wellbeing.
          </p>

          {/* CTAs — Magnetic buttons */}
          <div className="flex items-center gap-5 flex-wrap reveal" style={{ transitionDelay: '0.9s' }}>
            <a
              href="#book"
              className="magnetic-btn py-[14px] px-8 rounded-full no-underline text-[10px] font-semibold tracking-[0.22em] uppercase text-white transition-all duration-300 breathe-glow"
              style={{
                background: '#3d2a20',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#c4786b';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#3d2a20';
              }}
            >
              Book a Session
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-[10px] text-[10px] font-semibold tracking-[0.22em] uppercase no-underline transition-colors duration-200 group"
              style={{ color: '#3d2a20' }}
              onMouseEnter={e => e.currentTarget.style.color = '#c4786b'}
              onMouseLeave={e => e.currentTarget.style.color = '#3d2a20'}
            >
              Explore Services
              <span
                className="w-[34px] h-[34px] rounded-full border-[1.5px] flex items-center justify-center text-[14px] transition-all duration-200 group-hover:text-white group-hover:bg-[#c4786b] group-hover:border-[#c4786b]"
                style={{ borderColor: '#c9b8ae' }}
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* ── Right Column ── */}
        <div className="flex flex-col gap-[18px]">

          {/* Video Card — Cinematic entrance */}
          <div
            className="relative rounded-[22px] overflow-hidden aspect-[4/3] w-full group reveal-rotate"
            style={{
              border: '1px solid rgba(61,42,32,0.08)',
              boxShadow: '0 24px 60px rgba(73, 42, 21, 0.62), 0 2px 8px rgba(61,42,32,0.06)',
            }}
          >
            {/* Wellness Tour Badge */}
            <div
              className="absolute top-4 left-4 z-20 flex items-center gap-[7px] rounded-full py-[6px] px-[14px]"
              style={{
                background: 'rgba(250,248,245,0.88)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(61,42,32,0.06)',
              }}
            >
              <span
                className="w-[7px] h-[7px] rounded-full shrink-0"
                style={{
                  background: '#c4786b',
                  boxShadow: '0 0 0 2.5px rgba(196,120,107,0.25)',
                  animation: 'pulse 2s infinite',
                }}
              />
              <span className="text-[9.5px] font-bold tracking-[0.2em] uppercase" style={{ color: '#3d2a20' }}>
                Six Senses Tour
              </span>
            </div>

            {/* Play Button Overlay */}
            <button
              onClick={() => setIsVideoOpen(true)}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 hover:bg-black/40 transition-colors duration-300 cursor-pointer z-10 group"
              aria-label="Play full video"
            >
              <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-[#3d2a20] shadow-lg transform transition-transform duration-300 group-hover:scale-110 hover:bg-[#c4786b] hover:text-white">
                <svg className="w-6 h-6 fill-current translate-x-0.65" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="mt-3 text-[10px] font-bold tracking-[0.24em] uppercase text-white drop-shadow-md">
                Watch Full Tour
              </span>
            </button>

            {/* Preview Video */}
            <video
              src={sixSensesVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stats Row — Counter Animation */}
          <div className="grid grid-cols-3 gap-[10px] reveal-stagger">
            {[
              { target: 12000, suffix: '+', label: 'Happy Clients' },
              { target: 20, suffix: '+', label: 'Up to 20 services' },
              { target: 100, suffix: '%', label: 'Natural\nApproach' },
            ].map(({ target, suffix, label }) => (
              <div
                key={target}
                className="flex items-center gap-3 rounded-2xl py-4 px-[18px] transition-all duration-300 cursor-default group hover:-translate-y-1"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(61,42,32,0.07)',
                  boxShadow: '0 2px 12px rgba(61,42,32,0.05)',
                }}
              >
                <div className="w-2 h-2 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-150" style={{ background: '#c4786b' }} />
                <div>
                  <div
                    className="leading-none mb-[3px] counter-number"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 26,
                      color: '#3d2a20',
                    }}
                    data-count-to={target}
                    data-count-suffix={suffix}
                  >
                    0{suffix}
                  </div>
                  <div
                    className="text-[8.5px] font-bold tracking-[0.2em] uppercase leading-[1.4] whitespace-pre-line"
                    style={{ color: '#9a7f74' }}
                  >
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300 animate-fade-in">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#c4786b] text-3xl font-light cursor-pointer z-[310] transition-colors p-2"
            aria-label="Close video"
          >
            ✕
          </button>
          <div className="absolute inset-0 z-0" onClick={() => setIsVideoOpen(false)}></div>
          <div className="relative z-10 w-full max-w-[1000px] aspect-video p-4">
            <video
              src={sixSensesVideo}
              autoPlay
              controls
              playsInline
              className="w-full h-full object-contain rounded-2xl shadow-2xl bg-black"
            />
          </div>
        </div>
      )}

      {/* Pulse keyframe & Fade In */}
      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 2px rgba(196,120,107,0.3); }
          50%       { box-shadow: 0 0 0 5px rgba(196,120,107,0.1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}