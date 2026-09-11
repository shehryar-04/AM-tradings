/**
 * AM TRADINGS & CONSULTANTS — MACHINERY & EQUIPMENT CATALOGUE
 * Source of Truth: STK Industrial Dairy Machinery Brochure & Official Procurement Scope.
 * All machine names, categories, and technical descriptions are authentic.
 */

export const machineryCategories = [
  { id: 'all', label: 'All Equipment' },
  { id: 'thermal', label: 'Thermal & Sterilization' },
  { id: 'homogenization', label: 'Homogenization & Separation' },
  { id: 'cheese-cultured', label: 'Cheese & Cultured Lines' },
  { id: 'evaporation-drying', label: 'Evaporation & Powder' },
  { id: 'sanitation-flow', label: 'CIP & Sanitary Flow' },
  { id: 'packaging-filling', label: 'Filling & Aseptic Packaging' },
  { id: 'lab-qa', label: 'QA Laboratory Testing' },
];

export const machineryItems = [
  {
    id: 'uht-sterilizer-tubular',
    name: 'Tubular & Plate UHT Sterilization Plant',
    category: 'thermal',
    categoryLabel: 'Thermal & Sterilization',
    image: '/images/machinery/uht-sterilizer-line.jpg',
    origin: 'STK Machinery / European Tech Standards',
    description: 'Continuous indirect and direct UHT sterilization systems designed for milk, cream, flavored dairy, and plant-based beverages with aseptic holding tube validation.',
    features: [
      'Operating temperature: 137°C – 142°C with 4-second hold',
      'Heat recovery efficiency up to 90% – 92%',
      'Fully automated PLC/SCADA controlled with aseptic barrier valves',
      'Integrated pre-sterilization and intermediate Clean-In-Place (CIP) cycles'
    ],
    applications: ['Aseptic UHT Liquid Milk', 'Flavored Milk', 'Heavy Cream', 'Extended Shelf Life (ESL) Dairy']
  },
  {
    id: 'htst-pasteurizer-regenerative',
    name: 'High-Efficiency HTST Milk Pasteurizer',
    category: 'thermal',
    categoryLabel: 'Thermal & Sterilization',
    image: '/images/machinery/pasteurizer-plant.jpg',
    origin: 'STK Machinery Sanitary Series',
    description: 'High-efficiency plate heat exchanger pasteurization systems featuring multi-stage regenerative thermal loops for liquid dairy and juice processing.',
    features: [
      'Pasteurization temperature: 72°C – 85°C with 15–20 sec holding tube',
      'Regenerative thermal recovery up to 94%',
      'Sanitary stainless steel SS316L plate pack with clip-on EPDM/NBR gaskets',
      'Automated flow diversion valve (FDV) safeguard with temperature logger'
    ],
    applications: ['Fresh Pasteurized Milk', 'Pouch Milk Packaging', 'Standardized Milk Base', 'Cheese Milk Prep']
  },
  {
    id: 'homogenizer-high-pressure',
    name: 'Industrial High-Pressure Homogenizer (Up to 600 Bar)',
    category: 'homogenization',
    categoryLabel: 'Homogenization & Separation',
    image: '/images/machinery/homogenizer-high-pressure.jpg',
    origin: 'STK Heavy Duty Sanitary Engineering',
    description: 'Precision multi-stage high-pressure homogenizer with wear-resistant tungsten carbide and ceramic valve heads for micron-scale fat globule dispersion.',
    features: [
      'Operating pressure: 150 – 600 Bar (single and dual-stage heads)',
      'Throughput capacity: 1,000 L/h to 25,000 L/h continuous duty',
      'Stellite/Ceramic sanitary impact heads for extended operational lifespan',
      'Splash lubrication gearbox with oil cooling and vibration damping'
    ],
    applications: ['UHT & Pasteurized Milk', 'Ice Cream Mix', 'Yogurt Pre-Treatment', 'Beverage Emulsions']
  },
  {
    id: 'centrifugal-cream-separator',
    name: 'Self-Cleaning Centrifugal Cream Separator & Clarifier',
    category: 'homogenization',
    categoryLabel: 'Homogenization & Separation',
    image: '/images/machinery/cream-separator.jpg',
    origin: 'STK High-Speed Separation Technology',
    description: 'Automatic solid-ejecting disc-stack centrifugal separator for precision milk skimming, standardized fat ratio control, and physical micro-impurity clarification.',
    features: [
      'Skimming efficiency: Residual fat in skim milk ≤ 0.04%',
      'Automated hydraulic partial and total sludge discharge mechanism',
      'Corrosion-resistant duplex stainless steel rotating bowl assembly',
      'Variable frequency drive (VFD) for controlled soft starting'
    ],
    applications: ['Milk Fat Separation', 'Cream Harvesting', 'Cold/Warm Milk Clarification', 'Whey Clarification']
  },
  {
    id: 'industrial-cheese-vat',
    name: 'Enclosed Sanitary Cheese Vat & Curd Processing Line',
    category: 'cheese-cultured',
    categoryLabel: 'Cheese & Cultured Lines',
    image: '/images/machinery/cheese-vat-curd.jpg',
    origin: 'STK Automated Dairy Processing',
    description: 'Fully enclosed horizontal and vertical cheese vats equipped with bidirectional planetary cutting and stirring knives for uniform curd grain consistency.',
    features: [
      'Triple-jacketed construction for precision hot-water circulation and cooking',
      'Frequency-controlled counter-rotating sharp cutting and gentle stirring blades',
      'Automated whey suction screen and programmable recipe controller',
      'Full Clean-In-Place (CIP) spray ball integration with sanitary seals'
    ],
    applications: ['Cheddar Cheese', 'Mozzarella Block', 'Gouda & Hard Cheeses', 'Paneer & Cottage Cheese']
  },
  {
    id: 'yogurt-incubation-tank',
    name: 'Jacketed Yogurt Incubation & Processing Tank',
    category: 'cheese-cultured',
    categoryLabel: 'Cheese & Cultured Lines',
    image: '/images/machinery/yogurt-incubation-tank.jpg',
    origin: 'STK Thermal Process Systems',
    description: 'Hygienic vertical jacketed tanks engineered for uniform heat distribution, starter culture inoculation, gentle low-shear agitation, and controlled cooling.',
    features: [
      'Dimpled jacket for heating with hot water and rapid chilled water cooling',
      'Anchor/Spiral agitator with PTFE wall-scrapers for uniform viscous mixing',
      'Sanitary aseptic air vent filter (0.2 micron) and pressure vacuum relief',
      'Mirror-polished interior finish (Ra ≤ 0.4 μm) to prevent bacterial adhesion'
    ],
    applications: ['Set Yogurt', 'Stirred / Fruit Yogurt', 'Greek Yogurt Base', 'Drinking Yogurt / Lassi']
  },
  {
    id: 'continuous-butter-churn',
    name: 'Continuous Industrial Butter Churn & Vacuum Compactor',
    category: 'cheese-cultured',
    categoryLabel: 'Cheese & Cultured Lines',
    image: '/images/machinery/butter-churn-continuous.jpg',
    origin: 'STK Fat Processing Division',
    description: 'High-throughput continuous butter making system with mechanical churning, buttermilk separation, texturizing augers, and vacuum deaeration.',
    features: [
      'Continuous conversion of sweet or cultured cream into standardized butter',
      'Integrated vacuum chamber to minimize air content and improve shelf life',
      'Automated water dosing unit for exact moisture content control (≤ 16%)',
      'Direct coupling to automatic butter bulk and portion packing machines'
    ],
    applications: ['Table Butter', 'Culinary Cooking Butter', 'Recombined Butter', 'Ghee Pre-Treatment']
  },
  {
    id: 'falling-film-evaporator',
    name: 'Multi-Effect Falling Film Thermal Evaporator (MVR / TVR)',
    category: 'evaporation-drying',
    categoryLabel: 'Evaporation & Powder',
    image: '/images/machinery/evaporator-falling-film.jpg',
    origin: 'STK Heavy Industrial Engineering',
    description: 'High-efficiency multi-stage falling film evaporation units with Thermal Vapor Recompression (TVR) for concentration of milk, whey, and condensed products.',
    features: [
      'Low thermal impact with short single-pass residence times to preserve milk protein',
      'Steam economy optimization via multi-effect vapor recompression',
      'Automated density monitoring and feed rate modulation',
      'Sanitary stainless steel SS316L contact tubes with sanitary calandria'
    ],
    applications: ['Sweetened Condensed Milk', 'Evaporated Milk', 'Skim Milk Concentration', 'Whey Protein Processing']
  },
  {
    id: 'spray-drying-tower',
    name: 'Industrial Sanitary Spray Drying Tower & Fluid Bed',
    category: 'evaporation-drying',
    categoryLabel: 'Evaporation & Powder',
    image: '/images/machinery/spray-drying-tower.jpg',
    origin: 'STK Powder Engineering',
    description: 'Advanced vertical spray drying towers equipped with rotary atomizers or high-pressure nozzles, coupled with vibrating fluid bed post-cooling systems.',
    features: [
      'Precision temperature-controlled indirect air heating and HEPA filtration',
      'High-speed rotary disc atomizer with ceramic nozzle inserts',
      'Cyclone separators and sanitary baghouse filters for 99.8% powder recovery',
      'Explosion suppression and inerting safety compliance systems'
    ],
    applications: ['Whole Milk Powder (WMP)', 'Skim Milk Powder (SMP)', 'Whey Powder', 'Fat-Filled Dairy Powders']
  },
  {
    id: 'cip-cleaning-system',
    name: 'Automated Multi-Loop Clean-In-Place (CIP) Station',
    category: 'sanitation-flow',
    categoryLabel: 'CIP & Sanitary Flow',
    image: '/images/machinery/cip-cleaning-system.jpg',
    origin: 'STK Sanitary Standard',
    description: 'Fully automated multi-tank sanitary cleaning stations designed to clean and sanitize process vessels, piping circuits, and machinery without disassembly.',
    features: [
      'Independent tank circuits: Pre-Rinse, Caustic Acid, Nitric Acid, Hot Water, Final Rinse',
      'Automated inline conductivity, flow rate, and temperature PID control',
      'Dedicated supply and scavenging return pumps with anti-airlock design',
      'Detailed audit logging conforming to FDA and Punjab Food Authority validation'
    ],
    applications: ['Dairy Plant Sanitation', 'Pipeline Circuits', 'Silo & Tank Cleaning', 'Aseptic Filling Lines']
  },
  {
    id: 'sanitary-valve-manifold',
    name: 'Sanitary SS316L Mix-Proof Valve Manifold Matrix',
    category: 'sanitation-flow',
    categoryLabel: 'CIP & Sanitary Flow',
    image: '/images/machinery/sanitary-valve-matrix.jpg',
    origin: 'STK Flow Engineering',
    description: 'Custom-engineered double-seat mix-proof valve manifolds allowing simultaneous product routing and CIP cleaning without cross-contamination risk.',
    features: [
      'Double-seat mix-proof design with leak detection cavity to atmospheric drain',
      'Forged AISI 316L stainless steel body with Ra ≤ 0.8 μm sanitary finish',
      'Pneumatic actuators with digital AS-Interface / IO-Link feedback control heads',
      'EHEDG and 3-A sanitary standard compliant construction'
    ],
    applications: ['Raw Milk Routing', 'Pasteurized Milk Distribution', 'CIP Circuit Switching', 'Aseptic Filling Manifolds']
  },
  {
    id: 'aseptic-carton-filler',
    name: 'Aseptic Brick & Gable-Top Liquid Packaging Machine',
    category: 'packaging-filling',
    categoryLabel: 'Filling & Aseptic Packaging',
    image: '/images/machinery/aseptic-filling-machine.jpg',
    origin: 'STK Packaging Technology',
    description: 'Commercial aseptic roll-fed liquid carton packaging lines with peroxide sterilization, sterile air overpressure, and ultrasonic longitudinal sealing.',
    features: [
      'Filling capacity: 3,000 to 7,500 packs per hour (200ml, 250ml, 1000ml)',
      'H2O2 hydrogen peroxide bath sterilization and hot air drying chamber',
      'High-precision magnetic flowmeter filling nozzles with zero foaming',
      'Integrated downstream conveyor, straw applicator, and shrink wrapping'
    ],
    applications: ['Aseptic UHT Milk', 'Flavored Dairy Drinks', 'Whipping Cream', 'Juice & Nectar']
  },
  {
    id: 'milk-reception-unit',
    name: 'Automated Raw Milk Reception, Deaeration & Chilling Unit',
    category: 'thermal',
    categoryLabel: 'Thermal & Sterilization',
    image: '/images/machinery/milk-reception-unit.jpg',
    origin: 'STK Primary Intake Engineering',
    description: 'Complete sanitary tanker intake stations equipped with deaeration vessels, electromagnetic flowmeters, duplex filtration, and plate heat exchanger chillers.',
    features: [
      'Intake flow rates: 15,000 L/h to 50,000 L/h per reception bay',
      'Vacuum deaerator vessel to eliminate entrained air for billing accuracy',
      'Rapid cooling PHE using ice water / glycol down to 4°C',
      'Duplex coarse and fine sanitary stainless steel bag/mesh filters'
    ],
    applications: ['Raw Milk Tanker Unloading', 'Chilled Milk Storage Silos', 'Volume Accounting', 'De-foaming']
  },
  {
    id: 'qa-lab-ultrasonic-analyzer',
    name: 'Turnkey Dairy QA Laboratory & Milk Analyzer Suite',
    category: 'lab-qa',
    categoryLabel: 'QA Laboratory Testing',
    image: '/images/machinery/qa-lab-analyzer.jpg',
    origin: 'AM Tradings Analytical Systems',
    description: 'Complete quality control laboratory setup including ultrasonic and FTIR milk analyzers, cryoscopes, somatic cell counters, and microbiological incubators.',
    features: [
      'Rapid multi-parameter measurement: Fat, Protein, Lactose, SNF, Added Water, Density, pH',
      'Digital Freezing Point Cryoscope for accurate added water detection down to 0.001°C',
      'Laminar flow clean benches and digital autoclaves for microbiological sterility testing',
      'Standardized testing SOPs compliant with ISO 22000 and Punjab Food Authority (PFA)'
    ],
    applications: ['Raw Milk Intake QC', 'In-Process Line Audits', 'Finished Product Clearance', 'Regulatory Compliance']
  }
];
