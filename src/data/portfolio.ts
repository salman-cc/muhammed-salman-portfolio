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
    'I work on both sides of a project: sensor front ends, power switching, and the firmware that runs them.',
  profileImage: 'https://i.postimg.cc/k4NKMqzp/file-00000000b38c71f5be0b8b69186cc8e1.png',
  about: [
    'I’m Salman, an M.Sc. Electronics student at Cochin University of Science and Technology, focused on embedded systems, FPGA design, robotics, IoT, and Embedded Linux.',
    'I like taking an idea from circuit architecture to working firmware: interfacing sensors, controlling power electronics, and building systems that solve a practical problem.',
    'I want to work as an embedded systems engineer, with a focus on Edge AI, FPGA-based systems, and open-source tools.',
  ],
  currentlyExploring: {
    label: 'Currently exploring',
    body: 'How vision pipelines are built on FPGAs for autonomous robots, and how small models run on edge devices.',
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
      label: 'Award',
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
        'An inverter controller that reads battery voltage and sheds lower-priority AC loads before the battery drains. Backup time goes up and deep discharge is avoided.',
      impact: [
        'Designed the hardware and control architecture',
        'Built priority-based load logic with configurable thresholds',
        'Added live voltage, current, and LCD readouts',
      ],
      tags: ['Arduino Nano', 'Embedded C', 'ZMPT101B', 'ACS712', 'Relay', '16×2 LCD'],
      image: 'https://i.postimg.cc/mZ6B2DFh/file-00000000bda0722fb460db042afe0207.png',
    },
    {
      title: 'Smart IoT Energy Meter',
      label: 'Internet of Things',
      description:
        'An energy meter that sends voltage and current readings to cloud dashboards, so usage can be checked remotely.',
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
        'A wearable that combines TENS therapy with heart-rate monitoring and GSM alerts for the wearer.',
      impact: [
        'Wearable therapeutic electronics',
        'Heart-rate and motion monitoring',
        'GSM alerts and messaging',
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
        'Worked with ESP32 and NodeMCU boards, wrote firmware, and connected sensors to IoT services.',
      tags: ['ESP32', 'NodeMCU', 'Sensor Interfacing', 'IoT'],
      kind: 'work',
    },
    {
      period: 'Research seminar',
      title: 'FPGA-Based Vision Processing',
      org: 'For Autonomous Robots',
      description:
        'Seminar on FPGA architecture and vision processing for autonomous robots, including where hardware acceleration helps.',
      tags: ['Verilog', 'FPGA', 'Computer Vision', 'Robotics'],
      kind: 'research',
    },
    {
      period: 'Founder · Present',
      title: 'Content Creator',
      org: 'AiCoN Tech Hub',
      description:
        'I make educational videos and posts about AI, Linux, programming, cybersecurity, and open-source tools.',
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
