import { useEffect, useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import Process from './components/Process';
import International from './components/International';
import CenterSetup from './components/CenterSetup';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Book from './components/Book';
import Footer from './components/Footer';

function App() {
  const progressRef = useRef(null);

  // ── Scroll Progress Bar ──
  const handleScroll = useCallback(() => {
    if (!progressRef.current) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressRef.current.style.width = `${progress}%`;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // ── Cinematic Reveal System ──
  useEffect(() => {
    const revealSelectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate, .reveal-stagger';
    const reveals = document.querySelectorAll(revealSelectors);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a micro-delay based on element position for cascade effect
          const rect = entry.boundingClientRect;
          const delay = Math.min(rect.top * 0.15, 200);
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));

    return () => {
      reveals.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  // ── Parallax System ──
  useEffect(() => {
    const parallaxEls = document.querySelectorAll('[data-parallax]');
    if (!parallaxEls.length) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        parallaxEls.forEach(el => {
          const speed = parseFloat(el.dataset.parallax) || 0.1;
          const rect = el.getBoundingClientRect();
          const centerY = rect.top + rect.height / 2;
          const viewCenter = window.innerHeight / 2;
          const offset = (centerY - viewCenter) * speed;
          el.style.transform = `translateY(${offset}px)`;
        });
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Counter Animation System ──
  useEffect(() => {
    const counters = document.querySelectorAll('[data-count-to]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.countTo, 10);
        const suffix = el.dataset.countSuffix || '';
        const prefix = el.dataset.countPrefix || '';
        const duration = 2000;
        const start = performance.now();

        const step = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          el.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
          if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
        observer.unobserve(el);
      });
    }, { threshold: 0.3 });

    counters.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ── Magnetic Button System ──
  useEffect(() => {
    const btns = document.querySelectorAll('.magnetic-btn');
    if (!btns.length) return;

    const handlers = [];
    btns.forEach(btn => {
      const move = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      };
      const leave = () => {
        btn.style.transform = 'translate(0, 0)';
      };
      btn.addEventListener('mousemove', move);
      btn.addEventListener('mouseleave', leave);
      handlers.push({ btn, move, leave });
    });

    return () => {
      handlers.forEach(({ btn, move, leave }) => {
        btn.removeEventListener('mousemove', move);
        btn.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <>
      {/* Scroll progress indicator */}
      <div ref={progressRef} className="scroll-progress" />
      {/* Film grain overlay */}
      <div className="film-grain" />

      <Navbar />
      <Hero />
      <Introduction />
      <About />
      <Services />
      <Packages />
      <Process />
      <International />
      <CenterSetup />
      <Testimonials />
      <Faq />
      <Book />
      <Footer />
    </>
  );
}

export default App;
