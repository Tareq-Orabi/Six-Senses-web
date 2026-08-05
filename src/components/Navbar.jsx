import { useState, useEffect } from 'react';
import logo from '../assets/clinicLogo.Jpg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMobileNav = () => setIsMobileNavOpen(true);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[3rem] max-md:px-[1.5rem] bg-cream/88 backdrop-blur-[18px] border-b border-tan/18 transition-[padding,box-shadow] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled
          ? 'py-[0.8rem] max-md:py-[1rem] shadow-[0_2px_30px_rgba(92,64,51,0.08)]'
          : 'py-[1.2rem] max-md:py-[1rem]'
          }`}
      >
        <a href="#" className="flex items-center gap-4 no-underline">
          <img src={logo} alt="Logo" className="w-[40px] h-[40px] rounded-full" />
          <div>
            <div className="font-serif italic text-[1.45rem] font-semibold text-brown leading-none">
              Six Senses
            </div>
            <div className="text-[0.52rem] font-bold tracking-[0.25em] uppercase text-rose mt-[3px]">
              Colon & Cleansing Wellness
            </div>
          </div>
        </a>
        <ul className="flex gap-8 list-none max-md:hidden items-center">
          <li>
            <a
              href="#about"
              className="no-underline text-taupe text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 hover:text-rose"
            >
              Who We Are
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="no-underline text-taupe text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 hover:text-rose"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#packages"
              className="no-underline text-taupe text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 hover:text-rose"
            >
              Programs
            </a>
          </li>
          <li>
            <a
              href="#setup"
              className="no-underline text-taupe text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 hover:text-rose"
            >
              B2B Setup
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="no-underline text-taupe text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 hover:text-rose"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#book"
              className="no-underline text-taupe text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 hover:text-rose"
            >
              Contact & Location
            </a>
          </li>
        </ul>
        <a
          href="#book"
          className="py-[0.65rem] px-[1.8rem] bg-brown text-white border-none rounded-full font-sans text-[0.68rem] font-bold tracking-[0.18em] uppercase cursor-pointer no-underline transition-all duration-300 hover:bg-rose hover:-translate-y-[1px] max-md:hidden"
        >
          Book Now
        </a>
        <button
          className="hidden max-md:flex flex-col gap-[5px] bg-none border-none cursor-pointer p-1"
          onClick={openMobileNav}
          aria-label="Menu"
        >
          <span className="block w-6 h-[2px] bg-brown rounded-[2px] transition-all duration-300"></span>
          <span className="block w-6 h-[2px] bg-brown rounded-[2px] transition-all duration-300"></span>
          <span className="block w-6 h-[2px] bg-brown rounded-[2px] transition-all duration-300"></span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[200] ${isMobileNavOpen ? 'block' : 'hidden'}`}
        id="mobileNav"
      >
        <div
          className="absolute inset-0 bg-brown/30 backdrop-blur-sm"
          onClick={closeMobileNav}
        ></div>
        <div
          className={`absolute top-0 left-0 bottom-0 w-[280px] bg-cream p-8 flex flex-col gap-6 shadow-[20px_0_60px_rgba(0,0,0,0.15)] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <button
            className="self-end bg-none border-none text-2xl text-taupe cursor-pointer"
            onClick={closeMobileNav}
          >
            ✕
          </button>
          <ul className="list-none flex flex-col gap-[1.2rem]">
            <li>
              <a
                href="#about"
                className="no-underline text-[0.85rem] font-medium tracking-[0.15em] uppercase text-brown transition-colors duration-300 hover:text-rose"
                onClick={closeMobileNav}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="no-underline text-[0.85rem] font-medium tracking-[0.15em] uppercase text-brown transition-colors duration-300 hover:text-rose"
                onClick={closeMobileNav}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#packages"
                className="no-underline text-[0.85rem] font-medium tracking-[0.15em] uppercase text-brown transition-colors duration-300 hover:text-rose"
                onClick={closeMobileNav}
              >
                Programs
              </a>
            </li>
            <li>
              <a
                href="#setup"
                className="no-underline text-[0.85rem] font-medium tracking-[0.15em] uppercase text-brown transition-colors duration-300 hover:text-rose"
                onClick={closeMobileNav}
              >
                B2B Setup
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="no-underline text-[0.85rem] font-medium tracking-[0.15em] uppercase text-brown transition-colors duration-300 hover:text-rose"
                onClick={closeMobileNav}
              >
                FAQ
              </a>
            </li>
          </ul>
          <a
            href="#book"
            className="py-[0.9rem] px-[2.2rem] bg-brown text-white rounded-full no-underline text-[0.7rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_8px_30px_rgba(92,64,51,0.2)] hover:bg-rose hover:shadow-[0_12px_40px_rgba(226,169,161,0.35)] hover:-translate-y-[2px] text-center"
            onClick={closeMobileNav}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </>
  );
}
