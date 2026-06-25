import { useState, useEffect, useRef } from 'react';

const FAQ_DATA = [
  {
    id: 1,
    icon: "💧",
    labelEn: "What is it?",
    labelAr: "ما هو؟",
    en: {
      question: "What is Colon Hydrotherapy?",
      answer: "Colon Hydrotherapy is a gentle cleansing procedure that uses warm, filtered water to help remove accumulated waste from the large intestine (colon).\n\nMany clients choose it as part of their wellness routine to support digestion and overall wellbeing."
    },
    ar: {
      question: "ما هو تنظيف القولون المائي؟",
      answer: "تنظيف القولون المائي هو إجراء لطيف يستخدم المياه الدافئة والمنقاة للمساعدة في تنظيف القولون والتخلص من الفضلات المتراكمة.\n\nويختاره العديد من العملاء كجزء من برنامجهم الصحي لدعم صحة الجهاز الهضمي والشعور بالراحة العامة."
    }
  },
  {
    id: 2,
    icon: "📋",
    labelEn: "Services",
    labelAr: "الخدمات",
    en: {
      question: "What services do you provide?",
      answer: "We offer a range of professional wellness treatments:\n\n• Colon Hydrotherapy\n• Wellness Enemas\n• IV Therapy\n• Massage Therapy\n• Wet & Dry Cupping\n• Reflexology\n• Red Light Therapy\n• Foot Detox\n• Personalized Nutrition Plans\n• Wellness Assessments"
    },
    ar: {
      question: "ما هي الخدمات التي تقدمونها؟",
      answer: "نقدم مجموعة متنوعة من خدمات العافية المتخصصة:\n\n• تنظيف القولون المائي\n• الحقن الشرجية العلاجية\n• العلاج الوريدي (IV Therapy)\n• جلسات المساج العلاجي والاسترخائي\n• الحجامة الرطبة والجافة\n• الريفلكسولوجي (علاج انعكاس القدم)\n• العلاج بالضوء الأحمر\n• ديتوكس القدم\n• خطط غذائية مخصصة\n• تقييمات وبرامج العافية"
    }
  },
  {
    id: 3,
    icon: "💵",
    labelEn: "Pricing",
    labelAr: "الأسعار",
    en: {
      question: "How much does Colon Hydrotherapy cost?",
      answer: "We offer the following session options and packages:\n\n• 1 Session — 75 JD\n• 3 Sessions — 200 JD\n• 5 Sessions — 300 JD\n• 8 Sessions — 450 JD\n• 12 Sessions — 600 JD\n\nWe also offer additional wellness therapies. Please contact us for more information."
    },
    ar: {
      question: "كم تكلفة جلسات تنظيف القولون المائي؟",
      answer: "نقدم الخيارات والباقات التالية للجلسات:\n\n• جلسة واحدة — 75 دينار\n• 3 جلسات — 200 دينار\n• 5 جلسات — 300 دينار\n• 8 جلسات — 450 دينار\n• 12 جلسة — 600 دينار\n\nكما نقدم مجموعة من خدمات العافية الأخرى. يرجى التواصل معنا لمعرفة التفاصيل والأسعار."
    }
  },
  {
    id: 4,
    icon: "📅",
    labelEn: "Appointment",
    labelAr: "الموعد مسبق",
    en: {
      question: "Do I need an appointment?",
      answer: "Yes. All services are provided by appointment only. Please contact us by phone, WhatsApp, or social media to schedule your visit."
    },
    ar: {
      question: "هل أحتاج إلى موعد مسبق؟",
      answer: "نعم، جميع خدماتنا تتم بموعد مسبق فقط. يرجى التواصل معنا عبر الهاتف أو الواتساب أو وسائل التواصل الاجتماعي لحجز موعدكم."
    }
  },
  {
    id: 5,
    icon: "🕒",
    labelEn: "Hours",
    labelAr: "ساعات العمل",
    en: {
      question: "What are your hours of operation?",
      answer: "Saturday – Thursday: 10:00 AM – 6:00 PM (By Appointment Only). We recommend booking your appointment in advance to ensure availability."
    },
    ar: {
      question: "ما هي ساعات العمل؟",
      answer: "من السبت إلى الخميس: 10:00 صباحاً – 6:00 مساءً (بموعد مسبق فقط). ننصح بحجز الموعد مسبقاً لضمان توفر الوقت المناسب لكم."
    }
  },
  {
    id: 6,
    icon: "📍",
    labelEn: "Location",
    labelAr: "الموقع",
    en: {
      question: "Where are you located?",
      answer: "Six Senses Colon Cleansing & Wellbeing Center is conveniently located in: Um Uthainah, Shatt Al Arab Street, Diva Diamonds Center Building, Floor -1, Amman, Jordan. Free parking is available nearby. Please contact us if you need assistance with directions."
    },
    ar: {
      question: "أين يقع المركز؟",
      answer: "يقع مركز سيكس سينسز لتنظيف القولون والعافية في: أم أذينة، شارع شط العرب، مجمع ديفا دايموندز، الطابق -1، عمّان - الأردن. يتوفر مواقف سيارات قريبة. يرجى التواصل معنا إذا كنتم بحاجة إلى إرشادات الوصول."
    }
  },
  {
    id: 7,
    icon: "🛡️",
    labelEn: "Safety",
    labelAr: "الأمان",
    en: {
      question: "Is Colon Hydrotherapy safe?",
      answer: "When performed by trained professionals and after proper assessment, Colon Hydrotherapy is generally considered safe for suitable candidates."
    },
    ar: {
      question: "هل تنظيف القولون المائي آمن؟",
      answer: "عند إجرائه بواسطة مختصين مدربين وبعد تقييم الحالة الصحية، يُعتبر تنظيف القولون المائي إجراءً آمناً لمعظم الأشخاص المناسبين للجلسة."
    }
  },
  {
    id: 8,
    icon: "🏥",
    labelEn: "Procedure",
    labelAr: "كيفية الجلسة",
    en: {
      question: "How is the procedure performed?",
      answer: "The session is performed in a private treatment room by a trained therapist. A small disposable tube is gently inserted, and warm filtered water flows through a completely closed sanitary system. The session usually lasts between 45–60 minutes. Clients remain covered and comfortable throughout."
    },
    ar: {
      question: "كيف تتم الجلسة؟",
      answer: "تُجرى الجلسة في غرفة خاصة بواسطة أخصائي/ة مدرب/ة. يتم استخدام أنبوب صغير أحادي الاستخدام مع تدفق مياه دافئة ومنقاة عبر نظام مغلق وآمن بالكامل. تستغرق الجلسة عادةً بين 45 و60 دقيقة. يحافظ العميل على خصوصيته وراحته طوال فترة الجلسة."
    }
  },
  {
    id: 9,
    icon: "😌",
    labelEn: "Comfort",
    labelAr: "الراحة/الألم",
    en: {
      question: "Is the procedure painful?",
      answer: "Most clients find the procedure comfortable and relaxing. Some may experience mild cramping or pressure that usually passes quickly."
    },
    ar: {
      question: "هل الجلسة مؤلمة؟",
      answer: "معظم العملاء يجدون الجلسة مريحة ومسترخية. قد يشعر البعض بتقلصات خفيفة أو ضغط بسيط يزول بسرعة."
    }
  },
  {
    id: 10,
    icon: "⏳",
    labelEn: "Duration",
    labelAr: "مدة الجلسة",
    en: {
      question: "How long does a session take?",
      answer: "Approximately 45–60 minutes."
    },
    ar: {
      question: "كم تستغرق الجلسة؟",
      answer: "حوالي 45–60 دقيقة."
    }
  },
  {
    id: 11,
    icon: "🔢",
    labelEn: "Sessions",
    labelAr: "عدد الجلسات",
    en: {
      question: "How many sessions do I need?",
      answer: "The number of sessions varies from person to person depending on their health goals and individual needs.\n\nSome clients benefit from one session, while others may choose a package of 3, 5, 8, or 12 sessions. Our team will recommend a suitable program after your assessment."
    },
    ar: {
      question: "كم جلسة أحتاج؟",
      answer: "عدد الجلسات يختلف من شخص لآخر حسب الحالة الصحية والأهداف المطلوبة.\n\nبعض العملاء يكتفون بجلسة واحدة، بينما يفضل آخرون باقات من 3 أو 5 أو 8 أو 12 جلسة. سيقوم فريقنا بتقديم التوصية المناسبة بعد التقييم."
    }
  },
  {
    id: 12,
    icon: "📝",
    labelEn: "Preparation",
    labelAr: "التحضير قبل",
    en: {
      question: "What should I do before my appointment?",
      answer: "Drink plenty of water and eat light meals. Avoid heavy meals 2–3 hours before your appointment."
    },
    ar: {
      question: "ماذا أفعل قبل موعدي؟",
      answer: "يُنصح بشرب كمية كافية من الماء وتناول وجبات خفيفة. ويُفضل تجنب الوجبات الثقيلة قبل الجلسة بساعتين إلى ثلاث ساعات."
    }
  },
  {
    id: 13,
    icon: "🏃",
    labelEn: "Recovery",
    labelAr: "العودة للنشاط",
    en: {
      question: "Can I return to my normal activities afterward?",
      answer: "Yes. Most clients resume their normal daily activities immediately after the session."
    },
    ar: {
      question: "هل يمكنني العودة لنشاطي الطبيعي بعد الجلسة؟",
      answer: "نعم. يعود معظم العملاء إلى أنشطتهم اليومية المعتادة مباشرة بعد الجلسة."
    }
  },
  {
    id: 14,
    icon: "🔄",
    labelEn: "Comparison",
    labelAr: "مقارنة بالمنظار",
    en: {
      question: "Is Colon Hydrotherapy the same as a Colonoscopy?",
      answer: "No. A colonoscopy is a medical diagnostic procedure performed by a gastroenterologist using a camera. Colon Hydrotherapy is a wellness procedure that uses warm filtered water to cleanse the colon. No camera, anesthesia, or sedation is involved."
    },
    ar: {
      question: "هل تنظيف القولون المائي هو نفسه تنظير القولون؟",
      answer: "لا. تنظير القولون هو إجراء طبي تشخيصي يتم بواسطة طبيب جهاز هضمي باستخدام كاميرا. أما تنظيف القولون المائي فهو إجراء صحي يستخدم المياه الدافئة والمنقاة لتنظيف القولون. ولا يتم استخدام كاميرا أو تخدير أو مهدئات."
    }
  },
  {
    id: 15,
    icon: "💳",
    labelEn: "Insurance",
    labelAr: "التأمين الصحي",
    en: {
      question: "Do you accept insurance?",
      answer: "Our wellness services are generally not covered by insurance.\n\nPlease check with your insurance provider regarding any possible coverage."
    },
    ar: {
      question: "هل تقبلون التأمين الصحي؟",
      answer: "خدمات العافية لدينا لا تكون مشمولة عادةً ضمن التأمين الصحي.\n\nيرجى مراجعة شركة التأمين الخاصة بكم لمعرفة إمكانية التغطية."
    }
  }
];

export default function Faq() {
  const [activeId, setActiveId] = useState(1);
  const [displayId, setDisplayId] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);

  const duration = 8000; // time per question in ms
  const tickTime = 50;   // timer granularity in ms
  const progressIncrement = (tickTime / duration) * 100;

  const timerRef = useRef(null);

  // Transition handler to display new question smoothly
  useEffect(() => {
    if (activeId !== displayId) {
      setIsTransitioning(true);
      const timeout = setTimeout(() => {
        setDisplayId(activeId);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [activeId, displayId]);

  // Autoplay countdown effect
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveId((current) => (current % FAQ_DATA.length) + 1);
            return 0;
          }
          return prev + progressIncrement;
        });
      }, tickTime);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, progressIncrement]);

  const handleSelect = (id) => {
    setActiveId(id);
    setProgress(0);
  };

  const currentFaq = FAQ_DATA.find(item => item.id === displayId) || FAQ_DATA[0];

  return (
    <section id="faq" className="py-24 bg-cream relative overflow-hidden">
      {/* Premium organic background design elements */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 rounded-full bg-rose/5 blur-3xl animate-float1" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-tan/5 blur-3xl animate-float2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-[750px] mx-auto mb-20 reveal">
          <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-rose font-medium mb-3 block">
            FAQ · Frequently Asked Questions
          </span>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-brown leading-tight italic mb-6">
            Curious Minds, <br />
            <span className="not-italic text-rose">Clear Paths</span>
          </h2>
          <div className="w-16 h-[1px] bg-rose/40 mx-auto"></div>
        </div>

        {/* Interactive FAQ Dashboard */}
        <div
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center reveal"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >

          {/* Radial Controller (Zen Clock/Dial scaled for elements) */}
          <div className="relative w-[340px] h-[340px] flex items-center justify-center select-none scale-90 sm:scale-100 shrink-0">
            {/* Ambient Background Circles */}
            <div className="absolute w-[260px] h-[260px] rounded-full border border-tan/10 animate-spin-slow" />
            <div className="absolute w-[230px] h-[230px] rounded-full border border-dashed border-tan/20" />

            {/* SVG Circle Timer Bar */}
            <div className="absolute z-10 w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90 select-none pointer-events-none">
                {/* Track circle */}
                <circle
                  cx="88"
                  cy="88"
                  r="74"
                  stroke="rgba(210, 180, 140, 0.12)"
                  strokeWidth="3"
                  fill="transparent"
                />
                {/* Animated active progress circle */}
                <circle
                  cx="88"
                  cy="88"
                  r="74"
                  stroke="#E2A9A1"
                  strokeWidth="3.5"
                  fill="transparent"
                  strokeDasharray="465"
                  strokeDashoffset={465 - (465 * progress) / 100}
                  className="transition-all duration-75 ease-linear"
                  strokeLinecap="round"
                />
              </svg>

              {/* Central Chronometer Control Display */}
              <div className="absolute flex flex-col items-center justify-center">
                <span className="font-serif text-3xl italic text-brown font-light">
                  {displayId < 10 ? `0${displayId}` : displayId} <span className="text-xs text-tan/60 not-italic">/ {FAQ_DATA.length}</span>
                </span>

                {/* Pause/Play Controls */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="mt-2 text-[10px] tracking-widest uppercase text-tan hover:text-rose transition-colors flex items-center gap-1 font-sans cursor-pointer focus:outline-none"
                >
                  <span className="text-xs">{isPlaying ? "⏸" : "▶"}</span>
                  <span>{isPlaying ? "Pause" : "Play"}</span>
                </button>
              </div>
            </div>

            {/* Dial Orbital Nodes (Sectors positioned via trig mapping) */}
            {FAQ_DATA.map((item, index) => {
              const total = FAQ_DATA.length;
              const angle = (index * 360) / total - 90; // offset by 90 to start top
              const rad = (angle * Math.PI) / 180;
              const R = 132; // Radius from center

              // Position coordinate computation
              const left = 170 + R * Math.cos(rad);
              const top = 170 + R * Math.sin(rad);
              const isActive = item.id === activeId;

              return (
                <div
                  key={item.id}
                  className="absolute z-20 group cursor-pointer"
                  style={{
                    left: `${left}px`,
                    top: `${top}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onClick={() => handleSelect(item.id)}
                  onMouseEnter={() => setHoveredNode(item.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Outer Pulsing Aura */}
                  {isActive && (
                    <div className="absolute -inset-2.5 rounded-full bg-rose/25 animate-ping opacity-60" />
                  )}

                  {/* Main Node button */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 shadow-md ${isActive
                        ? 'bg-rose text-white border-rose scale-110 shadow-rose/20'
                        : 'bg-white text-brown border-tan/30 hover:border-rose hover:scale-105 hover:text-rose'
                      }`}
                  >
                    <span className="text-sm select-none">{item.icon}</span>
                  </div>

                  {/* Tooltip Overlay on hover */}
                  <div
                    className={`absolute bottom-12 left-1/2 -translate-x-1/2 bg-brown text-white text-[10px] py-2 px-3 rounded-xl shadow-xl w-32 text-center pointer-events-none transition-all duration-300 z-50 ${hoveredNode === item.id ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
                      }`}
                  >
                    <span className="font-sans font-medium">{item.labelEn}</span>
                    {/* Tooltip arrow */}
                    <div className="w-2 h-2 bg-brown rotate-45 absolute bottom-[-4px] left-1/2 -translate-x-1/2" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Symmetrical FAQ Portal Card */}
          <div className="w-full flex-1 max-w-2xl relative min-h-[260px] flex items-center">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-[32px] border border-white/50 shadow-[0_24px_50px_rgba(92,64,51,0.06)]" />

            {/* Dynamic Card Content */}
            <div className="relative z-10 p-8 md:p-12 w-full">
              <div
                className={`transition-all duration-300 transform ${isTransitioning ? 'opacity-0 translate-y-4 filter blur-sm' : 'opacity-100 translate-y-0 filter blur-0'
                  }`}
              >
                <div className="flex flex-col justify-between text-left pr-2">
                  <div>
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-rose font-semibold block mb-4">
                      {currentFaq.labelEn}
                    </span>
                    <h3 className="font-serif text-2xl lg:text-3xl italic text-brown font-light leading-snug mb-5">
                      {currentFaq.en.question}
                    </h3>
                    <p className="font-sans text-sm md:text-base font-light text-taupe leading-relaxed whitespace-pre-line">
                      {currentFaq.en.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Progress Bar Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-[32px] bg-tan/10 select-none">
              <div
                className="h-full bg-gradient-to-r from-rose to-tan transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
