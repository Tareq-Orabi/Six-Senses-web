export default function Book() {
  return (
    <section
      id="book"
      className="bg-brown text-center py-28 px-12 max-md:py-20 max-md:px-6 relative overflow-hidden"
    >
      {/* Drifting Watermark */}
      <div className="absolute top-1/2 left-1/2 text-[18rem] max-md:text-[12rem] font-serif italic font-light text-white/[0.02] whitespace-nowrap pointer-events-none tracking-[-10px] drift-watermark">
        Six Senses
      </div>

      <div className="max-w-[700px] mx-auto relative z-10 reveal">
        <div className="justify-center text-rose flex items-center gap-[0.8rem] mb-4 uppercase tracking-[0.2em] font-sans text-xs">Get In Touch</div>
        <h2 className="text-cream font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-[1.1] mb-[1.2rem] [&_em]:italic [&_em]:not-italic [&_em]:text-rose">
          Begin your <em>healing</em> journey
        </h2>
        <p className="text-base text-cream/60 leading-[1.8] mb-12">
          Ready to experience the Six Senses difference? Reach out directly via WhatsApp to discuss your goals or use our online system to book your appointment instantly.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-[500px] mx-auto reveal-stagger">
          <a
            href="https://wa.me/962798705760?text=Hi!%20I%2527d%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-[0.95rem] px-8 bg-[#25D366] hover:bg-[#20ba56] text-white border-none rounded-full font-sans text-[0.72rem] font-bold tracking-[0.2em] uppercase cursor-pointer transition-all duration-300 hover:scale-[1.03] shadow-md flex items-center justify-center gap-2.5 no-underline breathe-glow magnetic-btn"
          >
            {/* WhatsApp SVG Icon */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.022-.08-.115-.135-.304-.23-.189-.095-1.125-.555-1.299-.618-.174-.063-.3-.095-.427.096-.127.19-.492.618-.603.743-.112.127-.224.143-.414.048-.19-.095-.8-.295-1.523-.94-5.63-5.02-6.15-5.242-6.15-5.242s.537-.563.602-.69c.063-.127.03-.24-.015-.335-.045-.095-.427-.96-.587-1.348-.155-.375-.313-.323-.427-.33-.11-.005-.24-.007-.37-.007-.13 0-.343.05-.522.25-.18.197-.686.673-.686 1.64 0 .967.704 1.902.803 2.032.1.13 1.385 2.115 3.356 2.97.468.203.834.325 1.12.417.47.15 1.004.135 1.382.08.423-.063 1.299-.53 1.48-.53a1.99 1.99 0 0 1 .373.076zM12 2C6.477 2 2 6.477 2 12c0 1.9.524 3.68 1.437 5.215l-1.077 3.935 4.025-1.055A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.745 0-3.376-.48-4.78-1.314l-.34-.202-2.396.628.64-2.335-.224-.356A7.957 7.957 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            WhatsApp Us
          </a>
          <a
            href="https://sixsenses.clinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-[0.95rem] px-8 bg-rose hover:bg-[#d49590] text-white border-none rounded-full font-sans text-[0.72rem] font-bold tracking-[0.2em] uppercase cursor-pointer transition-all duration-300 hover:scale-[1.03] shadow-md flex items-center justify-center gap-2.5 no-underline breathe-glow magnetic-btn"
          >
            {/* Calendar Icon */}
            <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Book Online
          </a>
        </div>
      </div>
    </section>
  );
}
