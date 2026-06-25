
import wallImg from '../assets/wallImg.jpeg';

export default function CenterSetup() {
  const helpItems = [
    'Business planning and setup guidance',
    'Clinic design and workflow recommendations',
    'Equipment sourcing and installation',
    'Staff training and education',
    'Operational procedures and protocols',
    'Marketing and business development support',
    'Ongoing consultation and mentorship',
  ];

  const supportOptions = [
    {
      title: 'Consultation & Guidance',
      desc: 'For those who are exploring the idea and want expert advice before investing.',
    },
    {
      title: 'Equipment & Training',
      desc: 'Support with selecting the right equipment and training your team.',
    },
    {
      title: 'Complete Center Setup',
      desc: 'A step-by-step solution designed to help you launch efficiently and professionally.',
    },
    {
      title: 'Ongoing Business Support',
      desc: 'Continued guidance after opening to help you grow and operate successfully.',
    },
  ];

  const audiences = [
    'Doctors & healthcare professionals',
    'Wellness centers & clinics',
    'Spas & holistic health facilities',
    'Entrepreneurs in the wellness space',
    'Existing clinics looking to expand',
  ];

  return (
    <section id="setup" className="relative w-full bg-[#1A1A1A]">
      {/* STICKY BACKGROUND */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${wallImg})` }}
        />
        {/* Blending Gradients (Tan / Cream) */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FDFBF7] via-[#D2B48C]/1 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf8f5] via-[#D2B48C]/1 to-transparent pointer-events-none z-10" />

        {/* Decorative Orbs */}
        <div className="absolute pointer-events-none rounded-full animate-float2" style={{ width: 450, height: 450, top: '10%', left: -150, background: 'radial-gradient(circle, rgba(210,180,140,0.15) 0%, transparent 70%)', filter: 'blur(55px)' }} />
        <div className="absolute pointer-events-none rounded-full animate-float1" style={{ width: 550, height: 550, bottom: '10%', right: -150, background: 'radial-gradient(circle, rgba(226,169,161,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      {/* SCROLLING LEVELS */}
      <div className="relative z-10 -mt-[100vh] flex flex-col w-full">

        {/* LEVEL 1: Header */}
        <div className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="text-center max-w-[800px] mx-auto reveal bg-black/20 backdrop-blur-md p-10 md:p-16 rounded-[40px] border border-white/5 shadow-2xl">
            <span className="inline-block px-5 py-2 bg-rose/10 text-rose border border-rose/20 rounded-full text-[10px] font-bold tracking-[0.28em] uppercase mb-6">
              B2B Consulting & Solutions
            </span>
            <h2 className="font-light leading-[1.1] mb-6 text-cream" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(40px, 6vw, 72px)' }}>
              Open Your Own<br />
              <span className="font-serif italic font-light text-rose block mt-2">
                Colon Hydrotherapy Center
              </span>
            </h2>
            <div className="w-20 h-[1px] bg-rose/40 mx-auto my-8"></div>
            <p className="text-[16px] md:text-[18px] leading-[1.8] text-cream/80 font-light max-w-[650px] mx-auto">
              Interested in starting a colon hydrotherapy business? Partner with Jordan’s first professional colon hydrotherapy clinic. Whether you’re a doctor, wellness center owner, or entrepreneur, we guide you through every step.
            </p>
          </div>
        </div>

        {/* LEVEL 2: We Can Help With */}
        <div className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-[800px] w-full mx-auto reveal bg-[#32221a]/80 backdrop-blur-xl p-10 md:p-16 rounded-[40px] border border-white/10 shadow-2xl">
            <h3 className="font-serif text-3xl md:text-4xl font-light text-cream text-center mb-10">
              We Can Help With
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {helpItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-rose/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose/10 flex items-center justify-center border border-rose/20 text-rose group-hover:bg-rose group-hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-[15px] leading-[1.6] text-cream/80 font-light mt-1">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LEVEL 3: Support Options */}
        <div className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-[1000px] w-full mx-auto reveal">
            <h3 className="font-serif text-3xl md:text-5xl font-light text-cream text-center mb-12 drop-shadow-lg">
              Our Support Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {supportOptions.map((opt, idx) => (
                <div key={idx} className="group bg-black/40 backdrop-blur-lg rounded-[32px] p-8 lg:p-10 border border-white/10 hover:border-rose/40 hover:bg-[#32221a]/90 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-cream flex items-center justify-center font-serif italic font-semibold text-lg mb-6 group-hover:bg-rose group-hover:text-white transition-all duration-300">
                    {`0${idx + 1}`}
                  </div>
                  <h5 className="font-serif text-2xl font-light text-cream mb-4 group-hover:text-rose transition-colors duration-300">
                    {opt.title}
                  </h5>
                  <p className="text-[15px] leading-[1.7] text-cream/70 font-light">
                    {opt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LEVEL 4: Audiences & CTA */}
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">

          <div className="max-w-[900px] w-full mx-auto text-center reveal mb-20 bg-black/30 backdrop-blur-md p-10 rounded-[40px] border border-white/5">
            <h3 className="font-serif text-2xl lg:text-3xl font-light text-cream mb-8">Who Is This For?</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {audiences.map((aud, idx) => (
                <div key={idx} className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-[14px] text-cream/90 shadow-lg">
                  {aud}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[800px] mx-auto reveal-scale">
            <div className="text-brown rounded-[40px] p-12 md:p-16 text-center relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-rose/30" style={{ background: 'linear-gradient(135deg, #FDFBF7 0%, #eae3d8 100%)' }}>
              <div className="absolute pointer-events-none rounded-full" style={{ width: 300, height: 300, top: '-50%', left: '-20%', background: 'radial-gradient(circle, rgba(226,169,161,0.4) 0%, transparent 70%)', filter: 'blur(40px)' }} />
              <div className="relative z-10">
                <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-rose mb-5">Thinking About Opening a Center?</span>
                <h3 className="font-light leading-[1.2] mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(32px, 4.5vw, 48px)' }}>
                  Let’s discuss your goals and explore the<br />
                  <span className="font-serif italic text-rose">best path for your project.</span>
                </h3>
                <p className="text-[15px] leading-[1.7] text-taupe font-light mb-10 max-w-[500px] mx-auto">
                  Reach out to us to schedule a direct partnership consultation with our clinic setup specialists.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                  <a href="mailto:coloncleansejo@gmail.com?subject=Colon%20Hydrotherapy%20Center%20Setup%20Consultation" className="inline-flex items-center gap-2.5 py-4 px-8 rounded-full no-underline text-[11px] font-bold tracking-[0.2em] uppercase text-white bg-rose transition-all duration-300 hover:bg-[#d49590] hover:-translate-y-1 shadow-[0_10px_30px_rgba(226,169,161,0.3)]">
                    Email Us
                  </a>
                  <a href="tel:0798705760" className="inline-flex items-center gap-2.5 py-4 px-8 rounded-full no-underline text-[11px] font-bold tracking-[0.2em] uppercase text-cream bg-brown transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(61,42,32,0.2)] hover:text-rose">
                    Call 0798705760
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
