export interface AcademicStage {
  id: string;
  number: string;
  title: string;
  grades: string;
  curriculum: string;
  focus: string;
  description: string;
  keyOutcomes: string[];
  image: string;
  accentColor: string;
}

export interface Facility {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  size: "large" | "medium" | "tall";
}

export interface LeadershipProfile {
  name: string;
  role: string;
  credentials: string;
  experience: string;
  image: string;
  bio: string;
  quote: string;
  recognitions: string[];
}

export const school = {
  name: "The Oakrich International School",
  shortName: "Oakrich",
  tagline: "Where curiosity becomes confidence.",
  location: "Hosur, Tamil Nadu",
  address: "Oakrich Campus, Hosur, Tamil Nadu, India",
  affiliation: "ICSE Affiliated • Cambridge Pedagogy Integration",
  admissionsYear: "2026–2027",
  phone: ["7305664161", "7305664162", "7305664163"],
  primaryPhone: "7305664161",
  email: "toishosur@gmail.com",
  whatsapp: "917305664161",
  stats: [
    { value: "864+", label: "Enrolled Students", detail: "Active learners on campus", dot: "#701A75" },
    { value: "60", label: "Pedagogical Staff", detail: "Experienced & certified educators", dot: "#10B981" },
    { value: "ICSE", label: "Academic Affiliation", detail: "Integrated with Cambridge Primary", dot: "#2563EB" },
    { value: "Hosur", label: "Spacious Campus", detail: "Near Electronic City / Bangalore", dot: "#F59E0B" },
  ],
  about: {
    sectionNum: "01",
    eyebrow: "PHILOSOPHY & PURPOSE",
    heading: "A school built around possibility.",
    lead: "The Oakrich International School was established to nurture inquisitive, self-assured and socially conscious individuals who lead with intellectual depth and ethical conviction.",
    image: "/images/oakrich-teachers-students.png",
    paragraphs: [
      "Rooted in the vibrant confluence of Hosur, Oakrich brings together the rigorous analytical standards of the ICSE curriculum and the globally recognized, experiential inquiry of the Cambridge International Primary Programme.",
      "We believe that education must transcend rote memorization. In our classrooms, laboratories, and creative studios, every student is encouraged to ask fearless questions, experiment with hands-on models, and build resilience through authentic achievement.",
    ],
    pillars: [
      {
        title: "Academic Depth",
        description: "Balanced syllabus designed to master foundational literacy, numeracy, and scientific inquiry.",
        color: "#701A75",
      },
      {
        title: "Character & Leadership",
        description: "Grooming ethical mindset, civic responsibility, and public poise through structured leadership forums.",
        color: "#10B981",
      },
      {
        title: "Future Competencies",
        description: "Robotics, AI programming, communication laboratories, and creative arts woven into daily routine.",
        color: "#2563EB",
      },
    ],
  },
  academics: {
    sectionNum: "02",
    eyebrow: "CONTINUUM OF LEARNING",
    heading: "Four stages of purposeful growth.",
    description: "Our academic continuum is calibrated to meet each developmental phase — from tactile wonder in early childhood to rigorous board mastery in secondary years.",
    stages: [
      {
        id: "kindergarten",
        number: "01",
        title: "Kindergarten",
        grades: "Pre-KG, LKG & UKG",
        curriculum: "Cambridge Primary & Montessori Integration",
        focus: "Play-based exploration, sensory discovery, and joyful early literacy.",
        description: "A nurturing environment where children discover through sensory play, phonics, Montessori manipulatives, and social-emotional guidance. We foster intrinsic curiosity and early motor fluency.",
        keyOutcomes: [
          "Phonics & emergent language immersion",
          "Montessori sensorial & practical life equipment",
          "Gross & fine motor dexterity development",
          "Vibrant outdoor play & activity laboratories",
        ],
        image: "/images/oakrich-kindergarten-play.png", // Authentic Pre-KG children holding giant colored pencils
        accentColor: "#F59E0B",
      },
      {
        id: "primary",
        number: "02",
        title: "Primary School",
        grades: "Grades I – V",
        curriculum: "Cambridge + ICSE Hybrid Pedagogy",
        focus: "Foundational conceptual mastery, digital literacy, and hands-on labs.",
        description: "Students build solid competencies in mathematics, science, language arts, and digital literacy. The focus shifts from assisted play to guided inquiry and collaborative problem solving.",
        keyOutcomes: [
          "Integrated ICT & elementary coding fundamentals",
          "Experiential science experiments & math manipulatives",
          "Bilingual communicative fluency & reading circles",
          "Introduction to structured athletic and performing arts",
        ],
        image: "/images/academics/primary.jpg",
        accentColor: "#10B981",
      },
      {
        id: "middle",
        number: "03",
        title: "Middle School",
        grades: "Grades VI – VIII",
        curriculum: "ICSE Curriculum Framework",
        focus: "Critical inquiry, Olympiad / NEET / IIT-JEE foundations, and vocational exposure.",
        description: "Middle school marks the transition to analytical thinking, higher-order synthesis, and systematic preparation. Students engage with specialized faculty across scientific disciplines and competitive frameworks.",
        keyOutcomes: [
          "Targeted foundation tracks for Olympiads, NEET & IIT-JEE",
          "Specialized Physics, Chemistry, Biology & Robotics laboratories",
          "Interdisciplinary projects & debate forums",
          "Early vocational and technological workshops",
        ],
        image: "/images/oakrich-students-chess.png", // Real middle school students engaged in chess & analytical problem solving
        accentColor: "#2563EB",
      },
      {
        id: "high-school",
        number: "04",
        title: "High School",
        grades: "Grades IX – X",
        curriculum: "ICSE Board Examinations",
        focus: "Academic distinction, board mastery, competitive exam readiness, and communicative poise.",
        description: "A rigorous, disciplined academic climate geared toward achieving top-percentile ICSE results while developing mature communication, ethical reasoning, and comprehensive career roadmaps.",
        keyOutcomes: [
          "Intensive ICSE board examination strategy and mock series",
          "Advanced communicative English & personality refinement",
          "College counseling, profile building, and career guidance",
          "Leadership roles in school governance & community initiatives",
        ],
        image: "/images/academics/high-school.jpg",
        accentColor: "#701A75",
      },
    ] as AcademicStage[],
  },
  facilities: {
    sectionNum: "03",
    eyebrow: "LEARNING ENVIRONMENTS",
    heading: "Spaces engineered for discovery.",
    lead: "Every physical environment at Oakrich is an active educator — designed with natural ventilation, modern safety standards, and specialized laboratory apparatus.",
    items: [
      {
        id: "campus-building",
        title: "Main Campus & Bus Fleet",
        tagline: "Purpose-Built International Infrastructure",
        description: "Modern multi-storey academic campus equipped with spacious, naturally lit classrooms, dedicated wings for each stage, and full transport connectivity.",
        features: ["CCTV surveillance campus-wide", "Dedicated fleet of GPS-tracked buses", "Safe, monitored arrival and departure bays"],
        image: "/images/oakrich-campus-building.png",
        size: "large",
      },
      {
        id: "campus-corridor",
        title: "Academic Corridors & Spaces",
        tagline: "Wide, Clean & Naturally Ventilated",
        description: "Expansive corridors designed for student mobility, collaborative project displays, and safe movement between sessions.",
        features: ["Anti-skid institutional flooring", "Student work display galleries", "Immediate emergency exits on all floors"],
        image: "/images/oakrich-campus-corridor.png",
        size: "medium",
      },
      {
        id: "math-lab",
        title: "Mathematics Laboratory",
        tagline: "Play with Numbers. Grow with Logic.",
        description: "Demystifying mathematical abstraction through concrete manipulatives, geometric models, and interactive problem sets.",
        features: ["Algebraic tiles & spatial geometry aids", "Logic puzzles & mathematical games", "Experiential concept verification"],
        image: "/images/facilities/math-lab.jpg",
        size: "medium",
      },
      {
        id: "science-labs",
        title: "Science Laboratories",
        tagline: "Physics, Chemistry & Biology",
        description: "Dedicated, fully equipped empirical workstations equipped with digital measurement tools and strict safety protocols.",
        features: ["Independent workstations with gas/water taps", "Precision optical microscopes & glassware", "Comprehensive fume extraction & eyewash stations"],
        image: "/images/facilities/science-lab.jpg",
        size: "medium",
      },
      {
        id: "ai-coding",
        title: "AI & Coding Studio",
        tagline: "Computational Mindsets for Tomorrow",
        description: "High-spec computer lab where students master computational logic, Python programming, and fundamentals of artificial intelligence.",
        features: ["Modern workstations with high-speed fiber internet", "Curriculum covering Python, Scratch, and web basics", "Interactive algorithmic challenges"],
        image: "/images/facilities/ai-lab.jpg",
        size: "medium",
      },
      {
        id: "robotics-lab",
        title: "Robotics & Innovation Lab",
        tagline: "Where Theory Meets Mechanics",
        description: "A maker-space for assembling micro-controllers, sensors, mechanical gears, and autonomous robotics projects.",
        features: ["Arduino & modular robotic kits", "Circuit design & electronic soldering bays", "Team-based robotics tournament preparation"],
        image: "/images/facilities/robotics-lab.jpg",
        size: "tall",
      },
      {
        id: "language-lab",
        title: "Digital Language Lab",
        tagline: "Articulate, Confident Expression",
        description: "Acoustically treated audio-visual booths dedicated to phonetics, English speech clarity, active listening, and public presentation.",
        features: ["Individual headset consoles with feedback recorders", "Accent and diction training modules", "Vocabulary and conversational fluency exercises"],
        image: "/images/facilities/language-lab.jpg",
        size: "medium",
      },
      {
        id: "space-lab",
        title: "Space & Astronomy Lab",
        tagline: "Reaching Beyond Horizons",
        description: "Equipped with astronomical observation tools and celestial mapping models to inspire wonder in astrophysics and planetary science.",
        features: ["High-resolution refractor telescopes", "Digital celestial planetarium software", "Orbital mechanics & rocketry educational kits"],
        image: "/images/facilities/space-lab.jpg",
        size: "medium",
      },
    ] as Facility[],
  },
  safety: {
    sectionNum: "04",
    eyebrow: "CARE & INTEGRITY",
    heading: "A secure sanctuary for every child.",
    lead: "Child safety is not a checklist at Oakrich; it is an uncompromised institutional commitment woven into every system, route, and corridor.",
    image: "/images/oakrich-campus-building.png",
    points: [
      {
        title: "24/7 CCTV & Manned Entrances",
        description: "High-definition camera coverage across corridors, gates, and vulnerable perimeters with strict visitor badge verification.",
      },
      {
        title: "GPS-Enabled Transport Fleet",
        description: "Real-time satellite tracking, CCTV camera recording inside buses, and dedicated emergency SOS protocols.",
      },
      {
        title: "Mandatory Lady Attendant on Buses",
        description: "Every school bus route is staffed by a trained female attendant to ensure safe boarding, travel, and drop-off.",
      },
      {
        title: "Child Safety & Wellbeing Education",
        description: "Age-appropriate training on personal boundaries, digital hygiene, anti-bullying guidelines, and emotional wellbeing.",
      },
    ],
  },
  studentLife: {
    sectionNum: "05",
    eyebrow: "THE WHOLE CHILD",
    heading: "Creativity, voice and expression.",
    lead: "Beyond textbooks, life at Oakrich pulsates with cultural rhythm, artistic expression, mental agility, and civic leadership.",
    activities: [
      {
        title: "Visual Arts, Craft & Mentorship",
        tags: ["Fine Arts", "Handmade Cards", "Clay Modeling", "Creative Expression"],
        description: "Dedicated atelier and classroom projects where teachers guide students through creative crafts, greeting cards, and painting.",
        image: "/images/oakrich-teachers-students.png", // Authentic teacher-student art collage
      },
      {
        title: "Chess & Mind Sports",
        tags: ["Chess Academy", "Strategic Thinking", "Tactical Focus", "Concentration"],
        description: "Structured chess sessions coaching students in opening theories, endgame tactics, and deep cognitive visualization.",
        image: "/images/oakrich-students-chess.png", // Authentic students playing chess
      },
      {
        title: "Performing Arts & Dance",
        tags: ["Bharatanatyam", "Contemporary", "Jazz", "Hip-Hop"],
        description: "Structured dance curricula balancing classical Indian discipline with modern global expressions.",
        image: "/images/student-life/dance.jpg",
      },
      {
        title: "Music Academy",
        tags: ["Vocal Mastery", "Keyboard", "Violin", "Rhythm & Percussion"],
        description: "Comprehensive training in both Carnatic classical melodies and Western contemporary instrumental chords.",
        image: "/images/student-life/music.jpg",
      },
      {
        title: "Abacus & Mental Math",
        tags: ["Concentration", "Rapid Calculation", "Memory Training"],
        description: "Proven cognitive acceleration program enhancing numerical speed, recall, and spatial focus.",
        image: "/images/student-life/abacus.jpg",
      },
      {
        title: "Personality Enhancement & Oratory",
        tags: ["Public Speaking", "Debating", "Elocution", "Executive Presence"],
        description: "Regular stage presentations and debate circles building self-assurance, vocal projection, and persuasive clarity.",
        image: "/images/student-life/oratory.jpg",
      },
      {
        title: "JCI India Leadership",
        tags: ["Youth Parliament", "Community Action", "Team Governance"],
        description: "Affiliated youth chapter empowering students with genuine leadership responsibilities and civic engagement projects.",
        image: "/images/student-life/jci.jpg",
      },
    ],
    sports: {
      heading: "Athletics & Competitive Sports",
      description: "Instilling sportsmanship, physical endurance, and strategic teamwork through extensive indoor and outdoor facilities.",
      disciplines: [
        "Football",
        "Basketball",
        "Volleyball",
        "Cricket",
        "Athletics",
        "Javelin & Shot Put",
        "Kho-Kho",
        "Skating",
        "Taekwondo",
        "Chess (Dedicated Coaching)",
        "Carrom",
      ],
      image: "/images/student-life/sports.jpg",
    },
  },
  leadership: {
    sectionNum: "06",
    eyebrow: "STEWARDSHIP",
    heading: "Guided by seasoned vision.",
    profile: {
      name: "Dr. L. Suma Yadav",
      role: "Principal & Chairperson",
      credentials: "M.A., M.Ed., Ph.D. (Hon.)",
      experience: "18+ Years in Educational Leadership",
      image: "/images/leadership/principal.jpg",
      bio: "With over 18 years of transformative experience in progressive school education, Dr. L. Suma Yadav has steered institutions toward academic excellence, teacher empowerment, and holistic child development. Her pedagogical philosophy blends traditional moral grounding with forward-looking international curricula.",
      quote: "Our sacred duty is to construct a school where every child is seen, heard, and emboldened to reach their utmost intellectual and humane potential.",
      recognitions: [
        "Distinguished Educational Leadership Award",
        "Excellence in School Transformation & Pedagogy",
        "Keynote Speaker & Child Advocacy Contributor",
        "Lifetime Dedication to Value-Based Education",
      ],
    } as LeadershipProfile,
  },
  admissions: {
    sectionNum: "07",
    eyebrow: "ADMISSIONS 2026–2027",
    heading: "Begin your child's journey with us.",
    description: "Admissions are currently open for Kindergarten (Pre-KG, LKG, UKG) and Grades I through X. We welcome families who value academic rigor, character, and individual attention.",
    steps: [
      { step: "01", title: "Submit Enquiry", detail: "Fill out the quick online form below or message our admissions desk directly on WhatsApp." },
      { step: "02", title: "Campus Walkthrough", detail: "Visit our campus in Hosur to tour laboratories, classrooms, and sports grounds, and meet our faculty." },
      { step: "03", title: "Interactive Assessment", detail: "An informal age-appropriate interaction to understand the child's strengths, interests, and learning stage." },
      { step: "04", title: "Enrollment Confirmation", detail: "Complete necessary document verification and welcome packet orientation." },
    ],
  },
  contact: {
    sectionNum: "08",
    eyebrow: "CONNECT WITH US",
    heading: "Visit our campus in Hosur.",
    hours: [
      { days: "Monday – Friday", timing: "8:30 AM – 3:30 PM (School Hours)" },
      { days: "Saturday", timing: "8:30 AM – 12:30 PM (Activities & Meetings)" },
      { days: "Admissions Desk", timing: "9:00 AM – 4:30 PM (Mon – Sat)" },
      { days: "Sunday", timing: "Closed" },
    ],
    phones: ["7305664161", "7305664162", "7305664163"],
    email: "toishosur@gmail.com",
    addressLines: [
      "The Oakrich International School",
      "Hosur, Krishnagiri District",
      "Tamil Nadu, India",
    ],
  },
};
