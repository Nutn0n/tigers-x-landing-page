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
    heading: "Operate Remotely on the Space Station",
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
      "The design of the experiment cube is compact but powerful. It is designed to be lightweight and small, but powerful enough to perform the experiment. It is designed to be easy to integrate and test, and to be easy to operate in space.",
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
    payloadViews: [
      {
        src: "/payload-view-1.jpg",
        alt: "TIGERS-X payload view 1",
      },
      {
        src: "/payload-view-2.jpg",
        alt: "TIGERS-X payload view 2",
      },
      {
        src: "/payload-view-3.jpg",
        alt: "TIGERS-X payload view 3",
      },
    ],
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
      {
        label: "Mission Blog",
        href: "https://ishalab.space/news-and-updates/",
        variant: "primary" as const,
      },
      {
        label: "Press & Media Assets",
        href: "https://drive.google.com/drive/folders/1P1LqYT2p-k0V5RLXjVhG89ZrO5Kpwn9p?usp=share_link",
        variant: "ghost" as const,
      },
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
    loadingModel: "กำลังโหลด",
  },

  missionMeta: [
    { label: "ประเภท", value: "การทดลองอัตโนมัติ พร้อมระบบควบคุมระไกล" },
    { label: "ปลายทาง", value: "สถานีอวกาศนานาชาติ วงโคจรต่ำของโลก" },
    { label: "ภารกิจ", value: "การวิจัยทางการแพทย์บนโลกและอวกาศ" },
    { label: "สถานะ", value: "ปล่อยยานในเดือนพฤษภาคม 2026" },
  ],

  heroContent: {
    eyebrow: "ข้อมูลภารกิจ / 01",
    title: "TIGERS-X",
    subtitle:
      "Thailand Innovative G-force Varied Emulsification Research for Space Exploration",
    tagline:
      "งานวิจัยของคนไทย มุ่งหน้าสู่สถานีอวกาศนานาชาติ เพื่อขับเคลื่อนการแพทย์แห่งอนาคต",
    body: "การทดลองบนสถานีอวกาศนานาชาติ TIGERS-X เป็นเพย์โหลดแบบใช้งานที่ออกแบบมาเพื่อศึกษาฟิสิกส์ของของไหลสภาวะไร้น้ำหนัก ทดสอบว่าสูตรยาทางการแพทย์ที่ซับซ้อนจะมีพฤติกรรมอย่างไรเมื่อแรงโน้มถ่วงไม่เป็นส่วนหนึ่งของสมการอีกต่อไป",
    ctas: [
      { label: "รายภารกิจ", href: "#story", variant: "primary" as const },
      {
        label: "ข้อมูลเพย์โหลด",
        href: "#specifications",
        variant: "ghost" as const,
      },
    ],
    brandLine: "TIGERS-X / บรีฟภารกิจ",
    navMission: "ภาพรวมโครงการ",
    navScience: "ภารกิจวิทยาศาสตร์",
    navSpecs: "ข้อมูลเพย์โหลด",
    navTimeline: "ระยะเวลาโครงการ",
    navFollow: "ติดตามภารกิจ",
    stickySubtitle: "บรีฟภารกิจ / 2026",
    stickyCountdown: "T-MINUS · พฤษภาคม 2026",
    insigniaLabel: "ตราสัญลักษณ์ภารกิจ",
    crsLine: "TIGERS-X · CRS-34",
    columbusLine: "ISS / COLUMBUS · 2026",
    metadataTitle: "ข้อมูลเมตาของภารกิจ",
    liveLabel: "LIVE",
  },

  storyContent: {
    eyebrow: "บทที่ 01 / ที่มา",
    heading: "ศึกษาฟิสิกส์ของไหลในสภาวะไร้น้ำหนัก",
    paragraphs: [
      "การทดลองนี้ออกแบบมาเพื่อศึกษาว่าของไหลที่ซับซ้อนจะมีพฤติกรรมอย่างไรในสภาวะไร้น้ำหนัก เป็นครั้งแรกของชนิดนี้ที่ศึกษาการให้อาหารในหลอดเลือดดำหรือ TPN ในอวกาศ ออกแบบและพัฒนาโดยนักวิจัยและวิศวกรไทย เพื่อทำงานบนสถานีอวกาศนานาชาติ",
    ],
  },

  scienceContent: {
    eyebrow: "บทที่ 02 / วิทยาศาสตร์",
    heading: "หัวใจสำคัญคือการแพทย์กับอวกาศ",
    subheading: "ศึกษา TPN บนวงโคจรต่ำของโลก",
    paragraphs: [
      "การให้สารอาหารทางหลอดเลือดดำ (TPN) เป็นทางเลือกที่ช่วยชีวิตผู้ป่วยที่ใช้ระบบทางเดินอาหารไม่ได้ แต่ในทางปฏิบัติยังพึ่งพาแนวทาง “การแพทย์แบบเหมารวม” มากกว่า “การแพทย์เฉพาะบุคคล” ที่แท้จริง ซึ่งข้อจำกัดไม่ได้อยู่ที่การเลือกสารอาหารเพียงอย่างเดียว แต่อยู่ที่การเข้าใจว่าระบบเหล่านั้นประพฤติตัวอย่างไรในฐานะระบบที่ซับซ้อน",
      "ฟิสิกส์สำคัญของเรื่องดังกล่าวคือ การผสมกันระหว่างของเหลวที่ต่างเฟสกัน (น้ำ ไขมัน และโมเลกุลชีวภาพ) เรียกว่ากระบวนการ Emulsion ซึ่งทำให้ของเหลวที่ปกติไม่เข้ากันสามารถผสมเข้ากันได้ ปัจจุบันนักวิทยาศาสตร์พยายามทำความเข้าใจฟิสิกส์ที่ควบคุมกระบวนการนี้เพื่อนำไปสู่โมเดลที่อธิบายพฤติรรมของมัน อันเป็นหัวใจสำคัญของการแพทย์ และอุตสาหกรรมอาหารและยา",
    ],
  },

  microgravityContent: {
    eyebrow: "บทที่ 03 / สภาพแวดล้อม",
    heading: "ใช้สภาวะไร้น้ำหนักเป็นกุญแจสู่การค้นพบใหม่",
    paragraphs: [
      "ฟิสิกส์ของของไหลบนโลก แรงโน้มถ่วงคือตัวแปรสำคัญที่นำไปสู่การแยกชั้น การตกตะกอน และฟิสิกส์พื้นฐานที่บดบังพฤติกรรมในระดับจุลภาค ทำให้การศึกษาฟิสิกส์ของของไหลบนโลกมีข้อจำกัด",
      "สภาวะไร้น้ำหนักบนสถานีอวกาศนานาชาติทำหน้าที่เหมือน “สนามทดลองฟิสิกส์” ให้เราแยกกลไกพื้นฐานของฟิสิกส์ของไหลได้ชัดเจนขึ้น เพื่อสังเกตปรากฏการณ์ที่เข้าถึงได้ยากบนโลก",
    ],
    cards: [
      {
        title: "เฟส 1 / เที่ยวบินระยนะสั้นในสภาวะไร้น้ำหนัก",
        body: "ในช่วงแรกทีมวิจัยใช้การบินบนเครื่องบินที่จำลองสภาวะไร้น้ำหนักในระดับวินาที เพื่อเก็บข้อมูลเบื้องต้นเรื่องการกระจายของไหลเมื่อไม่มีการแยกตัวจากแรงโน้มถ่วง อย่างไรก็ตามทีมวิจัยจำเป็นต้องการการทดลองระยะยาวกว่านั้นเพื่อศึกษาการเปลี่ยนแปลงตามเวลาหรือพฤติกรรมสมดุล",
      },
      {
        title: "เฟส 2 / การทดลองระยะยาวบน ISS",
        body: "การทดลองบนสถานีอวกาศนานาชาติ ช่วยเปิดโอกาสให้ทีมวิจัยสามารถสังเกตและสร้างแบบจำลองฟิสิกส์ของของไหลได้อย่างละเอียด ในระยะเวลานาน ออกแบบการทดลองเชิงระบบได้อย่างมีประสิทธิภาพ ที่สำคัญยังอาจเปิดโอกาสสู่การค้นพบพฤติกรรมใหม่ที่ไม่เคยเจอมาก่อน",
      },
    ],
  },

  systemDesignContent: {
    eyebrow: "บทที่ 04 / ผลที่คาดว่าจะได้รับ",
    heading: "เปลี่ยนวิธีคิดของการผลิตอาหารและยาทั้งบนโลกและในอวกาศ",
    paragraphs: [
      "เป้าหมายของทีมวิจัยคือการสร้างข้อมูลและแบบจำลองของระบบสารอาหารในสภาวะไร้น้ำหนักที่นำไปใช้กับการแพทย์จริงอย่าง TPN ซึ่งจะช่วยเปลี่ยนวิธีคิดของการผลิตอาหารและยาทั้งบนโลกและในอวกาศ ทั้งในระยะสั้นและระยะยาว",
    ],
    timelineTitle: "ไทม์ไลน์ผลกระทบ",
    impacts: [
      {
        term: "ระยะสั้น",
        title: "ปรับปรุงสูตร TPN บนโลก",
        body: "ข้อมูลจากโครงการนี้ช่วยปรับปรุงสูตร TPN บนโลก โดยเฉพาะโภชนาการเฉพาะผู้ป่วย เช่น ลดการพึ่งพาสารทำให้เกิดอีมัลชันเพื่อเพิ่มความยืดหยุ่นของสูตรและสนับสนุนการแพทย์เฉพาะบุคคลได้ดีขึ้น",
      },
      {
        term: "ระยะกลาง",
        title: "ช่วยออกแบบระบบอาหารและยาสำหรับภารกิจอวกาศระยะยาว",
        body: "ความรู้นี้ช่วยออกแบบระบบอาหารและของไหลสำหรับภารกิจอวกาศระยะยาว ในอวกาศสูตรต้องคงตัวตลอดเวลา ต้านการแยกเฟส เก็บรักษาได้ และไหลได้ถูกต้องโดยไม่มีแรงโน้มถ่วง จึงต้องมีระบบส่งของไหลที่ออกแบบรองรับพฤติกรรมในสภาวะไร้แรงโน้มถ่วง",
      },
      {
        term: "ระยะยาว",
        title: "ช่วยวางรากสู่การตั้งถิ่นฐานในอวกาศ",
        body: "เป็นรากฐานสำคัญของการแพทย์ในอวกาศ ระบบโภชนาการ การผ่าตัดที่ต้องควบคุมของไหลอย่างแม่นยำโดยไม่มีแรงโน้มถ่วง และการดูแลเชิงป้องกัน เช่น การจัดการสมดุลของไหลและการเพิ่มประสิทธิภาพสุขภาพระยะยาวสำหรับการตั้งถิ่นฐานบนดาวดวงอื่น",
      },
    ],
  },

  activePayloadContent: {
    eyebrow: "บทที่ 05 / การปฏิบัติการ",
    heading: "ห้องทดลองอัตโนมัติบนสถานีอวกาศนานาชาติ",
    paragraphs: [
      "TIGERS-X ทำการทดลองโดยไม่ต้องอาศัยการควบคุมจากนักบินอวกาศ แต่ใช้การควบคุมจากบนโลก​ (Remote Laboratory) โดยทีมวิจัยและวิศวกร ที่สามารถออกแบบการทดลองได้อย่างยืดหยุ่นเปรียบเสมือนห้องทดลองอัตโนมัติในอวกาศ",
      "นับว่าเป็นครั้งแรกในประวัติศาสตร์ของประเทศไทย ที่สามารถควบคุมการทดลองบนสถานีอวกาศนานาชาติได้จากแผ่นดินไทย",
    ],
    diagramCaption: "รูปที่ 05 / การทำงานของระบบสื่อสาร",
    activeBadge: "ACTIVE",
    diagramFooter: ["Latency ≈ 1.2 Seconds", "TCP/IP · Encrypted", "Bi-directional"],
    nodePrefix: "Node",
    link: [
      { id: "iss", label: "สถานีอวกาศนานาชาติ", sub: "โมดูล Columbus" },
      {
        id: "esa",
        label: "ESA / Space Applications Services",
        sub: "สถานีภาคพื้นดิน ณ ประเทศเบลเยียม",
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
      "เพย์โหลดสื่อสารผ่านเครือข่าย TCP/IP บนสถานีอวกาศนานาชาติ เชื่อมผ่านสถานีภาคพื้นดินของ Space Applications Services ที่ Zaventem เบลเยียม และเชื่อมต่อกับทีมควบคุมภารกิจในกรุงเทพฯ ผ่านอินเทอร์เน็ตที่ปลอดภัย",
      "ทีมจึงรับโทรเมตรีและส่งคำสั่งระยะไกลไปยังสถานีอวกาศนานาชาติได้ใกล้เคียงเรียลไทม์",
    ],
    headerRight: "ลิงก์พร้อม",
    statsTable: [
      { key: "โปรโตคอล", value: "TCP/IP" },
      { key: "การเข้ารหัส", value: "TLS / VPN" },
      { key: "อัตราข้อมูล", value: "≈ 1.5 Mbps" },
      { key: "โหมด", value: "สองทาง" },
    ],
    nodes: [
      {
        id: "payload",
        label: "เพย์โหลด TIGERS-X",
        sub: "OBC แบบใช้งาน, ISS TCP/IP",
        x: 10,
        y: 40,
      },
      {
        id: "iss",
        label: "เครือข่าย ISS",
        sub: "บัสโมดูล Columbus",
        x: 36,
        y: 40,
      },
      {
        id: "gs",
        label: "สถานีภาคพื้นดิน Zaventem",
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
    eyebrow: "บทที่ 07 / ข้อมูลของเพย์โหลด",
    heading: "ขนาดเล็กแต่ทรงพลัง",
    paragraphs: [
      "ชุดการทดลองถูกออกแบบให้มีขนาดเล็ก เพื่อความยืดหยุ่นสำหรับภารกิจในอนาคต และทำให้สามารถทดสอบและปฏิบัติการในอวกาศได้ง่าย",
    ],
    specs: [
      { key: "ขนาด", value: "100 × 100 × 200", unit: "มม." },
      { key: "วัสดุ", value: "อะลูมิเนียม 7075", unit: "" },
      { key: "มวล", value: "2.5", unit: "กก." },
      { key: "คอมพิวเตอร์", value: "Orange Pi", unit: "" },
      { key: "กำลังไฟสูงสุด", value: "18", unit: "วัตต์" },
      { key: "การเชื่อมต่อข้อมูล", value: "สามารถทำได้", unit: "" },
    ],
  },

  builtInThailandContent: {
    eyebrow: "บทที่ 08 / มรดกทางวิศวกรรม",
    heading: "สร้างโดยนักวิจัยและวิศวกรไทย",
    paragraphs: [
      "ถูกสร้างโดยฝีมือคนไทยตั้งแต่การออกแบบระบบและการผสานฮาร์ดแวร์ ไปจนถึงการทดสอบและการปฏิบัติภารกิจ โดยใช้ทรัพยากรและโครงสร้างพื้นฐานด้านอวกาศในประเทศ",
    ],
    originLabel: "ผลิตใน",
    originLine: "ประเทศไทย",
    featureImage: {
      src: "/heritage.jpeg",
      alt: "มรดกทางวิศวกรรมของ TIGERS-X",
    },
    payloadViews: [
      {
        src: "/payload-view-1.jpg",
        alt: "มุมมองเพย์โหลด TIGERS-X ภาพที่ 1",
      },
      {
        src: "/payload-view-2.jpg",
        alt: "มุมมองเพย์โหลด TIGERS-X ภาพที่ 2",
      },
      {
        src: "/payload-view-3.jpg",
        alt: "มุมมองเพย์โหลด TIGERS-X ภาพที่ 3",
      },
    ],
  },

  timelineContent: {
    eyebrow: "บทที่ 09 / ไทม์ไลน์",
    heading: "ไทม์ไลน์ภารกิจ",
    intro:
      "จากแนวคิดสู่วงโคจรและกลับสู่โลก — จังหวะการปฏิบัติการของ TIGERS-X",
    railStatus: "T-MINUS · สถานะ",
    railOnTrack: "ตามแผน",
    railLaunchMonth: "พฤษภาคม 2026",
    railLaunchSub: "ปล่อยยาน / SpaceX Dragon CRS-34",
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
    phasePrefix: "เฟสภารกิจ",
    items: [
      {
        date: "2024",
        title: "จุดเริ่มต้นโครงการ",
        body: "การทดลองมีรากฐานมาจากการทีมวิจัย KEETA หลังเข้าร่วมโครงการ NASA Space Food Challenge",
        imageSrc: "/public/timeline-01.jpg",
      },
      {
        date: "2024",
        title: "กระบวนการออกแบบและพัฒนา",
        body: "ทีมผ่าน PDR และ CDR และเริ่มพัฒนาเพย์โหลดให้สอดคล้องเป้าหมายทางวิทยาศาสตร์",
        imageSrc: "/public/timeline-02.jpg",
      },
      {
        date: "พฤศจิกายน 2024",
        title: "ทดสอบบนเที่ยวบิน Zero-G",
        body: "การทดลองได้รับการทดสอบบนเที่ยวบิน Zero-G เพื่อศึกษาพฤติกรรมของไหลในสภาวะไร้น้ำหนักข้างต้น",
        imageSrc: "/public/timeline-03.jpg",
      },
      {
        date: "พฤศจิกายน 2024 – กุมภาพันธ์ 2026",
        title: "การผสานและการทดสอบ",
        body: "การทดลองได้รับการออกแบบ สร้าง และทดสอบในประเทศไทยด้วยทรัพยากรในประเทศ",
        imageSrc: "/public/timeline-04.jpg",
      },
      {
        date: "มีนาคม 2026",
        title: "ส่งมอบเพื่อเตรียมบิน",
        body: "เพย์โหลดถูกส่งมอบและทดสอบที่ Space Applications Services ในเบลเยียม พร้อมเตรียมการขั้นสุดท้ายหลังส่งมอบให้ ESA และ NASA",
        imageSrc: "/public/timeline-05.jpg",
      },
      {
        date: "พฤษภาคม 2026",
        title: "เดินทางขึ้นสู่อวกาศ",
        body: "เพย์โหลดจะปล่อยทยานไปยังสถานีอวกาศนานาชาติด้วยยาน Dragon ในภารกิจ CRS-34 จาก Cape Canaveral Space Force Station สหรัฐอเมริกา",
        imageSrc: "/public/timeline-06.jpg",
      },
      {
        date: "พฤษภาคม – มิถุนายน 2026",
        title: "ภารกิจวิทยาศาสตร์บนสถานีอวกาศนานาชาติ",
        body: "เพย์โหลดจะถูกติดตั้งในโมดูล Columbus ถูกควบคุมจากโลกและส่งวิดีโอการทดลองที่บันทึกไปยังสถานีภาคพื้นดิน",
        imageSrc: "/public/timeline-07.jpg",
      },
      {
        date: "มิถุนายน 2026 / ปลายปี 2026",
        title: "กลับสู่โลก",
        body: "ชุดการทดลองจะกลับสู่โลกพร้อมยาน Dragon ในภารกิจ CRS-34 ภายในสิ้นปี 2026",
        imageSrc: "/public/timeline-08.jpg",
      },
    ],
  },

  legacyContent: {
    eyebrow: "บทที่ 10 / มรดก",
    heading: "วางรากฐานให้รุ่นถัดไปในอวกาศ",
    paragraphs: [
      "ผลลัพธ์ที่สำคัญที่สุดของ TIGERS-X ไม่ใช่แค่ฮาร์ดแวร์หรือข้อมูลการทดลอง แต่คือการส่งต่อองค์ความรู้และมรดกทางวิศวกรรม",
      "บทเรียนทุกขั้นตั้งแต่การออกแบบ การผสาน การทดสอบ การเตรียมปล่อย และการปฏิบัติภารกิจจะถูกเปิดให้เข้าถึง (Open Science) เป้าหมายคือสร้างมรดกด้านอวกาศเพื่อให้วิศวกรอวกาศไทยรุ่นถัดไปไม่ต้องเริ่มจากศูนย์อีกต่อไป",
    ],
    heritageTitle: "Open Science",
    heritageTagline:
      "วิศวกรอวกาศไทยรุ่นถัดไปจะไม่ต้องเริ่มจากศูนย์อีกต่อไป",
    browseArchive: "บทเรียนจากภารกิจ",
    heritageImage: {
      src: "/cleanroom.jpeg",
      alt: "มรดกภารกิจและคลังความรู้ TIGERS-X",
    },
  },

  closingContent: {
    eyebrow: "บทที่ 11 / บทส่งท้าย",
    heading:
      "การทดลองนี้คือก้าวใหญ่สำหรับเทคโนโลยีอวกาศไทยและนวัตกรรมการแพทย์",
    paragraphs: [
      "TIGERS-X ไม่ใช่แค่เพย์โหลด แต่เป็นจุดเปลี่ยน",
      "ห้องแล็บในอวกาศขนาดเล็กชิ้นแรกของไทย",
      "จากการวิจัยทางการแพทย์สู่อนาคตของการตั้งถิ่นฐานบนดาวดวงอื่น",
    ],
    ctas: [
      {
        label: "บล็อกภารกิจ",
        href: "https://ishalab.space/news-and-updates/",
        variant: "primary" as const,
      },
      {
        label: "ภาพและวิดีโอสำหรับสื่อมวลชน",
        href: "https://drive.google.com/drive/folders/1P1LqYT2p-k0V5RLXjVhG89ZrO5Kpwn9p?usp=share_link",
        variant: "ghost" as const,
      },
    ],
    footer: {
      projectLabel: "โครงการ",
      projectBody:
        "TIGERS-X",
      partnersLabel: "หน่วยงานพันธมิตร",
      partners: [
        "Space Applications Services (BE)",
        "European Space Agency",
        "NASA · SpaceX (CRS-34)",
      ],
      contactLabel: "ติดต่อ",
      followUpdates: "ติดตามอัปเดตภารกิจ",
      email: "team@tigers-x.example",
      copyright: "ศูนย์ควบคุมภารกิจ TIGERS-X",
      signoffLine: "TIGERS-X · TPN µG-EXPERIMENT · CRS-34",
      signoffMid: "จบบรีฟภารกิจ",
      signoffPlaces: "กรุงเทพฯ · บรัสเซลส์ · ฟลอริดา · วงโคจรต่ำของโลก",
      researchTeamLabel: "ทีมวิจัย",
      researchTeam: [
        { name: "วเรศ จันทร์เจริญ", role: "หัวหน้าโครงการ" },
        { name: "โพธิวัฒน์ งามขจรวิวัฒน์", role: "ผู้จัดการโครงการ" },
        { name: "สิทธิ์ ขันตินุกูลธานนท์", role: "เลขานุการ" },
        { name: "ศรัณย์ สีหานาม", role: "หัวหน้าวิศวกร" },
        { name: "ทักษ์ดนัย ศิริสมบัติ", role: "วิศวกรซอฟต์แวร์" },
        { name: "จิรสิน อัศวกุล", role: "เจ้าหน้าที่ประชาสัมพันธ์" },
        { name: "ฌาณัฐย์ สิทธิปรีดานันท์", role: "เจ้าหน้าที่ประชาสัมพันธ์" },
        { name: "วริศรา บุญเรือง", role: "นักวิจัย" },
        { name: "รัตนวลี ทบศรี", role: "นักวิจัย" },
        { name: "Hein Htet Aung", role: "นักวิจัย" },
      ],
      designCredit: "ออกแบบโดย Nattanon Dungsunenarn",
      copyrightNotice: "TIGERS-X All rights reserved.",
      designPartnerLabel: "ที่ปรึกษาด้านการสื่อสาร",
      designPartnerLinkText: "Spaceth.co",
      designPartnerHref: "https://spaceth.co",
    },
  },
};

export const missionBundles: Record<Locale, MissionContent> = {
  en: bundleEn,
  th: bundleTh,
};

