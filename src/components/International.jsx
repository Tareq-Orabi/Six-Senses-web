export default function International() {

  const programs = [
    {
      num: '01',
      title: '3-Day Reset',
      desc: 'A simple digestive and wellness reset designed to clear bloating and kickstart healthy digestion during short visits.',
    },
    {
      num: '02',
      title: '5-Day Rebalance',
      desc: 'A deeper program for digestion, energy levels, and comprehensive nutrition support to realign your body.',
    },
    {
      num: '03',
      title: 'Wellness Intensive',
      desc: 'A fully customized experience based on your specific health goals, tailored dynamically around your stay in Jordan.',
    },
  ];

  return (
    <section
      id="international"
      className="py-28 px-12 max-md:py-20 max-md:px-6 relative overflow-hidden border-t"
      style={{
        background: 'linear-gradient(180deg, #faf8f5 0%, #FDFBF7 100%)',
        borderColor: 'rgba(61,42,32,0.06)',
      }}
    >
      {/* Decorative Blur Orbs */}
      <div
        className="absolute pointer-events-none rounded-full animate-float1"
        style={{
          width: 500,
          height: 500,
          top: -150,
          right: -100,
          background: 'radial-gradient(circle, rgba(226,169,161,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full animate-float2"
        style={{
          width: 400,
          height: 400,
          bottom: -100,
          left: -100,
          background: 'radial-gradient(circle, rgba(210,180,140,0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-[1100px] mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-[750px] mx-auto mb-20 reveal">
          <span className="inline-block px-4 py-1.5 bg-rose/10 text-rose border border-rose/20 rounded-full text-[9px] font-bold tracking-[0.28em] uppercase mb-5">
            International Visitors
          </span>
          <h2
            className="font-light leading-[1.2] mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              color: '#3d2a20',
            }}
          >
            Visiting Jordan?<br />
            <span className="font-serif italic font-light text-rose block mt-1">
              Make wellness part of your trip.
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-rose/40 mx-auto my-6"></div>
          <p className="text-[15px] leading-[1.8] text-taupe font-light max-w-[600px] mx-auto">
            For clients visiting from abroad, we offer short wellness intensive programs designed around your stay in Jordan.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {programs.map((prog, i) => (
            <div
              key={i}
              className="group bg-white/80 backdrop-blur-md rounded-[28px] p-8 lg:p-10 cursor-default border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(61,42,32,0.08)] hover:border-rose/30 reveal"
              style={{
                borderColor: 'rgba(61,42,32,0.06)',
              }}
            >
              {/* Number overlay */}
              <div
                className="font-serif italic text-6xl font-medium opacity-10 leading-none mb-4 transition-all duration-500 group-hover:text-rose group-hover:opacity-20 select-none"
                style={{ color: '#c4786b' }}
              >
                {prog.num}
              </div>
              <h3
                className="font-serif text-2xl font-light text-brown mb-3 group-hover:text-[#c4786b] transition-colors duration-300"
                style={{ color: '#3d2a20' }}
              >
                {prog.title}
              </h3>
              
              {/* Decorative line under title */}
              <div className="w-8 h-[2px] bg-rose/25 my-4 group-hover:w-16 transition-all duration-500 ease-out"></div>
              
              <p className="text-[14px] leading-[1.7] text-taupe font-light">
                {prog.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center reveal">
          <a
            href="#book"
            className="inline-block py-4 px-10 rounded-full no-underline text-[10px] font-bold tracking-[0.25em] uppercase text-white transition-all duration-300 shadow-[0_8px_30px_rgba(61,42,32,0.12)] hover:shadow-[0_12px_36px_rgba(196,120,107,0.28)] hover:-translate-y-0.5"
            style={{
              background: '#3d2a20',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#c4786b';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#3d2a20';
            }}
          >
            Plan My Wellness Visit
          </a>
        </div>

      </div>
    </section>
  );
}

