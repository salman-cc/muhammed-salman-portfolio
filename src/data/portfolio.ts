export const portfolio = {
  name: 'Muhammed Salman CC',
  shortName: 'Salman',
  role: 'Frontend developer',
  email: 'salmanmuthu595@gmail.com',
  location: 'India',
  availability: 'Open to frontend opportunities',
  intro:
    'I build fast, accessible web interfaces with React and TypeScript—turning clear product thinking into polished user experiences.',
  about: [
    'I am a frontend developer focused on building responsive, maintainable interfaces that feel considered at every screen size. I care about semantic HTML, accessibility, performance, and the details that make software easier to use.',
    'My current work centers on the modern React ecosystem. I take projects from interface planning through implementation, quality checks, version control, and production deployment.',
  ],
  skillGroups: [
    {
      label: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      label: 'Quality',
      skills: ['Responsive design', 'Web accessibility', 'SEO fundamentals', 'Performance'],
    },
    {
      label: 'Workflow',
      skills: ['Git', 'GitHub', 'Vite', 'Netlify', 'npm'],
    },
  ],
  experience: [
    {
      organization: 'Independent development',
      role: 'Frontend Developer',
      period: '2026 — Present',
      description:
        'Designing, building, testing, and deploying responsive React applications with a focus on accessible interaction, maintainable TypeScript, and production performance.',
      achievements: [
        'Built and deployed a complete portfolio with automated Git-based delivery.',
        'Established repeatable build, lint, accessibility, and SEO quality checks.',
      ],
    },
  ],
  education: {
    program: 'Software engineering development',
    provider: 'Self-directed learning and project-based practice',
    period: 'Ongoing',
    description:
      'Developing practical frontend engineering skills through documentation, deliberate practice, and production projects.',
  },
  projects: [
    {
      title: 'Developer Portfolio',
      label: 'Featured project',
      description:
        'A recruiter-focused portfolio engineered as a fast, accessible, responsive single-page experience with a typed content model and automated Netlify delivery.',
      impact: [
        'Responsive from small mobile screens to wide desktop layouts',
        'Semantic structure, keyboard support, and reduced-motion behavior',
        'SEO metadata, social sharing assets, caching, and security headers',
      ],
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Netlify'],
      liveUrl: 'https://muhammedsalmancc.netlify.app',
      sourceUrl: 'https://github.com/ccsalman545/muhammed-salman-portfolio',
    },
  ],
  links: {
    github: 'https://github.com/ccsalman545',
    repository: 'https://github.com/ccsalman545/muhammed-salman-portfolio',
  },
} as const
