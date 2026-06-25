export default function Footer() {
  return (
    <footer className="bg-[#1a0e0a] text-cream pt-16 pb-8 px-12 max-md:px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-tan/10">

        {/* Clinic & Location */}
        <div>
          <div className="font-serif italic text-[1.8rem] text-cream font-light mb-1.5">Six Senses</div>
          <div className="text-[0.55rem] font-bold tracking-[0.3em] uppercase text-rose mb-[1.2rem]">
            Colon Cleansing & Wellness Clinic
          </div>
          <div className="text-[0.8rem] text-cream/40 leading-[1.8]">
            <span className="block font-semibold text-rose mb-1">Location:</span>
            Amman, Um Uthainah, Shatt Al Arab Street,<br />
            Diva Diamonds Center Building, Floor -1
          </div>
        </div>

        {/* Hours */}
        <div className="md:pl-8">
          <div className="text-[0.6rem] font-bold tracking-[0.25em] uppercase text-rose mb-[1.2rem]">Hours</div>
          <div className="text-[0.8rem] text-cream/40 leading-[1.8]">
            <span className="block font-semibold text-cream mb-1">Saturday – Thursday</span>
            10:00 AM – 6:00 PM
            <span className="block mt-2 italic text-rose/80 font-light">By appointment only</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-[0.6rem] font-bold tracking-[0.25em] uppercase text-rose mb-[1.2rem]">Quick Links</div>
          <div className="flex gap-12 text-[0.8rem]">
            <ul className="list-none flex flex-col gap-[0.6rem]">
              <li><a href="#home" className="no-underline text-cream/40 transition-colors duration-300 hover:text-rose">Home</a></li>
              <li><a href="#about" className="no-underline text-cream/40 transition-colors duration-300 hover:text-rose">About Us</a></li>
              <li><a href="#services" className="no-underline text-cream/40 transition-colors duration-300 hover:text-rose">Services & Pricing</a></li>
              <li><a href="#packages" className="no-underline text-cream/40 transition-colors duration-300 hover:text-rose">Wellness Programs</a></li>
            </ul>
            <ul className="list-none flex flex-col gap-[0.6rem]">
              <li><a href="#process" className="no-underline text-cream/40 transition-colors duration-300 hover:text-rose">How It Works</a></li>
              <li><a href="#setup" className="no-underline text-cream/40 transition-colors duration-300 hover:text-rose">Open a Center</a></li>
              <li><a href="#faq" className="no-underline text-cream/40 transition-colors duration-300 hover:text-rose">FAQ</a></li>
              <li><a href="#book" className="no-underline text-cream/40 transition-colors duration-300 hover:text-rose">Contact</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Consulting / Open Center Banner */}
      <div className="max-w-[1200px] mx-auto py-8 text-center border-b border-tan/10 text-[0.85rem] leading-relaxed">
        <span className="text-cream/60">Looking to open your own colon hydrotherapy center? </span>
        <a href="#setup" className="text-rose hover:text-rose/80 transition-colors duration-300 underline underline-offset-4 font-medium inline-block mt-2 sm:mt-0 sm:ml-1">
          Ask us about our consulting, training, and startup support services.
        </a>
      </div>

      {/* Social Media & Contact Row */}
      <div className="max-w-[1200px] mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.72rem]">

        {/* Social & Contact Logo Buttons */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <a
            href="https://wa.me/962798705760"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="w-9 h-9 rounded-full bg-cream/5 border border-white/8 flex items-center justify-center text-cream/40 hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/30 transition-all duration-300 shadow-sm"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.004 2c-5.518 0-9.998 4.48-9.998 9.997 0 2.006.592 3.874 1.614 5.434L2.006 22l4.71-1.237c1.502.82 3.207 1.282 5.022 1.282 5.518 0 10.003-4.48 10.003-9.998 0-5.517-4.485-9.997-10.003-9.997zm6.067 13.78c-.246.689-1.205 1.264-1.66 1.31-.4.041-.933.056-1.5-.128-.358-.117-.817-.282-1.394-.523-2.46-1.025-4.046-3.528-4.168-3.693-.122-.164-1.01-1.343-1.01-2.56 0-1.217.636-1.815.862-2.06.225-.246.491-.307.655-.307.164 0 .328.005.47.01.148.005.348-.056.546.42.197.47.676 1.65.738 1.772.06.123.102.266.02.43-.08.163-.122.265-.245.41-.123.142-.257.317-.367.43-.11.112-.224.234-.096.452.128.217.568.937 1.22 1.517.84.75 1.55 1.01 1.77.112.22-.112.49-.572.656-.814.164-.244.327-.204.549-.122.22.082 1.41.664 1.65.786.24.122.4.184.46.286.06.102.06.593-.186 1.282z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/sixsensescoloncleansejo/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="w-9 h-9 rounded-full bg-cream/5 border border-white/8 flex items-center justify-center text-cream/40 hover:text-[#E1306C] hover:bg-[#E1306C]/10 hover:border-[#E1306C]/30 transition-all duration-300 shadow-sm"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/sixsensescoloncleansejo/"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="w-9 h-9 rounded-full bg-cream/5 border border-white/8 flex items-center justify-center text-cream/40 hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30 transition-all duration-300 shadow-sm"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://snapchat.com/t/qlWmYSq9"
            target="_blank"
            rel="noopener noreferrer"
            title="Snapchat"
            className="w-9 h-9 rounded-full bg-cream/5 border border-white/8 flex items-center justify-center text-cream/40 hover:text-[#FFFC00] hover:bg-[#FFFC00]/10 hover:border-[#FFFC00]/30 transition-all duration-300 shadow-sm"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.029 2c-3.993 0-5.408 2.977-5.408 5.166 0 .973.238 1.455.517 1.93.089.151.054.27-.089.39-.427.359-1.258.988-1.745 1.587-.341.419-.36.969-.09 1.437a1.493 1.493 0 001.378.823c.249.006.471.164.552.4.218.636.48 1.258.784 1.854.127.248.05.518-.182.686-.688.498-1.157 1.218-1.294 2.05-.152.923.111 1.849.72 2.502.593.636 1.43 1.01 2.308 1.01.216 0 .432.007.649.02l4.896-.02c.879 0 1.716-.374 2.309-1.01.609-.653.872-1.579.72-2.502-.137-.832-.606-1.552-1.294-2.05-.231-.168-.309-.438-.182-.686.304-.596.566-1.218.784-1.854.081-.236.303-.394.552-.4a1.493 1.493 0 001.378-.823c.27-.468.251-1.018-.09-1.437-.487-.599-1.318-1.228-1.745-1.587-.143-.12-.178-.239-.089-.39.279-.475.517-.957.517-1.93C17.437 4.977 16.022 2 12.029 2z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@sixsensescoloncleanse?_r=1&_d=f1ffjf2758j985&sec_uid=MS4wLjABAAAAkvDlrEyXMj5yz_BcIO20Fr2YGkBXy6J7KJLSoiwj-iFSDeUszT_z4PSmjqOTDTw1&share_author_id=7597409207563191329&sharer_language=en&source=h5_m&u_code=f1ffjhgg24ci45&item_author_type=1&utm_source=whatsapp&share_enter_from=&tt_from=whatsapp&enable_checksum=1&utm_medium=ios&share_link_id=E2BD40E0-1FB0-4309-A0F7-F047EAC5D0F7&user_id=7597409207563191329&sec_user_id=MS4wLjABAAAAkvDlrEyXMj5yz_BcIO20Fr2YGkBXy6J7KJLSoiwj-iFSDeUszT_z4PSmjqOTDTw1&utm_campaign=client_share&panel_source_v2=qrcode_panel&ug_btm=b0,b0&social_share_type=5&share_app_id=1233"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
            className="w-9 h-9 rounded-full bg-cream/5 border border-white/8 flex items-center justify-center text-cream/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-sm"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.03 2.61-.01 3.91-.01.08 1.53.63 3.02 1.59 4.2 1.02 1.24 2.44 2.11 3.97 2.47v3.91c-1.3-.12-2.57-.61-3.64-1.37-1.06-.77-1.87-1.85-2.33-3.09v8.42c.07 1.53-.29 3.09-1.08 4.42-.77 1.34-1.94 2.42-3.32 3.08-1.39.67-2.97.94-4.48.77-1.51-.17-2.96-.83-4.11-1.85-1.16-1.03-1.95-2.44-2.26-3.97-.31-1.53-.13-3.13.51-4.56.63-1.42 1.72-2.59 3.1-3.33 1.39-.74 2.99-.98 4.5-.68v4.02c-.93-.27-1.93-.16-2.77.3-.84.47-1.45 1.27-1.7 2.22-.25.96-.09 1.99.43 2.82.52.83 1.39 1.38 2.37 1.49.98.11 1.97-.18 2.7-.8.74-.63 1.17-1.56 1.21-2.53.01-4.08.01-8.17.01-12.25z" />
            </svg>
          </a>
          <a
            href="https://maps.google.com/?q=Six+Senses+Colon+Cleansing+Amman"
            target="_blank"
            rel="noopener noreferrer"
            title="Google Maps"
            className="w-9 h-9 rounded-full bg-cream/5 border border-white/8 flex items-center justify-center text-cream/40 hover:text-rose hover:bg-rose/10 hover:border-rose/30 transition-all duration-300 shadow-sm"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </a>
          <a
            href="tel:0798705760"
            title="Call Now"
            className="w-9 h-9 rounded-full bg-cream/5 border border-white/8 flex items-center justify-center text-cream/40 hover:text-rose hover:bg-rose/10 hover:border-rose/30 transition-all duration-300 shadow-sm"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.5 3.99c0-.55-.45-1-1-1H4.03c-.55 0-1 .45-1 1C3.03 12.8 11.2 20.97 20 20.97c.55 0 1-.45 1-1v-3.59c0-.55-.45-1-1-1z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-cream/35 text-center md:text-right">
          © {new Date().getFullYear()} Six Senses. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
