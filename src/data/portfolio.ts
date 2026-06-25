// Import the TypeScript interface that defines the structure of portfolio data
import { PortfolioData } from '../types';

/**
 * PORTFOLIO DATA FILE
 * 
 * This file contains all the personal and professional information displayed throughout the portfolio website.
 * It serves as a centralized data source that feeds content to all pages (Home, About, Work, Resume, Contact).
 */
export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Smriti Shrestha',
    title: 'UI/UX Designer',
    email: 'smrityshrestha734@gmail.com',
    phone: '+977-9813708697',
    location: 'Lubhu, Lalitpur, Nepal',
    bio: 'UI/UX Designer and Computer Science graduate passionate about creating meaningful digital experiences that balance aesthetics, usability, and functionality. With 1+ year of professional design experience and a strong foundation in frontend development and software engineering, I enjoy transforming complex ideas into intuitive products that people genuinely enjoy using. I thrive at the intersection of design, technology, and problem-solving.',
    profileImage: '/images/profile.jpg'
  },

  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/smritishresthaa',
      icon: 'github',
      description: 'View my code repositories and projects'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/smriti-shrestha-a58b80315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: 'linkedin',
      description: 'Connect with me professionally'
    },
    {
      platform: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~01b6f0d6b336669d6d?mp_source=share',
      icon: 'upwork',
      description: 'Hire me for freelance projects'
    },
    {
      platform: 'Figma',
      url: 'https://www.figma.com/design/Nq6JRkyg49cwqM4VMGiHIA/%F0%9F%9A%80-Project-Starter-Template-Share---Copy-?node-id=8234-6462&t=XChCnTb11WgVbrph-1',
      icon: 'figma',
      description: 'Explore my design work and prototypes'
    }
  ],

  skills: [
    { name: 'UI/UX Design', category: 'design', level: 'expert' },
    { name: 'Figma', category: 'design', level: 'expert' },
    { name: 'Wireframing', category: 'design', level: 'advanced' },
    { name: 'Prototyping', category: 'design', level: 'advanced' },
    { name: 'User Flows', category: 'design', level: 'advanced' },
    { name: 'Design Systems', category: 'design', level: 'advanced' },
    { name: 'Responsive Design', category: 'design', level: 'advanced' },

    { name: 'MERN Stack', category: 'development', level: 'advanced' },
    { name: 'React.js', category: 'development', level: 'advanced' },
    { name: 'Node.js', category: 'development', level: 'advanced' },
    { name: 'Express.js', category: 'development', level: 'advanced' },
    { name: 'MongoDB', category: 'development', level: 'advanced' },
    { name: 'REST APIs', category: 'development', level: 'advanced' },
    { name: 'JWT Authentication', category: 'development', level: 'intermediate' },
    { name: 'HTML5', category: 'development', level: 'advanced' },
    { name: 'CSS3', category: 'development', level: 'advanced' },
    { name: 'Java', category: 'development', level: 'intermediate' },
    { name: 'Python', category: 'development', level: 'intermediate' },
    { name: 'Tailwind CSS', category: 'development', level: 'advanced' },

    { name: 'Git & GitHub', category: 'tools', level: 'advanced' },
    { name: 'VS Code', category: 'tools', level: 'advanced' },
    { name: 'Postman', category: 'tools', level: 'intermediate' },
    { name: 'Vercel', category: 'tools', level: 'intermediate' },
    { name: 'Notion', category: 'tools', level: 'advanced' },
    { name: 'Jira', category: 'tools', level: 'intermediate' },
    { name: 'Basecamp', category: 'tools', level: 'intermediate' },
    { name: 'Slack', category: 'tools', level: 'advanced' },

    { name: 'Critical Thinking', category: 'soft', level: 'advanced' },
    { name: 'Research', category: 'soft', level: 'advanced' },
    { name: 'Documentation', category: 'soft', level: 'advanced' },
    { name: 'Teamwork', category: 'soft', level: 'expert' },
    { name: 'Communication', category: 'soft', level: 'expert' },
    { name: 'Fast Learning', category: 'soft', level: 'expert' },
    { name: 'Adaptability', category: 'soft', level: 'expert' },

    { name: 'English', category: 'language', level: 'expert' },
    { name: 'Nepali', category: 'language', level: 'expert' },
    { name: 'Hindi', category: 'language', level: 'intermediate' }
  ],

  projects: [
    {
      id: 'sewahive',
      title: 'SewaHive Service Marketplace',
      description: 'A trust-driven service marketplace for Nepal with client, provider, and admin panels.',
      longDescription: 'SewaHive is a geo-enabled service marketplace designed for Nepal. It connects clients with verified service providers, supports normal and emergency bookings, realtime chat, live tracking, provider verification, reviews, payments, and admin-led platform management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Tailwind CSS', 'Vercel'],
      category: 'web',
      status: 'completed',
      featured: true,
      images: ['/images/projects/sewahive-dashboard.png'],
      liveUrl: 'https://sewa-hive.vercel.app/',
      githubUrl: 'https://github.com/smritishresthaa/SewaHive',
      startDate: '2025-12',
      highlights: [
        'Built client, provider, and admin panels',
        'Implemented booking workflows for normal and emergency services',
        'Added realtime chat using Socket.IO',
        'Integrated live tracking and location-based service discovery',
        'Created provider verification and review flows',
        'Improved support, payment, and admin management workflows'
      ]
    },
    {
      id: 'recruitment-portal',
      title: 'Recruitment Portal Web App',
      description: 'UI/UX design for a comprehensive recruitment platform during 3-month internship',
      longDescription: 'Designed a complete recruitment portal web application featuring application forms, job listing pages, and admin dashboards. Collaborated with supervisors to translate business requirements into intuitive design mockups and built responsive layouts with comprehensive user flows.',
      technologies: ['Figma', 'Wireframing', 'Prototyping', 'User Flows', 'Responsive Design'],
      category: 'design',
      status: 'completed',
      featured: true,
      showCaseStudyButton: true,
      images: ['/images/projects/Recruitment.png'],
      caseStudyUrl: 'https://www.figma.com/design/Gb35x13Z5W0nid9FcBBS4R/HERALD-RECRUITMENT-PORTAL?node-id=33-270&t=zH5t5whHL855a3Nk-1',
      startDate: '2024-01',
      endDate: '2024-04',
      highlights: [
        'Designed application forms with intuitive user experience',
        'Created comprehensive job listing pages with advanced filtering',
        'Built admin dashboards for efficient recruitment management',
        'Collaborated with supervisors to translate requirements into design mockups',
        'Developed responsive layouts and user flows in Figma',
        'Contributed to internal design documentation and style guides'
      ]
    },
    {
      id: 'jewelaura-app',
      title: 'JewelAura Mobile App',
      description: 'Multi-store jewelry shopping app with live pricing and cost calculator',
      longDescription: 'Designed a comprehensive mobile application for jewelry shopping featuring multiple store integration, live pricing updates, in-app cost calculator, and purchase history tracking. Focused on creating an intuitive user experience with brand consistency and optimized user flows.',
      technologies: ['Figma', 'Mobile Design', 'Wireframing', 'Prototyping', 'User Experience'],
      category: 'design',
      status: 'completed',
      featured: true,
      showCaseStudyButton: true,
      images: ['/images/projects/jewelaura.png'],
      caseStudyUrl: 'https://www.figma.com/design/Nq6JRkyg49cwqM4VMGiHIA/%F0%9F%9A%80-Project-Starter-Template-Share---Copy-?node-id=8234-9260&t=pNq0YJJwmJpZZgwF-1',
      startDate: '2024-05',
      endDate: '2024-07',
      highlights: [
        'Designed multi-store jewelry shopping interface',
        'Implemented live pricing feature for real-time updates',
        'Created in-app cost calculator for user convenience',
        'Developed purchase history tracking system',
        'Created wireframes and high-fidelity mockups in Figma',
        'Focused on usability and brand consistency',
        'Optimized user flow for seamless shopping experience'
      ]
    },
    {
      id: 'weather-app',
      title: 'Weather Forecast App',
      description: 'Real-time weather application with city search and dynamic weather updates.',
      longDescription:
      'A weather forecasting web application that allows users to search for cities and view real-time weather information including temperature, humidity, weather conditions, and date/time. Built using JavaScript, PHP, MySQL, and Weather APIs with a responsive user interface.',

      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'PHP',
        'MySQL',
        'Weather API'
      ],

      category: 'web',

      status: 'completed',

      featured: false,

      images: ['/images/projects/weatherapp.png'],

      liveUrl: 'https://smrity.infinityfree.io/',

      startDate: '2025-06',

      highlights: [
        'Implemented city-based weather search',
        'Displayed real-time weather information',
        'Integrated weather API data fetching',
        'Stored weather data using PHP and MySQL',
        'Built responsive user interface',
        'Handled API requests and error states',
        'Dynamic weather icon rendering'
      ]
    },
    
    {
      id: 'jatra-menu-redesign',
      title: 'Jatra Restaurant Menu Makeover',
      description:
      'Menu redesign project for a renowned restaurant in London focused on improving visual hierarchy and customer experience.',
      longDescription:
      'Redesigned the restaurant menu for Jatra Restaurant, a London-based restaurant. The project focused on improving readability, typography, spacing, content structure, and visual consistency while keeping the restaurant’s brand feel intact.',
      technologies: [
      'Canva',
      'Menu Design',
      'Typography',
      'Visual Hierarchy',
      'Layout Design',
      'Brand Consistency'
      ],
      category: 'design',
      status: 'completed',
      featured: false,
      images: ['/images/projects/Jatra.png'],
      caseStudyUrl: 'https://canva.link/4js63xsxzfhw5nd',
      showCaseStudyButton: false,
      startDate: '2025-08',
      highlights: [
      'Redesigned restaurant menu layout',
      'Improved readability and content flow',
      'Refined typography and spacing',
      'Enhanced visual hierarchy',
      'Maintained restaurant brand consistency',
      'Created a clean menu presentation suitable for customers'
      ]
    },

    {
      id: 'ai-delivery-agent',

      title: 'AI Delivery Agent Simulation',

      description:
      'Autonomous delivery agent simulation built in Unity using A* Pathfinding and Ant Colony Optimisation.',

      longDescription:
      'A Complex Systems project developed in Unity and C#. The simulation features intelligent delivery agents that navigate a waypoint graph using A* pathfinding, collaborate with other agents, and optimise multi-location delivery routes using Ant Colony Optimisation (ACO).',

      technologies: [
      'Unity',
      'C#',
      'A* Pathfinding',
      'Ant Colony Optimisation',
      'Artificial Intelligence',
      'Autonomous Agents'
      ],

      category: 'ai',

      status: 'completed',

      featured: true,

      images: ['/images/projects/ai-agent-simulation.png'],

      startDate: '2025-01',

      liveUrl:
      'https://drive.google.com/drive/folders/13iuSuqELNjae4yhMEN-geXrzm3ZlX0oO?usp=sharing',


      highlights: [
        'Developed autonomous delivery agents in Unity',
        'Implemented A* pathfinding algorithm',
        'Implemented Ant Colony Optimisation (ACO)',
        'Built waypoint graph navigation system',
        'Created multi-agent collaboration behaviour',
        'Measured route efficiency, time and distance performance',
        'Designed a 3D simulation environment'
      ]
    },
  ],

  education: [
    {
      id: 'bachelors-cs',
      institution: 'Herald College Kathmandu',
      degree: 'Bachelor\'s in Computer Science',
      field: 'Computer Science',
      startDate: '2024-01',
      endDate: '2026-06',
      achievements: ['Courses: UI/UX Design, Web Technologies, HCI'],
      location: 'Naxal, Kathmandu'
    },
    {
      id: 'plus-two-science',
      institution: 'DAV College',
      degree: '+2 in Science',
      field: 'Science',
      startDate: '2021-01',
      endDate: '2023-12',
      location: 'Lalitpur'
    }
  ],

  experience: [
    {
      id: 'ui-ux-intern',
      company: 'Tech Solutions Ltd',
      position: 'UI/UX Design Intern',
      department: 'Design Team',
      startDate: '2024-01',
      endDate: '2024-04',
      location: 'London, UK',
      type: 'internship',
      description: 'Contributed to user interface design projects and collaborated with senior designers on client deliverables during a comprehensive 3-month internship program.',
      responsibilities: [
        'Designed user interfaces for web and mobile applications',
        'Created wireframes and prototypes using Figma',
        'Collaborated with development team on design implementation',
        'Conducted user research and usability testing',
        'Participated in design reviews and client presentations',
        'Maintained design documentation and style guides'
      ],
      achievements: [
        'Successfully completed recruitment portal design project',
        'Received positive feedback from supervisors and clients',
        'Contributed to 3 major client projects during internship',
        'Improved design workflow efficiency by 20%'
      ],
      technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision', 'Miro']
    }
  ],

  achievements: [
    {
      id: 'internship-completion',
      title: 'UI/UX Design Internship Completion',
      description: 'Successfully completed 3-month internship designing recruitment portal web application',
      date: '2024-04',
      category: 'achievement',
      issuer: 'Internship Project'
    },
    {
      id: 'jewelaura-design',
      title: 'JewelAura Mobile App Design',
      description: 'Designed comprehensive mobile app for jewelry shopping with advanced features',
      date: '2024-07',
      category: 'project',
      issuer: 'Personal Project'
    }
  ],

  contactInfo: {
    email: 'smrityshrestha734@gmail.com',
    phone: '+977-9813708697',
    location: 'Lubhu, Lalitpur, Nepal',
    availability: 'Seeking UI/UX Intern position',
    preferredContact: 'email'
  }
};

export default portfolioData;