/**
 * AM TRADINGS AND CONSULTANTS — SOURCE OF TRUTH & BUSINESS DATA
 * Extracted directly from official company documents, letterhead, business cards, and image assets.
 */

export const company = {
  name: "AM Tradings and Consultants",
  shortName: "AM Tradings",
  legalEntity: "AM Tradings & Consultants (Pvt) Ltd.",
  tagline: "Beyond Trade — Beyond Boundaries",
  philosophy: "Consultancy first. Everything else follows.",
  corePrinciple: "We do not make the machines. We decide which one you should buy.",
  criticalRule: "Skip stage 1 and you pay for it at stage 7.",
  marketThesis: "That gap is not a problem. It is a market.",

  // Vision, Mission & Core Values
  vision: "To spearhead the modern industrial transformation of Pakistan's dairy and agro-food processing sector through world-class engineering standards, zero-compromise sanitary architecture, and verified technological self-reliance.",
  mission: "To empower investors, dairy entrepreneurs, and industrial processors with unbiased technical consultancy, rigorous tender audits, and precision turnkey commissioning—ensuring maximum capital efficiency, highest product shelf life, and verified consumer safety.",
  coreValues: [
    {
      title: "Vendor Neutrality",
      description: "We are not machinery dealers bound by sales quotas. We represent the investor's balance sheet to secure the highest-performing, most cost-effective equipment without bias.",
      code: "VAL-01"
    },
    {
      title: "Engineering Precision",
      description: "From mass-balance calculations to borescope-inspected sanitary orbital welding, our standards conform strictly to international 3A, EHEDG, and ISO 22000 benchmarks.",
      code: "VAL-02"
    },
    {
      title: "Scientific Dairy R&D",
      description: "Bridging the gap between machinery hardware and biochemical formulation chemistry to guarantee optimal mouthfeel, stable emulsions, and extended commercial shelf life.",
      code: "VAL-03"
    },
    {
      title: "Fiduciary Stewardship",
      description: "Protecting investor capital through rigorous comparative tender evaluations that routinely save 12% to 22% in initial plant CAPEX while eliminating costly downstream rework.",
      code: "VAL-04"
    }
  ],
  get values() {
    return this.coreValues;
  },

  // STK Blue Brochure Trading Scope (Names Only for About Page)
  tradingScopeNames: [
    "Tubular & Plate UHT Sterilization Plants",
    "High-Efficiency HTST Milk Pasteurizers",
    "High-Pressure Homogenizers (Up to 600 Bar)",
    "Self-Cleaning Centrifugal Cream Separators",
    "Automatic Standardization & Blending Systems",
    "Enclosed Sanitary Cheese Vats & Curd Lines",
    "Jacketed Yogurt Incubation & Processing Tanks",
    "Continuous Industrial Butter Churns & Compactors",
    "Multi-Effect Falling Film Thermal Evaporators",
    "Sanitary Spray Drying Towers & Fluid Beds",
    "Automated Multi-Channel Clean-In-Place (CIP) Stations",
    "Sanitary SS316L Mix-Proof Valve Manifolds & Pumps",
    "Aseptic Brick & Gable-Top Liquid Packaging Machines",
    "Raw Milk Reception, Deaeration & Chilling Bays",
    "Turnkey Dairy QA Laboratory & Milk Analyzer Suites",
    "Sanitary Storage Silos & Insulated Process Tanks"
  ],

  // Key People & Division Leadership (Technical Advisory, Engineering & Management)
  people: [
    {
      department: "Technical Advisory and Industry Insights",
      name: "Dr. Asif Iftikhar",
      title: "Principal Dairy Consultant and CEO of the firm",
      scope: "Turnkey Dairy Engineering, Recipe Formulation Chemistry & Executive Leadership",
      badge: "CEO & Advisory"
    },
    {
      department: "Engineering Division",
      name: "Engr. M. Essa Siddiqui",
      title: "Technical Director",
      scope: "Site Planning, Electrical and Automation",
      badge: "Engineering Division"
    },
    {
      department: "Management Division",
      name: "Dr. Munib Siddiqui",
      title: "Business Feasibility & Strategy",
      scope: "Business Feasibility and Viability Advisory, Market Potential and Sales Strategy Development",
      badge: "Management Division"
    }
  ],

  // Wellness Initiative (Nutrew)
  wellnessInitiative: {
    name: "Nutrew",
    headline: "AM Wellness Initiative",
    title: "Nutrew — Pure Wellness & Nutrition",
    description: "Nutrew is an innovative wellness and nutrition startup funded and initiated by AM Tradings, dedicated to high-standard healthy living and scientific food formulations.",
    url: "https://nutrew.com",
    tag: "AM Tradings Wellness Venture",
  },

  // Contact Information
  contacts: {
    phone: "03019399097",
    phoneDisplay: "03019399097",
    whatsapp: "03019399097",
    whatsappFormatted: "+92 301 9399097",
    whatsappRaw: "923019399097",
    phoneSecondary: "03019399097",
    emailPrimary: "amtradings100@gmail.com",
    emailSecondary: "info@amtradings.com",
    consultant: {
      name: "Dr. Asif Iftikhar",
      title: "Principal Dairy Consultant and CEO of the firm",
      experience: "25+ Years in Food & Dairy Industrialization",
      bio: "Veteran dairy technologist and industrial consultant spearheading turnkey dairy processing facilities, aseptic packaging projects, recipe formulation, and high-efficiency machinery procurement across Pakistan and international markets.",
      qualifications: "Doctorate in Food Science & Dairy Technology, Senior Industrial Advisor"
    },
    locations: [
      {
        city: "Lahore",
        title: "Executive Office",
        address: "112 Broadway Heights 3, Bahria Orchard Phase 1, Lahore, Pakistan",
        type: "Corporate Headquarters"
      },
      {
        city: "Lahore",
        title: "Technical & Advisory Hub",
        address: "291-Kamran Block, Allama Iqbal Town, Lahore, Pakistan",
        type: "Consulting & Operations"
      }
    ]
  },

  // Market Intelligence (Pakistan Dairy Landscape)
  marketData: {
    headline: "Pakistan Dairy Sector: An Unprecedented Industrialization Window",
    subheadline: "While Pakistan ranks as the 4th largest global milk producer, only ~3% is industrially processed. AM Tradings bridges this gap with world-class plant engineering.",
    stats: [
      {
        value: "74.7M",
        unit: "Tonnes / Year",
        label: "Total Raw Milk Production",
        detail: "Positioning Pakistan as the 4th largest dairy producer in the world."
      },
      {
        value: "~97%",
        unit: "Raw / Loose Milk",
        label: "Informal & Unprocessed",
        detail: "Sold through informal channels with acute perishable risks and minimal shelf life."
      },
      {
        value: "~3%",
        unit: "Formally Processed",
        label: "Commercial Packaged Milk",
        detail: "Current packaged market penetration, representing massive untapped headroom."
      },
      {
        value: "70M+",
        unit: "Tonnes Untapped",
        label: "Value-Addition Opportunity",
        detail: "High-margin potential in UHT, pasteurized milk, cheese, butter, yogurt, and powders."
      }
    ],
    thesisPoints: [
      "Urbanization and rising consumer awareness demand hygienic, packaged dairy with verified cold-chain integrity.",
      "Regulatory shifts in Punjab and Sindh are systematically mandating minimum pasteurization standards.",
      "Greenfield investors who build correctly today will dominate regional supply for decades.",
      "AM Tradings safeguards investor capital through rigorous feasibility, vendor neutrality, and precision commissioning."
    ]
  },

  // 7 Core Capability Pillars
  capabilities: [
    {
      id: "greenfield-consulting",
      number: "01",
      title: "Turnkey Dairy Plant Consulting",
      summary: "End-to-end architectural, process, and civil engineering for Greenfield and Brownfield dairy plants.",
      description: "From concept to full commercial production, we design comprehensive processing facilities optimized for high throughput, hygienic compliance (EHEDG/FDA), energy efficiency, and operational safety.",
      deliverables: [
        "Complete plant master layout & civil engineering drawings",
        "Process flow diagrams (PFD) and Piping & Instrumentation (P&ID)",
        "Mass & thermal energy balance calculations",
        "Utility sizing (steam boilers, chillers, compressed air, CIP)"
      ]
    },
    {
      id: "machinery-sourcing",
      number: "02",
      title: "Machinery Sourcing & Procurement",
      summary: "Independent, vendor-neutral procurement of international dairy and food processing equipment.",
      description: "We represent your capital interests, not the manufacturer's sales quotas. We evaluate technical specifications, negotiate commercial terms, and source robust equipment from leading European, Asian, and American manufacturers.",
      deliverables: [
        "Vendor pre-qualification and technical tender audits",
        "Direct manufacturer pricing negotiation & CAPEX reduction",
        "Sanitary standards verification (3A / EHEDG compliance)",
        "Logistics, customs clearance, and port handling advisory"
      ]
    },
    {
      id: "installation-commissioning",
      number: "03",
      title: "Installation, Piping & Commissioning",
      summary: "On-site mechanical installation, sanitary SS304/SS316L orbital welding, electrical automation, and commissioning.",
      description: "Our certified engineers oversee on-site mechanical erection, automated PLC/SCADA integration, hygienic loop piping, utility tie-ins, dry/wet trial runs, and full production commissioning.",
      deliverables: [
        "Certified sanitary orbital tube welding & validation",
        "SCADA/PLC control system programming and loop checks",
        "Water testing, thermal testing, and chemical passivization",
        "First-batch commercial trial runs and yield sign-off"
      ]
    },
    {
      id: "recipe-formulation",
      number: "04",
      title: "Recipe Formulation & Dairy R&D",
      summary: "Scientific product engineering for UHT milk, pasteurized milk, cheese, butter, yogurt, and dairy desserts.",
      description: "Led by Dr. Asif Iftikhar, our laboratory R&D develops proprietary formulas, stabilizes shelf life, enhances mouthfeel, and optimizes solids-not-fat (SNF) and fat ratios for superior profitability.",
      deliverables: [
        "UHT, ESL (Extended Shelf Life), and pasteurized milk formulations",
        "Mozzarella, Cheddar, and processed cheese standardized recipes",
        "Set, stirred, and Greek yogurt texture optimization",
        "Sensory evaluation, lab bench testing, and shelf-life stress tests"
      ]
    },
    {
      id: "lab-qa-testing",
      number: "05",
      title: "Laboratory & QA Instrumentation",
      summary: "Turnkey quality control laboratory setup with advanced rapid milk testing and analytical instruments.",
      description: "Equipping dairy plants with state-of-the-art analytical tools to detect adulteration, test milk composition, measure microbial loads, and guarantee regulatory compliance with Punjab Food Authority (PFA) and PSQCA.",
      deliverables: [
        "Ultrasonic and FTIR raw milk analyzers setup",
        "Freezing point cryoscopes for added water detection",
        "Microbiology incubators, autoclaves, and laminar flow hoods",
        "Standard Operating Procedures (SOPs) and ISO 22000 QA frameworks"
      ]
    },
    {
      id: "spares-maintenance",
      number: "06",
      title: "Maintenance, Spares & Audits",
      summary: "Lifecycle technical audits, genuine spare parts supply, preventative maintenance programs, and OEE optimization.",
      description: "Prevent costly plant shutdowns with genuine OEM spare parts, gasket kits, homogenization valves, pump mechanical seals, and scheduled thermodynamic efficiency audits.",
      deliverables: [
        "Critical spares inventory planning & fast-track supply",
        "Plate heat exchanger (PHE) regasketing and pressure testing",
        "Homogenizer head servicing and valve reseating",
        "Annual energy efficiency and steam recovery audits"
      ]
    },
    {
      id: "feasibility-capex",
      number: "07",
      title: "Feasibility Studies & CAPEX Modeling",
      summary: "Bankable financial models, sensitivity analyses, raw milk catchment surveys, and commercial viability studies.",
      description: "Before committing significant capital, our feasibility studies give financial institutions, investors, and boards actionable clarity on ROI, payback periods, break-even volumes, and raw milk procurement zones.",
      deliverables: [
        "Bankable project feasibility reports for debt financing",
        "Milk collection catchment area mapping & farmer network models",
        "Detailed CAPEX & OPEX cash flow forecasts (5-10 years)",
        "Sensitivity analysis against milk price volatility and power tariffs"
      ]
    }
  ],

  // The 8 Stages of a Greenfield Dairy Project
  greenfieldStages: [
    {
      step: 1,
      phase: "Stage 01",
      title: "Concept & Feasibility Analysis",
      subtitle: "The Foundation of Every Successful Plant",
      criticalNote: "Skip stage 1 and you pay for it at stage 7.",
      summary: "In-depth market demand assessment, product basket definition, raw milk catchment study, and bankable financial modeling.",
      activities: [
        "Raw milk supply availability & seasonal price fluctuation survey",
        "Consumer segment demand modeling (UHT vs. Pasteurized vs. Cultured)",
        "CAPEX/OPEX financial projections and debt-service coverage modeling",
        "Site location selection based on logistics, water quality, and power grid"
      ],
      impact: "Eliminates premature capital commitment to non-viable configurations."
    },
    {
      step: 2,
      phase: "Stage 02",
      title: "Capacity & Product Mix Definition",
      subtitle: "Balancing Output with Seasonal Milk Inflow",
      criticalNote: "Over-sizing equipment destroys ROI; under-sizing bottlenecks growth.",
      summary: "Accurate sizing of receiving, standardizing, and processing hourly volumes to match lean/flush milk seasons.",
      activities: [
        "Peak intake vs. lean season milk balancing calculations",
        "Fat and SNF surplus utilization planning (Butter, Ghee, Skim Powder)",
        "Shift scheduling & production batch optimization",
        "Modular expansion blueprint for Phase 2 and Phase 3 scaling"
      ],
      impact: "Maximizes overall equipment effectiveness (OEE) year-round."
    },
    {
      step: 3,
      phase: "Stage 03",
      title: "Process Flow & Plant Layout Engineering",
      subtitle: "Hygienic Zoning & Energy Conservation",
      criticalNote: "Proper zoning prevents microbial cross-contamination permanently.",
      summary: "3D architectural layout, cleanroom zoning (High Care / Low Care), thermal energy recovery, and effluent treatment routing.",
      activities: [
        "P&ID generation with sanitary valve matrix logic",
        "High-hygiene cleanroom partitioning and HVAC pressure differentials",
        "Automated Clean-in-Place (CIP) loop circuit segregation",
        "Effluent Treatment Plant (ETP) capacity and environmental design"
      ],
      impact: "Ensures compliance with international EHEDG, 3A, and ISO 22000 standards."
    },
    {
      step: 4,
      phase: "Stage 04",
      title: "Machinery Sourcing & Vendor Negotiation",
      subtitle: "Independent, Vendor-Neutral Procurement",
      criticalNote: "We represent the investor, not the machinery vendor.",
      summary: "Tender drafting, supplier comparison, commercial negotiation, and factory acceptance testing (FAT).",
      activities: [
        "Comprehensive Request for Proposal (RFP) specification packages",
        "Comparative line-by-line technical & commercial vendor audits",
        "Contractual milestone terms and warranty enforcement protections",
        "Factory Acceptance Testing (FAT) at overseas manufacturing facilities"
      ],
      impact: "Typical clients save 12% to 22% on equipment CAPEX through our tender audits."
    },
    {
      step: 5,
      phase: "Stage 05",
      title: "Civil, Utility & Piping Architecture",
      subtitle: "Infrastructure That Stands the Test of Time",
      criticalNote: "Defective utility piping causes 70% of premature plant breakdowns.",
      summary: "Sanitary floor drainage, steam boiler plants, chilled water refrigeration, compressed air, and water treatment.",
      activities: [
        "Anti-acid epoxy and polyurethane flooring specifications",
        "Steam generation, boiler water softening, and condensate return lines",
        "Glycol and ammonia chiller refrigeration plant integration",
        "Reverse Osmosis (RO) water purification for processing and boiler feed"
      ],
      impact: "Guarantees zero utility bottlenecks during continuous peak operations."
    },
    {
      step: 6,
      phase: "Stage 06",
      title: "Installation, Automation & Electrical",
      subtitle: "Precision Sanitary Erection & PLC Control",
      criticalNote: "Sanitary orbital welding is non-negotiable for aseptic dairy lines.",
      summary: "On-site mechanical placement, SS316L sanitary piping, electrical control cabinets, and SCADA automation programming.",
      activities: [
        "Borescope-inspected sanitary orbital welding of milk flow lines",
        "MCC / PLC panel wiring and industrial Ethernet network cabling",
        "Pneumatic valve manifold integration and feedback sensor calibration",
        "Automated recipe batching and CIP sequence programming"
      ],
      impact: "Delivers a seamless, automated, leak-free processing ecosystem."
    },
    {
      step: 7,
      phase: "Stage 07",
      title: "Commissioning & Quality Validation",
      subtitle: "Where Theory Meets Flawless Execution",
      criticalNote: "Errors made in early stages reveal themselves here if not audited.",
      summary: "Water trials, chemical passivation, live milk trials, microbiological clearance, and yield verification.",
      activities: [
        "Hydraulic pressure testing and chemical acid/alkali loop passivization",
        "Sterilization hold-time and thermal pasteurizer log-reduction validation",
        "First live-milk product runs under continuous monitoring",
        "Microbiological lab clearance and organoleptic taste validation"
      ],
      impact: "Confirms that plant output matches 100% of technical design specifications."
    },
    {
      step: 8,
      phase: "Stage 08",
      title: "Commercial Launch & Handover",
      subtitle: "Empowering Your In-House Operational Team",
      criticalNote: "A great plant requires a well-trained, disciplined operations crew.",
      summary: "Comprehensive standard operating procedures (SOPs), machine operator training, QA protocol handover, and commercial production.",
      activities: [
        "Hands-on operator training for pasteurization, homogenizer, and CIP",
        "Lab technician training on QA testing protocols and calibration",
        "Preventative maintenance scheduling and logbook creation",
        "Formal commercial production sign-off and ongoing advisory retainer"
      ],
      impact: "Empowers the client's team to operate profitably and independently."
    }
  ],

  // Products & Equipment Represented
  machineryPortfolio: [
    {
      category: "Thermal Processing & Sterilization",
      items: [
        { name: "Tubular & Plate UHT Sterilization Units", desc: "Aseptic processing for milk, flavored dairy, and cream with extended ambient shelf life." },
        { name: "High-Efficiency HTST Pasteurizers", desc: "Regenerative heat exchange up to 94% efficiency for fresh milk and pouch filling." },
        { name: "Deaerators & Vacuum Degassers", desc: "Removal of entrapped air and volatile off-odors from raw milk." }
      ]
    },
    {
      category: "Homogenization & Separation",
      items: [
        { name: "High-Pressure Homogenizers (up to 600 Bar)", desc: "Micron-level fat globule breakdown for smooth texture and zero cream separation." },
        { name: "Centrifugal Cream Separators & Clarifiers", desc: "Self-cleaning disc separators for precision skim/cream separation and debris removal." },
        { name: "Standardization Systems", desc: "Inline automated continuous fat and solids standardization units." }
      ]
    },
    {
      category: "Cultured, Cheese & Value-Added Lines",
      items: [
        { name: "Industrial Cheese Vats & Curd Knives", desc: "Sanitary closed and open cheese vats with automated curd cutting and stirring." },
        { name: "Yogurt Incubation & Processing Tanks", desc: "Jacketed insulated tanks with low-shear agitation for smooth viscosity." },
        { name: "Continuous Butter Churns & Vacuum Compactors", desc: "High-yield continuous butter making machines from fresh or fermented cream." }
      ]
    },
    {
      category: "Plant Sanitation & Sanitary Flow",
      items: [
        { name: "Automated Multi-Channel CIP Systems", desc: "Independent multi-tank Clean-In-Place units with automated chemical dosing and conductivity tracking." },
        { name: "Sanitary SS316L Valves & Manifolds", desc: "Mix-proof double-seat valves, butterfly valves, and sanitary centrifugal pumps." },
        { name: "Aseptic Sampling Valves & Pigging Systems", desc: "Zero product waste pigging systems for high-viscosity dairy applications." }
      ]
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "Does AM Tradings manufacture dairy processing machinery?",
      a: "No, and that is our greatest advantage. As our core principle states: 'We do not make the machines. We decide which one you should buy.' We operate as an independent, vendor-neutral consulting and procurement partner. We represent the investor's interests to ensure you acquire the highest-performing, most cost-effective equipment without vendor bias."
    },
    {
      q: "What is the typical timeline for a Greenfield Dairy Plant in Pakistan?",
      a: "A standard Greenfield Dairy facility (20,000 to 150,000 Liters/day) typically requires 10 to 16 months from initial feasibility to full commercial commissioning. Engaging AM Tradings at Stage 1 (Concept & Feasibility) prevents civil errors, procurement delays, and costly layout retrofits."
    },
    {
      q: "Can you assist with recipe engineering and Punjab Food Authority (PFA) compliance?",
      a: "Yes. Led by Dr. Asif Iftikhar, we provide complete product formulation, lab QA setup, nutritional profiling, and regulatory compliance consulting to meet PFA, PSQCA, and international ISO 22000 / HACCP food safety standards."
    },
    {
      q: "How does AM Tradings save CAPEX on machinery purchases?",
      a: "Because we understand the engineering cost breakdown of processing equipment, we conduct rigorous comparative tender audits across European, Asian, and American manufacturers. Our negotiation often secures 12% to 22% in direct price savings, superior warranty terms, and free commissioning spares."
    }
  ]
};

/**
 * Generate a pre-filled, URL-encoded WhatsApp link.
 * @param {string} message - The contextual pre-filled message text.
 * @returns {string} Fully formatted WhatsApp URL.
 */
export function getWhatsAppUrl(message = "") {
  const cleanNumber = company.contacts.whatsappRaw;
  const defaultMessage = `Hello Dr. Asif Iftikhar / AM Tradings Team, I would like to inquire about your Dairy Plant Consulting and Machinery Sourcing services.`;
  const encodedText = encodeURIComponent(message.trim() || defaultMessage);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
