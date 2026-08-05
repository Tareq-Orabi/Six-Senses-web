export default function Introduction() {
  const symptoms = [
    { icon: '🫁', label: 'Bloated or gassy', bg: 'rgba(196,120,107,0.1)' },
    { icon: '🪨', label: 'Heavy & constipated', bg: 'rgba(180,140,100,0.1)' },
    { icon: '🔋', label: 'Low energy & fatigue', bg: 'rgba(196,120,107,0.1)' },
    { icon: '🌫️', label: 'Brain fog & sluggishness', bg: 'rgba(150,120,180,0.1)' },
    { icon: '💫', label: 'Disconnected from body', bg: 'rgba(120,160,140,0.1)' },
  ]

  return (
    <section
      className="relative overflow-hidden py-20 px-12 max-md:py-14 max-md:px-6 border-t"
      style={{ background: '#faf8f5', borderColor: 'rgba(61,42,32,0.07)' }}
    >
      {/* ambient orb */}
      <div className="absolute pointer-events-none rounded-full"
        style={{
          width: 500, height: 500, top: '50%', left: -120, transform: 'translateY(-50%)',
          background: 'radial-gradient(circle,rgba(210,180,140,0.09) 0%,transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-[1100px] mx-auto">

        {/* ── LEFT: copy ── */}
        <div style={{ animation: 'fadeLeft .9s cubic-bezier(.16,1,.3,1) .1s both' }}>

          {/* eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1.5px] rounded-sm" style={{ background: '#c4786b' }} />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: '#c4786b' }}>
              Wellness Check-In
            </span>
          </div>

          {/* headline */}
          <h2
            className="font-light leading-[1.08] mb-7"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(40px, 5vw, 62px)',
              color: '#3d2a20',
              letterSpacing: '-0.01em',
            }}
          >
            Are you<br />
            feeling <em className="italic" style={{ color: '#c4786b' }}>tired,</em><br />
            <em className="italic" style={{ color: '#c4786b' }}>heavy</em> or<br />
            <em className="italic" style={{ color: '#c4786b' }}>bloated?</em>
          </h2>

          {/* body */}
          <p className="text-[15px] leading-[1.85] mb-9 font-light max-w-[420px]" style={{ color: '#7a6258' }}>
            Many clients come to us feeling disconnected from their body — low in energy, constipated,
            sluggish, or simply not themselves. We help you reset gently through professional colon
            hydrotherapy, wellness therapies, and personalised one-on-one support.
          </p>

          {/* signature */}
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: 'linear-gradient(135deg,#c4786b,#8a4030)',
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 20, fontStyle: 'italic', color: '#fff', fontWeight: 400,
              }}
            >
              L
            </div>
            <div>
              <div className="text-[13px] font-semibold" style={{ color: '#3d2a20', letterSpacing: '0.04em' }}>Lina</div>
              <div className="text-[10px] tracking-[0.16em] uppercase mt-[3px]" style={{ color: '#9a7f74' }}>
                Owner & Colon Cleansing Specialist
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: interactive card ── */}
        <div
          className="relative flex items-center justify-center"
          style={{ height: 520, animation: 'fadeUp .9s cubic-bezier(.16,1,.3,1) .25s both' }}
        >
          {/* floating orb bg */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 380, height: 380,
              background: 'radial-gradient(circle at 40% 40%, rgba(196,120,107,0.12), rgba(196,120,107,0.02) 70%)',
              animation: 'floatOrb 8s ease-in-out infinite',
            }}
          />

          {/* stacked cards */}
          <div
            className="absolute w-full max-w-[360px] rounded-[28px]"
            style={{ top: 28, left: 22, right: 22, height: '90%', background: '#fff', border: '1px solid rgba(61,42,32,0.03)', opacity: 0.35 }}
          />
          <div
            className="absolute w-full max-w-[360px] rounded-[28px]"
            style={{ top: 16, left: 12, right: 12, height: '95%', background: '#fff', border: '1px solid rgba(61,42,32,0.05)', opacity: 0.6 }}
          />

          {/* main card */}
          <div
            className="relative w-full max-w-[360px] rounded-[28px] p-9 z-10"
            style={{
              background: '#fff',
              border: '1px solid rgba(61,42,32,0.08)',
              animation: 'breathe 4s ease-in-out 1s infinite',
            }}
          >
            {/* tag */}
            <div className="inline-flex items-center gap-[7px] rounded-full px-[14px] py-[6px] mb-5"
              style={{ background: 'rgba(196,120,107,0.1)' }}>
              <span className="w-[6px] h-[6px] rounded-full" style={{ background: '#c4786b', animation: 'dotPop 2s ease-in-out infinite' }} />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: '#8a4030' }}>
                How are you feeling today?
              </span>
            </div>

            {/* symptom items */}
            <div className="flex flex-col gap-[10px] mb-6">
              {symptoms.map(({ icon, label, bg }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-[14px] cursor-default group transition-all duration-200"
                  style={{
                    border: '1px solid rgba(61,42,32,0.06)',
                    background: '#faf8f5',
                    animation: `counterIn .5s ${0.4 + i * 0.1}s both`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#fff'
                    e.currentTarget.style.borderColor = 'rgba(196,120,107,0.3)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(61,42,32,0.06)'
                    e.currentTarget.querySelector('.chk').style.background = '#c4786b'
                    e.currentTarget.querySelector('.chk').style.borderColor = '#c4786b'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#faf8f5'
                    e.currentTarget.style.borderColor = 'rgba(61,42,32,0.06)'
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.querySelector('.chk').style.background = 'transparent'
                    e.currentTarget.querySelector('.chk').style.borderColor = 'rgba(61,42,32,0.12)'
                  }}
                >
                  <div className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-base shrink-0" style={{ background: bg }}>
                    {icon}
                  </div>
                  <span className="flex-1 text-[13px] font-medium" style={{ color: '#3d2a20' }}>{label}</span>
                  <div
                    className="chk w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 text-white text-[10px] font-bold"
                    style={{ border: '1.5px solid rgba(61,42,32,0.12)' }}
                  >
                    ✓
                  </div>
                </div>
              ))}
            </div>

            {/* footer */}
            <div
              className="flex items-center justify-between pt-5"
              style={{ borderTop: '1px solid rgba(61,42,32,0.07)' }}
            >
              <a
                href="#book"
                className="rounded-full px-[22px] py-[10px] text-[10px] font-bold tracking-[0.2em] uppercase text-white no-underline transition-all duration-200"
                style={{ background: '#3d2a20' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#c4786b'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#3d2a20'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Book a session
              </a>
              <span className="text-[11px] italic" style={{ color: '#9a7f74' }}>Private & appointment-only</span>
            </div>
          </div>

          {/* floating badge top-right */}
          <div
            className="absolute flex items-center gap-[10px] bg-white rounded-[16px] px-4 py-3 z-20"
            style={{
              top: 20, right: -20,
              border: '1px solid rgba(61,42,32,0.08)',
              boxShadow: '0 8px 24px rgba(61,42,32,0.08)',
              animation: 'fadeUp .7s .6s both',
            }}
          >
            <div className="w-8 h-8 rounded-[10px] flex items-center justify-center" style={{ background: 'rgba(196,120,107,0.1)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c4786b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <div className="text-base font-bold leading-none" style={{ color: '#3d2a20' }}>100%</div>
              <div className="text-[10px] tracking-[0.1em] mt-[2px]" style={{ color: '#9a7f74' }}>Natural & safe</div>
            </div>
          </div>

          {/* floating badge bottom-left */}
          <div
            className="absolute flex items-center gap-[10px] bg-white rounded-[16px] px-4 py-3 z-20"
            style={{
              bottom: 60, left: -24,
              border: '1px solid rgba(61,42,32,0.08)',
              boxShadow: '0 8px 24px rgba(61,42,32,0.08)',
              animation: 'fadeUp .7s .8s both',
            }}
          >
            <div className="w-8 h-8 rounded-[10px] flex items-center justify-center" style={{ background: 'rgba(61,42,32,0.06)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3d2a20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <div>
              <div className="text-base font-bold leading-none" style={{ color: '#3d2a20' }}>Jordan's #1</div>
              <div className="text-[10px] tracking-[0.1em] mt-[2px]" style={{ color: '#9a7f74' }}>Colon hydrotherapy</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp     { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeLeft   { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:translateX(0)} }
        @keyframes breathe    { 0%,100%{transform:scale(1)} 50%{transform:scale(1.012)} }
        @keyframes floatOrb   { 0%,100%{transform:translate(0,0)} 33%{transform:translate(12px,-18px)} 66%{transform:translate(-8px,10px)} }
        @keyframes dotPop     { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1)} }
        @keyframes counterIn  { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  )
}