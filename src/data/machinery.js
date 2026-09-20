/**
 * AM TRADINGS & CONSULTANTS — MACHINERY & EQUIPMENT CATALOGUE
 * Source of Truth: STK Industrial Dairy Machinery Brochure & Official Procurement Scope.
 * All machine names, categories, and technical descriptions are authentic.
 */

export const machineryCategories = [
  { id: 'all', label: 'All Equipment' },
  { id: 'homogenization', label: 'Homogenization' },
  { id: 'thermal', label: 'Thermal Processing' },
  { id: 'evaporation', label: 'Evaporation' },
  { id: 'separation', label: 'Separation' },
  { id: 'deodorizing', label: 'Deodorizing' },
  { id: 'filling-packaging', label: 'Filling & Packaging' },
];

export const machineryItems = [
  {
    id: 'homogenizer',
    name: 'Homogenizer',
    category: 'homogenization',
    categoryLabel: 'Homogenization',
    image: '/images/machinery/homogenizer-high-pressure.jpg',
    origin: 'STK Machinery / Sanitary Standards',
    description: 'High-pressure multi-stage homogenizer engineered for micron-scale fat dispersion, emulsion stability, and optimal viscosity.',
    features: [
      'Operating pressure: Up to 600 Bar continuous duty',
      'Wear-resistant tungsten carbide and ceramic valve heads',
      'Vibration-damped splash lubrication gearbox'
    ],
    applications: ['UHT & Pasteurized Milk', 'Yogurt Base', 'Ice Cream Mix', 'Dairy Emulsions']
  },
  {
    id: 'pasteurizer',
    name: 'Pasteurizer',
    category: 'thermal',
    categoryLabel: 'Thermal Processing',
    image: '/images/machinery/pasteurizer-plant.jpg',
    origin: 'STK Machinery / Sanitary Standards',
    description: 'High-efficiency plate heat exchanger pasteurization line with multi-stage regenerative thermal recovery and automated diversion control.',
    features: [
      'Regenerative thermal energy recovery up to 94%',
      'Sanitary SS316L plate pack with clip-on food-grade gaskets',
      'Automated flow diversion valve (FDV) safeguard'
    ],
    applications: ['Fresh Pasteurized Milk', 'Pouch Milk Packaging', 'Standardized Milk', 'Cheese Prep']
  },
  {
    id: 'evaporator',
    name: 'Evaporator',
    category: 'evaporation',
    categoryLabel: 'Evaporation',
    image: '/images/machinery/evaporator-falling-film.jpg',
    origin: 'STK Machinery / Sanitary Standards',
    description: 'Multi-effect falling film thermal evaporator designed for energy-efficient concentration of liquid dairy and whey streams.',
    features: [
      'Thermal Vapor Recompression (TVR) for reduced steam consumption',
      'Short single-pass residence time to preserve milk proteins',
      'Continuous automated density monitoring and modulation'
    ],
    applications: ['Condensed Milk', 'Evaporated Milk', 'Whey Concentration', 'Milk Powder Prep']
  },
  {
    id: 'cream-separator',
    name: 'Cream Separator',
    category: 'separation',
    categoryLabel: 'Separation',
    image: '/images/machinery/cream-separator.jpg',
    origin: 'STK Machinery / Sanitary Standards',
    description: 'High-speed solid-ejecting disc-stack centrifugal separator for precision milk skimming, fat standardization, and clarification.',
    features: [
      'Skimming efficiency: Residual fat in skim milk ≤ 0.04%',
      'Automated hydraulic partial and total sludge discharge',
      'Corrosion-resistant duplex stainless steel rotating bowl'
    ],
    applications: ['Milk Fat Separation', 'Cream Harvesting', 'Cold/Warm Clarification', 'Whey Defatting']
  },
  {
    id: 'deodorizer',
    name: 'Deodorizer',
    category: 'deodorizing',
    categoryLabel: 'Deodorizing',
    image: '/images/machinery/deaerator-system.jpg',
    origin: 'STK Machinery / Sanitary Standards',
    description: 'Sanitary vacuum deaeration and deodorizing unit to eliminate entrained air, off-flavors, and volatile odors from raw milk.',
    features: [
      'Vacuum flash chamber with high-efficiency aroma recovery',
      'Eliminates feed odors and air bubbles prior to pasteurization',
      'Improves measurement precision at milk intake bays'
    ],
    applications: ['Raw Milk Deaeration', 'Feed Odor Removal', 'Aroma Retention', 'Intake De-foaming']
  },
  {
    id: 'yogurt-filling-machine',
    name: 'Yogurt Filling Machine',
    category: 'filling-packaging',
    categoryLabel: 'Filling & Packaging',
    image: '/images/machinery/aseptic-filling-machine.jpg',
    origin: 'STK Machinery / Sanitary Standards',
    description: 'Automated sanitary cup and pouch filling and sealing machine with ultra-clean laminar flow and precise volumetric dosing.',
    features: [
      'Precise multi-head volumetric piston dosing for viscous yogurt',
      'UV/HEPA cup sterilization and hermetic heat-sealing station',
      'Automated Clean-in-Place (CIP) contact surfaces'
    ],
    applications: ['Set Yogurt Cups', 'Stirred & Greek Yogurt', 'Cultured Dairy Desserts', 'Flavored Yogurt Pots']
  }
];
