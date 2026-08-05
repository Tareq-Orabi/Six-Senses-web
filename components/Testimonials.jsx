export default function Testimonials() {
  const list1 = [
    {
      initials: 'SA',
      name: 'Sarah A.',
      quote: 'I came to Six Senses feeling constantly bloated and uncomfortable. The team made me feel at ease, and I left feeling lighter, refreshed, and more motivated to take care of my health.',
    },
    {
      initials: 'AK',
      name: 'Ahmad K.',
      quote: 'The clinic is beautiful, private, and extremely professional. From the first consultation to the follow-up, everything was organized and welcoming.',
    },
    {
      initials: 'NH',
      name: 'Noor H.',
      quote: 'What I appreciated most was the personalized approach. I felt heard, understood, and supported throughout my wellness journey.',
    },
    {
      initials: 'MR',
      name: 'Mohammed R.',
      quote: 'I was nervous before my first session, but the staff explained everything clearly. The experience was much easier and more comfortable than I expected.',
    },
    {
      initials: 'RS',
      name: 'Rania S.',
      quote: 'The atmosphere at Six Senses is unlike any clinic I have visited. It feels calm, peaceful, and focused on overall wellbeing.',
    },
  ];

  const list2 = [
    {
      initials: 'OA',
      name: 'Omar A.',
      quote: 'The team genuinely cares about their clients. They took the time to answer all my questions and provide recommendations that fit my lifestyle.',
    },
    {
      initials: 'DM',
      name: 'Dana M.',
      quote: 'After completing my program, I felt more confident about my health and developed healthier daily habits that I continue to follow.',
    },
    {
      initials: 'KN',
      name: 'Khaled N.',
      quote: 'The professionalism and attention to detail impressed me from day one. Every visit felt organized, private, and comfortable.',
    },
    {
      initials: 'LT',
      name: 'Leen T.',
      quote: 'I loved that the recommendations were tailored specifically to me. It didn’t feel like a one-size-fits-all experience.',
    },
    {
      initials: 'EJ',
      name: 'Eric J.',
      quote: 'From the moment I walked in, I felt welcomed. The team was knowledgeable, supportive, and committed to helping me achieve my wellness goals.',
    },
  ];

  // Helper to duplicate array for infinite looping marquee
  const marqueeList1 = [...list1, ...list1];
  const marqueeList2 = [...list2, ...list2];

  return (
    <section
      id="testimonials"
      className="py-28 bg-[#faf8f5] relative overflow-hidden border-t"
      style={{ borderColor: 'rgba(61,42,32,0.06)' }}
    >
      {/* Background Decorative Blur Orbs */}
      <div
        className="absolute pointer-events-none rounded-full animate-float1"
        style={{
          width: 500,
          height: 500,
          top: -200,
          left: '15%',
          background: 'radial-gradient(circle, rgba(226,169,161,0.08) 0%, transparent 70%)',
          filter: 'blur(55px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-12 max-md:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-[750px] mx-auto mb-20 reveal">
          <span className="inline-block px-4 py-1.5 bg-rose/10 text-rose border border-rose/20 rounded-full text-[9px] font-bold tracking-[0.28em] uppercase mb-5">
            Client Experiences
          </span>
          <h2
            className="font-light leading-[1.2] mb-6 text-brown"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(32px, 4.5vw, 48px)',
            }}
          >
            Real Stories of<br />
            <span className="font-serif italic font-light text-rose block mt-1">
              Healing & Renewal
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-rose/40 mx-auto my-6"></div>
          <p className="text-[15px] leading-[1.8] text-taupe font-light max-w-[600px] mx-auto">
            Discover what our clients experience during their journeys at Six Senses, and how professional care has helped restore their wellbeing.
          </p>
        </div>
      </div>

      {/* Testimonials Marquee Track Containers */}
      <div className="flex flex-col gap-8 w-full relative">
        
        {/* Fading side mask gradients overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 md:before:w-48 before:bg-gradient-to-r before:from-[#faf8f5] before:to-transparent after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 md:after:w-48 after:bg-gradient-to-l after:from-[#faf8f5] after:to-transparent" />

        {/* First Row (Scrolls Left) */}
        <div className="overflow-hidden flex w-full">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-2">
            {marqueeList1.map((item, idx) => (
              <div
                key={idx}
                className="group w-[380px] max-md:w-[310px] flex-shrink-0 mx-4 bg-white/70 backdrop-blur-md rounded-[28px] p-8 border border-brown/5 hover:border-rose/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(61,42,32,0.06)]"
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-rose/10 border border-rose/20 text-rose flex items-center justify-center font-sans text-xs font-semibold">
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-brown">
                        {item.name}
                      </h4>
                      <p className="text-[10px] tracking-wider uppercase text-taupe">
                        Verified Client
                      </p>
                    </div>
                  </div>
                  <span className="font-serif text-rose/30 text-5xl leading-[0.5] select-none">“</span>
                </div>

                <p className="text-[13.5px] leading-[1.7] text-taupe font-light italic">
                  {item.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row (Scrolls Right) */}
        <div className="overflow-hidden flex w-full">
          <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] py-2">
            {marqueeList2.map((item, idx) => (
              <div
                key={idx}
                className="group w-[380px] max-md:w-[310px] flex-shrink-0 mx-4 bg-white/70 backdrop-blur-md rounded-[28px] p-8 border border-brown/5 hover:border-rose/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(61,42,32,0.06)]"
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-rose/10 border border-rose/20 text-rose flex items-center justify-center font-sans text-xs font-semibold">
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-brown">
                        {item.name}
                      </h4>
                      <p className="text-[10px] tracking-wider uppercase text-taupe">
                        Verified Client
                      </p>
                    </div>
                  </div>
                  <span className="font-serif text-rose/30 text-5xl leading-[0.5] select-none">“</span>
                </div>

                <p className="text-[13.5px] leading-[1.7] text-taupe font-light italic">
                  {item.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
