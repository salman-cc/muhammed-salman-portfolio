export type Highlight = {
  label: string
  value: string
  meta: string
  icon: 'graduation' | 'award' | 'broadcast'
}

export type ExperienceKind = 'work' | 'research' | 'community'

export type Experience = {
  period: string
  title: string
  org: string
  description: string
  tags: string[]
  kind: ExperienceKind
}

export type Project = {
  title: string
  label: string
  badge?: string
  description: string
  impact: string[]
  tags: string[]
  image?: string
}

export type Education = {
  period: string
  program: string
  provider: string
  detail: string
  logo?: string
}


export const portfolio = {
  name: 'Muhammed Salman CC',
  preferredName: 'Salman',
  role: 'M.Sc. Electronics Student',
  location: 'Malappuram, Kerala, India',
  email: 'ccmuhammedsalman@gmail.com',
  universityEmail: 'muhammedsalmancc@pg.cusat.ac.in',
  phone: '+91 9746707833',
  availability: 'Open to embedded systems opportunities',
  intro:
    'I design intelligent electronic systems where hardware, firmware, and connected technology work together.',
  profileImage: 'https://i.postimg.cc/k4NKMqzp/file-00000000b38c71f5be0b8b69186cc8e1.png',
  about: [
    'I’m Salman, an M.Sc. Electronics student at Cochin University of Science and Technology, focused on embedded systems, FPGA design, robotics, IoT, and Embedded Linux.',
    'I enjoy taking ideas from circuit architecture to working firmware—interfacing sensors, controlling power electronics, and building connected systems that solve practical engineering problems.',
    'My goal is to become an Embedded Systems Engineer specializing in intelligent hardware, Edge AI, FPGA-based systems, and open-source technologies.',
  ],
  currentlyExploring: {
    label: 'Currently exploring',
    body: 'FPGA-based vision pipelines for autonomous robots, and running lightweight inference at the edge.',
    tags: ['Verilog', 'Vivado', 'Edge AI'],
  },
  focusAreas: [
    'Embedded AI',
    'Robotics',
    'Edge AI',
    'Computer Vision',
    'Hardware Acceleration',
    'Automation',
  ],
  highlights: [
    {
      label: 'Currently',
      value: 'M.Sc. Electronics',
      meta: 'CUSAT · Expected 2027',
      icon: 'graduation',
    },
    {
      label: 'Recognition',
      value: 'District-level YIP Winner',
      meta: 'Auto hibernate for inverters',
      icon: 'award',
    },
    {
      label: 'Community',
      value: 'AiCoN Tech Hub',
      meta: 'Founder · Content creator',
      icon: 'broadcast',
    },
  ] satisfies Highlight[],
  skillGroups: [
    {
      label: 'Embedded',
      skills: [
        'Embedded C',
        'Arduino',
        'ESP32',
        'NodeMCU',
        'ATmega328P',
        'UART',
        'SPI',
        'I²C',
        'PWM',
        'Sensor Interfacing',
      ],
    },
    {
      label: 'Electronics',
      skills: [
        'Circuit Design',
        'Power Electronics',
        'PCB Design',
        'BMS',
        'Signal Conditioning',
        'Instrumentation',
        'Relay Control',
      ],
    },
    {
      label: 'FPGA',
      skills: ['Verilog HDL', 'RTL Design', 'FSM', 'Digital Logic', 'Xilinx Vivado'],
    },
    {
      label: 'Software',
      skills: ['C', 'C++', 'Python', 'Linux', 'Bash', 'Git', 'GNU Radio', 'Proteus', 'Cadence Virtuoso'],
    },
    {
      label: 'IoT & Web',
      skills: ['Blynk', 'ThingSpeak', 'Wi-Fi', 'React', 'Vite', 'Node.js'],
    },
  ],
  marquee: [
    'Embedded C',
    'ESP32',
    'Verilog HDL',
    'RTL Design',
    'Embedded Linux',
    'PCB Design',
    'Edge AI',
    'FPGA',
    'Power Electronics',
    'Computer Vision',
    'Blynk',
  ],
  projects: [
    {
      title: 'Auto Hibernate for Inverters',
      label: 'Embedded Systems',
      badge: 'District-level YIP Winner',
      description:
        'An intelligent inverter battery-management system that disconnects lower-priority AC loads according to battery voltage, extending backup time and protecting batteries from deep discharge.',
      impact: [
        'Designed the complete hardware and control architecture',
        'Built priority-based load logic with configurable thresholds',
        'Implemented real-time voltage, current, and LCD monitoring',
      ],
      tags: ['Arduino Nano', 'Embedded C', 'ZMPT101B', 'ACS712', 'Relay', '16×2 LCD'],
      image: 'https://i.postimg.cc/mZ6B2DFh/file-00000000bda0722fb460db042afe0207.png',
    },
    {
      title: 'Smart IoT Energy Meter',
      label: 'Internet of Things',
      description:
        'A connected energy-monitoring system for remotely tracking electrical usage through cloud dashboards.',
      impact: [
        'Voltage and current sensing',
        'Remote dashboards with Blynk and ThingSpeak',
        'ESP8266-based Wi-Fi communication',
      ],
      tags: ['Arduino Uno', 'NodeMCU', 'ESP8266', 'ACS712', 'ZMPT101B', 'Blynk'],
    },
    {
      title: 'Smart TENS Jacket',
      label: 'Healthcare IoT',
      description:
        'An IoT-enabled wearable integrating TENS therapy with physiological monitoring and GSM communication.',
      impact: [
        'Wearable therapeutic electronics',
        'Heart-rate and motion monitoring',
        'GSM-based alerts and communication',
      ],
      tags: ['Arduino Micro', 'SIM800', 'Heart Rate Sensor', 'Accelerometer', 'TENS'],
    },
  ] satisfies Project[],
  experience: [
    {
      period: '2 months · Online',
      title: 'IoT Intern',
      org: 'Sparkiit',
      description:
        'Hands-on development with ESP32, NodeMCU, embedded programming, sensor interfacing, and IoT communication.',
      tags: ['ESP32', 'NodeMCU', 'Sensor Interfacing', 'IoT'],
      kind: 'work',
    },
    {
      period: 'Research seminar',
      title: 'FPGA-Based Vision Processing',
      org: 'For Autonomous Robots',
      description:
        'Exploring FPGA architecture, computer vision, robotics, hardware acceleration, and autonomous systems.',
      tags: ['Verilog', 'FPGA', 'Computer Vision', 'Robotics'],
      kind: 'research',
    },
    {
      period: 'Founder · Present',
      title: 'Content Creator',
      org: 'AiCoN Tech Hub',
      description:
        'Creating accessible educational content about AI, Linux, programming, cybersecurity, open source, and developer tools.',
      tags: ['AI', 'Linux', 'Open Source', 'Education'],
      kind: 'community',
    },
  ] satisfies Experience[],
  education: [
    {
      period: 'Expected 2027',
      program: 'M.Sc. Electronics',
      provider: 'Cochin University of Science and Technology',
      detail: 'Embedded System Design · FPGA Design · Robotics & Automation · DSP · Control Systems',
      logo: 'https://i.postimg.cc/TY1LFVdy/logo.png',
    },
    {
      period: '2022 · CGPA 6.50/10',
      program: 'B.Sc. Electronics',
      provider: 'Malabar College of Advanced Studies, University of Calicut',
      detail: 'Foundation in analog, digital, communication, and electronic systems.',
    },
  ] satisfies Education[],
  links: {
    portfolio: 'https://muhammed-salman-cc.is-a.dev',
    github: 'https://github.com/ccsalman545',
    linkedin: 'https://www.linkedin.com/in/muhammed-salman-cc-b7522433b',
  },
}
