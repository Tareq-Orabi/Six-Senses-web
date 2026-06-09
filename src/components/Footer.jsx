export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-brand-title">Six Senses</div>
          <div className="footer-brand-sub">Holistic Wellness Clinic</div>
          <div className="footer-brand-desc">A sanctuary for deep healing, natural detoxification, and whole-body restoration. Every treatment is crafted with care.</div>
        </div>
        <div>
          <div className="footer-col-title">Treatments</div>
          <ul className="footer-links">
            <li><a href="#services">Colon Cleansing</a></li>
            <li><a href="#services">Liver Cleansing</a></li>
            <li><a href="#services">Acupuncture</a></li>
            <li><a href="#services">Cupping</a></li>
            <li><a href="#services">Lymphatic Massage</a></li>
            <li><a href="#services">Red Light Therapy</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Programs</div>
          <ul className="footer-links">
            <li><a href="#packages">Signature Detox</a></li>
            <li><a href="#packages">Wellness Bundle</a></li>
            <li><a href="#packages">Total Renewal</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Clinic</div>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#process">How It Works</a></li>
            <li><a href="#book">Book Now</a></li>
            <li><a href="#book">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Six Senses Holistic Wellness Clinic. All rights reserved.</span>
        <span>Privacy Policy · Terms of Service</span>
      </div>
    </footer>
  );
}
