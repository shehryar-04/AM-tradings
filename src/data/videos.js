/**
 * AM TRADINGS & CONSULTANTS — PLANT & MACHINERY SHOWCASE DATA
 * Extracted directly from: "Stk Makina - Milkman Makine New Catalogue 2026.pdf"
 * 
 * Curated industrial showcase entries for comprehensive processing plants,
 * thermal pasteurizers, homogenizers, cream separators, cheese lines,
 * multi-effect evaporators, and Clean-In-Place automation.
 */

export const showcaseVideos = [
  {
    id: 'hero-comprehensive-plant',
    title: 'Turnkey Dairy Processing Facility & Processing Hall',
    category: 'Full Plant Overview',
    duration: '03:45',
    thumbnail: '/images/plant-consulting-dark.jpeg',
    videoUrl: 'https://www.youtube.com/embed/pDseoVMag3Q?rel=0&modestbranding=1',
    youtubeId: 'pDseoVMag3Q',
    description: 'Comprehensive operational footage of an automated turnkey dairy processing plant, featuring raw milk intake, HTST pasteurization, high-pressure homogenization, and automated storage silos in full commercial throughput.',
    highlights: [
      'Multi-stage thermal processing hall in active operation',
      'Automated mix-proof valve manifold matrix in live switching sequence',
      'SCADA centralized control room monitoring pressure, flow, and temperature',
    ],
    featuredInHero: true,
  },
  {
    id: 'pasteurizer-showcase',
    title: 'High-Efficiency HTST Plate Pasteurizer Plant',
    category: 'Thermal Processing',
    duration: '02:40',
    thumbnail: '/images/machinery/pasteurizer-plant.jpg',
    videoUrl: '',
    description: 'High-efficiency skid-mounted plate heat exchanger pasteurizer featuring multi-stage regenerative thermal recovery, sanitary holding tube, pneumatic flow diversion valve, and Siemens SCADA integration.',
    highlights: [
      'Regenerative thermal heat recovery up to 94%',
      'Food-grade AISI 316L plates with clip-on EPDM gaskets',
      'Automated pneumatic flow diversion valve (FDV) safeguard',
    ],
    featuredInHero: false,
  },
  {
    id: 'homogenizer-showcase',
    title: 'High-Pressure Homogenization in Live Operation',
    category: 'Mechanical Engineering',
    duration: '01:55',
    thumbnail: '/images/machinery/homogenizer-high-pressure.jpg',
    videoUrl: '',
    description: 'Live demonstration of a heavy-duty two-stage high-pressure homogenizer running at 400–600 Bar, showcasing vibration-free stability, oil-cooled crankshaft, and micron-level fat globule emulsion.',
    highlights: [
      'Stellite and ceramic impact heads under continuous 400–600 Bar load',
      'Digital pulsation dampener and hydraulic pressure adjustment',
      'Forged duplex stainless steel block with oil-splash lubrication',
    ],
    featuredInHero: false,
  },
  {
    id: 'cream-separator-showcase',
    title: 'Self-Cleaning Centrifugal Cream Separator & Clarifier',
    category: 'Separation & Skimming',
    duration: '02:10',
    thumbnail: '/images/machinery/cream-separator.jpg',
    videoUrl: '',
    description: 'High-speed solid-ejecting disc-stack centrifugal separator for precision milk skimming, warm/cold clarification, cream fat standardization, and automatic hydraulic sediment discharge.',
    highlights: [
      'Skimming efficiency: Residual fat in skim milk ≤ 0.04%',
      'Automatic partial and total hydraulic sediment discharge cycle',
      'Corrosion-resistant duplex stainless steel (DIN 1.4462) rotating bowl',
    ],
    featuredInHero: false,
  },
  {
    id: 'cheese-plant-showcase',
    title: 'Industrial Enclosed Cheese Processing & Curd Line',
    category: 'Value-Added Processing',
    duration: '02:30',
    thumbnail: '/images/machinery/cheese-vat-curd.jpg',
    videoUrl: '',
    description: 'Detailed mechanical run of enclosed cheese vats featuring bidirectional planetary curd cutting knives, automated jacket heating, whey separation, and curd block molding press.',
    highlights: [
      'Precision planetary cutting knives achieving uniform curd grain size',
      'Automated jacket heating and hot-water circulation control',
      'Automated CIP spray validation post-production cycle',
    ],
    featuredInHero: false,
  },
  {
    id: 'evaporator-showcase',
    title: 'Multi-Effect Falling Film Thermal Evaporator (TVR)',
    category: 'Evaporation & Concentration',
    duration: '03:15',
    thumbnail: '/images/machinery/evaporator-falling-film.jpg',
    videoUrl: '',
    description: 'Multi-effect falling film thermal vacuum evaporator equipped with Thermal Vapor Recompression (TVR), multi-stage calandrias, and continuous automated density monitoring.',
    highlights: [
      'TVR system reducing live steam consumption by up to 60%',
      'Short single-pass residence time preserving delicate milk proteins',
      'Concentrates liquid dairy and whey solids up to 48%–52% dry matter',
    ],
    featuredInHero: false,
  },
  {
    id: 'cip-automation-showcase',
    title: 'Automated Multi-Loop Clean-In-Place (CIP) System Cycle',
    category: 'Plant CIP & Cleaning',
    duration: '02:15',
    thumbnail: '/images/machinery/cip-cleaning-system.jpg',
    videoUrl: '',
    description: 'Automated 4-step Clean-In-Place sequence in progress: Pre-Rinse, Caustic Wash, Acid Wash, and Final Microbiological Rinse with inline conductivity verification.',
    highlights: [
      'PID-controlled chemical dosing and heating loop accuracy',
      'Zero dead-leg return scavenging pumps preventing air entrapment',
      'FDA and Punjab Food Authority (PFA) audit data logging demonstration',
    ],
    featuredInHero: false,
  },
];
