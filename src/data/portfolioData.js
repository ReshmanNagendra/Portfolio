export const personalInfo = {
  name: "Reshman Nagendra",
  roleTitles: [
    "Full-Stack Developer",
    "Creative Web Engineer",
    "3D & Game Experimenter",
    "IoT & Tech Enthusiast"
  ],
  tagline: "Curious builder crafting intelligent digital experiences & high-performance applications.",
  about: "I am a passionate software developer and computer science student at Kalvium. I enjoy building interactive web apps, 3D browser games, mobile utilities, and scalable software solutions. Always exploring the bleeding edge of modern tech.",
  status: "Available for new opportunities",
  email: "reshmannagendra@gmail.com",
  location: "India",
  resumeUrl: "#",
  avatar: "/reshman.jpeg",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/ReshmanNagendra",
      icon: "Github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/reshman-nagendra",
      icon: "Linkedin"
    },
    {
      name: "Email",
      url: "mailto:reshmanreshmam9@gmail.com",
      icon: "Mail"
    }
  ]
};

export const statsData = [
  { label: "Projects Completed", value: "10+", icon: "Code2" },
  { label: "Technologies Explored", value: "12+", icon: "Cpu" },
  { label: "Problem Solving", value: "100%", icon: "Zap" },
  { label: "Continuous Learning", value: "24/7", icon: "Flame" }
];

export const projectsData = [
  {
    id: "chronix",
    title: "Chronix Attendance App",
    category: "mobile",
    description: "One-tap smart attendance tracking mobile application with instant biometrics, millisecond verification, and real-time analytics dashboard.",
    image: "/skills-bg.png",
    tags: ["React Native / Android", "Biometrics", "API Integration", "Mobile UI"],
    featured: true,
    demoUrl: "/chronix/index.html",
    githubUrl: "https://github.com/ReshmanNagendra",
    downloadUrl: "/chronix/chronix-attendance.apk",
    badge: "Featured App"
  },
  {
    id: "typing-game",
    title: "Typing Speed Game",
    category: "web",
    description: "A fast-paced interactive web application to test, measure, and elevate typing speed with live WPM calculation, accuracy tracking, and dynamic word prompts.",
    image: "/Screenshot 2026-02-18 at 10.01.28 AM.png",
    tags: ["JavaScript", "HTML5/CSS3", "DOM Manipulation", "Game Logic"],
    featured: true,
    demoUrl: "https://typing-game.reshman.in/",
    githubUrl: "https://github.com/ReshmanNagendra",
    badge: "Live Web App"
  },
  {
    id: "galactic-guardian",
    title: "Galactic Guardian 3D",
    category: "games",
    description: "An immersive 3D space shooter simulation exploring Three.js space coordinate mechanics, lighting, real-time collision detection, and futuristic particles.",
    image: "/Screenshot 2026-02-19 at 2.29.01 PM.png",
    tags: ["Three.js / 3D", "WebGL", "JavaScript", "Math & Physics"],
    featured: true,
    demoUrl: "https://github.com/ReshmanNagendra",
    githubUrl: "https://github.com/ReshmanNagendra",
    badge: "3D Experiment"
  },
  {
    id: "squad-hub",
    title: "Squad Portfolio & Platform",
    category: "web",
    description: "A collaborative showcase hub developed with peers to curate developer profiles, highlight group technical milestones, and present shared projects.",
    image: "/squad-portfolio.png",
    tags: ["React", "UI/UX Design", "Team Collaboration", "Responsive CSS"],
    featured: false,
    demoUrl: "https://github.com/ReshmanNagendra",
    githubUrl: "https://github.com/ReshmanNagendra",
    badge: "Collaboration"
  }
];

export const skillsData = [
  {
    category: "Web Development",
    icon: "Layout",
    description: "Building responsive, modern, and accessible web experiences",
    skills: [
      { name: "React.js", level: "Intermediate", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "HTML5 & Modern CSS3", level: "Advanced", highlight: true },
      { name: "Responsive UI / Glassmorphism", level: "Advanced", highlight: false },
      { name: "RESTful APIs & Fetch", level: "Intermediate", highlight: false }
    ]
  },
  {
    category: "Programming & Core",
    icon: "Terminal",
    description: "Algorithmic thinking and software fundamentals",
    skills: [
      { name: "C++", level: "Proficient", highlight: true },
      { name: "Data Structures & Algorithms", level: "Intermediate", highlight: true },
      { name: "Object-Oriented Programming", level: "Proficient", highlight: false },
      { name: "Problem Solving", level: "Advanced", highlight: false }
    ]
  },
  {
    category: "Developer Tools & Workflow",
    icon: "Wrench",
    description: "Essential tooling for efficient and scalable engineering",
    skills: [
      { name: "Git & GitHub", level: "Advanced", highlight: true },
      { name: "VS Code & Debugging", level: "Advanced", highlight: false },
      { name: "Figma & UI Prototyping", level: "Intermediate", highlight: true },
      { name: "Vite / Build Tools", level: "Intermediate", highlight: false }
    ]
  },
  {
    category: "Currently Exploring",
    icon: "Sparkles",
    description: "Expanding horizons into emerging domains",
    skills: [
      { name: "Three.js / WebGL", level: "Learning", highlight: true },
      { name: "IoT & Hardware Interfacing", level: "Learning", highlight: true },
      { name: "Next.js Full-Stack", level: "Learning", highlight: false },
      { name: "Backend Architecture", level: "Learning", highlight: false }
    ]
  }
];

export const journeyData = [
  {
    year: "2025 - Present",
    title: "Computer Science Undergraduate",
    institution: "Kalvium",
    description: "Immersive software engineering curriculum focusing on real-world industry project development, data structures, algorithms, and full-stack web engineering.",
    type: "education"
  },
  {
    year: "2025 - 2026",
    title: "Chronix Attendance System",
    institution: "Android & Web Project",
    description: "Architected a rapid one-tap attendance mobile tracking solution with biometric verification and telemetry reporting.",
    type: "project"
  },
  {
    year: "2025",
    title: "Web & 3D Interactive Development",
    institution: "Independent Research",
    description: "Engineered web-based games including Typing Speed Game and Galactic Guardian 3D space flight experiments.",
    type: "milestone"
  }
];
