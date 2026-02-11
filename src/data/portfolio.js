export const personal = {
  name: 'Sourav Kumar Mahato',
  role: 'Senior Frontend Engineer',
  tagline: 'I build products that scale.',
  summary:
    'Frontend engineer with 8+ years of shipping production-grade SaaS platforms. I specialize in turning complex business logic into clean, performant interfaces — from multi-tenant architectures to canvas-based design tools.',
  email: 'souravkumar1329@gmail.com',
  whatsapp: '7501751001',
  github: 'https://github.com/skmahato',
  linkedin: 'https://linkedin.com/in/souravmahato',
  resumeUrl: '#',
  location: 'India — Open to global / remote roles',
};

export const about = {
  paragraphs: [
    "I've spent 8+ years in the trenches of frontend engineering — not building toy apps, but production systems that handle real money, real users, and real complexity. My work sits at the intersection of product thinking and deep technical execution.",
    'I specialize in building SaaS platforms from the ground up: multi-tenant architectures, pricing engines that handle dozens of product variants, canvas editors for design placement, and data-heavy interfaces that stay fast under load.',
    "I don't just implement designs. I question requirements, propose better solutions, and think about the system as a whole — from Firestore data modeling to how a pricing change cascades through the UI. That's what sets me apart.",
  ],
  highlights: [
    'Built and maintained multi-tenant SaaS platforms serving real businesses',
    'Designed pricing engines handling 4+ print methods with complex logic',
    'Created canvas-based design tools with image manipulation & PDF export',
    'Architected Firebase-first systems with cost optimization in mind',
  ],
};

export const skills = {
  'Frontend Core': [
    { name: 'JavaScript', level: 'Expert' },
    { name: 'React', level: 'Advanced' },
    { name: 'Redux / Saga / Thunk', level: 'Advanced' },
    { name: 'GraphQL / Apollo', level: 'Proficient' },
    { name: 'HTML / CSS', level: 'Expert' },
    { name: 'Tailwind CSS', level: 'Proficient' },
  ],
  'UI & Data': [
    { name: 'Material UI (MUI)', level: 'Advanced' },
    { name: 'TanStack Table', level: 'Advanced' },
    { name: 'Canvas API', level: 'Proficient' },
    { name: 'React PDF', level: 'Proficient' },
    { name: 'WebRTC', level: 'Intermediate' },
  ],
  'Backend & Infra': [
    { name: 'Firebase (Auth, Firestore, Storage)', level: 'Advanced' },
    { name: 'Node.js', level: 'Proficient' },
    { name: 'REST APIs', level: 'Advanced' },
    { name: 'Cloud Functions', level: 'Proficient' },
  ],
  'Architecture & Tools': [
    { name: 'Multi-tenant SaaS Design', level: 'Advanced' },
    { name: 'Performance Optimization', level: 'Advanced' },
    { name: 'Git / CI-CD', level: 'Advanced' },
    { name: 'System Design', level: 'Learning' },
  ],
};

export const projects = [
  {
    title: 'Print-on-Demand SaaS Platform',
    subtitle: 'Multi-tenant platform powering custom print businesses',
    problem:
      'Print businesses needed a unified system to manage orders across DTG, Embroidery, Screen Print, and DTF — each with wildly different pricing models, artwork requirements, and production workflows.',
    solution:
      'Built a full-featured React + Firebase SaaS platform with tenant isolation, a dynamic pricing engine supporting 4+ print methods, a canvas-based design placement editor, barcode generation for order tracking, and automated invoice generation via React PDF.',
    impact: [
      'Enabled businesses to manage multi-method print operations from a single dashboard',
      'Reduced pricing errors by encoding complex rules into a maintainable engine',
      'Canvas editor eliminated manual design placement, saving hours per order batch',
    ],
    tech: ['React', 'Firebase', 'Redux', 'Canvas API', 'React PDF', 'MUI'],
    type: 'featured',
  },
  {
    title: 'Custom Product Configuration System',
    subtitle: 'Complex pricing & configuration for custom product lines',
    problem:
      'Product customization required managing hundreds of price combinations across sizes, materials, quantities, and decoration methods — with real-time UI updates and zero calculation errors.',
    solution:
      'Designed a dynamic configuration UI with TanStack Table grids, layered pricing logic with quantity breaks, and heavy data transformation pipelines that kept the UI responsive even with thousands of price points.',
    impact: [
      'Handled 500+ SKU combinations with sub-second UI response times',
      'Eliminated manual pricing spreadsheets for the operations team',
      'Built reusable pricing components adopted across multiple product lines',
    ],
    tech: ['React', 'TanStack Table', 'Redux Saga', 'MUI', 'GraphQL'],
    type: 'featured',
  },
  {
    title: 'Firebase-First Application Architecture',
    subtitle: 'Scalable, cost-optimized Firebase backend systems',
    problem:
      'Applications needed real-time data, authentication, file storage, and role-based access — without the overhead of managing traditional backend infrastructure.',
    solution:
      'Architected Firebase-first systems with Firestore data modeling optimized for read-heavy frontends, role-based security rules, efficient Storage usage for user uploads, and Cloud Functions for server-side logic where needed.',
    impact: [
      'Cut infrastructure costs by designing efficient Firestore query patterns',
      'Role-based access system served 3+ user types with zero security incidents',
      'Real-time sync reduced perceived latency to near-zero for end users',
    ],
    tech: ['Firebase', 'Firestore', 'Cloud Functions', 'Auth', 'Storage'],
    type: 'featured',
  },
];

export const sideProjects = [
  {
    title: 'File Viewer — XLSX / CSV Online Viewer',
    description:
      'A browser-based tool for viewing and exploring spreadsheet files without needing Excel. Handles large files with virtual scrolling.',
    tech: ['React', 'SheetJS', 'Virtual Scrolling'],
  },
  {
    title: 'WebRTC Experiments',
    description:
      'Explored peer-to-peer communication, screen sharing, and browser-based video calling using WebRTC APIs.',
    tech: ['WebRTC', 'JavaScript', 'Socket.io'],
  },
  {
    title: 'Browser Extension Tools',
    description:
      'Built utility extensions for productivity — tab management, quick notes, and page annotation tools.',
    tech: ['Chrome APIs', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Micro Productivity Tools',
    description:
      'Small, focused tools solving everyday developer pain points — JSON formatters, color pickers, regex testers.',
    tech: ['React', 'Vite', 'Tailwind'],
  },
];
