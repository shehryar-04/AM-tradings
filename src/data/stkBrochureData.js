/**
 * AM TRADINGS & CONSULTANTS — STK MAKINA / MILKMAN MAKINE OFFICIAL BROCHURE DATA
 * Extracted directly from: "Stk Makina - Milkman Makine New Catalogue 2026.pdf"
 * 
 * Manufacturer Profile:
 * - Brand: STK Makina / Milkman Makine® (Since 1981)
 * - Chairman: Sabri Tecelli
 * - Production Facility: 1. OSB Sakarya, Türkiye
 * - Scope: Turnkey Milk & Dairy Processing Factories across 5 continents & 70+ reference nations.
 * - Standards: ISO 9001, CE, TSE, Food-Grade SS304/SS316L hygienic sanitary construction.
 */

export const stkBrochureMeta = {
  manufacturer: "STK Makina / Milkman Makine®",
  brand: "Milkman Makine",
  established: "1981",
  headquarters: "1. OSB Sakarya, Türkiye",
  chairman: "Sabri Tecelli",
  contact: {
    office: "+90 264 281 50 40",
    whatsappEn: "+90 533 748 59 19",
    whatsappTr: "+90 532 342 11 77",
    email: "info@milkmanmakine.com",
    website: "www.milkmanmakine.com"
  },
  brochurePdfUrl: "/documents/stk-milkman-catalogue-2026.pdf",
  standards: [
    "ISO 9001:2015 Quality Management",
    "CE Machinery Directive 2006/42/EC",
    "TSE (Turkish Standards Institution) Certified",
    "3A Sanitary Standards Compliance",
    "EHEDG Hygienic Design Principles",
    "Food-Grade AISI 316L & AISI 304 Stainless Steel"
  ],
  globalPresence: "Turnkey installations in 70+ countries across Europe, Middle East, Africa, Americas & Asia-Pacific",
  plantTurnkeyFacilities: [
    "White Cheese Production Facilities",
    "Feta Cheese Production Facilities",
    "Kashkaval Cheese Production Facilities",
    "Cream Cheese Production Facilities",
    "Mozzarella Cheese Production Facilities",
    "Halloumi Cheese Production Facilities",
    "Gouda Cheese Production Facilities",
    "Cottage Cheese Production Facilities",
    "Yogurt Production Facilities",
    "Ayran Production Facilities",
    "Kefir Production Facilities",
    "Pasteurized Milk Production Facilities",
    "Concentrated Milk Production Facilities",
    "Sterilized Milk Production Facilities",
    "UHT Milk Production Facilities",
    "Ice Cream Production Facilities",
    "Milk Powder Production Facilities",
    "Butter & Ghee Production Facilities",
    "Cream & Kaymak Production Facilities",
    "Milky Desserts & Supangle Facilities",
    "Fruit Juice & Molasses Facilities"
  ]
};

export const stkKeyMetrics = [
  { label: "Manufacturing Heritage", value: "Since 1981", detail: "45+ Years Dairy Excellence" },
  { label: "Global Reference Nations", value: "70+ Countries", detail: "Active on 5 Continents" },
  { label: "Sanitary Metallurgy", value: "SS316L / SS304", detail: "Electropolished Ra ≤ 0.4 µm" },
  { label: "Thermal Regeneration", value: "Up to 94%", detail: "High-Efficiency Plate Heat Recovery" },
  { label: "Homogenization Pressure", value: "Up to 600 Bar", detail: "Stellite & Tungsten Valves" },
  { label: "Automation Architecture", value: "Siemens SCADA", detail: "Full CIP / PID Modulation" }
];

export const stkEquipmentCategories = [
  { id: "all", label: "All Catalogue Units", icon: "Layers" },
  { id: "heat-treatment", label: "Heat Treatment & Pasteurization", icon: "Flame" },
  { id: "homogenization", label: "Homogenizers & Separators", icon: "Sliders" },
  { id: "milk-intake", label: "Milk Reception & Cooling Silos", icon: "Building2" },
  { id: "cheese-lines", label: "Cheese & Curd Processing Lines", icon: "Layers" },
  { id: "yoghurt-fermented", label: "Yoghurt, Ayran & Fermentation", icon: "Sparkles" },
  { id: "butter-cream", label: "Butter & Clotted Cream (Kaymak)", icon: "Cpu" },
  { id: "evaporation-powder", label: "Evaporators & Drying Towers", icon: "TrendingUp" },
  { id: "packaging-filling", label: "Filling & Packaging Machines", icon: "Zap" },
  { id: "auxiliary-cip", label: "CIP Skids & Plant Utilities", icon: "ShieldCheck" }
];

export const stkCatalogueUnits = [
  // 1. HEAT TREATMENT & PASTEURIZATION
  {
    id: "plate-pasteurizer",
    category: "heat-treatment",
    turkishName: "Pastörizatör",
    englishName: "Plate Pasteurizer Unit (HTST)",
    brochurePage: "Pages 4 & 9",
    image: "/images/stk/brochure_page_4.png",
    overview: "High-efficiency skid-mounted plate heat exchanger pasteurization plant with multi-stage regenerative thermal recovery, holding tube, and automatic flow diversion valve.",
    capacities: "1,000 L/h – 30,000 L/h continuous throughput",
    specifications: [
      { label: "Regenerative Heat Recovery", value: "90% – 94% thermal efficiency" },
      { label: "Wetted Material", value: "AISI 316L acid-proof stainless steel plates" },
      { label: "Gasket Material", value: "Food-grade EPDM / NBR Clip-on type" },
      { label: "Safeguards", value: "Pneumatic 3-way Flow Diversion Valve (FDV)" },
      { label: "Heating Medium", value: "Modulated hot water generator with steam control" },
      { label: "Control System", value: "Siemens / Schneider Touchscreen PLC with SCADA datalogging" }
    ],
    applications: ["Drinking Milk", "Cheese Milk", "Yogurt Base", "Ice Cream Mix", "Fruit Juices"]
  },
  {
    id: "tubular-pasteurizer",
    category: "heat-treatment",
    turkishName: "Tubular Pastörizatör",
    englishName: "Tubular Pasteurizer & UHT System",
    brochurePage: "Pages 4 & 12",
    image: "/images/stk/brochure_page_4.png",
    overview: "Heavy-duty multi-tube corrugated tubular heat exchanger designed for high-viscosity dairy streams, high-fiber juices, cream, and extended shelf-life (ESL/UHT) sterilization.",
    capacities: "1,000 L/h – 20,000 L/h",
    specifications: [
      { label: "Tube Geometry", value: "Concentric corrugated multi-tube configuration" },
      { label: "Design Pressure", value: "Up to 25 Bar operating pressure" },
      { label: "Thermal Range", value: "Up to 142°C sterilization profile" },
      { label: "Cleaning Regime", value: "Full automated aseptic CIP/SIP cycle" },
      { label: "Construction", value: "Seamless AISI 316L orbital-welded tubes" }
    ],
    applications: ["Viscous Dairy", "Cream Pasteurization", "UHT Milk", "Dessert Custard", "Tomato Paste"]
  },
  {
    id: "vacuum-deodorizer",
    category: "heat-treatment",
    turkishName: "Deodorizatör",
    englishName: "Continuous Vacuum Deodorizer",
    brochurePage: "Page 5",
    image: "/images/stk/brochure_page_5.png",
    overview: "Sanitary vacuum flash evaporation vessel installed inline with pasteurizers to remove trapped gases, unwanted feed odors, volatile off-flavors, and prevent oxidation.",
    capacities: "3,000 L/h – 25,000 L/h",
    specifications: [
      { label: "Vessel Design", value: "Conical vacuum chamber with tangential milk inlet" },
      { label: "Condenser", value: "Shell & tube aroma recovery condenser" },
      { label: "Vacuum Level", value: "-0.6 to -0.85 Bar regulated via liquid ring pump" },
      { label: "Level Control", value: "Continuous modulating electronic float transmitter" }
    ],
    applications: ["Raw Milk Deaeration", "Feed Odor Removal", "Seasonal Pasture Taint Correction"]
  },

  // 2. HOMOGENIZERS & SEPARATORS
  {
    id: "homogenizer",
    category: "homogenization",
    turkishName: "Homojenizatör",
    englishName: "High-Pressure Homogenizer",
    brochurePage: "Pages 4, 9 & 25",
    image: "/images/stk/brochure_page_9.png",
    overview: "Two-stage heavy-duty high-pressure homogenizer engineered for micron-scale fat globule breakdown, uniform emulsion stability, and enhanced viscosity.",
    capacities: "500 L/h – 15,000 L/h",
    specifications: [
      { label: "Operating Pressure", value: "Up to 400 – 600 Bar continuous rating" },
      { label: "Compression Block", value: "Monoblock forged high-strength duplex stainless steel" },
      { label: "Plungers", value: "Solid ceramic or diamond-coated tungsten carbide" },
      { label: "Homogenizing Valves", value: "Stellite / Tungsten carbide reversible impact heads" },
      { label: "Lubrication", value: "Forced oil cooling circulation with oil filter alarm" },
      { label: "Dampeners", value: "Hydraulic pulsation dampeners on inlet & outlet" }
    ],
    applications: ["Pasteurized & UHT Milk", "Set & Stirred Yogurt", "Ice Cream Emulsions", "Cream Cheese"]
  },
  {
    id: "cream-separator",
    category: "homogenization",
    turkishName: "Krema Seperatörü",
    englishName: "Self-Cleaning Centrifugal Cream Separator",
    brochurePage: "Pages 5, 9 & 12",
    image: "/images/stk/brochure_page_5.png",
    overview: "High-speed disc-stack centrifugal separator for precision milk skimming, cold/warm clarification, cream fat standardization, and automatic solids ejection.",
    capacities: "1,000 L/h – 25,000 L/h",
    specifications: [
      { label: "Separation Efficiency", value: "Residual fat in skim milk ≤ 0.04%" },
      { label: "Discharge Mechanism", value: "Automatic partial and total hydraulic sediment discharge" },
      { label: "Rotating Bowl Material", value: "High-tensile duplex stainless steel DIN 1.4462" },
      { label: "Drive Configuration", value: "Frequency inverter-controlled smooth ramp start" },
      { label: "Standardization", value: "Integrated precision inline milk/cream density valves" }
    ],
    applications: ["Cream Harvesting", "Milk Skimming", "Warm/Cold Clarification", "Whey Defatting"]
  },
  {
    id: "milk-powder-mixer",
    category: "homogenization",
    turkishName: "Süt Tozu Mikseri",
    englishName: "Milk Powder Reconstitution & Mixing Skid",
    brochurePage: "Page 9",
    image: "/images/stk/brochure_page_9.png",
    overview: "High-shear powder induction mixer equipped with ergonomic dry ingredient hopper, sanitary butterfly throttle, and high-velocity venturi dissolution pump.",
    capacities: "Dissolution capacity up to 3,000 kg powder/hour",
    specifications: [
      { label: "Dissolution Mechanism", value: "High-shear vortex vacuum suction without aeration" },
      { label: "Hopper Assembly", value: "Vibratory table grid for 25kg bulk powder bags" },
      { label: "Circulation Rate", value: "Up to 30,000 L/h inline slurry throughput" },
      { label: "Material", value: "All contact parts AISI 316L stainless steel" }
    ],
    applications: ["Recombined Milk", "Ice Cream Powder Dosing", "Yogurt Solids Fortification", "Pectin/Sugar Blending"]
  },

  // 3. MILK INTAKE & STORAGE SILOS
  {
    id: "milk-transport-tankers",
    category: "milk-intake",
    turkishName: "Süt Nakil Tankları",
    englishName: "Insulated Road Milk Transportation Tankers",
    brochurePage: "Page 7",
    image: "/images/stk/brochure_page_7.png",
    overview: "Heavy-duty truck-mounted and trailer-chassis insulated milk transportation tankers with multiple hermetic compartments, anti-surge baffles, and rear sanitary pump cabinets.",
    capacities: "3,000 Litres – 28,000 Litres",
    specifications: [
      { label: "Insulation", value: "50mm high-density injected polyurethane foam" },
      { label: "Thermal Retention", value: "Max 1°C temperature rise over 24 hours" },
      { label: "Compartments", value: "2 to 5 isolated chambers with independent drain valves" },
      { label: "CIP System", value: "Dual rotary spray balls in every individual chamber" },
      { label: "Rear Cabinet", value: "Equipped with milk intake pump, sampling cock & meter" }
    ],
    applications: ["Raw Milk Farm Collection", "Inter-Plant Bulk Transfer", "Chilled Whey Haulage"]
  },
  {
    id: "milk-storage-silos",
    category: "milk-intake",
    turkishName: "Süt Depolama Tankı / Silosu",
    englishName: "Vertical Insulated Milk Storage Silos",
    brochurePage: "Pages 6 & 8",
    image: "/images/stk/brochure_page_8.png",
    overview: "Vertical cylindrical insulated process and storage tanks with laser-welded dimple cooling jackets, side-entry or top-mounted hygienic agitators, and sterile vent filtration.",
    capacities: "5,000 Litres – 100,000 Litres",
    specifications: [
      { label: "Cooling Section", value: "Laser-welded dimple jacket for chilled water / glycol" },
      { label: "Inner Vessel", value: "AISI 304 or AISI 316L, mirror finish Ra ≤ 0.4 µm" },
      { label: "Agitation", value: "Low-shear sanitary propeller preventing fat stratification" },
      { label: "Safety & Hygiene", value: "Manhole, level transmitter, overflow pipe, anti-vacuum valve" },
      { label: "CIP Integration", value: "Hygienic 360° orbital rotating spray heads" }
    ],
    applications: ["Raw Milk Cold Holding (4°C)", "Standardized Milk Buffer", "Pasteurized Surge Storage"]
  },
  {
    id: "milk-cooling-tanks",
    category: "milk-intake",
    turkishName: "Süt Soğutma Tankı",
    englishName: "Direct Expansion Milk Cooling Bulk Tanks",
    brochurePage: "Page 8",
    image: "/images/stk/brochure_page_8.png",
    overview: "Horizontal and vertical direct-expansion bulk milk cooling tanks with hermetic scroll refrigeration units, digital temperature controllers, and automated tank washers.",
    capacities: "500 Litres – 10,000 Litres",
    specifications: [
      { label: "Cooling Performance", value: "Cools 35°C milk to 4°C in under 2.5 hours" },
      { label: "Evaporator Base", value: "Laser-welded pillow plate bottom for maximum heat flux" },
      { label: "Refrigerant", value: "Eco-friendly R404A / R507 hermetic condensing system" },
      { label: "Washing Cycle", value: "Automated pump-driven water/caustic spray sanitation" }
    ],
    applications: ["Dairy Farms", "Village Collection Centers", "Plant Pre-Intake Chilling"]
  },
  {
    id: "milk-receiving-flowmeter",
    category: "milk-intake",
    turkishName: "Süt Alım Teknesi ve Süt Sayacı",
    englishName: "Milk Receiving Trough & Electronic Flowmeter Unit",
    brochurePage: "Page 7",
    image: "/images/stk/brochure_page_7.png",
    overview: "Complete intake bay reception unit featuring stainless steel dump trough, coarse strainer, deaeration column, magnetic flowmeter, and automated volume ticket printer.",
    capacities: "10,000 L/h – 35,000 L/h intake speed",
    specifications: [
      { label: "Flow Measurement", value: "Electromagnetic or Coriolis mass flowmeter (±0.2% accuracy)" },
      { label: "Air Eliminator", value: "Automatic float-controlled deaerator prevents false volume counting" },
      { label: "Pump Unit", value: "High-flow self-priming centrifugal sanitary pump" }
    ],
    applications: ["Milk Reception Bays", "Truck Unloading", "Billing & Verification"]
  },

  // 4. CHEESE & CURD PROCESSING LINES
  {
    id: "cheese-process-tanks",
    category: "cheese-lines",
    turkishName: "Peynir Proses Tankları",
    englishName: "Enclosed & Open Cheese Process Tanks",
    brochurePage: "Pages 13 & 22",
    image: "/images/stk/brochure_page_13.png",
    overview: "Precision cheese vats designed with contra-rotating planetary cutting knives and stirring paddles, jacketed hot water heating, and conical whey drainage valves.",
    capacities: "1,000 Litres – 12,000 Litres per vat",
    specifications: [
      { label: "Curd Cutting", value: "Dual contra-rotating sharp planetary cutting ribbons" },
      { label: "Grain Uniformity", value: "Produces consistent 3mm – 12mm curd grain sizes" },
      { label: "Heating Control", value: "Low-pressure steam or hot-water dimple jacket" },
      { label: "Discharge", value: "Pneumatic bottom butterfly valve with curd-gentle flow" }
    ],
    applications: ["Kashkaval", "Gouda", "Mozzarella", "Edam", "Hard & Semi-Hard Cheeses"]
  },
  {
    id: "dry-cooking-machine",
    category: "cheese-lines",
    turkishName: "Kuru Haşlama Makinası",
    englishName: "Dry Cooking & Universal Melting Machine",
    brochurePage: "Pages 14 & 15",
    image: "/images/stk/brochure_page_15.png",
    overview: "Universal high-shear cutter, cooker, and vacuum blender with direct steam micro-injection, steam heating jacket, and counter-rotating scrapers for processed and spreadable cheese.",
    capacities: "60 Litres to 500 Litres batch volume",
    specifications: [
      { label: "Cooking Mechanism", value: "Direct culinary filtered steam injection + jacketed heating" },
      { label: "Knife Speed", value: "Variable frequency drive 300 to 3,000 RPM micro-cutters" },
      { label: "Vacuum Deaeration", value: "Integrated vacuum pump for pore-free mirror glossy texture" },
      { label: "Tilt Discharge", value: "Hydraulic vessel tilting for seamless product emptying" }
    ],
    applications: ["Processed Cheese", "Cheese Spread", "Sauces & Dressings", "Labneh Base"]
  },
  {
    id: "hot-water-stretching-machine",
    category: "cheese-lines",
    turkishName: "Sulu Haşlama Makinası",
    englishName: "Hot Water Stretching & Kneading Machine",
    brochurePage: "Page 14",
    image: "/images/stk/brochure_page_14.png",
    overview: "Continuous twin-auger hot water cooking and stretching machine engineered to achieve the signature fiber texture, elasticity, and sheen in pasta filata cheeses.",
    capacities: "200 kg/h – 1,500 kg/h continuous output",
    specifications: [
      { label: "Auger Mechanism", value: "Contra-rotating Teflon-coated twin kneading screws" },
      { label: "Water Temperature", value: "PID-controlled hot water injection (65°C – 85°C)" },
      { label: "Steam Heating", value: "Steam thermoregulator with automatic water recirculator" }
    ],
    applications: ["Mozzarella", "Kashkaval / Kaşar", "Pizza Cheese Blocks", "Provolone"]
  },
  {
    id: "cheese-moulding-machine",
    category: "cheese-lines",
    turkishName: "Peynir Gramajlama Makinası",
    englishName: "Automated Cheese Moulding & Portioning Machine",
    brochurePage: "Page 15",
    image: "/images/stk/brochure_page_15.png",
    overview: "Rotary turret portioning and moulding machine with interchangeable form moulds for accurate block, ball, and loaf cheese grammage.",
    capacities: "Up to 1,200 kg/h portioning rate",
    specifications: [
      { label: "Portion Range", value: "Adjustable 200g, 400g, 1kg, 2kg formats" },
      { label: "Mould Types", value: "Rectangular loaves, circular wheels, or spherical balls" },
      { label: "Material", value: "Teflon-coated food-grade aluminum / AISI 304" }
    ],
    applications: ["Kaşar Loaves", "Mozzarella Balls & Blocks", "Halloumi Blocks"]
  },
  {
    id: "white-cheese-vat-press",
    category: "cheese-lines",
    turkishName: "Beyaz Peynir Teknesi ve Salamura Tankı",
    englishName: "White Cheese Draining Vat & Brine Storage Unit",
    brochurePage: "Page 12",
    image: "/images/stk/brochure_page_12.png",
    overview: "Stainless steel curd draining and pressing trough with perforated whey screens, pneumatic pressing plates, and dedicated corrosion-proof brine preparation tanks.",
    capacities: "1,000L – 5,000L batch vats",
    specifications: [
      { label: "Draining Design", value: "Removable perforated SS316L whey drainage sieves" },
      { label: "Pressing System", value: "Piston-driven multi-station pneumatic press plates" },
      { label: "Brine Resistance", value: "AISI 316L extra-low carbon acid-resistant construction" }
    ],
    applications: ["Turkish White Cheese (Beyaz Peynir)", "Feta Cheese", "Brined Curd Blocks"]
  },
  {
    id: "halloumi-mozzarella-units",
    category: "cheese-lines",
    turkishName: "Hellim Ünitesi & Dil Peynir Formlama",
    englishName: "Halloumi Unit & String Cheese Forming Line",
    brochurePage: "Pages 21 & 23",
    image: "/images/stk/brochure_page_21.png",
    overview: "Specialized cheese line stations including automated Halloumi curd cooking/folding tables, continuous string cheese (Dil Peyniri) extrusion formers, and curd slicing units.",
    capacities: "300 kg/h – 1,000 kg/h",
    specifications: [
      { label: "Halloumi Table", value: "Steam-heated hot whey boiling bath with pneumatic press bank" },
      { label: "String Extruder", value: "Multi-nozzle continuous rope former with cooling bath" },
      { label: "Slicing Machine", value: "High-speed rotating multi-blade shredder and block slicer" }
    ],
    applications: ["Halloumi (Hellim)", "String Cheese (Dil Peyniri)", "Shredded Pizza Cheese", "Cheddar Blocks"]
  },
  {
    id: "ricotta-whey-cheese-press",
    category: "cheese-lines",
    turkishName: "Lor (Ricotta) Proses Tankı ve Pres Makinası",
    englishName: "Whey Ricotta (Lor) Cooking Tank & Press",
    brochurePage: "Page 20",
    image: "/images/stk/brochure_page_20.png",
    overview: "Specialized high-temperature atmospheric boiling tanks for precipitating albumin/globulin whey proteins, paired with pneumatic perforated press vats.",
    capacities: "1,000 Litres to 10,000 Litres",
    specifications: [
      { label: "Heating Geometry", value: "Conical steam heating bottom for aggressive convective thermal boil" },
      { label: "Curd Harvesting", value: "Perforated skimming scoops and automated tipping press vats" }
    ],
    applications: ["Lor Cheese", "Italian Ricotta", "Whey Albumin Protein Recovery"]
  },

  // 5. YOGHURT, AYRAN & FERMENTATION
  {
    id: "yoghurt-fermentation-tanks",
    category: "yoghurt-fermented",
    turkishName: "Yoğurt Fermantasyon Tankı & Ayran Proses Tankı",
    englishName: "Yoghurt Fermentation & Elevated Ayran Process Platform",
    brochurePage: "Page 10",
    image: "/images/stk/brochure_page_10.png",
    overview: "Multi-layer insulated fermentation vessels with dimple heating/cooling jackets, low-shear anchor scrapers, and interconnected platform skids for Ayran batching.",
    capacities: "1,000 Litres – 10,000 Litres per tank",
    specifications: [
      { label: "Thermal Control", value: "Multi-zone cooling to rapidly arrest fermentation at set pH" },
      { label: "Agitator Design", value: "Gentle sweeping anchor blade with food-grade PTFE scrapers" },
      { label: "Platform Skid", value: "Multi-tank structural platform with stairs, catwalk & manifold" },
      { label: "Salt & Water Dosing", value: "Automated inline brine and water metering for Ayran" }
    ],
    applications: ["Set Yogurt", "Stirred Yogurt", "Drinking Ayran", "Kefir Cultures", "Labneh Base"]
  },
  {
    id: "yoghurt-filling-machine",
    category: "yoghurt-fermented",
    turkishName: "Yoğurt Sütü Dolum Makinesi",
    englishName: "Semi-Automated Yoghurt Milk Dosing & Filling Machine",
    brochurePage: "Pages 5 & 10",
    image: "/images/stk/brochure_page_10.png",
    overview: "Mobile stainless steel volumetric dosing station with warm jacketed buffer hopper, sanitary dispensing nozzles, and digital batch dosing presets.",
    capacities: "Up to 1,800 containers/hour",
    specifications: [
      { label: "Dosing Range", value: "250g to 5,000g buckets and pots" },
      { label: "Nozzles", value: "Anti-drip pneumatic shutoff diving nozzles" },
      { label: "Mobility", value: "Heavy-duty locking castor wheels for easy line re-positioning" }
    ],
    applications: ["Pail Yogurt Dosing", "Bucket Filling", "Incubation Cup Filling"]
  },

  // 6. BUTTER & CLOTTED CREAM (KAYMAK)
  {
    id: "rotary-butter-churn",
    category: "butter-cream",
    turkishName: "Döner Tip Tereyağı Yayık",
    englishName: "Industrial Rotary Type Butter Churner",
    brochurePage: "Page 17",
    image: "/images/stk/brochure_page_17.png",
    overview: "Heavy-duty rotating cylindrical stainless steel barrel butter churner equipped with internal baffles, variable speed inverter, safety cage, and buttermilk drain valve.",
    capacities: "500 Litres – 5,000 Litres barrel volume",
    specifications: [
      { label: "Barrel Rotation", value: "Variable frequency drive 5 to 35 RPM bidirectional spin" },
      { label: "Inspection", value: "Hygienic illumination sight glass and vacuum release cock" },
      { label: "Safety System", value: "Safety perimeter barrier with automatic magnetic trip stop" },
      { label: "Discharge", value: "Direct buttermilk decanting port and butter door hatch" }
    ],
    applications: ["Sweet Cream Butter", "Cultured Lactic Butter", "Ghee / Clarified Butter Base"]
  },
  {
    id: "butter-moulding-packaging",
    category: "butter-cream",
    turkishName: "Otomatik Tereyağı Gramajlama Makinesi",
    englishName: "Automatic Butter Moulding & Portioning Machine",
    brochurePage: "Page 17",
    image: "/images/stk/brochure_page_17.png",
    overview: "Continuous twin-screw extrusion hopper, forming chamber, and automated wire guillotine cutter for accurate packaging of butter portions.",
    capacities: "Up to 800 kg/h portioning throughput",
    specifications: [
      { label: "Portion Sizes", value: "100g, 200g, 250g, 500g, 1kg rectangular bricks" },
      { label: "Extrusion Hopper", value: "Twin motorized feeding augers with safety interlock grid" },
      { label: "Outfeed", value: "Integrated food-grade conveyor belt to wrapping station" }
    ],
    applications: ["Butter Bricks", "Portion Packs", "Margarine Formats"]
  },
  {
    id: "cream-ripening-kaymak",
    category: "butter-cream",
    turkishName: "Krema Olgunlaştırma Tankı & Kaymak Hatları",
    englishName: "Cream Ripening Tank & Clotted Cream (Kaymak) Trays",
    brochurePage: "Page 18",
    image: "/images/stk/brochure_page_18.png",
    overview: "Temperature-controlled crystallizing and biological aging tanks for churning cream, alongside multi-tier sanitary clotted cream (Kaymak) steaming and chilling racks.",
    capacities: "1,000L – 5,000L ripening vats",
    specifications: [
      { label: "Thermal Cycle", value: "Precise temperature curve cycling for fat crystallization" },
      { label: "Kaymak System", value: "Multi-tier steaming troughs with uniform surface heating & cooling" }
    ],
    applications: ["Traditional Turkish Kaymak", "Cultured Churning Cream", "Whipping Cream Aging"]
  },

  // 7. EVAPORATION & POWDER
  {
    id: "vacuum-evaporator",
    category: "evaporation-powder",
    turkishName: "Evaporatör (Vakum)",
    englishName: "Multi-Effect Falling Film Vacuum Evaporator",
    brochurePage: "Pages 4, 10, 11 & 24",
    image: "/images/stk/brochure_page_4.png",
    overview: "High-efficiency falling film thermal evaporator equipped with Thermal Vapor Recompression (TVR), multi-stage calandrias, and continuous density monitoring.",
    capacities: "1,000 L/h – 20,000 L/h water evaporation rate",
    specifications: [
      { label: "Energy Efficiency", value: "TVR system cuts steam consumption by up to 60%" },
      { label: "Concentration", value: "Concentrates milk solids up to 48% – 52% dry matter" },
      { label: "Heat Exposure", value: "Single-pass short residence time preserves heat-sensitive whey proteins" },
      { label: "Condenser", value: "Barometric or surface condenser with vacuum water cooling loop" }
    ],
    applications: ["Evaporated Milk", "Condensed Sweet Milk", "Skim Milk Concentrate", "Whey Protein Concentration"]
  },
  {
    id: "spray-drying-tower",
    category: "evaporation-powder",
    turkishName: "Kurutma Kulesi / Ultrafiltrasyon",
    englishName: "Industrial Spray Drying Tower & UF System",
    brochurePage: "Page 11",
    image: "/images/stk/brochure_page_11.png",
    overview: "Complete powder processing facility comprising centrifugal atomizer / high-pressure nozzles, hot air dispersion chamber, cyclone powder recovery, and sanitary membrane UF skids.",
    capacities: "250 kg/h – 2,500 kg/h dry powder output",
    specifications: [
      { label: "Atomizer", value: "High-speed rotary disc atomizer or pressure nozzles" },
      { label: "Air Filtration", value: "Sanitary HEPA inlet filtration with steam/gas air heating" },
      { label: "Membrane System", value: "Spiral-wound ultrafiltration skid for protein pre-concentration" },
      { label: "Powder Collection", value: "High-efficiency sanitary cyclones + baghouse filter" }
    ],
    applications: ["Whole Milk Powder (WMP)", "Skimmed Milk Powder (SMP)", "Whey Powder", "Demineralized Whey"]
  },

  // 8. FILLING & PACKAGING
  {
    id: "rotary-cup-filling",
    category: "packaging-filling",
    turkishName: "Ayran Dolum Makinası",
    englishName: "Rotary Cup Filling & Heat-Sealing Machine",
    brochurePage: "Page 26",
    image: "/images/stk/brochure_page_26.png",
    overview: "Automated rotary indexing machine for de-stacking pre-formed plastic cups, UV sterilization, volumetric liquid dosing, pre-cut aluminum foil placement, hermetic heat-sealing, and over-capping.",
    capacities: "2,000 – 8,000 cups/hour",
    specifications: [
      { label: "Cup Sizes", value: "100ml to 500ml round & square pre-formed cups" },
      { label: "Hygiene Zone", value: "HEPA laminar air flow cabinet with UV tunnel" },
      { label: "Sealing Integrity", value: "Pneumatic thermostatic sealing heads with embossing code" }
    ],
    applications: ["Ayran Cups", "Yogurt Pots", "Sour Cream", "Pudding & Desserts"]
  },
  {
    id: "bottle-filling-line",
    category: "packaging-filling",
    turkishName: "Şişe Dolum Makinası",
    englishName: "Automated Inline Monoblock Bottle Filling Line",
    brochurePage: "Page 26",
    image: "/images/stk/brochure_page_26.png",
    overview: "Complete monoblock rinsing, filling, and capping system for PET and glass bottles with automated cap sorter, conveyor tracks, and sleeve labeling.",
    capacities: "1,500 – 6,000 bottles/hour",
    specifications: [
      { label: "Bottle Types", value: "250ml, 500ml, 1,000ml, 2,000ml PET or Glass bottles" },
      { label: "Filling Technology", value: "Gravity, electronic flowmeter, or vacuum level filling" },
      { label: "Capping Head", value: "Magnetic torque screw capping head with cap chute" }
    ],
    applications: ["Fresh Pasteurized Milk", "Kefir Bottles", "Drinking Ayran", "Cold Brew Latté"]
  },
  {
    id: "thermoform-vacuum-packaging",
    category: "packaging-filling",
    turkishName: "Thermoform Paketleme Makinası (Z-105) & Vakum",
    englishName: "Continuous Rollstock Thermoforming & Chamber Vacuum Machines",
    brochurePage: "Page 27",
    image: "/images/stk/brochure_page_27.png",
    overview: "Z-105 continuous automatic thermoforming vacuum and MAP (Modified Atmosphere Packaging) line, together with double-chamber vacuum sealers and shrink tunnels.",
    capacities: "Up to 10–15 cycles/minute continuous forming",
    specifications: [
      { label: "Forming Depth", value: "Adjustable up to 120mm container depth" },
      { label: "Film Compatibility", value: "Flexible, semi-rigid, and rigid multi-layer barrier films" },
      { label: "Gas Flushing", value: "N2 / CO2 MAP gas injection for extended cheese shelf-life" },
      { label: "Chamber Sealers", value: "Heavy-duty Busch vacuum pumps on double-chamber units" }
    ],
    applications: ["Kaşar Block Packaging", "Sliced Cheese Shingle Packs", "White Cheese Brine Packs"]
  },

  // 9. CIP & PLANT UTILITIES
  {
    id: "cip-cleaning-unit",
    category: "auxiliary-cip",
    turkishName: "CIP Ünitesi",
    englishName: "Multi-Circuit Automated Clean-In-Place (CIP) Skid",
    brochurePage: "Page 28",
    image: "/images/stk/brochure_page_28.png",
    overview: "Automated 3-tank or 4-tank Clean-In-Place sanitary cleaning station with acid, caustic, hot water, and recovered rinse tanks, shell-and-tube heat exchanger, chemical dosing pumps, and inline conductivity meters.",
    capacities: "5,000 L/h – 30,000 L/h cleaning flow loops",
    specifications: [
      { label: "Tank Setup", value: "Caustic Tank, Nitric Acid Tank, Final Rinse Water, Water Recovery Tank" },
      { label: "Heating Exchanger", value: "Dedicated tubular/plate steam heat exchanger per loop" },
      { label: "Concentration Monitoring", value: "Inductive inline toroidal conductivity transmitters" },
      { label: "Recipe Automation", value: "Programmable PLC cleaning recipes: Silos, Pasteurizers, Piping, Fillers" }
    ],
    applications: ["Turnkey Plant Sanitation", "Cross-Contamination Prevention", "PFA & FDA Audit Compliance"]
  },
  {
    id: "iced-water-generator",
    category: "auxiliary-cip",
    turkishName: "Buzlu Su Ünitesi",
    englishName: "Chilled Ice Water Falling Film Generator",
    brochurePage: "Page 28",
    image: "/images/stk/brochure_page_28.png",
    overview: "Falling film evaporator ice water generator producing sterile +0.5°C to +1.0°C process cooling water without freezing hazard.",
    capacities: "50,000 kcal/h to 1,000,000 kcal/h cooling duty",
    specifications: [
      { label: "Water Temperature", value: "Ultra-stable +0.5°C to +1°C discharge" },
      { label: "Evaporator Plates", value: "AISI 304 laser-welded pillow plate falling film evaporators" },
      { label: "Safety", value: "No burst risk even under extreme freeze loads" }
    ],
    applications: ["Pasteurizer Chilling Regeneration", "Fermentation Rapid Cooling", "Milk Intake Silos"]
  },
  {
    id: "steam-autoclave-boilers",
    category: "auxiliary-cip",
    turkishName: "Buhar Jeneratörü & Otoklav",
    englishName: "High-Efficiency Steam Generator & Horizontal Autoclave",
    brochurePage: "Page 29",
    image: "/images/stk/brochure_page_29.png",
    overview: "Packaged fast-steaming generators delivering dry saturated culinary steam, paired with horizontal retort autoclaves for sterilization of hermetic cans and glass jars.",
    capacities: "Steam: 500 kg/h – 5,000 kg/h; Autoclaves up to 4-basket capacity",
    specifications: [
      { label: "Steam Purity", value: "Culinary food-grade steam filter stages" },
      { label: "Autoclave Control", value: "Pressure counter-balance and automated Fo lethality value control" }
    ],
    applications: ["Plant Steam Supply", "Sterilized Canned Milk", "Flavored Milk Bottles", "Pudding Retorting"]
  },
  {
    id: "sanitary-pumps-valves",
    category: "auxiliary-cip",
    turkishName: "Santrifüj & Lobe Pompalar, Vana ve Ekipmanlar",
    englishName: "Sanitary SS316L Pumps, Mix-Proof Valves & Piping",
    brochurePage: "Page 30",
    image: "/images/stk/brochure_page_30.png",
    overview: "Full suite of food-grade sanitary rotary lobe pumps, open-impeller centrifugal pumps, pneumatic butterfly valves, mix-proof double-seat valves, and orbital-welded tri-clamp fittings.",
    capacities: "Heads up to 70m, capacities up to 60 m³/h",
    specifications: [
      { label: "Pump Heads", value: "AISI 316L investment cast with SiC/SiC mechanical seals" },
      { label: "Lobe Pumps", value: "Gentle low-shear rotors for cream, yogurt, curd & curd slurry" },
      { label: "Surface Finish", value: "Electropolished internal Ra ≤ 0.4 µm with full material mill test certificates" }
    ],
    applications: ["Process Manifolds", "Viscous Transfer", "CIP Return Scavenging", "Tank Matrix"]
  }
];
