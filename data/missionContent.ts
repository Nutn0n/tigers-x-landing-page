export type Locale = "en" | "th";

export const LOCALE_STORAGE_KEY = "tigers-x-locale";

const bundleEn = {
  common: {
    loadingModel: "LOADING PAYLOAD MODEL…",
  },

  missionMeta: [
    { label: "Type", value: "Active Payload with Data Connectivity" },
    { label: "Destination", value: "International Space Station" },
    { label: "Mission", value: "Medical Research for Earth and Space" },
    { label: "Status", value: "Launching in May 2026" },
  ],

  heroContent: {
    eyebrow: "Mission Brief / 01",
    title: "TIGERS-X",
    subtitle:
      "Thailand Innovative G-force Varied Emulsification Research for Space Exploration",
    tagline:
      "Built in Thailand. Bound for the International Space Station. Designed to Change Medicine.",
    body: "A small cube, built by Thai researchers and engineers, preparing to operate aboard the International Space Station. TIGERS-X is an active payload designed to study Total Parenteral Nutrition in microgravity, testing how complex medical formulations behave when gravity is no longer part of the equation.",
    ctas: [
      { label: "Explore", href: "#story", variant: "primary" as const },
      {
        label: "View Specifications",
        href: "#specifications",
        variant: "ghost" as const,
      },
    ],
    brandLine: "TIGERS-X / Mission Brief",
    navMission: "Mission",
    navScience: "Science",
    navSpecs: "Specs",
    navTimeline: "Timeline",
    navFollow: "Follow Mission",
    stickySubtitle: "Mission Brief / 2026",
    stickyCountdown: "T-MINUS · MAY 2026",
    insigniaLabel: "Mission Insignia",
    crsLine: "TIGERS-X · CRS-34",
    columbusLine: "ISS / COLUMBUS · 2026",
    metadataTitle: "Mission Metadata",
    liveLabel: "LIVE",
  },

  storyContent: {
    eyebrow: "Chapter 01 / Premise",
    heading: "Investigating Fluid Physics In Microgravity",
    paragraphs: [
      "This payload is designed to investigate how complex fluids behave in microgravity. It is the first of its kind to study Total Parenteral Nutrition in space. It is a small cube, built by Thai researchers and engineers, preparing to operate aboard the International Space Station.",
    ],
  },

  scienceContent: {
    eyebrow: "Chapter 02 / Science",
    heading: "Medicine At Its Core",
    subheading: "Studying Total Parenteral Nutrition on Low Earth Orbit",
    paragraphs: [
      "Total Parenteral Nutrition (TPN) is a life-saving solution for patients who cannot use their gastrointestinal system, yet it still relies on a “One-Size-Fits-All” approach rather than true Personalized Medicine. The limitation is not just about selecting nutrients, but understanding how they behave as complex systems.",
      "In practice, TPN depends on stable multi-phase emulsions of lipids, water, and biomolecules. Their behavior—droplet size, coalescence, and phase separation—directly affects dosing accuracy and safety, with instability posing risks such as fat embolism or nutrient degradation.",
    ],
  },

  microgravityContent: {
    eyebrow: "Chapter 03 / Environment",
    heading: "Use Microgravity as a Key to New Discovery",
    paragraphs: [
      "studying these systems on Earth is fundamentally limited by physics. Gravity is not just another variable, it is a dominant force that drives sedimentation, buoyancy-driven separation, and convection. These effects mask microscale behaviors governed by surface tension and diffusion.",
      "Microgravity aboard the International Space Station acts as a “physics sandbox,” allowing us to isolate fundamental mechanisms of buoyancy and fluid physics. This enables direct observation which are phenomena that are otherwise inaccessible on Earth. ",
    ],
    cards: [
      {
        title: "Phase 1 / Short-Duration Flights",
        body: "The first phase involved short-duration microgravity flights, providing initial insights into fluid distribution in the absence of gravity-driven separation. However, less than a minute of microgravity limited the ability to study time evolution or steady-state behavior.",
      },
      {
        title: "Phase 2 / Long-Duration ISS Studies",
        body: "The second phase advances to long-duration experiments aboard the ISS, enabling precise, repeatable observation of temporal dynamics and equilibrium states, and allowing systematic experimental design.",
      },
    ],
  },

  systemDesignContent: {
    eyebrow: "Chapter 04 / Implication",
    heading: "Rethinking How Medicine Is Made. On Earth and In Space.",
    paragraphs: [
      "The goal is not simply to mix fluids in space, but to build datasets and models of nutrient systems in microgravity that can be translated into real medical applications like TPN. This shifts the focus from demonstration to understanding the underlying physics of how these fluids behave.",
    ],
    timelineTitle: "Impact Timeline",
    impacts: [
      {
        term: "Short Term",
        title: "Improve TPN formulations on earth",
        body: "Insights from this project can improve TPN formulations on Earth, especially for patient-specific nutrition. For example, reducing emulsifier dependency can increase formulation flexibility and better support personalized medicine.",
      },
      {
        term: "Medium Term",
        title: "Food and fluid systems for long-duration space missions",
        body: "This knowledge informs food and fluid system design for long-duration space missions. In space, formulations must remain stable over time, resist phase separation, be storable, and flow properly without gravity, requiring fluid delivery systems built for microgravity behavior.",
      },
      {
        term: "Long Term",
        title: "Space medicine allowing multi-planetary species",
        body: "These advances contribute to space medicine, including drug mixing in microgravity, nutritional delivery, surgery that requires precise fluid control without gravity, and preventive care such as fluid balance management and long-term health optimization for multi-planetary species.",
      },
    ],
  },

  activePayloadContent: {
    eyebrow: "Chapter 05 / Operations",
    heading: "Operate Remotely at the Space Station",
    paragraphs: [
      "TIGERS-X is an active communication payload designed to operate with direct telemetry and telecommand between orbit and Earth. Researchers can monitor and control the experiment in near real time without astronaut intervention.",
      "This changes the payload from something simply sent to space into something operated in space.",
    ],
    diagramCaption: "FIG. 05 / Telemetry & Telecommand Link",
    activeBadge: "ACTIVE",
    diagramFooter: ["LATENCY ≈ 1.2s", "TCP/IP · ENCRYPTED", "BIDIRECTIONAL"],
    nodePrefix: "NODE",
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
  },

  networkContent: {
    eyebrow: "Chapter 06 / Architecture",
    diagramTitle: "NETWORK ARCHITECTURE / TIGERS-X ↔ MCC-BKK",
    heading: "Secure Connection To The Station",
    paragraphs: [
      "The payload communicates through the International Space Station’s onboard TCP/IP network, linked through Space Applications Services’ ground station in Zaventem, Belgium, and connected to the Bangkok mission control team through a secure internet connection.",
      "This allows the team to receive telemetry and send telecommands to the International Space Station in near real time.",
    ],
    headerRight: "LINK ESTABLISHED",
    statsTable: [
      { key: "Protocol", value: "TCP/IP" },
      { key: "Encryption", value: "TLS / VPN" },
      { key: "Throughput", value: "≈ 1.5 Mbps" },
      { key: "Mode", value: "Bi-directional" },
    ],
    nodes: [
      {
        id: "payload",
        label: "TIGERS-X Payload",
        sub: "Active OBC, ISS TCP/IP",
        x: 10,
        y: 40,
      },
      {
        id: "iss",
        label: "ISS Network",
        sub: "Columbus Module Bus",
        x: 36,
        y: 40,
      },
      {
        id: "gs",
        label: "Zaventem Ground Station",
        sub: "Space Applications Services, BE",
        x: 64,
        y: 40,
      },
      {
        id: "mc",
        label: "Mission Control",
        sub: "Bangkok, TH — Secure Tunnel",
        x: 90,
        y: 40,
      },
    ],
    edges: [
      ["payload", "iss"],
      ["iss", "gs"],
      ["gs", "mc"],
    ],
  },

  specContent: {
    eyebrow: "Chapter 07 / Specification",
    heading: "Compact But Powerful",
    paragraphs: [
      "In space engineering, constraint is not a limitation. It is the design language. Every gram, watt, and interface must justify itself.",
    ],
    specs: [
      { key: "Dimension", value: "100 × 100 × 200", unit: "mm" },
      { key: "Material", value: "Aluminum 7075", unit: "" },
      { key: "Launch Mass", value: "2.5", unit: "kg" },
      { key: "Computer", value: "Orange Pi", unit: "" },
      { key: "Power", value: "18", unit: "W Peak" },
      { key: "Data Connectivity", value: "Available", unit: "" },
    ],
  },

  builtInThailandContent: {
    eyebrow: "Chapter 08 / Heritage",
    heading: "Built By Thai Researchers And Engineers",
    paragraphs: [
      "TIGERS-X represents a full-stack effort developed in Thailand, from system design and hardware integration to testing and mission operations. Using local resources and facilities, the team translated research experience into a flight-ready payload, proving that Thailand can deliver complex space systems end to end.",
    ],
    originLabel: "MADE IN",
    originLine: "Thailand",
    featureImage: {
      src: "/heritage.jpeg",
      alt: "TIGERS-X payload integration and engineering in Thailand",
    },
  },

  timelineContent: {
    eyebrow: "Chapter 09 / Timeline",
    heading: "Mission Timeline",
    intro:
      "From idea to orbit and back to Earth — the operational beats of TIGERS-X.",
    railStatus: "T-MINUS · STATUS",
    railOnTrack: "ON TRACK",
    railLaunchMonth: "May 2026",
    railLaunchSub: "Launch / SpaceX Dragon CRS-34",
    railPills: [
      "INTRO 2024",
      "PDR/CDR",
      "ZERO-G",
      "INTEGRATION",
      "DELIVERY",
      "LAUNCH",
      "µG SCIENCE",
      "RETURN",
    ],
    phasePrefix: "MISSION PHASE",
    items: [
      {
        date: "2024",
        title: "Introduction",
        body: "The project was initiated following KEETA’s heritage after participating in NASA’s Space Food Challenge project.",
        imageSrc: "/public/timeline-01.jpg",
      },
      {
        date: "2024",
        title: "Design Review",
        body: "The team passed PDR and CDR and began developing the payload to meet scientific objectives.",
        imageSrc: "/public/timeline-02.jpg",
      },
      {
        date: "Nov 2024",
        title: "Zero-G Flight Test",
        body: "The experiment was tested on a Zero-G flight as a proof of concept.",
        imageSrc: "/public/timeline-03.jpg",
      },
      {
        date: "Nov 2024 – Feb 2026",
        title: "Integration And Testing",
        body: "The experiment cube was designed, built, and tested in Thailand using local resources.",
        imageSrc: "/public/timeline-04.jpg",
      },
      {
        date: "March 2026",
        title: "Delivery",
        body: "The payload was delivered and tested at Space Applications Services in Belgium, with final preparations after handover to ESA and NASA.",
        imageSrc: "/public/timeline-05.jpg",
      },
      {
        date: "May 2026",
        title: "Launch And Installation",
        body: "The payload will launch to the International Space Station aboard SpaceX Dragon CRS-34 from Cape Canaveral Space Force Station.",
        imageSrc: "/public/timeline-06.jpg",
      },
      {
        date: "May – June 2026",
        title: "Station Science Mission",
        body: "The payload will be installed in the Columbus module and transmit recorded experiment video to the ground station.",
        imageSrc: "/public/timeline-07.jpg",
      },
      {
        date: "June 2026 / EOY 2026",
        title: "Return To Earth",
        body: "The experiment cube will return to Earth with CRS-34 before the end of 2026.",
        imageSrc: "/public/timeline-08.jpg",
      },
    ],
  },

  legacyContent: {
    eyebrow: "Chapter 10 / Heritage",
    heading: "Laying The Groundwork For The Next Generation In Space",
    paragraphs: [
      "The most important output of TIGERS-X is not only the hardware or the experiment data. It is the knowledge that remains.",
      "Through a comprehensive digital archive and operational knowledge transfer, every lesson learned from design, integration, testing, launch preparation, and mission operation is documented. The goal is to build space heritage so future generations of Thai space engineers will never have to start from zero again.",
    ],
    heritageTitle: "Open Heritage",
    heritageTagline:
      "The next generation of Thai space engineers will not start from zero again.",
    browseArchive: "Browse Archive",
    heritageImage: {
      src: "/cleanroom.jpeg",
      alt: "TIGERS-X mission heritage and knowledge archive",
    },
  },

  closingContent: {
    eyebrow: "Chapter 11 / Closing",
    heading:
      "A Small Cube. A Giant Step For Thai Space Technology And Healthcare Innovation.",
    paragraphs: [
      "TIGERS-X is not just a payload. It is a transition point.",
      "From isolated experiments to accumulated capability.",
      "From medical research to the future of experiments beyond Earth.",
    ],
    ctas: [
      { label: "Follow The Mission", href: "#follow", variant: "primary" as const },
      { label: "Press & Media Assets", href: "#contact", variant: "ghost" as const },
    ],
    footer: {
      projectLabel: "Project",
      projectBody:
        "TIGERS-X — Thailand Innovative G-force Varied Emulsification Research for Space Exploration",
      partnersLabel: "Partners",
      partners: [
        "Space Applications Services (BE)",
        "European Space Agency",
        "NASA · SpaceX (CRS-34)",
      ],
      contactLabel: "Contact",
      followUpdates: "Follow Mission Updates",
      email: "team@tigers-x.example",
      copyright: "TIGERS-X Mission Control",
      signoffLine: "TIGERS-X · TPN µG-EXPERIMENT · CRS-34",
      signoffMid: "END OF MISSION BRIEFING",
      signoffPlaces: "BANGKOK · BRUSSELS · FLORIDA · ISS",
      researchTeamLabel: "Research Team",
      researchTeam: [
        { name: "Wares Chanchareon", role: "Project Leader" },
        { name: "Potiwat Ngamkajornwiwat", role: "Project Manager" },
        { name: "Sit Kuntinugunetanon", role: "Secretary" },
        { name: "Saran Seehanam", role: "Head of Engineering" },
        { name: "Thakdanai Sirisomat", role: "Software Engineer" },
        { name: "Jirasin Aswakool", role: "Public Affairs Officer" },
        { name: "Chanud Sithipreedanant", role: "Public Affairs Officer" },
        { name: "Warisara Boonrueng", role: "Researcher" },
        { name: "Rattanawalee Tobsri", role: "Researcher" },
        { name: "Hein Htet Aung", role: "Researcher" },
      ],
      designCredit: "Design by Nattanon Dungsunenarn",
      copyrightNotice: "TIGERS-X. All rights reserved.",
      designPartnerLabel: "Design and Communication Partner",
      designPartnerLinkText: "Spaceth.co",
      designPartnerHref: "https://spaceth.co",
    },
  },
};

export type MissionContent = typeof bundleEn;

/** Thai locale mirrors English until translations are added. */
const bundleTh: MissionContent = structuredClone(bundleEn);

export const missionBundles: Record<Locale, MissionContent> = {
  en: bundleEn,
  th: bundleTh,
};

