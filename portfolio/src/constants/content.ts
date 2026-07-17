import type {
  Project,
  ExperienceItem,
  EducationItem,
  Certification,
  SkillGroup,
  NavLink,
} from '../types';

export const SITE = {
  name: 'Bernard Justin Dayao',
  role: 'Aspiring Cybersecurity Professional | Full-Stack Developer',
  tagline: 'Building secure, scalable, and user-centered digital experiences with modern web technologies.',
  email: 'dbernardjustin@gmail.com',
  phone: '+63 939 712 3358',
  location: 'Sta. Rosa City, Laguna, PH',
  linkedin: 'https://www.linkedin.com/in/dbernardjustin/',
  github: 'https://github.com/',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  { id: 'frontend', label: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { id: 'backend', label: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
  { id: 'databases', label: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'Oracle', 'MySQL'] },
  { id: 'mobile', label: 'Mobile', skills: ['Kotlin', 'Jetpack Compose', 'Ktor'] },
  { id: 'languages', label: 'Programming', skills: ['Java', 'C#', 'PHP', 'SQL'] },
];

export const PROJECTS: Project[] = [
  {
    id: 'workflow-system',
    title: 'Secure Web-Based Workflow Management System',
    period: 'Nov 2025 — Mar 2026',
    description:
      'A workflow management platform built for the ICT Office of the City Government of Biñan, designed to digitize and secure departmental processes end to end.',
    achievements: [
      'Reduced non‑value‑adding workflow steps by 76%',
      'Secured microservices with mTLS, AES‑256‑GCM and ECDSA',
      'Deployed for an active government department',
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'AES‑256‑GCM', 'ECDSA', 'mTLS'],
    status: 'shipped',
    image: '/images/projects/workflow-system.jpg',
    github: "https://github.com/cidbrill/JMCBL-WfMS"
  },
  {
    id: 'parkguard',
    title: 'ParkGuard',
    period: 'Apr 2025 — Jul 2025',
    description:
      'A real-time parking app for Mapúa Malayan Colleges Laguna, tracking live space availability across campus lots.',
    achievements: [
      'Real-time parking monitoring with live occupancy data',
      'Native Android experience with Jetpack Compose',
      'Persistent backend on Ktor and PostgreSQL',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Ktor', 'PostgreSQL'],
    status: 'live',
    image: '/images/projects/parkguard.jpg',
    github: "https://github.com/cidbrill/ParkGuard"
  },
  {
    id: 'attendance-system',
    title: 'Attendance Monitoring System',
    period: 'Dec 2023 — Mar 2024',
    description:
      'A full-stack attendance tracker built for CCIS Department Week, replacing manual sign-in sheets with automated logging and reporting.',
    achievements: [
      'Automated attendance tracking for a multi-day event',
      'Tableau dashboards for real-time data visualization',
      'Reliable reporting across hundreds of attendees',
    ],
    tech: ['PHP', 'Oracle', 'Tableau'],
    status: 'archived',
    image: '/images/projects/attendance-system.png',
    github: "https://github.com/cidbrill/StudentAttendanceDB"
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'concentrix',
    role: 'IT Operations Intern',
    org: 'Concentrix',
    period: 'Apr 2026 — Jul 2026',
    points: [
      'Delivered Tier 1 IT support for end users, troubleshooting hardware and software issues while maintaining high satisfaction and minimal disruption.',
      'Executed OS imaging, remediation, and compliance updates across desktop and mini PCs to meet enterprise security and configuration standards.',
    ],
  },
  {
    id: 'ch-lead',
    role: 'Business Development Officer',
    org: 'CH-Lead',
    period: 'Jul 2023 — Sep 2023',
    points: [
      'Modernized visual identity with a cohesive design system and grid-based layouts for a professional, polished interface.',
      'Optimized content architecture to reduce information overload, improving scannability and the overall user journey.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'mmcl-bs',
    school: 'Mapúa Malayan Colleges Laguna',
    program: 'B.S. in Information Technology',
    period: 'Aug 2022 — Present',
    honors: ["Dean's Lister, A.Y. 2022–2025", "President's Lister, A.Y. 2022–2023"],
  },
  {
    id: 'mmcl-shs',
    school: 'Mapúa Malayan Colleges Laguna',
    program: 'ICT Strand, Senior High School',
    period: 'Aug 2020 — 2022',
    honors: ['Graduated with High Honors'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'comptia',
    name: 'CompTIA Tech+',
    issuer: 'CompTIA',
    image: '/images/certifications/comptia.png',
  },
  {
    id: 'ethical-hacker',
    name: 'Ethical Hacker',
    issuer: 'Cisco',
    image: '/images/certifications/ethical-hacker.png',
  },
  {
    id: 'ccna-intro',
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    image: '/images/certifications/ccnaintro.png',
  },
  {
    id: 'ccna-srwe',
    name: 'CCNA: Switching, Routing & Wireless Essentials',
    issuer: 'Cisco',
    image: '/images/certifications/ccnaswre.png',
  },
  {
    id: 'gcp-foundations',
    name: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud',
    image: '/images/certifications/gccf.png',
  },
];
