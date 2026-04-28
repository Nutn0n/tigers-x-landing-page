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
      { label: "Explore The Mission", href: "#story", variant: "primary" as const },
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
    mobileCountdown: "T-MINUS · 2026",
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
    heading: "A Small Cube That Challenges Gravity",
    paragraphs: [
      "There are moments in science where a simple question quietly breaks an entire assumption.",
      "What if medicine does not have to be made on Earth?",
      "TIGERS-X is not just heading to space. It is testing that question in the only place where the rules of fluid physics fundamentally change. At just 2.5 kilograms, it looks small. But scale in space has never been about size. It is about what assumptions you are willing to remove.",
    ],
  },

  scienceContent: {
    eyebrow: "Chapter 02 / Science",
    heading: "Medicine At Its Core",
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
        envShort: "EARTH G-FIELD",
      },
      {
        mode: "Microgravity",
        result: "Stable observation window",
        detail: "Interfacial behaviour becomes visible without buoyancy noise.",
        envShort: "ISS / µG",
      },
    ],
  },

  microgravityContent: {
    eyebrow: "Chapter 03 / Environment",
    heading: "Microgravity Is Not The Limitation. It Is The Laboratory.",
    paragraphs: [
      "Space is often described as harsh. But for TIGERS-X, space is a cleaner experimental environment.",
      "Without sedimentation and buoyancy-driven separation, fluids behave differently. Interfaces become easier to observe. Hidden dynamics become visible. The goal is not only to understand medicine in space, but to redesign how complex formulations may be produced on Earth.",
    ],
    marqueeItems: [
      "FLUID DYNAMICS",
      "INTERFACIAL BEHAVIOUR",
      "EMULSION STABILITY",
      "HIDDEN DYNAMICS",
      "CLEANER ENVIRONMENT",
      "µG OBSERVATION",
    ],
  },

  systemDesignContent: {
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
  },

  activePayloadContent: {
    eyebrow: "Chapter 05 / Operations",
    heading: "Thailand’s First Payload That Can Phone Home To Bangkok",
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
      "From sending things to space to operating systems in space.",
      "From isolated experiments to accumulated capability.",
      "From medical research to the future of autonomous production beyond Earth.",
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

const bundleTh: MissionContent = {
  common: {
    loadingModel: "กำลังโหลดโมเดลเพย์โหลด…",
  },

  missionMeta: [
    { label: "ประเภท", value: "เพย์โหลดแบบใช้งานพร้อมเชื่อมต่อข้อมูล" },
    { label: "ปลายทาง", value: "สถานีอวกาศนานาชาติ" },
    { label: "ภารกิจ", value: "การวิจัยทางการแพทย์เพื่อโลกและอวกาศ" },
    { label: "สถานะ", value: "ปล่อยในเดือนพฤษภาคม 2569" },
  ],

  heroContent: {
    eyebrow: "บรีฟภารกิจ / 01",
    title: "TIGERS-X",
    subtitle:
      "การวิจัยการพ้นสภาพแบบหลากหลายด้วยแรงจีในประเทศไทย เพื่อการสำรวจอวกาศ (ชื่อย่อภาษาอังกฤษ: TIGERS-X)",
    tagline:
      "สร้างในประเทศไทย มุ่งหน้าสู่สถานีอวกาศนานาชาติ ออกแบบเพื่อเปลี่ยนการแพทย์",
    body: "ลูกบาศก์ขนาดเล็กที่นักวิจัยและวิศวกรไทยสร้างขึ้น เพื่อทำงานบนสถานีอวกาศนานาชาติ TIGERS-X เป็นเพย์โหลดที่ใช้งานได้จริง ออกแบบมาเพื่อศึกษาการให้อาหารทางหลอดเลือดครบถ้วน (TPN) ในสภาวะไร้ความโน้มถ่วง ทดสอบว่าสูตรยาที่ซับซ้อนประพฤติตัวอย่างไรเมื่อไม่มีแรงโน้มถ่วงเป็นตัวแปร",
    ctas: [
      { label: "สำรวจภารกิจ", href: "#story", variant: "primary" as const },
      { label: "ดูสเปก", href: "#specifications", variant: "ghost" as const },
    ],
    brandLine: "TIGERS-X",
    navMission: "เกี่ยวกับภารกิจ",
    navScience: "งานวิทยาศาสตร์",
    navSpecs: "ลักษณะเฉพาะ",
    navTimeline: "ช่วงเวลาภารกิจ",
    navFollow: "ติดตามภารกิจ",
    mobileCountdown: "นับถอยหลัง · 2569",
    stickySubtitle: "บรีฟภารกิจ / 2569",
    stickyCountdown: "นับถอยหลัง · พ.ค. 2569",
    insigniaLabel: "ตราภารกิจ",
    crsLine: "TIGERS-X · CRS-34",
    columbusLine: "สถานีอวกาศนานาชาติ / โมดูลโคลัมบัส · 2569",
    metadataTitle: "ข้อมูลภารกิจ",
    liveLabel: "สด",
  },

  storyContent: {
    eyebrow: "บทที่ 01 / ที่มา",
    heading: "ลูกบาศก์เล็กที่ท้าทายแรงโน้มถ่วง",
    paragraphs: [
      "ในวิทยาศาสตร์ มีช่วงเวลาที่คำถามง่าย ๆ ค่อย ๆ ทำลายสมมติฐานทั้งหมด",
      "ถ้ายาไม่จำเป็นต้องผลิตบนโลกล่ะ?",
      "TIGERS-X ไม่ได้แค่มุ่งหน้าสู่อวกาศ แต่กำลังทดสอบคำถามนั้นในที่เดียวที่กฎของฟลูอิดเปลี่ยนไปจากโลก ด้วยมวลเพียง 2.5 กิโลกรัม มันอาจดูเล็ก แต่ในอวกาศ ‘ขนาด’ ไม่เคยวัดที่ความใหญ่ — แต่วัดที่ว่าคุณพร้อมจะถอดสมมติฐานใดทิ้งบ้าง",
    ],
  },

  scienceContent: {
    eyebrow: "บทที่ 02 / วิทยาศาสตร์",
    heading: "แก่นแท้ของการรักษา",
    subheading: "ศึกษา TPN บนวงโคจรต่ำของโลก",
    paragraphs: [
      "การให้อาหารทางหลอดเลือดครบถ้วน (TPN) เป็นการรักษาที่จำเป็นต่อชีวิต โดยส่งสารอาหารเข้าสู่กระแสเลือดโดยตรงสำหรับผู้ป่วยที่ใช้ระบบย่อยอาหารไม่ได้ ประกอบด้วยไขมัน โปรตีน และคาร์โบไฮเดรตในรูปอิมัลชัน",
      "บนโลก แรงโน้มถ่วงทำให้ส่วนที่ไม่ละลายน้ำและส่วนน้ำแยกตัวเร็ว การศึกษาความคงทนจึงทำได้ยาก ในสภาวะไร้ความโน้มถ่วง นักวิจัยสังเกตพลศาสตร์ของของเหลวและพฤติกรรมที่ผิวแยกได้โดยไม่ถูกบิดเบือนจากแรงโน้มถ่วงตลอดเวลา",
    ],
    comparison: [
      {
        mode: "แรงโน้มถ่วงโลก",
        result: "การแยกชั้น",
        detail: "การตกตะกอนตามความหนาแน่นบิดเบือนอิมัลชันภายในไม่กี่นาที",
        envShort: "สนาม g โลก",
      },
      {
        mode: "ไมโครแกรวิตี",
        result: "ช่วงสังเกตที่คงที่",
        detail: "พฤติกรรมที่ผิแยกมองเห็นได้โดยไม่มีสัญญาณรบกวนจากความลอยตัว",
        envShort: "ISS / µG",
      },
    ],
  },

  microgravityContent: {
    eyebrow: "บทที่ 03 / สภาพแวดล้อม",
    heading: "ไมโครแกรวิตีไม่ใช่ข้อจำกัด แต่คือห้องทดลอง",
    paragraphs: [
      "อวกาศมักถูกพรรณนาว่าโหดร้าย แต่สำหรับ TIGERS-X อวกาศคือสภาพทดลองที่ ‘สะอาด’ กว่า",
      "เมื่อไม่มีการตกตะกอนและการแยกตัวจากความลอยตัว ของเหลวมีพฤติกรรมต่างออกไป ผิวแยกสังเกตได้ง่ายขึ้น พลศาสตร์ที่ซ่อนอยู่ปรากฏชัด เป้าหมายไม่ใช่แค่เข้าใจยาในอวกาศ แต่รีดีไซน์ว่าสูตรที่ซับซ้อนจะผลิตบนโลกได้อย่างไร",
    ],
    marqueeItems: [
      "พลศาสตร์ของเหลว",
      "พฤติกรรมที่ผิแยก",
      "ความคงทนของอิมัลชัน",
      "พลศาสตร์ที่ซ่อนอยู่",
      "สภาพแวดล้อมที่สะอาดกว่า",
      "การสังเกต µG",
    ],
  },

  systemDesignContent: {
    eyebrow: "บทที่ 04 / ผลกระทบ",
    heading: "คิดใหม่ว่ายาผลิตอย่างไร—ไม่ว่าที่ใด",
    paragraphs: [
      "ถ้าสูตรที่ซับซ้อนสามารถผสมได้อย่างน่าเชื่อถือโดยไม่พึ่งแรงโน้มถ่วงและไม่ต้องมีมนุษย์คอยควบคุมตลอด การผลิตยาในอุตสาหกรรมย่อมถูกจินตนาการใหม่",
      "แทนที่จะเป็นระบบใหญ่ รวมศูนย์ และสิ้นเปลืองทรัพยากร TIGERS-X ชี้ไปสู่อนาคตของการผลิตทางการแพทย์แบบกระจาย ตามความต้องการ และยืดหยุ่น—ให้การรักษาวิกฤตสามารถผลิตได้ใกล้ผู้ป่วยมากขึ้น ด้วยระบบที่เน้นความแม่นยำ การเข้าถึง และความเป็นอิสระ",
    ],
    cards: [
      {
        index: "I",
        title: "การผลิตแบบรวมศูนย์",
        detail:
          "ปัจจุบันสูตรยาที่ซับซ้อนต้องพึ่งโรงงานขนาดใหญ่ ห่วงโซ่ความเย็น และโลจิสติกส์ยาว",
      },
      {
        index: "II",
        title: "การผลิตตามความต้องการ",
        detail: "ระบบขนาดเล็กสังเคราะห์การรักษาวิกฤตได้ใกล้จุดที่ต้องใช้มากขึ้น",
      },
      {
        index: "III",
        title: "ระบบการแพทย์อัตโนมัติ",
        detail:
          "ฮาร์ดแวร์แบบปิดวงจรและมีเซนเซอร์ทำงานได้โดยไม่ต้องมีมนุษย์ควบคุมต่อเนื่อง",
      },
    ],
  },

  activePayloadContent: {
    eyebrow: "บทที่ 05 / การปฏิบัติการ",
    heading: "เพย์โหลดไทยชิ้นแรกที่โทรกลับบ้านถึงกรุงเทพฯ ได้",
    paragraphs: [
      "TIGERS-X เป็นเพย์โหลดสื่อสารแบบใช้งานได้จริง ออกแบบให้มีโทรเมตรีและโทรคำสั่งระหว่างวงโคจรกับโลกโดยตรง นักวิจัยสามารถตรวจสอบและควบคุมการทดลองใกล้เคียงเรียลไทม์โดยไม่ต้องให้นักบินอวกาศแทรกแซง",
      "สิ่งนี้เปลี่ยนเพย์โหลดจากของที่ ‘ส่งไปอวกาศ’ เป็นสิ่งที่ ‘ปฏิบัติการในอวกาศ’",
    ],
    diagramCaption: "รูป 05 / ลิงก์โทรเมตรีและโทรคำสั่ง",
    activeBadge: "ใช้งาน",
    diagramFooter: [
      "ความหน่วง ~ 1.2 วินาที",
      "TCP/IP · เข้ารหัส",
      "สองทาง",
    ],
    nodePrefix: "โหนด",
    link: [
      { id: "iss", label: "สถานีอวกาศนานาชาติ", sub: "โมดูลโคลัมบัส" },
      {
        id: "esa",
        label: "ESA / Space Applications Services",
        sub: "สถานีภาคพื้นดิน เบลเยียม",
      },
      {
        id: "bkk",
        label: "ศูนย์ควบคุมภารกิจ",
        sub: "กรุงเทพฯ ประเทศไทย",
      },
    ],
  },

  networkContent: {
    eyebrow: "บทที่ 06 / สถาปัตยกรรม",
    diagramTitle: "สถาปัตยกรรมเครือข่าย / TIGERS-X ↔ MCC-BKK",
    heading: "การเชื่อมต่อที่ปลอดภัยสู่สถานี",
    paragraphs: [
      "เพย์โหลดสื่อสารผ่านเครือข่าย TCP/IP บนสถานีอวกาศนานาชาติ เชื่อมผ่านสถานีภาคพื้นดินของ Space Applications Services ที่ซาแวนทึม เบลเยียม และเชื่อมทีมควบคุมภารกิจที่กรุงเทพฯ ผ่านอินเทอร์เน็ตที่ปลอดภัย",
      "ทำให้ทีมรับโทรเมตรีและส่งโทรคำสั่งไปยังสถานีอวกาศนานาชาติได้ใกล้เคียงเรียลไทม์",
    ],
    headerRight: "เชื่อมต่อแล้ว",
    statsTable: [
      { key: "โปรโตคอล", value: "TCP/IP" },
      { key: "การเข้ารหัส", value: "TLS / VPN" },
      { key: "ผ่านรายการ", value: "≈ 1.5 Mbps" },
      { key: "โหมด", value: "สองทาง" },
    ],
    nodes: [
      {
        id: "payload",
        label: "เพย์โหลด TIGERS-X",
        sub: "OBC ใช้งาน, ISS TCP/IP",
        x: 10,
        y: 40,
      },
      {
        id: "iss",
        label: "เครือข่าย ISS",
        sub: "บัสโมดูลโคลัมบัส",
        x: 36,
        y: 40,
      },
      {
        id: "gs",
        label: "สถานีภาคพื้นดินซาแวนทึม",
        sub: "Space Applications Services, BE",
        x: 64,
        y: 40,
      },
      {
        id: "mc",
        label: "ศูนย์ควบคุมภารกิจ",
        sub: "กรุงเทพฯ TH — อุโมงค์ปลอดภัย",
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
    eyebrow: "บทที่ 07 / สเปก",
    heading: "ออกแบบภายใต้ข้อจำกัด",
    paragraphs: [
      "ในวิศวกรรมอวกาศ ข้อจำกัดไม่ใช่ข้ออาย แต่คือ ‘ภาษาออกแบบ’ ทุกกรัม วัตต์ และอินเทอร์เฟซต้องมีเหตุผล",
    ],
    specs: [
      { key: "ขนาด", value: "100 × 100 × 200", unit: "มม." },
      { key: "วัสดุ", value: "อะลูมิเนียม 7075", unit: "" },
      { key: "มวลขึ้นปล่อย", value: "2.5", unit: "กก." },
      { key: "คอมพิวเตอร์บนแพลตฟอร์ม", value: "Orange Pi", unit: "" },
      { key: "การใช้ไฟฟ้า", value: "18", unit: "วัตต์สูงสุด" },
      { key: "การเชื่อมข้อมูล", value: "โทรเมตรี + โทรคำสั่ง", unit: "" },
    ],
  },

  builtInThailandContent: {
    eyebrow: "บทที่ 08 / มรดก",
    heading: "สร้างโดยนักวิจัยและวิศวกรไทย",
    paragraphs: [
      "TIGERS-X คือความพยายามแบบครบวงจรที่พัฒนาในประเทศไทย ตั้งแต่การออกแบบระบบและประกอบฮาร์ดแวร์ ไปจนถึงการทดสอบและปฏิบัติการภารกิจ โดยใช้ทรัพยากรและสถานที่ในประเทศ ทีมถ่ายทอดประสบการณ์วิจัยให้เป็นเพย์โหลดที่พร้อมบิน พิสูจน์ว่าประเทศไทยส่งมอบระบบอวกาศที่ซับซ้อนได้ครบวงจร",
    ],
    originLabel: "ที่มา",
    originLine: "กรุงเทพฯ · ปทุมธานี · ประเทศไทย",
    featureImage: {
      src: "/heritage.jpeg",
      alt: "การประกอบและวิศวกรรมเพย์โหลด TIGERS-X ในประเทศไทย",
    },
  },

  timelineContent: {
    eyebrow: "บทที่ 09 / ไทม์ไลน์",
    heading: "ไทม์ไลนภารกิจ",
    intro:
      "จากไอเดียสู่วงโคจรและกลับสู่โลก — จังหวะการปฏิบัติการของ TIGERS-X",
    railStatus: "นับถอยหลัง · สถานะ",
    railOnTrack: "ตามแผน",
    railLaunchMonth: "พ.ค. 2569",
    railLaunchSub: "ปล่อย / SpaceX Dragon CRS-34",
    railPills: [
      "เริ่ม 2567",
      "PDR/CDR",
      "ZERO-G",
      "บูรณาการ",
      "ส่งมอบ",
      "ปล่อย",
      "วิทยาศาสตร์ µG",
      "กลับโลก",
    ],
    phasePrefix: "เฟสภารกิจ",
    items: [
      {
        date: "2567",
        title: "แนะนำโครงการ",
        body: "เริ่มโครงการต่อยอดจากมรดก KEETA หลังเข้าร่วมโครงการ NASA Space Food Challenge",
      },
      {
        date: "2567",
        title: "การทบทวนการออกแบบ",
        body: "ทีมผ่าน PDR และ CDR และเริ่มพัฒนาเพย์โหลดให้ตรงวัตถุประสงค์ทางวิทยาศาสตร์",
      },
      {
        date: "พ.ย. 2567",
        title: "ทดสอบบนเที่ยวบินไร้แรงโน้มถ่วง",
        body: "ทดลองบนเที่ยวบิน Zero-G เพื่อพิสูจน์แนวคิด",
      },
      {
        date: "พ.ย. 2567 – ก.พ. 2569",
        title: "บูรณาการและทดสอบ",
        body: "ลูกบาศก์ทดลองออกแบบ สร้าง และทดสอบในประเทศไทยด้วยทรัพยากรในประเทศ",
      },
      {
        date: "มี.ค. 2569",
        title: "ส่งมอบ",
        body: "ส่งมอบและทดสอบที่ Space Applications Services ในเบลเยียม และเตรียมส่งมอบต่อให้ ESA และ NASA",
      },
      {
        date: "พ.ค. 2569",
        title: "ปล่อยและติดตั้ง",
        body: "ปล่อยสู่สถานีอวกาศนานาชาติด้วย SpaceX Dragon CRS-34 จากฐาน Cape Canaveral Space Force Station",
      },
      {
        date: "พ.ค. – มิ.ย. 2569",
        title: "ภารกิจวิทยาศาสตร์บนสถานี",
        body: "ติดตั้งในโมดูลโคลัมบัส และส่งวิดีโอการทดลองที่บันทึกไปยังสถานีภาคพื้นดิน",
      },
      {
        date: "มิ.ย. 2569 / สิ้นปี 2569",
        title: "กลับสู่โลก",
        body: "ลูกบาศก์ทดลองจะกลับโลกพร้อม CRS-34 ภายในสิ้นปี 2569",
      },
    ],
  },

  legacyContent: {
    eyebrow: "บทที่ 10 / มรดก",
    heading: "วางรากให้รุ่นถัดไปในอวกาศ",
    paragraphs: [
      "ผลลัพธ์ที่สำคัญที่สุดของ TIGERS-X ไม่ใช่แค่ฮาร์ดแวร์หรือข้อมูลทดลอง แต่คือความรู้ที่เหลืออยู่",
      "ผ่านคลังข้อมูลดิจิทัลและการถ่ายทอดความรู้การปฏิบัติการ ทุกบทเรียนจากการออกแบบ การบูรณาการ การทดสอบ การเตรียมปล่อย และการปฏิบัติภารกิจได้รับการบันทึก เป้าหมายคือสร้างมรดกอวกาศเพื่อให้วิศวกรอวกาศไทยรุ่นถัดไปไม่ต้องเริ่มจากศูนย์อีก",
    ],
    heritageTitle: "มรดกเปิด",
    heritageTagline:
      "รุ่นถัดไปของวิศวกรอวกาศไทยจะไม่ต้องเริ่มจากศูนย์อีก",
    browseArchive: "เปิดคลัง",
    heritageImage: {
      src: "/cleanroom.jpeg",
      alt: "มรดกภารกิจและคลังความรู้ TIGERS-X",
    },
  },

  closingContent: {
    eyebrow: "บทที่ 11 / ปิดท้าย",
    heading:
      "ลูกบาศก์เล็ก ก้าวยักษ์สำหรับเทคโนโลยีอวกาศและนวัตกรรมสุขภาพของไทย",
    paragraphs: [
      "TIGERS-X ไม่ใช่แค่เพย์โหลด แต่เป็นจุดเปลี่ยน",
      "จากการส่งของขึ้นอวกาศ สู่การปฏิบัติระบบในอวกาศ",
      "จากการทดลองแยกส่วน สู่ความสามารถที่สะสม",
      "จากการวิจัยทางการแพทย์ สู่อนาคตของการผลิตอัตโนมัตินอกโลก",
    ],
    ctas: [
      { label: "ติดตามภารกิจ", href: "#follow", variant: "primary" as const },
      { label: "ติดต่อทีม", href: "#contact", variant: "ghost" as const },
    ],
    footer: {
      projectLabel: "โครงการ",
      projectBody:
        "TIGERS-X — การวิจัยการพ้นสภาพแบบหลากหลายด้วยแรงจีในประเทศไทย เพื่อการสำรวจอวกาศ",
      partnersLabel: "พันธมิตร",
      partners: [
        "Space Applications Services (BE)",
        "European Space Agency",
        "NASA · SpaceX (CRS-34)",
      ],
      contactLabel: "ติดต่อ",
      followUpdates: "อัปเดตภารกิจ",
      email: "team@tigers-x.example",
      copyright: "ศูนย์ควบคุมภารกิจ TIGERS-X",
      signoffLine: "TIGERS-X · TPN µG · CRS-34",
      signoffMid: "จบบรีฟภารกิจ",
      signoffPlaces: "กรุงเทพฯ · คูโร · ซาแวนทึม · CCSFS · ISS",
      researchTeamLabel: "ทีมวิจัย",
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
      designCredit: "ออกแบบโดย Nattanon Dungsunenarn",
      copyrightNotice: "TIGERS-X สงวนลิขสิทธิ์",
      designPartnerLabel: "พันธมิตรด้านการออกแบบและการสื่อสาร",
      designPartnerLinkText: "Spaceth.co",
      designPartnerHref: "https://spaceth.co",
    },
  },
};

export const missionBundles: Record<Locale, MissionContent> = {
  en: bundleEn,
  th: bundleTh,
};
