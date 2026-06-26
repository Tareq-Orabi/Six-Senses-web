import sixSensesImage from '../assets/sixSensesImage.jpg';

export default function About() {
  return (
    <section id="about" className="py-28 px-12 max-md:py-20 max-md:px-6">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-20 items-center max-w-[1200px] mx-auto">
        <div className="about-visual reveal-rotate relative max-lg:hidden">
          <div className="bg-brown rounded-[3rem] p-14 text-cream h-[460px] flex flex-col justify-end relative overflow-hidden group">
            {/* Background Image with hover zoom */}
            <img
              src={sixSensesImage}
              alt="Six Senses Clinic Philosophy"
              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark vignette overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-brown via-brown/50 to-brown/10 pointer-events-none" />

            <div className="absolute w-[300px] h-[300px] rounded-full -top-[80px] -right-[80px] bg-[radial-gradient(circle,rgba(226,169,161,0.3)_0%,transparent_70%)] blur-[40px]"></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="text-[0.58rem] font-bold tracking-[0.3em] uppercase text-rose mb-2.5">Our Philosophy</div>
              <div className="font-serif italic text-[1.6rem] leading-[1.5] font-light text-cream">"True wellness begins when we listen to what the body has been asking for all along."</div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 w-[110px] h-[110px] rounded-full bg-rose flex flex-col items-center justify-center shadow-[0_10px_40px_rgba(226,169,161,0.4)] animate-spin-slow">
            <div className="text-[0.5rem] font-bold tracking-[0.25em] uppercase text-white text-center leading-[1.6] animate-spin-slow-reverse">Six<br />Senses<br />· ·<br />Clinic</div>
          </div>
        </div>
        <div className="about-text reveal-right">
          <div className="text-[0.58rem] font-bold tracking-[0.3em] uppercase text-rose flex items-center gap-[0.8rem] mb-4 after:content-[''] after:flex-1 after:max-w-[60px] after:h-[1px] after:bg-rose">Who We Are</div>
          <h2 className="font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-[1.1] text-brown mb-6 [&_em]:italic [&_em]:not-italic [&_em]:text-rose">A sanctuary for <em>deep healing</em></h2>
          <p className="text-[0.95rem] text-taupe leading-[1.9] mb-[1.2rem]">Six Senses is a colon cleansing & wellness clinic offering evidence-based and traditional therapies that work in harmony to detoxify, restore, and energize the body from within.</p>
          <p className="text-[0.95rem] text-taupe leading-[1.9] mb-[1.2rem]">Our team of specialists blends modern clinical expertise with time-honored healing traditions, creating a truly personalized wellness experience for every client.</p>
          <div className="flex flex-col gap-[0.8rem] mt-8 reveal-stagger">
            <div className="flex items-start gap-4">
              <div className="w-[36px] h-[36px] rounded-full bg-rose/15 border border-rose/30 flex items-center justify-center text-[0.9rem] shrink-0 mt-[2px] transition-transform duration-300 hover:scale-110">🌿</div>
              <div>
                <div className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-brown mb-[0.25rem]">Natural Therapies</div>
                <div className="text-[0.82rem] text-taupe leading-[1.6]">Every treatment uses organic, plant-based, or clinically approved methods — no harsh chemicals.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-[36px] h-[36px] rounded-full bg-rose/15 border border-rose/30 flex items-center justify-center text-[0.9rem] shrink-0 mt-[2px] transition-transform duration-300 hover:scale-110">🫀</div>
              <div>
                <div className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-brown mb-[0.25rem]">Whole-Body Approach</div>
                <div className="text-[0.82rem] text-taupe leading-[1.6]">We address root causes, not just symptoms, through integrated wellness protocols.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-[36px] h-[36px] rounded-full bg-rose/15 border border-rose/30 flex items-center justify-center text-[0.9rem] shrink-0 mt-[2px] transition-transform duration-300 hover:scale-110">✨</div>
              <div>
                <div className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-brown mb-[0.25rem]">Personalized Care</div>
                <div className="text-[0.82rem] text-taupe leading-[1.6]">Each session is tailored to your health profile, goals, and current state of well-being.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
