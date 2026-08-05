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
              <path d="M12.004 2c-5.518 0-9.998 4.48-9.998 9.997 0 2.006.592 3.874 1.614 5.434L2.006 22l4.71-1.237c1.502.82 3.207 1.282 5.022 1.282 5.518 0 10.003-4.48 10.003-9.998 0-5.517-4.485-9.997-10.003-9.997zm6.067 13.78c-.246.689-1.205 1.264-1.66 1.31-.4.041-.933.056-1.5-.128-.358-.117-.817-.282-1.394-.523-2.46-1.025-4.046-3.528-4.168-3.693-.122-.164-1.01-1.343-1.01-2.56 0-1.217.636-1.815.862-2.06.225-.246.491-.307.655-.307.164 0 .328.005.47.01.148.005.348-.056.546.42.197.47.676 1.65.738 1.772.06.123.102.266.02.43-.08.163-.122.265-.245.41-.123.142-.257.317-.367.43-.11.112-.224.234-.096.452.128.217.568.937 1.22 1.517.84.75 1.55 1.01 1.77.112.22-.112.49-.572.656-.814.164-.244.327-.204.549-.122.22.082 1.41.664 1.65.786.24.122.4.184.46.286.06.102.06.593-.186 1.282z" />
            </svg>
            WhatsApp Us
          </a>
          <a
            href="https://sixsenses.clinic/signin"
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
