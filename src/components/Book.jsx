import { useState } from 'react';

export default function Book() {
  const [inputValue, setInputValue] = useState('');
  const [note, setNote] = useState('We will contact you within 24 hours · No commitment required');
  const [noteColor, setNoteColor] = useState('rgba(253,251,247,.35)');

  const handleBook = () => {
    if (!inputValue.trim()) {
      setNote('Please enter your phone number or email.');
      setNoteColor('var(--rose)');
      return;
    }
    setNote('✓ Thank you! Our team will contact you shortly.');
    setNoteColor('rgba(226,169,161,0.9)');
    setInputValue('');
  };

  return (
    <section id="book">
      <div className="book-inner">
        <div className="section-eyebrow">Get In Touch</div>
        <h2 className="section-title">Begin your <em>healing</em> journey</h2>
        <p className="book-desc">Ready to experience the Six Senses difference? Leave your phone number or email and our team will reach out to schedule your first consultation — completely free.</p>
        <div className="book-form">
          <input
            className="book-input"
            type="text"
            placeholder="Your phone or email…"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="book-submit" onClick={handleBook}>Request Call</button>
        </div>
        <p className="book-note" style={{ color: noteColor }}>{note}</p>
      </div>
    </section>
  );
}
