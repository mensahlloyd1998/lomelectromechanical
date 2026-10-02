export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type Sector = {
  name: string;
  icon: string;
};

export type Project = {
  title: string;
  location: string;
  caption: string;
  image: string;
  country: "Ghana" | "UK";
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type Reason = {
  title: string;
  description: string;
  icon: string;
};

export const headerData = {
  brandName: "LOM",
  fullName: "LOM ELECTROMECHANICAL",
  tagline: "A COMPLETE ENGINEERING SERVICE",
  phoneGH: "+233 (0) 303 200 000",
  phoneUK: "+44 (0) 20 8000 0000",
  navLinks: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Sectors", href: "#sectors" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Projects", href: "#projects" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" },
  ],
  quoteBtn: "Request a Quote",
};

export const heroData = {
  regulatoryPill: "BRITISH STANDARDS (BS 7671) • GHANA REGULATORY ALIGNED",
  titlePart1: "A Complete Engineering Service for ",
  titleHighlight: "Ghana and Beyond",
  subtitle: "Mechanical, electrical, and building services design and installation, delivered by a unified Ghana–UK technical team that gets it right first time.",
  primaryCta: "Request a Quote",
  secondaryCta: "View Our Projects",
  trust1: "ISO 9001 Compliant Framework",
  trust2: "Dual Hubs: London & Tema",
  image: "/images/hero-workshop.jpg",
  imageBadgeTitle: "120-Tonne",
  imageBadgeSubtitle: "Industrial Crane & Workshop Capacity",
  stats: [
    {
      category: "DUAL HUBS",
      value: "2 Offices",
      detail: "Tema, Ghana & London, UK",
    },
    {
      category: "ENGINEERING HISTORY",
      value: "70+ Years",
      detail: "Combined Leadership Depth",
    },
    {
      category: "OPERATING SCOPE",
      value: "Multi-Sector",
      detail: "Commercial, Industrial & Mining",
    },
    {
      category: "AUDIT PASS RATE",
      value: "100%",
      detail: "British & Statutory Standards",
    },
  ],
};

export const aboutData = {
  sectionTag: "ABOUT LOM ELECTROMECHANICAL SERVICES",
  title: "Engineering Excellence with Global Expertise and Local Commitment",
  story: "LOM was established to address the Ghanaian construction industry's urgent demand for a young, dynamic, and technically capable building services installation and consultancy firm. Operating dual operational hubs in Tema and London, our engineering specifications are designed in London under strict quality-of-workmanship clauses referencing British Standards and UK Building Regulations, and delivered on-site with West African agility.",
  pillars: [
    {
      id: "1",
      name: "1. Dynamic",
      description: "Rapid, adaptive engineering responses engineered specifically for harsh tropical climates, grid fluctuations, and demanding architectural timeframes.",
      badge: "Agile Field Deployment",
      icon: "zap",
    },
    {
      id: "2",
      name: "2. Dedicated",
      description: "A single senior Project Manager serves as the primary liaison, backed by direct hands-on Director engagement from preliminary load calculations through to practical completion.",
      badge: "Direct Director Oversight",
      icon: "user-check",
    },
    {
      id: "3",
      name: "3. Disciplined",
      description: "Enforcing uncompromising British Standards (BS 7671, BS 5839, CIBSE codes) and strict quality-of-workmanship audits to eradicate post-handover snags.",
      badge: "BS / EN Standardized Protocol",
      icon: "shield-check",
    },
  ],
  ethosTitle: "GUIDING ENGINEERING ETHOS",
  ethosQuote: '"Getting it right first time."',
  ethosDescription: "Rooted in our bedrock values of Professionalism, Integrity, and Creativity. We design systems engineered for decades of faultless operation.",
  cultureTitle: "CULTURE MANDATE",
  cultureSub: "People Matter",
  cultureDescription: "Safeguarding site workforces and upskilling local Ghanaian technical talent.",
};

export const servicesData: Service[] = [
  {
    title: "Mechanical Services",
    description: "Full-cycle climate and fluid dynamic systems engineered for demanding tropical heat loads and hygiene protocols.",
    icon: "fan",
  },
  {
    title: "Electrical Services",
    description: "Complete high-voltage and low-voltage electrical distribution networks compliant with BS 7671 18th Edition regulations.",
    icon: "zap",
  },
  {
    title: "Industrial Installations",
    description: "Heavy-duty factory and mining plant installations capable of supporting extreme mechanical loads and high-draw tooling.",
    icon: "factory",
  },
  {
    title: "Design & CAD Coordination",
    description: "Digital engineering blueprints created in our London studio, mitigating physical on-site spatial clashes before steel is cut.",
    icon: "layers",
  },
  {
    title: "Consultancy, Value Engineering & Life Cycle Analysis",
    description: "Providing commercial owners, corporate boards, and investment partners with uncompromising technical vetting to safeguard capital expenditure.",
    icon: "trending-up",
  },
];

export const serviceCodes = ["MECH-01", "ELEC-02", "IND-03", "CAD-04", "ADV-05"];

export const serviceBullets: string[][] = [
  [
    "Heating, ventilation & fully coordinated HVAC systems",
    "Domestic hot and cold water distribution",
    "Central industrial water supply infrastructure",
    "Commercial cold stores & mortuary refrigeration units",
  ],
  [
    "Low Voltage (LV) and High Voltage (HV) distribution & subs",
    "Precision lighting, power networks & Combined Heat/Power (CHP)",
    "Addressable fire alarm & life-safety integration",
    "IP CCTV, access control, structured voice & enterprise fiber networks",
  ],
  [
    "Overhead bridge cranes up to 120-tonne rated capacity",
    "Heavy cable tray, ladder racks & industrial busbar containment",
    "3-phase high-amperage dedicated welding bays",
    "High-pressure compressed air ring mains & industrial plumbing",
  ],
  [
    "Specialized 2D/3D Computer Aided Design (CAD) drafting",
    "Integrated MEP 3D clash detection & BIM models",
    "Schematic layouts for general contractors & developers",
    "As-built documentation packages & O&M manuals",
  ],
  [
    "Pre-acquisition technical surveys & MEP audits",
    "Master planning and utility feasibility evaluations",
    "Value Engineering (VE) to optimize CAPEX",
    "Whole-Life Cost (WLC) and energy optimization models",
  ],
];

export const serviceActionLabels = [
  "Inquire for Mechanical MEP",
  "Inquire for Electrical HV/LV",
  "Inquire for Industrial Systems",
  "Inquire for CAD & Modeling",
  "Book an Engineering Survey",
];

export const sectorsData: Sector[] = [
  { name: "Commercial & Industrial", icon: "building-2" },
  { name: "Retail & Leisure", icon: "store" },
  { name: "Government & Public Infrastructure", icon: "landmark" },
  { name: "Mining & Extractive", icon: "pickaxe" },
  { name: "Education & Residential", icon: "graduation-cap" },
  { name: "Healthcare & Specialist Medical", icon: "cross" },
];

export const sectorDescriptions = [
  "High-rise office towers, modern manufacturing facilities, and automated logistics warehouses engineered for continuous uptime.",
  "Luxury hotels, destination shopping malls, and prestige automotive showrooms requiring discreet acoustic climate control and lighting design.",
  "Seaports, international airports, intercity transit hubs, and ministry administrative headquarters with heavy footfall resilience.",
  "Remote extraction sites, heavy plant maintenance facilities, and automated processing feeds built to survive dust and vibrations.",
  "Multi-unit student halls of residence, luxury residential gated communities, and university campus master MEP distribution.",
  "10-floor specialist surgical hospitals, medical diagnostic suites, pathology labs, and clinical cold rooms with N+1 power backups.",
];

export const sectorTags = [
  "ACCRA • LONDON • TEMA",
  "HOSPITALITY • SHOWROOMS",
  "PORTS • RUNWAYS • TRANSIT",
  "HEAVY INDUSTRY • GOLDFIELDS",
  "HALLS • ESTATES • CAMPUSES",
  "MEDICAL GASES • STERILE HVAC",
];

export const whyChooseUsData: Reason[] = [
  {
    title: "Ghana-UK Dual-Office Synergy",
    description: "London design teams provide structural calculation rigor and BS compliance, while our Tema headquarters mobilizes skilled local contractors for prompt physical installation.",
    icon: "arrow-left-right",
  },
  {
    title: "London-Developed Specifications",
    description: "Every specification is developed under strict quality-of-workmanship clauses, referencing British Standards and CIBSE codes, ensuring components withstand heavy duty cycles.",
    icon: "file-code-2",
  },
  {
    title: "Total Regulatory Alignment",
    description: "Dual harmonization with UK Building Regulations and Ghanaian statutory authorities, including the Energy Commission, ECG, and Ghana National Fire Service.",
    icon: "shield-alert",
  },
  {
    title: "Pre-Tender Quality Assurance",
    description: "Multi-tier peer reviews and clash-detection audits occur prior to bill of quantities release, shielding clients from unforeseen variations and scope bloat.",
    icon: "check-check",
  },
  {
    title: "Cost-Effective Value Engineering",
    description: "Optimized trunking paths, harmonic mitigation, and targeted material selection that drive down baseline build expense without sacrificing system reliability.",
    icon: "trending-down",
  },
  {
    title: "Director-Level Project Oversight",
    description: "No junior delegation. An experienced, designated Project Manager is backed directly by hands-on Director supervision from site handover to test certificates.",
    icon: "user-cog",
  },
];

export const reasonCodes = [
  "VERIFIED-01",
  "VERIFIED-02",
  "VERIFIED-03",
  "VERIFIED-04",
  "VERIFIED-05",
  "VERIFIED-06",
];

export const projectsData: Project[] = [
  {
    title: "St Michael's Specialist Hospital",
    location: "Lapaz, Accra",
    caption: "Multi-level specialist healthcare facility. Complete installation of cable containment, riser distribution, emergency generator synchronisation, and clinical power redundancy.",
    image: "/images/project-hospital.jpg",
    country: "Ghana",
  },
  {
    title: "FMC Oil Company Workshop",
    location: "Takoradi, Ghana",
    caption: "Engineered a 60m x 18m x 22m heavy workshop with 120-tonne overhead crane, high-bay lighting, power distribution, compressed air reticulation & industrial plumbing.",
    image: "/images/project-fmc.jpg",
    country: "Ghana",
  },
  {
    title: "Obutan Mining Site Workshop",
    location: "Obuasi Mining Site",
    caption: "Turnkey installation of 3 overhead crane systems, heavy cable trays, 3-phase high-output welding stations, and ruggedized power feeds under demanding extractive site conditions.",
    image: "/images/project-mining.jpg",
    country: "Ghana",
  },
  {
    title: "GPHA Ports Administration",
    location: "Tema & Takoradi Ports",
    caption: "Critical security facilities, exporters' customs sheds, and multistory office complexes: total electrical distribution, central air conditioning, and addressable fire protection.",
    image: "/images/project-port.jpg",
    country: "Ghana",
  },
  {
    title: "Universal Motors (VW Showroom)",
    location: "Accra, Ghana",
    caption: "Flagship Volkswagen facility in Accra. Delivered coordinated electrical, HVAC, addressable fire alarm, IP CCTV security, and high-speed IT networking infrastructure.",
    image: "/images/project-vw.jpg",
    country: "Ghana",
  },
  {
    title: "Urban & Transport Infrastructure",
    location: "Kumasi & Accra",
    caption: "Opera Square central bus terminal high-mast lighting, Kumasi arterial roadways smart street lighting network, and airport runway ground lighting installations.",
    image: "/images/project-transport.jpg",
    country: "Ghana",
  },
  {
    title: "Mayfair & Grays Inn Refurbishments",
    location: "London, UK",
    caption: "Delicate, complex MEP modernization within an 18th-century heritage listed building and surrounding corporate chambers without altering protected architectural fabric.",
    image: "/images/project-mayfair.jpg",
    country: "UK",
  },
  {
    title: "Luxury 4-Star Hotel Suites",
    location: "Hertfordshire, UK",
    caption: "60 luxury guest rooms and amenities: central chilled water air conditioning, whisper-quiet domestic water distribution, and low-glare architectural lighting integration.",
    image: "/images/project-hotel.jpg",
    country: "UK",
  },
  {
    title: "Modern Student Halls of Residence",
    location: "United Kingdom",
    caption: "365-bedroom residential block featuring energy-efficient heating manifolds, high-performance domestic hot water storage, and integrated fire life-safety systems.",
    image: "/images/project-student.jpg",
    country: "UK",
  },
];

export const projectImageBadges = [
  "Healthcare • 10 Floors",
  "Industrial • 120-Tonne Crane",
  "Mining • 3 Cranes",
  "Maritime • Public Sector",
  "Automotive • Flagship",
  "Civil • Transportation",
  "Heritage Commercial",
  "Hospitality • 60 Keys",
  "Residential • 365 Rooms",
];

export const projectFooterTags = [
  "Full MEP • Power Backup",
  "Heavy Industry • Crane Electrics",
  "Extractive • High-Amperage Welding",
  "Maritime MEP • Customs Hub",
  "Retail & Workshop MEP",
  "High-Mast • Public Lighting",
  "Heritage MEP • London",
  "Chilled Water • Acoustic Plumbing",
  "Low Carbon • Fire Life-Safety",
];

export const projectCallout = {
  text: "Have an upcoming development in Ghana or the UK? Speak directly with our engineering team to review design specifications.",
  buttonText: "Request a Proposal",
};

export const trustedByClients = [
  { name: "GPHA", sub: "Ports & Harbours Authority" },
  { name: "FMC", sub: "Technologies | Oil & Gas" },
  { name: "UNIVERSAL", sub: "Motors | Volkswagen Ghana" },
  { name: "ST. MICHAEL'S", sub: "Specialist Hospital" },
  { name: "OBUTAN", sub: "Mining / Asanko Gold" },
  { name: "MINISTRY", sub: "Roads & Transport Infra" },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Andrew K. Halm-Owoo",
    role: "Managing Director",
    bio: "Over 24 years directing complex mechanical and building services engineering throughout the UK and West Africa. Master of thermofluids, high-efficiency refrigeration, and mission-critical chiller systems.",
  },
  {
    name: "Levi Nwamadi",
    role: "Marketing Director",
    bio: "More than 20 years managing building services contracts, client relationships, strategic developer syndicates, and cross-border UK-Ghana procurement frameworks.",
  },
  {
    name: "Lloyd Mensah",
    role: "Building Services Director",
    bio: "27+ years spearheading heavy electrical power distribution, substation works, addressable life safety, telecoms, and industrial overhead crane electrification across Ghana.",
  },
];

export const teamCredentials = [
  "BEng (Hons) Loughborough • MSc Air Conditioning UCL",
  "BEng (Hons) Building Services (Loughborough Univ.)",
  "Diploma Electrical Eng • Advanced CAD Specialist",
];

export const teamBadges = [
  "24+ Years UK & International Experience",
  "20+ Years Commercial & Procurement Lead",
  "27+ Years Heavy Electrical Engineering",
];

export const contactDetails = {
  sectionTag: "START YOUR PROJECT",
  title: "Request an Engineering Consultation & Quote",
  subline: "Connect directly with our Tema or London engineering directors. Every project specification is reviewed under strict non-disclosure and engineering standards.",
  ghanaOffice: {
    badge: "GHANA OPERATIONS (HQ)",
    name: "Tema Engineering Center",
    address: "P.O. Box BT 279, Community 2, Tema, Greater Accra, Ghana",
    phoneDisplay: "+233 (0) 303 200 120 / +233 (0) 244 000 000",
    phoneTel: "+233303200120",
    email: "ghana@lom-engineering.com",
  },
  ukOffice: {
    badge: "UNITED KINGDOM DESIGN HUB",
    name: "London Technical Studio",
    address: "144 Topsham Road, Tooting Bec, London SW17 8SP, England",
    phoneDisplay: "+44 (0) 20 8672 0000",
    phoneTel: "+442086720000",
    email: "london@lom-engineering.com",
  },
  schedule: "Mon - Fri: 08:00 - 17:00 GMT",
  support: "24/7 Field Response",
  serviceOptions: [
    "Mechanical HVAC & Plumbing",
    "Electrical HV/LV Distribution",
    "Industrial & Crane Installations",
    "Design & CAD Coordination",
    "Consultancy & Value Engineering",
  ],
  territoryOptions: [
    "Ghana (Greater Accra / Tema)",
    "Ghana (Ashanti / Western / Mining)",
    "United Kingdom",
    "Other West Africa",
  ],
};

export const footerData = {
  aboutText: "A premier Ghana-UK electromechanical engineering consultancy and contractor providing MEP+I industrial installations, and CAD services to British Standards and local statutory compliance.",
  complianceBadge: "ISO 9001 & BS 7671 ALIGNED PRACTICE",
  ghanaAddress: "P.O. Box BT 279, Comm. 2, Tema, Ghana",
  ghanaPhone: "+233 (0) 303 200 000",
  ukAddress: "144 Topsham Road, Tooting Bec, London SW17 8SP, England",
  ukPhone: "+44 (0) 20 8000 0000",
  qualityMotto: '"Getting it right first time."',
  standardsDesc: "Rigorous engineering compliance conforming strictly to British Standards and West African statutory authorities.",
  copyright: "© LOM ElectroMechanical Services. All rights reserved.",
};
