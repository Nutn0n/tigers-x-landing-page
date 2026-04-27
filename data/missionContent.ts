export const missionMeta = [
  { label: "Type", value: "Active Payload with Data Connectivity" },
  { label: "Destination", value: "International Space Station" },
  { label: "Mission", value: "Medical Research for Earth and Space" },
  { label: "Status", value: "Launching in May 2026" },
] as const;

export const heroContent = {
  eyebrow: "Mission Brief / 01",
  title: "TIGERS-X",
  subtitle:
    "Thailand Innovative G-force Varied Emulsification Research for Space Exploration",
  tagline:
    "Built in Thailand. Bound for the International Space Station. Designed to Change Medicine.",
  body: "A small cube, built by Thai researchers and engineers, preparing to operate aboard the International Space Station. TIGERS-X is an active payload designed to study Total Parenteral Nutrition in microgravity, testing how complex medical formulations behave when gravity is no longer part of the equation.",
  ctas: [
    { label: "Explore The Mission", href: "#story", variant: "primary" as const },
    {
      label: "View Specifications",
      href: "#specifications",
      variant: "ghost" as const,
    },
  ],
};

export const storyContent = {
  eyebrow: "Chapter 01 / Premise",
  heading: "A Small Cube That Challenges Gravity",
  paragraphs: [
    "There are moments in science where a simple question quietly breaks an entire assumption.",
    "What if medicine does not have to be made on Earth?",
    "TIGERS-X is not just heading to space. It is testing that question in the only place where the rules of fluid physics fundamentally change. At just 2.5 kilograms, it looks small. But scale in space has never been about size. It is about what assumptions you are willing to remove.",
  ],
};

export const scienceContent = {
  eyebrow: "Chapter 02 / Science",
  heading: "Changing Medicine At Its Core",
  subheading: "Studying Total Parenteral Nutrition on Low Earth Orbit",
  paragraphs: [
    "Total Parenteral Nutrition, or TPN, is a life-sustaining medical treatment that delivers essential nutrients directly into the bloodstream for patients who cannot use their digestive systems. It contains lipids, proteins, and carbohydrates in a complex emulsion.",
    "On Earth, gravity causes oil-based and water-based phases to separate quickly. This makes long-term stability difficult to study. In microgravity, researchers can observe fluid dynamics and interfacial behavior without the constant distortion of gravity.",
  ],
  comparison: [
    {
      mode: "Earth Gravity",
      result: "Phase separation",
      detail:
        "Density-driven sedimentation distorts the emulsion within minutes.",
    },
    {
      mode: "Microgravity",
      result: "Stable observation window",
      detail: "Interfacial behaviour becomes visible without buoyancy noise.",
    },
  ],
};

export const microgravityContent = {
  eyebrow: "Chapter 03 / Environment",
  heading: "Microgravity Is Not The Limitation. It Is The Laboratory.",
  paragraphs: [
    "Space is often described as harsh. But for TIGERS-X, space is a cleaner experimental environment.",
    "Without sedimentation and buoyancy-driven separation, fluids behave differently. Interfaces become easier to observe. Hidden dynamics become visible. The goal is not only to understand medicine in space, but to redesign how complex formulations may be produced on Earth.",
  ],
};

export const systemDesignContent = {
  eyebrow: "Chapter 04 / Implication",
  heading: "Rethinking How Medicine Is Made. Anywhere.",
  paragraphs: [
    "If complex formulations can be mixed reliably without gravity and without human intervention, then pharmaceutical manufacturing can be reimagined.",
    "Instead of centralized, large-scale, resource-heavy systems, TIGERS-X suggests a future of distributed, on-demand, resilient medical production. A future where critical treatments may be produced closer to the patient, with systems designed for precision, accessibility, and autonomy.",
  ],
  cards: [
    {
      index: "I",
      title: "Centralized Manufacturing",
      detail:
        "Today, complex medical formulations rely on large facilities, cold chains, and long logistics tails.",
    },
    {
      index: "II",
      title: "On-Demand Production",
      detail:
        "Smaller systems can synthesize critical treatments closer to where they are needed.",
    },
    {
      index: "III",
      title: "Autonomous Medical Systems",
      detail:
        "Closed-loop, instrumented hardware operates without continuous human supervision.",
    },
  ],
};

export const activePayloadContent = {
  eyebrow: "Chapter 05 / Operations",
  heading: "Thailand’s First Payload That Can Phone Home To Bangkok",
  paragraphs: [
    "TIGERS-X is an active communication payload designed to operate with direct telemetry and telecommand between orbit and Earth. Researchers can monitor and control the experiment in near real time without astronaut intervention.",
    "This changes the payload from something simply sent to space into something operated in space.",
  ],
  link: [
    { id: "iss", label: "International Space Station", sub: "Columbus Module" },
    {
      id: "esa",
      label: "ESA / Space Applications Services",
      sub: "Ground Station, Belgium",
    },
    {
      id: "bkk",
      label: "Mission Control",
      sub: "Bangkok, Thailand",
    },
  ],
};

export const networkContent = {
  eyebrow: "Chapter 06 / Architecture",
  heading: "Secure Connection To The Station",
  paragraphs: [
    "The payload communicates through the International Space Station’s onboard TCP/IP network, linked through Space Applications Services’ ground station in Zaventem, Belgium, and connected to the Bangkok mission control team through a secure internet connection.",
    "This allows the team to receive telemetry and send telecommands to the International Space Station in near real time.",
  ],
  nodes: [
    {
      id: "payload",
      label: "TIGERS-X Payload",
      sub: "Active OBC, ISS TCP/IP",
      x: 8,
      y: 60,
    },
    {
      id: "iss",
      label: "ISS Network",
      sub: "Columbus Module Bus",
      x: 30,
      y: 30,
    },
    {
      id: "gs",
      label: "Zaventem Ground Station",
      sub: "Space Applications Services, BE",
      x: 58,
      y: 60,
    },
    {
      id: "mc",
      label: "Mission Control",
      sub: "Bangkok, TH — Secure Tunnel",
      x: 86,
      y: 30,
    },
  ],
  edges: [
    ["payload", "iss"],
    ["iss", "gs"],
    ["gs", "mc"],
  ],
};

export const specContent = {
  eyebrow: "Chapter 07 / Specification",
  heading: "Engineered Within Constraint",
  paragraphs: [
    "In space engineering, constraint is not a limitation. It is the design language. Every gram, watt, and interface must justify itself.",
  ],
  specs: [
    { key: "Dimension", value: "100 × 100 × 200", unit: "mm" },
    { key: "Material", value: "Aluminum 7075", unit: "" },
    { key: "Launch Mass", value: "2.5", unit: "kg" },
    { key: "On-board Computer", value: "Orange Pi", unit: "" },
    { key: "Power Consumption", value: "18", unit: "W Peak" },
    { key: "Data Connectivity", value: "Telemetry + Telecommand", unit: "" },
  ],
};

export const builtInThailandContent = {
  eyebrow: "Chapter 08 / Heritage",
  heading: "Built By Thai Researchers And Engineers",
  paragraphs: [
    "TIGERS-X represents a full-stack effort developed in Thailand, from system design and hardware integration to testing and mission operations. Using local resources and facilities, the team translated research experience into a flight-ready payload, proving that Thailand can deliver complex space systems end to end.",
  ],
  imageGrid: [
    {
      caption: "Cleanroom integration",
      tag: "Lab / Bangkok",
      tone: "navy",
    },
    {
      caption: "Payload structure assembly",
      tag: "Aluminum 7075 chassis",
      tone: "deep",
    },
    {
      caption: "Engineering team review",
      tag: "Mission Operations",
      tone: "navy",
    },
    {
      caption: "Vibration & thermal testing",
      tag: "Qualification campaign",
      tone: "deep",
    },
    {
      caption: "Optical observation module",
      tag: "Imaging payload",
      tone: "navy",
    },
    {
      caption: "Flight-ready unit",
      tag: "Pre-shipment, March 2026",
      tone: "deep",
    },
  ],
};

export type TimelineItem = {
  date: string;
  title: string;
  body: string;
};

export const timelineContent: { eyebrow: string; heading: string; items: TimelineItem[] } = {
  eyebrow: "Chapter 09 / Timeline",
  heading: "Mission Timeline",
  items: [
    {
      date: "2024",
      title: "Introduction",
      body: "The project was initiated following KEETA’s heritage after participating in NASA’s Space Food Challenge project.",
    },
    {
      date: "2024",
      title: "Design Review",
      body: "The team passed PDR and CDR and began developing the payload to meet scientific objectives.",
    },
    {
      date: "Nov 2024",
      title: "Zero-G Flight Test",
      body: "The experiment was tested on a Zero-G flight as a proof of concept.",
    },
    {
      date: "Nov 2024 – Feb 2026",
      title: "Integration And Testing",
      body: "The experiment cube was designed, built, and tested in Thailand using local resources.",
    },
    {
      date: "March 2026",
      title: "Delivery",
      body: "The payload was delivered and tested at Space Applications Services in Belgium, with final preparations after handover to ESA and NASA.",
    },
    {
      date: "May 2026",
      title: "Launch And Installation",
      body: "The payload will launch to the International Space Station aboard SpaceX Dragon CRS-34 from Cape Canaveral Space Force Station.",
    },
    {
      date: "May – June 2026",
      title: "Station Science Mission",
      body: "The payload will be installed in the Columbus module and transmit recorded experiment video to the ground station.",
    },
    {
      date: "June 2026 / EOY 2026",
      title: "Return To Earth",
      body: "The experiment cube will return to Earth with CRS-34 before the end of 2026.",
    },
  ],
};

export const legacyContent = {
  eyebrow: "Chapter 10 / Legacy",
  heading: "Laying The Groundwork For The Next Generation In Space",
  paragraphs: [
    "The most important output of TIGERS-X is not only the hardware or the experiment data. It is the knowledge that remains.",
    "Through a comprehensive digital archive and operational knowledge transfer, every lesson learned from design, integration, testing, launch preparation, and mission operation is documented. The goal is to build space heritage so future generations of Thai space engineers will never have to start from zero again.",
  ],
  archives: [
    { code: "TX-001", title: "Mission Operations Log", lines: 1284 },
    { code: "TX-002", title: "Thermal Vacuum Report", lines: 612 },
    { code: "TX-003", title: "Vibration Qualification", lines: 478 },
    { code: "TX-004", title: "OBC Firmware Build Notes", lines: 902 },
    { code: "TX-005", title: "Ground Segment Handbook", lines: 1340 },
    { code: "TX-006", title: "Lessons Learned Index", lines: 256 },
  ],
};

export const closingContent = {
  eyebrow: "Chapter 11 / Closing",
  heading:
    "A Small Cube. A Giant Step For Thai Space Technology And Healthcare Innovation.",
  paragraphs: [
    "TIGERS-X is not just a payload. It is a transition point.",
    "From sending things to space to operating systems in space.",
    "From isolated experiments to accumulated capability.",
    "From medical research to the future of autonomous production beyond Earth.",
  ],
  ctas: [
    { label: "Follow The Mission", href: "#follow", variant: "primary" as const },
    { label: "Contact The Team", href: "#contact", variant: "ghost" as const },
  ],
};
