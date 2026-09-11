/**
 * AM TRADINGS & CONSULTANTS — PROJECTS PORTFOLIO DATA
 * Source of Truth: Verified Client Engagements & Advisory Contracts.
 * Structured data architecture supporting multi-page filtering and dynamic project detail views.
 */

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'greenfield', label: 'Turnkey Greenfield' },
  { id: 'modernization', label: 'Plant Modernization' },
  { id: 'advisory', label: 'International Advisory' },
];

export const projects = [
  {
    slug: 'ever-fresh-dairy',
    title: 'Ever Fresh Dairy Processing Plant',
    client: 'Ever Fresh Dairy Industries',
    location: 'Punjab, Pakistan',
    category: 'greenfield',
    categoryLabel: 'Turnkey Greenfield Project',
    status: 'Commissioned & Operational',
    timeline: '14 Months Execution',
    heroImage: '/images/plant-consulting-dark.jpeg',
    gallery: [
      '/images/plant-consulting-dark.jpeg',
      '/images/machinery/uht-sterilizer-line.jpg',
      '/images/machinery/pasteurizer-plant.jpg',
      '/images/greenfield-8-stages.jpeg',
    ],
    summary: 'Full-lifecycle Greenfield engineering, equipment procurement, hygienic facility design, and commercial commissioning of a high-yield liquid milk and value-added dairy processing facility.',
    description: 'AM Tradings was engaged from Stage 01 (Concept & Feasibility) through to Stage 08 (Commercial Handover) for Ever Fresh Dairy. The facility was architected to bridge the gap between regional farm milk catchment and modern urban aseptic packaged retail demand. AM Tradings conducted the international machinery tender, supervised sanitary SS316L orbital welding, and engineered proprietary standardization formulations.',
    scope: [
      'Comprehensive bankable feasibility study & milk catchment catchment mapping',
      'Hygienic 3D architectural master plan with strict zoning (High Care / Low Care)',
      'Tender audit and independent procurement of UHT, pasteurization, and homogenization lines',
      'Sanitary orbital welding inspection, utility tie-ins (steam, glycol, compressed air)',
      'Dry & wet water trials, chemical passivation, and live-milk commissioning',
      'Complete Quality Assurance laboratory setup & PFA regulatory validation',
    ],
    machinerySupplied: [
      'Automated Raw Milk Reception & Deaeration Bay (30,000 L/h)',
      'Regenerative Plate HTST Pasteurizer with Automated Flow Diversion',
      'High-Pressure Two-Stage Homogenizer (400 Bar)',
      'Sanitary Stainless Steel Storage Silos with Dimpled Cooling Jackets',
      'Automated Multi-Channel Clean-In-Place (CIP) Station',
    ],
    consultancyInvolvement: [
      'Principal Consultant: Dr. Munib Siddiqui',
      'Mass-balance and thermal energy recovery calculations',
      'Standardized liquid milk, pasteurized pouch, and cultured product formulations',
      'Staff standard operating procedures (SOPs) & operator training modules',
    ],
    impactMetrics: [
      { label: 'Processing Capacity', value: '50,000+ L/Day' },
      { label: 'Thermal Heat Recovery', value: '92%' },
      { label: 'CAPEX Procurement Savings', value: '18.5%' },
      { label: 'Microbial Compliance', value: '100% PFA Standard' },
    ],
  },
  {
    slug: 'jk-dairy',
    title: 'JK Dairy Processing Facility',
    client: 'JK Dairy & Food Group',
    location: 'Pakistan',
    category: 'modernization',
    categoryLabel: 'Plant Modernization & Expansion',
    status: 'Operational',
    timeline: '8 Months Integration',
    heroImage: '/images/plant-consulting-light.jpeg',
    gallery: [
      '/images/plant-consulting-light.jpeg',
      '/images/machinery/cream-separator.jpg',
      '/images/machinery/homogenizer-high-pressure.jpg',
      '/images/machinery/cip-cleaning-system.jpg',
    ],
    summary: 'Process line audit, high-efficiency cream separation integration, homogenization upgrade, and automated CIP modernization for enhanced product shelf life.',
    description: 'JK Dairy engaged AM Tradings to resolve processing bottlenecks, improve fat recovery margins, and modernize plant sanitation. AM Tradings audited the existing mechanical infrastructure, sourced self-cleaning centrifugal separation machinery, re-engineered the homogenization loop, and integrated automated multi-circuit Clean-In-Place (CIP) technology.',
    scope: [
      'Thermodynamic and hydraulic plant audit of existing liquid milk processing lines',
      'Sourcing and integration of self-cleaning disc-stack cream separator',
      'Homogenization pressure valve reseating and vibration-free pump alignment',
      'Automated CIP sequence reprogramming with chemical conductivity monitoring',
      'Shelf life stability testing and product loss minimization protocol',
    ],
    machinerySupplied: [
      'High-Speed Self-Cleaning Centrifugal Cream Separator',
      'Sanitary Mix-Proof Valve Manifold for Zero Cross-Contamination',
      'Automated Inline Conductivity CIP Dosing System',
      'Plate Heat Exchanger Regasketing & Thermal Expansion Plates',
    ],
    consultancyInvolvement: [
      'Process optimization audit by Dr. Munib Siddiqui',
      'Cream yield harvesting optimization (residual fat ≤ 0.04% in skim milk)',
      'Sanitary piping modifications and hygienic zoning remediation',
      'Laboratory testing verification against Punjab Food Authority standards',
    ],
    impactMetrics: [
      { label: 'Daily Throughput', value: '35,000 L/Day' },
      { label: 'Cream Recovery Increase', value: '+14%' },
      { label: 'Product Loss Reduction', value: '-2.8%' },
      { label: 'CIP Cycle Time Saved', value: '45 Mins/Day' },
    ],
  },
  {
    slug: 'kk-royal-africa',
    title: 'KK Royal Africa Dairy Advisory',
    client: 'KK Royal Group',
    location: 'East Africa / Cross-Border',
    category: 'advisory',
    categoryLabel: 'International Turnkey Advisory',
    status: 'Consultancy Phase Completed',
    timeline: '6 Months Advisory Scope',
    heroImage: '/images/seven-capabilities.jpeg',
    gallery: [
      '/images/seven-capabilities.jpeg',
      '/images/greenfield-8-stages.jpeg',
      '/images/machinery/evaporator-falling-film.jpg',
      '/images/machinery/storage-silo-tanks.jpg',
    ],
    summary: 'Cross-border industrial feasibility, raw milk catchment economic modeling, international machinery vendor tender audit, and Greenfield architectural layout for an emerging African dairy market.',
    description: 'KK Royal Group contracted AM Tradings for comprehensive international consultancy on establishing an industrial-scale dairy processing and value-addition facility in Africa. Drawing upon decades of dairy industrialization experience, AM Tradings formulated bankable project documentation, mapped raw milk supply dynamics, developed product basket strategies (long-life UHT, recombined milk, and cultured dairy), and audited overseas machinery manufacturer bids.',
    scope: [
      'International Greenfield dairy project feasibility study & financial ROI model',
      'Raw milk procurement catchment analysis in tropical/developing climate zones',
      'Process architecture: UHT recombined milk, ambient distribution, and pouch packaging',
      'Independent tender audit evaluating European, Asian, and American equipment bids',
      'Sanitary environmental design, effluent treatment guidelines, and power generation balance',
    ],
    machinerySupplied: [
      'Turnkey Project Specifications & Request for Proposal (RFP) Engineering Package',
      'Comparative Technical & Commercial Vendor Evaluation Matrix',
      'Sanitary Flow Schematic & P&ID Blueprints',
      'QA Laboratory Instrumentation Specification List',
    ],
    consultancyInvolvement: [
      'Lead Technical Advisor: Dr. Munib Siddiqui',
      'Overseas manufacturer contract negotiation and warranty protection clauses',
      'Recombined milk and stabilized dairy dessert formulation chemistry',
      'Executive investor presentations and board-level risk mitigation',
    ],
    impactMetrics: [
      { label: 'Projected Output', value: '80,000 L/Day' },
      { label: 'CAPEX Tender Audit Savings', value: '22%' },
      { label: 'Feasibility Scope', value: '100% Bankable' },
      { label: 'Advisory Status', value: 'Verified Standard' },
    ],
  },
];
