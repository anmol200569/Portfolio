export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPlaceholder?: boolean;
  featured: boolean;
  image?: string;
  previewType?: 'weather' | 'todo' | 'tracker' | 'mern';
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  ecosystem?: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  badge: string;
  current: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  category: 'Cloud & Tech' | 'Competition' | 'Community' | 'Certification';
  year: string;
  stats?: string;
  description: string;
  credentialBadge?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Familiar' | 'Actively Learning' | 'Core';
    icon?: string;
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Anmol Singh",
    wordmark: "ANMOL.",
    role: "B.Tech Computer Science Student | Developer | Community Builder",
    headline: "Building with code. Leading with curiosity.",
    tagline:
      "I'm Anmol Singh, a Computer Science student and developer exploring web technologies, solving problems, and building meaningful experiences through technology and student community leadership.",
    college: "Gyan Ganga Institute of Technology & Sciences (GGITS)",
    location: "Jabalpur, Madhya Pradesh, India",
    email: "anmolsingh12jbp7@gmail.com",
    github: "https://github.com/anmol200569",
    linkedin: "https://www.linkedin.com/in/anmol200569",
    whatsapp: "https://wa.me/918770651488",
    instagram: "https://instagram.com/anmol200569",
    targetRepo: "https://github.com/anmol200569/Portfolio.git",
    profileImage: "/images/anmol-profile.jpg",
    communityImage: "/images/ggits-workshop.jpg",
    classroomImage: "/images/ggits-classroom.jpg",
    availabilityText: "B.Tech CSE @ GGITS • Open to collaborative projects & tech opportunities",
    highlights: [
      { label: "Campus Leadership", value: "Ops Lead, Microsoft Club" },
      { label: "Google Cloud Arcade", value: "Legend Tier '25" },
      { label: "AWS Certified", value: "Cloud Practitioner" },
      { label: "Hands-on Labs", value: "450+ Completed" },
    ],
  },

  about: {
    narrative: [
      "I am an undergraduate Computer Science & Engineering student at Gyan Ganga Institute of Technology & Sciences (GGITS), Jabalpur, driven by an eagerness to build reliable software and bring student developer communities together.",
      "My technical journey bridges core computer science fundamentals—like C, C++, and Data Structures—with practical web engineering across JavaScript, React, and backend architectures. I enjoy taking ideas from blank editor windows to responsive, interactive digital products.",
      "Beyond coding, I am deeply involved in developer ecosystems on campus. As Operations Lead for the Microsoft Campus Club at GGITS and an active campus ambassador for initiatives including Google and GeeksforGeeks, I coordinate workshops, promote peer-to-peer learning, and build momentum around student technology initiatives.",
    ],
    fastFacts: [
      { label: "Degree", value: "B.Tech in Computer Science & Engineering" },
      { label: "Institution", value: "GGITS, Jabalpur (M.P.)" },
      { label: "Primary Focus", value: "Full-Stack Web Development & Cloud Computing" },
      { label: "Community", value: "Student Developer Leadership & Tech Event Operations" },
    ],
  },

  skills: [
    {
      category: "Programming Languages",
      description: "Foundational programming, logic development, and problem solving",
      skills: [
        { name: "C / C++", level: "Core" },
        { name: "JavaScript (ES6+)", level: "Core" },
        { name: "Python", level: "Familiar" },
        { name: "SQL", level: "Familiar" },
      ],
    },
    {
      category: "Frontend Development",
      description: "Modern, responsive, user-centered web interface design",
      skills: [
        { name: "React", level: "Core" },
        { name: "Tailwind CSS", level: "Core" },
        { name: "HTML5 & CSS3", level: "Core" },
        { name: "TypeScript", level: "Actively Learning" },
        { name: "Responsive UI/UX", level: "Core" },
      ],
    },
    {
      category: "Backend & Databases",
      description: "Server architecture, API endpoints, and data storage foundations",
      skills: [
        { name: "Node.js", level: "Familiar" },
        { name: "Express.js", level: "Familiar" },
        { name: "RESTful APIs", level: "Core" },
        { name: "PostgreSQL", level: "Familiar" },
        { name: "MongoDB", level: "Actively Learning" },
      ],
    },
    {
      category: "Cloud & Dev Platforms",
      description: "Cloud computing infrastructure and developer toolchain",
      skills: [
        { name: "Git & GitHub", level: "Core" },
        { name: "Microsoft Azure", level: "Familiar" },
        { name: "Google Cloud", level: "Familiar" },
        { name: "AWS Cloud", level: "Familiar" },
        { name: "VS Code", level: "Core" },
        { name: "Vite", level: "Core" },
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      id: "mcc-ggits",
      role: "Operations Lead",
      organization: "Microsoft Campus Club — GGITS",
      ecosystem: "Under Microsoft Student Ambassadors ecosystem",
      period: "2026 — Present",
      location: "Jabalpur, M.P.",
      badge: "Leadership",
      current: true,
      description:
        "Spearheading operations, technical workshop planning, and logistics for the official Microsoft student community at Gyan Ganga Institute of Technology & Sciences.",
      highlights: [
        "Plan and execute student-facing technical sessions, coding hackathons, and technology meetups on campus.",
        "Collaborate with institute faculty and student leads to foster hands-on learning across Microsoft technologies.",
        "Manage event logistics, registration drives, and community outreach for institutional tech initiatives.",
      ],
    },
    {
      id: "google-ambassador",
      role: "Google Student Ambassador",
      organization: "Google Student Ecosystem Program",
      ecosystem: "Campus Developer Community",
      period: "2025 — Present",
      location: "GGITS Campus",
      badge: "Ambassador",
      current: true,
      description:
        "Representing and advocating student developer programs, Google Cloud arcade tracks, and technical learning resources across collegiate peers.",
      highlights: [
        "Encouraged peer engagement in cloud skill badges and developer training pathways.",
        "Facilitated campus awareness of Google Developer student opportunities and hackathons.",
      ],
    },
    {
      id: "gfg-mantri",
      role: "Campus Mantri",
      organization: "GeeksforGeeks",
      ecosystem: "Programming & DSA Community",
      period: "2025 — Present",
      location: "GGITS Campus",
      badge: "Community",
      current: true,
      description:
        "Promoting algorithmic problem solving, coding practice, and competitive programming resources on campus.",
      highlights: [
        "Organized peer problem-solving circles and shared structured DSA learning roadmaps.",
        "Connected student developers with GeeksforGeeks contests and coding events.",
      ],
    },
    {
      id: "unstop-ambassador",
      role: "Campus Ambassador",
      organization: "Unstop",
      ecosystem: "Hackathon & Opportunities Network",
      period: "2025 — Present",
      location: "GGITS Campus",
      badge: "Advocacy",
      current: true,
      description:
        "Coordinating student participation in national hackathons, coding assessments, and collegiate competitive tracks.",
      highlights: [
        "Empowered student teams to discover and participate in national-level technical competitions.",
        "Shared career workshops, hiring challenges, and innovation contests with engineering cohorts.",
      ],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "weather-app",
      title: "Real-Time Weather Dashboard",
      subtitle: "Dynamic Climatic Tracking with Live Weather API",
      problem:
        "Accessing quick, distraction-free regional meteorological forecasts with responsive visual feedback and detailed climatic indicators.",
      solution:
        "Engineered a responsive weather client utilizing the OpenWeather REST API. Features instant city searching, intelligent error-state handling, metric conversions, and conditional interface rendering based on live cloud, rain, drizzle, and mist conditions.",
      tags: ["JavaScript", "Fetch API", "OpenWeather", "CSS3", "Responsive UI"],
      githubUrl: "https://github.com/anmol200569/Weather-App",
      liveUrl: "https://anmol200569.github.io/Weather-App/",
      featured: true,
      previewType: 'weather',
    },
    {
      id: "todo-list",
      title: "Interactive Task Workflow App",
      subtitle: "Persistent Local Productivity & DOM Lifecycle",
      problem:
        "Users need a zero-friction, lightweight daily task tracker that preserves state across sessions without requiring heavy backend overhead.",
      solution:
        "Built an interactive task manager utilizing the Web Storage API for instantaneous persistence. Implemented full item lifecycle actions: dynamic item generation, check-state toggle, single-click deletion, and resilient local cache synchronization.",
      tags: ["JavaScript", "LocalStorage API", "DOM Architecture", "CSS3"],
      githubUrl: "https://github.com/anmol200569/To-Do-List",
      featured: true,
      previewType: 'todo',
    },
    {
      id: "travel-tracker",
      title: "Travel Tracker & Geographic Logger",
      subtitle: "Full-Stack Geospatial Logger with Relational Storage",
      problem:
        "Visualizing visited international destinations and tracking personal exploration journeys in a cohesive relational database system.",
      solution:
        "Constructed a full-stack geographic tracker application using Node.js, Express, and PostgreSQL. Stores visited countries, prevents duplicate travel entries, and calculates cumulative country counts with SVG map visualization.",
      tags: ["Node.js", "Express.js", "PostgreSQL", "EJS", "Full-Stack"],
      githubUrl: "https://github.com/anmol200569",
      featured: true,
      previewType: 'tracker',
    },
    {
      id: "mern-noteapp",
      title: "MERN NoteApp (Architecture)",
      subtitle: "Scalable Full-Stack Collaborative Note Platform",
      problem:
        "Traditional note utilities lack clean RESTful separation between client interfaces and scalable multi-document persistence.",
      solution:
        "Architectural full-stack note application blueprint leveraging MongoDB, Express.js, React, and Node.js. Designed for categorized card views, search filtering, and robust CRUD endpoints. (Configurable entry ready for custom deployment link).",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "REST Architecture"],
      githubUrl: "https://github.com/anmol200569",
      isPlaceholder: true,
      featured: true,
      previewType: 'mern',
    },
  ] as Project[],

  achievements: [
    {
      id: "google-cloud-arcade",
      title: "Google Cloud Arcade 2025 — Legend Tier",
      issuer: "Google Cloud",
      category: "Cloud & Tech",
      year: "2025",
      stats: "451 Labs • 139 Badges • 27 Games",
      description:
        "Attained the prestigious Legend Tier milestone in Google Cloud Arcade 2025 by completing 451 hands-on cloud labs, mastering 139 skill badges across computing, networking, and data workflows, and winning 27 arcade games.",
      credentialBadge: "Legend Tier",
    },
    {
      id: "aws-ccp",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      category: "Certification",
      year: "2025",
      stats: "Competency Met Across All Domains",
      description:
        "Validated core knowledge of AWS cloud concepts, security and compliance, cloud technology architecture, and billing/pricing models via the official AWS certification framework.",
      credentialBadge: "AWS Certified",
    },
    {
      id: "red-hat-challenge",
      title: "4th Position — Red Hat Academy Challenge",
      issuer: "Red Hat Academy",
      category: "Competition",
      year: "2025",
      stats: "Ranked 4th Regionally",
      description:
        "Secured fourth position in the Red Hat Academy Challenge 2025, demonstrating practical skills in enterprise Linux concepts, command-line operations, and cloud systems.",
      credentialBadge: "Top 4 Rank",
    },
    {
      id: "iic-poster-award",
      title: "Best Poster Award — IIC Regional Meet",
      issuer: "Institution's Innovation Council (IIC)",
      category: "Competition",
      year: "2025",
      stats: "Best Poster Winner",
      description:
        "Awarded Best Poster at the IIC Regional Meet 2025 for impactful presentation of technical innovation and student research concepts.",
      credentialBadge: "Award Winner",
    },
  ] as AchievementItem[],

  exploring: [
    {
      title: "Modern Frontend Engineering",
      details: "Next.js App Router, React Server Components, TypeScript type-safety patterns.",
      badge: "Frontend",
    },
    {
      title: "Data Structures & Algorithms",
      details: "Competitive problem solving in C++, graph traversals, and dynamic programming.",
      badge: "DSA",
    },
    {
      title: "Cloud Native & DevOps",
      details: "Containerization with Docker, microservices deployment, and serverless functions.",
      badge: "Cloud",
    },
    {
      title: "AI-Assisted Development",
      details: "Integrating agentic coding workflows, LLM endpoints, and modern developer tooling.",
      badge: "AI & Agents",
    },
    {
      title: "Open-Source Community",
      details: "Contributing to developer tooling, bug triage, and collaborative student initiatives.",
      badge: "Open Source",
    },
  ],
};
