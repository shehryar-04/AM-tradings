/**
 * AM TRADINGS & CONSULTANTS — PLANT & MACHINERY VIDEOS DATA
 * Curated industrial showcase entries for comprehensive processing plants, cheese lines, and homogenizers.
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
    id: 'cheese-plant-showcase',
    title: 'Industrial Enclosed Cheese Processing & Curd Line',
    category: 'Value-Added Processing',
    duration: '02:30',
    thumbnail: '/images/machinery/cheese-vat-curd.jpg',
    videoUrl: '',
    description: 'Detailed mechanical run of enclosed cheese vats featuring bidirectional curd cutting knives, automated whey separation, and curd block molding press.',
    highlights: [
      'Precision planetary cutting knives achieving uniform curd grain size',
      'Automated jacket heating and hot-water circulation control',
      'Automated CIP spray validation post-production cycle',
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
    description: 'Live demonstration of a heavy-duty two-stage high-pressure homogenizer running at 400 Bar, showcasing vibration-free stability, oil-cooled crankshaft, and micron-level emulsion results.',
    highlights: [
      'Stellite and ceramic impact heads under continuous 400 Bar load',
      'Digital pulsation dampener and hydraulic pressure adjustment',
      'Microscopic comparison of fat globule dispersion before and after homogenization',
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
    description: 'Automated 5-step Clean-In-Place sequence in progress: Pre-Rinse, Caustic Acid Wash, Inter-Rinse, Nitric Acid Wash, and Final Microbiological Rinse with inline conductivity verification.',
    highlights: [
      'PID-controlled chemical dosing and heating loop accuracy',
      'Zero dead-leg return scavenging pumps preventing air entrapment',
      'FDA and Punjab Food Authority (PFA) audit data logging demonstration',
    ],
    featuredInHero: false,
  },
];
