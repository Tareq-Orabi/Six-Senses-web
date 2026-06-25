import { useState } from 'react';

const getProgramIcon = (title) => {
  switch (title) {
    case 'Digestive Restoration Program':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22C2 12 10 4 22 2c0 10-8 18-20 20z" />
          <path d="M9 15C13 11 17 9 22 2" />
        </svg>
      );
    case 'Gut Repair Program':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M8 11h8" />
          <path d="M12 7v8" />
        </svg>
      );
    case 'Microbial Balance Program':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="5" y1="7" x2="19" y2="7" />
          <path d="M5 7l3 10h-6l3-10z" />
          <path d="M19 7l3 10h-6l3-10z" />
        </svg>
      );
    case 'Detox & Liver Support Program':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
          <path d="M12 18a3 3 0 0 0 3-3" />
        </svg>
      );
    case 'Metabolic & Weight Support Program':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-.73" />
        </svg>
      );
    case 'Premium Wellness Transformation Program':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12l4 6-10 13L2 9z" />
          <path d="M11 3L8 9l4 13 4-13-3-6" />
          <path d="M2 9h20" />
        </svg>
      );
    default:
      return null;
  }
};

function ProgramCard({ pkg }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isFeatured = pkg.featured;

  return (
    <div
      className={`group reveal rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden border transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${isFeatured
          ? 'bg-brown text-white border-transparent hover:shadow-[0_20px_60px_rgba(61,42,32,0.22)]'
          : 'bg-white border-[#D2B48C]/20 text-brown hover:border-rose/30 hover:shadow-[0_20px_50px_rgba(92,64,51,0.06)]'
        }`}
    >
      {isFeatured && (
        <div className="absolute top-6 right-6 text-[8px] font-bold tracking-[0.2em] uppercase bg-rose text-white py-[4px] px-[10px] rounded-full shadow-md z-10">
          Most Comprehensive
        </div>
      )}

      <div>
        {/* Icon */}
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${isFeatured
            ? 'bg-white/10 border-white/15 text-white'
            : 'bg-rose/10 border-rose/20 text-rose'
          }`}>
          {getProgramIcon(pkg.title)}
        </div>

        {/* Title */}
        <h3 className={`font-serif text-[1.4rem] font-light mb-3 leading-tight transition-colors duration-300 ${isFeatured
            ? 'text-cream group-hover:text-rose'
            : 'text-brown group-hover:text-rose'
          }`}>
          {pkg.title}
        </h3>

        {/* Description */}
        <p className={`text-[13.5px] leading-relaxed font-light ${isFeatured ? 'text-cream/75' : 'text-taupe'
          }`}>
          {pkg.desc}
        </p>

        {/* Read More / Read Less Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`text-[11px] font-bold tracking-[0.18em] uppercase flex items-center gap-1.5 cursor-pointer mt-4 mb-6 select-none transition-colors duration-300 outline-none border-none ${isFeatured
              ? 'text-rose hover:text-white'
              : 'text-rose hover:text-brown'
            }`}
        >
          {isExpanded ? (
            <>
              Read Less
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </>
          ) : (
            <>
              Read More
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </>
          )}
        </button>

        {/* Collapsible content container */}
        <div className={`transition-all duration-500 ease-in-out card-scrollbar ${isExpanded
            ? 'max-h-[200px] overflow-y-auto opacity-100 visible pr-2'
            : 'max-h-0 overflow-hidden opacity-0 invisible'
          }`}>
          {/* Ideal For */}
          {pkg.idealFor && pkg.idealFor.length > 0 && (
            <div className="mb-6">
              <h4 className={`text-[9.5px] font-bold tracking-wider uppercase mb-3 ${isFeatured ? 'text-cream/50' : 'text-brown/65'
                }`}>
                Ideal For:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {pkg.idealFor.map((item, id) => (
                  <span
                    key={id}
                    className={`text-[11px] py-0.5 px-2.5 rounded-full border font-light ${isFeatured
                        ? 'bg-white/5 border-white/10 text-white/80'
                        : 'bg-rose/5 border-rose/10 text-[#c4786b]'
                      }`}
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* May Include */}
          {pkg.mayInclude && pkg.mayInclude.length > 0 && (
            <div className="mb-6">
              <h4 className={`text-[9.5px] font-bold tracking-wider uppercase mb-2.5 ${isFeatured ? 'text-cream/50' : 'text-brown/65'
                }`}>
                Program May Include:
              </h4>
              <ul className="space-y-1.5">
                {pkg.mayInclude.map((item, id) => (
                  <li
                    key={id}
                    className={`flex items-center gap-2 text-[12.5px] font-light ${isFeatured ? 'text-cream/80' : 'text-taupe'
                      }`}
                  >
                    <span className={`w-1 h-1 rounded-full flex-shrink-0 ${isFeatured ? 'bg-rose' : 'bg-rose/60'
                      }`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Goal and Button */}
      <div className="mt-4">
        {/* Goal Block */}
        <div className={`pt-5 border-t ${isFeatured ? 'border-white/12' : 'border-brown/5'
          }`}>
          <span className="text-[9px] font-bold tracking-wider uppercase text-rose block mb-1">
            Goal:
          </span>
          <p className={`text-[13px] leading-relaxed font-serif italic ${isFeatured ? 'text-cream/85' : 'text-taupe'
            }`}>
            {pkg.goal}
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#book"
          className={`block w-full text-center mt-6 py-3 px-6 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${isFeatured
              ? 'bg-rose hover:bg-[#d49590] text-white'
              : 'bg-transparent border border-tan text-brown hover:bg-brown hover:text-white hover:border-brown'
            }`}
        >
          Book Now
        </a>
      </div>
    </div>
  );
}

export default function Packages() {
  const programs = [
    {
      title: 'Digestive Restoration Program',
      desc: 'Designed for clients who experience digestive discomfort and want to support healthy bowel habits and digestive function.',
      idealFor: [
        'Bloating',
        'Constipation',
        'Irregular bowel movements',
        'Heavy feeling after meals',
        'Digestive discomfort',
        'Occasional gas'
      ],
      mayInclude: [
        'Wellness Assessment',
        'Colon Hydrotherapy Sessions',
        'Personalized Recommendations',
        'Nutrition Guidance',
        'Wellness Follow-Up'
      ],
      goal: 'To help clients feel lighter, more comfortable, and more confident in their digestive health.'
    },
    {
      title: 'Gut Repair Program',
      desc: 'Focuses on supporting healthy digestion and creating healthier daily habits, recognizing the key role the digestive system plays in overall wellbeing.',
      idealFor: [
        'Digestive sensitivity',
        'Food intolerances',
        'Irregular digestion',
        'Sluggishness after eating',
        'Long-term digestive concerns'
      ],
      mayInclude: [
        'Wellness Assessment',
        'Colon Hydrotherapy Sessions',
        'Personalized Nutrition Guidance',
        'Lifestyle Recommendations',
        'Wellness Follow-Up'
      ],
      goal: 'To support healthy digestion and create a stronger foundation for long-term wellbeing.'
    },
    {
      title: 'Microbial Balance Program',
      desc: 'Designed for clients who want to focus on digestive balance, cravings, bloating, and overall gut wellness.',
      idealFor: [
        'Frequent bloating',
        'Gas',
        'Sugar cravings',
        'Digestive imbalance',
        'Irregular eating habits',
        'Discomfort after meals'
      ],
      mayInclude: [
        'Wellness Assessment',
        'Colon Hydrotherapy Sessions',
        'Personalized Wellness Recommendations',
        'Nutrition Guidance',
        'Wellness Follow-Up'
      ],
      goal: 'To support digestive balance and encourage healthier daily habits.'
    },
    {
      title: 'Detox & Liver Support Program',
      desc: 'Focuses on supporting the body’s natural detoxification processes and overall wellbeing to counter the effects of modern lifestyles.',
      idealFor: [
        'Low energy',
        'Sluggishness',
        'Poor eating habits',
        'High stress lifestyle',
        'Desire for a wellness reset',
        'General wellbeing support'
      ],
      mayInclude: [
        'Wellness Assessment',
        'Colon Hydrotherapy Sessions',
        'Wellness Enemas (when appropriate)',
        'Nutrition Guidance',
        'Lifestyle Recommendations'
      ],
      goal: 'To help clients feel refreshed, energized, and more connected to their health goals.'
    },
    {
      title: 'Metabolic & Weight Support Program',
      desc: 'Designed for clients who want support with healthy lifestyle changes and overall wellness goals to stay consistent.',
      idealFor: [
        'Weight management goals',
        'Low energy & motivation',
        'Unhealthy eating patterns',
        'Difficulty staying consistent',
        'Desire for healthier habits'
      ],
      mayInclude: [
        'Wellness Assessment',
        'Colon Hydrotherapy Sessions',
        'Nutrition Guidance',
        'Wellness Coaching',
        'Lifestyle Recommendations',
        'Progress Reviews'
      ],
      goal: 'To help clients create sustainable habits that support their wellness journey.'
    },
    {
      title: 'Premium Wellness Transformation Program',
      desc: 'Our most comprehensive wellness experience. This program is fully customized based on your assessment, goals, and lifestyle, perfect for a complete wellness reset and ongoing support.',
      idealFor: [],
      mayInclude: [
        'Colon Hydrotherapy',
        'Wellness Enemas',
        'Personalized Nutrition Plan',
        'IV Therapy',
        'Red Light Therapy',
        'Massage Therapy',
        'Wellness Reviews',
        'Progress Tracking'
      ],
      goal: 'To provide a personalized wellness experience designed around your unique needs and goals',
      featured: true
    }
  ];

  return (
    <section id="packages" className="bg-[linear-gradient(180deg,#faf8f5_0%,#FDFBF7_100%)] py-28 px-12 max-md:py-20 max-md:px-6 border-t" style={{ borderColor: 'rgba(61,42,32,0.06)' }}>
      <div className="max-w-[1200px] mx-auto">

        {/* Header Block */}
        <div className="packages-header reveal mb-16 max-w-[750px]">
          <span className="inline-block px-4 py-1.5 bg-rose/10 text-rose border border-rose/20 rounded-full text-[9px] font-bold tracking-[0.28em] uppercase mb-5">
            Wellness Programs
          </span>
          <h2 className="font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-[1.1] text-brown [&_em]:italic [&_em]:not-italic [&_em]:text-rose">
            Curated <em>programs</em> for your health
          </h2>
          <div className="w-16 h-[1px] bg-rose/40 my-6"></div>
          <p className="text-[15px] leading-[1.8] text-taupe font-light">
            We offer structured, personalized programs designed to support your body's natural systems and foster sustainable wellness.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {programs.map((pkg, idx) => (
            <ProgramCard key={idx} pkg={pkg} />
          ))}
        </div>

      </div>
    </section>
  );
}
