export const profile = {
  name: 'Vivek Singh',
  role: 'CFD Engineer',
  location: 'Cranfield, UK',
  email: 'singhofficial007@gmail.com',
  phone: '+44 07352670122',
  linkedin: 'https://www.linkedin.com/in/vivek-singh-vk7',
  summary: 'CFD engineer with over two years of hands-on simulation experience across ANSA and Ansys Fluent. Familiar with STAR CCM+ and OpenFOAM. My work brings together fluid mechanics, aerodynamics, and heat transfer through professional practice and MSc-level research.',
};

export const expertise = [
  { title: 'Simulation & analysis', items: ['OpenFOAM', 'Ansys Fluent', 'STAR CCM+', 'ANSA', 'HyperMesh', 'LS-DYNA'] },
  { title: 'Modelling & validation', items: ['Mesh generation', 'Turbulence modelling', 'Boundary conditions', 'Post-processing', 'Verification & validation', 'Reference-data correlation'] },
  { title: 'Engineering toolkit', items: ['Python', 'MATLAB', 'CATIA V5', 'AutoCAD'] },
];

export const experience = {
  employer: 'Tata Technologies', role: 'CFD Engineer', location: 'Pune, India', period: 'July 2023 — September 2025',
  points: [
    'Performed simulations to evaluate aerodynamic and thermal performance of vehicle systems, from mesh generation and turbulence modelling to boundary condition specification.',
    'Assessed and optimised airflow and heat transfer in HVAC and vehicle exterior domains, supporting design optimisation and concept validation against development targets.',
    'Collaborated with design and thermal engineers in multidisciplinary reviews, translating simulation results into actionable engineering conclusions.',
    'Improved CFD workflow efficiency by 10% through process automation.',
    'Communicated performance results, risks, and improvement opportunities to senior engineers.',
  ],
};

export const projects = [
  {
    title: 'Unsteady aerodynamic data modelling', category: 'Aerodynamics / Machine learning', institution: 'MSc · Cranfield University', period: 'May — September 2026',
    summary: 'Gaussian Process and surrogate models for unsteady aerodynamic prediction, aiming to reduce reliance on expensive high-fidelity CFD and wind tunnel runs during concept screening.',
    points: ['Building the Gaussian Process and surrogate modelling workflow in Python, from data preparation through model training to prediction.', 'Validating predictions against wind tunnel hot-wire, pressure, and force/moment balance databases alongside DDES/LES numerical references.', 'Running Python-based sensitivity studies to identify the parameters most influential on force coefficient prediction.'],
    tags: ['Python', 'Gaussian Processes', 'Surrogate modelling', 'DDES / LES', 'CFD-to-test correlation'],
  },
  {
    title: 'L7e quadricycle structural integrity', category: 'Crashworthiness / Structural analysis', institution: 'Group Design Project · Cranfield University', period: 'March — April 2026',
    summary: 'Crash and stiffness assessment of an EU L7e quadricycle chassis, evaluating passenger compartment integrity and opportunities for structural lightweighting.',
    points: ['Conducted LS-DYNA frontal, side-pole, and quasi-static roof-crush simulations, evaluating energy absorption, peak contact forces, and stress distribution.', 'Identified failure modes and proposed front crash boxes, lateral bracing, and reinforced A-pillar cross sections.', 'Designed the chassis in CAD and compared steel and aluminium alloys using a weighted SAW material-selection matrix.', 'Built 1D and 2D HyperMesh/OptiStruct models with 8,000+ elements for torsional and bending stiffness; presented findings to a seven-person team and academic advisors.'],
    tags: ['LS-DYNA', 'HyperMesh', 'OptiStruct', 'CAD', 'Material selection'],
  },
  {
    title: 'Formula Student aerodynamic package', category: 'Aerodynamic design / Motorsport', institution: 'Parakram Team · DIT University', period: '2019 — 2022',
    summary: 'Led aerodynamic development as Team Captain, taking the front wing, rear wing, and underbody from concept generation through CFD evaluation to physical build.',
    points: ['Evaluated downforce, drag, and aerodynamic balance trade-offs within Formula Student regulations.', 'Drove the car in national competition, connecting simulation targets with on-car behaviour and driver feedback.'],
    tags: ['CFD', 'Downforce & drag', 'Aerodynamic balance', 'Physical validation'],
  },
  {
    title: 'Hybrid composite material', category: 'Materials / Thermal analysis',
    summary: 'Fabricated and mechanically tested a hybrid composite, then integrated it as the outer body of an electric vehicle prototype.',
    points: ['Considered aerodynamic and structural implications of the composite body.', 'Performed thermal analysis and examined property variation with temperature.', 'Presented research findings at an international conference.'],
    tags: ['Composite fabrication', 'Mechanical testing', 'Thermal analysis', 'Research communication'],
  },
];

export const education = [
  { degree: 'MSc Automotive Engineering', university: 'Cranfield University', location: 'Cranfield, UK', period: 'September 2025 — September 2026', details: 'Vehicle Design; Propulsion and Performance; Automotive Control and Simulation; Vehicle Electrification and Hybridization; Vehicle Dynamics; Powertrain Simulation and Performance; Automotive Aerodynamics; Vehicle Structures; Vehicle Materials and Manufacturing.' },
  { degree: 'B.Tech Mechanical Engineering', university: 'DIT University', location: 'Dehradun, India', period: 'July 2019 — May 2023', details: 'Specialisation in Automobile Engineering · CGPA 7.4/10' },
];

export const training = ['EV Thermal Management System — I-GET-IT (2023)', 'CATIA V5 Fundamentals — I-GET-IT', 'Fundamentals of GD&T — I-GET-IT'];
