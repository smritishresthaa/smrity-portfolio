/*
===========================================
ABOUT PAGE COMPONENT
===========================================
This page displays detailed information about the person:
- Personal bio and introduction
- Professional strengths and skills
- Work experience and education
- Social media links and contact options

It's like a detailed "About Me" section that helps visitors
get to know the person behind the portfolio.
===========================================
*/

// Import React library for building the component
import React, { useState } from 'react';

// Import Framer Motion for smooth animations and transitions
import { motion } from 'framer-motion';

// Import various icons from Lucide React icon library
import { 
  ArrowRight,
  Download,
  ExternalLink,
  Heart,
  Code,
  Lightbulb,
  Users,
  Target,
  Zap,
  Github,
  Linkedin,
  Briefcase,
  BriefcaseBusiness,
  GraduationCap,
  Figma
} from 'lucide-react';

// Import Link component for navigation between pages
import { Link } from 'react-router-dom';

// Import custom UI components
import Section from '../components/ui/Section';      // Reusable section wrapper
import SkillBadge from '../components/ui/SkillBadge'; // Individual skill display
import SEO from '../components/SEO';                 // Search engine optimization

// Import portfolio data (personal info, skills, etc.)
import { portfolioData } from '../data/portfolio';

// ABOUT COMPONENT DEFINITION
// This is a functional component that displays the About page
const About: React.FC = () => {
  // DESTRUCTURE PORTFOLIO DATA
  // Extract specific data sections from the main portfolio data object
  // This makes the code cleaner and easier to read
  const { 
    personalInfo,  // Name, bio, contact info, etc.
    skills,        // Technical and soft skills
    socialLinks,   // Social media profiles
    education,     // Educational background
    experience     // Work experience
  } = portfolioData;

  const [activeCapability, setActiveCapability] = useState('all');

  const showCapability = (key: string) =>
    activeCapability === 'all' || activeCapability === key;

  // ICON MAPPING
  // Map icon strings to actual icon components
  const iconMap: { [key: string]: React.ComponentType<any> } = {
  github: Github,
  linkedin: Linkedin,
  upwork: BriefcaseBusiness,
  figma: Figma,
  default: ExternalLink,
};

  // ANIMATION CONFIGURATIONS
  // These define how elements appear on the page with smooth transitions
  
  // Container animation - controls how groups of elements animate together
  const containerVariants = {
    hidden: { opacity: 0 },  // Start invisible
    visible: {
      opacity: 1,  // Fade in to full visibility
      transition: {
        staggerChildren: 0.1  // Animate child elements one after another with 0.1s delay
      }
    }
  };

  // Individual item animation - controls how single elements animate
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },  // Start invisible and 20px below
    visible: {
      opacity: 1,  // Fade in to full visibility
      y: 0,        // Move to original position
      transition: { duration: 0.6 }  // Animation takes 0.6 seconds
    }
  };

  // PROFESSIONAL STRENGTHS DATA
  // This array defines the key strengths/qualities to highlight
  // Each strength has an icon, title, and description
  const strengths = [
    {
      icon: Code,  // Code icon from Lucide
      title: "Technical Excellence",
      description: "Passionate about writing clean, efficient, and maintainable code with modern best practices."
    },
    {
      icon: Lightbulb,  // Lightbulb icon for creativity
      title: "Problem Solving",
      description: "Creative approach to complex challenges, always seeking innovative solutions."
    },
    {
      icon: Users,  // Users icon for teamwork
      title: "Collaboration",
      description: "Strong team player with excellent communication skills and leadership experience."
    },
    {
      icon: Target,  // Target icon for focus
      title: "Goal-Oriented",
      description: "Focused on delivering results that align with business objectives and user needs."
    },
    {
      icon: Zap,  // Lightning icon for speed/adaptability
      title: "Adaptability",
      description: "Quick learner who thrives in fast-paced environments and embraces new technologies."
    },
    {
      icon: Heart,  // Heart icon for caring about users
      title: "User-Centric",
      description: "Dedicated to creating exceptional user experiences through thoughtful design and development."
    }
  ];

  // SKILL CATEGORIES ORGANIZATION
  // Group skills into different categories for better organization
  // This makes it easier for visitors to understand different skill areas
  const skillCategories = {
  'Design & UX': skills.filter(skill => 
    skill.category === 'design'
  ),

  'Web Development': skills.filter(skill => 
    skill.category === 'development'
  ),

  'Tools': skills.filter(skill => 
    skill.category === 'tools'
  ),

  'Soft Skills': skills.filter(skill => 
    skill.category === 'soft'
  ),

  'Languages': skills.filter(skill => 
    skill.category === 'language'
  )
};

  // COMPONENT RETURN (JSX)
  // This is what gets displayed on the page
  return (
    <>
      {/* SEO COMPONENT */}
      {/* Helps search engines understand this page */}
      <SEO 
        title="About Me"
        description="Learn more about Smriti Shrestha - my background, skills, experience, and passion for creating exceptional digital experiences through full-stack development and UI/UX design."
        keywords="About Smriti Shrestha, Full Stack Developer Background, UI/UX Designer Experience, Web Development Skills, Professional Experience"
      />
      
      {/* MAIN PAGE CONTAINER */}
      {/* Full height container with background colors for light/dark themes */}
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        {/* HERO SECTION */}
        {/* Main introduction section with personal info and photo */}
        <Section
          title="About Me"
          subtitle="Get to know the person behind the code"
          className="bg-gradient-to-br from-primary-50 via-background-light to-accent-50 dark:from-primary-900/20 dark:via-background-dark dark:to-accent-900/20"
        >
          {/* Animated container for all hero content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Two-column layout: image on left, content on right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* PROFILE IMAGE SECTION */}
              <motion.div
                variants={itemVariants}
                className="text-center lg:text-left"
              >
                {/* Profile image container with gradient border */}
                <div className="w-80 h-80 mx-auto lg:mx-0 mb-6 rounded-3xl bg-gradient-to-br from-primary-400 to-accent-500 p-2 shadow-xl">
                  <img
                    src="/images/projects/profile.JPG"
                    alt={personalInfo.name}
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
              </motion.div>

              {/* BIO CONTENT SECTION */}
              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                {/* Personal greeting */}
                <h3 className="text-2xl font-bold text-neutral-heading dark:text-white">
                  Hello, I'm {personalInfo.name.split(' ')[0]}!  {/* Extract first name */}
                </h3>
                
                {/* Bio paragraphs */}
                <div className="space-y-4 text-neutral-body dark:text-neutral-body-dark leading-relaxed">
                  {/* Main bio from portfolio data */}
                  <p>
                    {personalInfo.bio}
                  </p>
                  {/* Additional context about work approach */}
                  <p>
                    With a passion for creating digital experiences that make a difference, 
                    I combine technical expertise with creative problem-solving to build 
                    solutions that users love and businesses value.
                  </p>
                  {/* Personal interests and community involvement */}
                  <p>
                     I'm passionate about continuous learning, collaborating with diverse teams, and creating digital experiences that are thoughtful, functional, and visually engaging. Whether designing interfaces or building products, my goal is always to solve real problems in meaningful ways.
                  </p>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">  {/* Responsive button layout */}
                  {/* Primary CTA - Contact */}
                  <Link
                    to="/contact"  // Navigate to contact page
                    className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors group"  // Primary button styling
                  >
                    <span>Let's Connect</span>
                    {/* Arrow that moves on hover */}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  {/* Secondary CTA - Resume */}
                  <Link
                    to="/resume"  // Navigate to resume page
                    className="inline-flex items-center space-x-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"  // Outlined button styling
                  >
                    <Download size={18} />  {/* Download icon */}
                    <span>View Resume</span>
                  </Link>
                </div>
              </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* SKILL STACK + STRENGTHS SECTION */}
<Section
  title="Creative Skill Stack"
  subtitle="A blend of design thinking, full-stack development, and human-centered problem solving"
  className="bg-gradient-to-br from-primary-50 via-background-light to-accent-50 dark:from-primary-900/20 dark:via-background-dark dark:to-accent-900/20"
>
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="max-w-6xl mx-auto"
  >
    {/* HERO SKILL STATEMENT */}
    <motion.div
      variants={itemVariants}
      className="relative mb-16 text-center"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 bg-primary-200/30 dark:bg-primary-800/20 rounded-full blur-3xl" />
      </div>

      <div className="relative inline-flex flex-col items-center justify-center px-10 py-8 rounded-[2rem] bg-white/70 dark:bg-neutral-800/70 backdrop-blur-md border border-primary-100 dark:border-primary-800 shadow-xl">
        <span className="text-sm font-semibold tracking-[0.3em] uppercase text-primary-600 dark:text-primary-400 mb-3">
          My Core Blend
        </span>

        <h3 className="text-3xl md:text-5xl font-bold text-neutral-heading dark:text-white">
          UI/UX Design <span className="text-primary-600">+</span> MERN Stack
        </h3>

        <p className="mt-4 max-w-2xl text-neutral-body dark:text-neutral-body-dark">
          I design clean digital experiences and turn them into functional web products.
        </p>
      </div>
    </motion.div>

    {/* FLOATING STRENGTH NODES */}
    <motion.div
      variants={itemVariants}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20"
    >
      {[
        { label: 'User-Centric', icon: Heart },
        { label: 'Problem Solver', icon: Lightbulb },
        { label: 'Collaborative', icon: Users },
        { label: 'Adaptable', icon: Zap },
        { label: 'Technical', icon: Code },
        { label: 'Goal-Oriented', icon: Target }
      ].map((strength) => {
        const IconComponent = strength.icon;

        return (
          <motion.div
            key={strength.label}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.25 }}
            className="group flex flex-col items-center justify-center text-center rounded-2xl bg-white/60 dark:bg-neutral-800/60 border border-primary-100 dark:border-primary-800 px-4 py-6 shadow-sm hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-3 group-hover:bg-primary-600 transition-colors">
              <IconComponent className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
            </div>
            <span className="text-sm font-semibold text-neutral-heading dark:text-white">
              {strength.label}
            </span>
          </motion.div>
        );
      })}
    </motion.div>

{/* CAPABILITIES SECTION */}
<Section title="" subtitle="" className="bg-background-light dark:bg-background-dark">
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="max-w-6xl mx-auto"
  >
    <motion.div variants={itemVariants} className="mb-10">
      <span className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-body dark:text-neutral-body-dark">
        Capabilities
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-heading dark:text-white mt-2">
        Things I'm <span className="text-primary-600">really good</span> at.
      </h2>
    </motion.div>

    <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
      {[
        { key: 'all',      label: 'All skills', dot: 'bg-primary-500',  activeBg: 'bg-primary-600 border-primary-600' },
        { key: 'design',   label: 'Design',     dot: 'bg-pink-500',     activeBg: 'bg-pink-500 border-pink-500' },
        { key: 'research', label: 'Research',   dot: 'bg-emerald-500',  activeBg: 'bg-emerald-500 border-emerald-500' },
        { key: 'code',     label: 'Code',       dot: 'bg-orange-500',   activeBg: 'bg-orange-500 border-orange-500' },
        { key: 'systems',  label: 'Systems',    dot: 'bg-blue-500',     activeBg: 'bg-blue-500 border-blue-500' },
      ].map((item) => (
        <button
          key={item.key}
          type="button"
          onClick={() => setActiveCapability(item.key)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold shadow-sm transition-all ${
            activeCapability === item.key
              ? `${item.activeBg} text-white shadow-md`
              : 'border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-heading dark:text-white hover:-translate-y-1 hover:shadow-md'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${activeCapability === item.key ? 'bg-white' : item.dot}`} />
          {item.label}
        </button>
      ))}
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

      {/* ── VISUAL DESIGN ── all, design, systems */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className={`lg:col-span-6 rounded-3xl border border-primary-100 dark:border-primary-800 bg-white dark:bg-neutral-800 p-6 shadow-sm hover:shadow-xl transition-all ${
          ['all', 'design', 'systems'].includes(activeCapability) ? 'block' : 'hidden'
        }`}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-primary-600">Design</span>
        <h3 className="text-xl font-bold text-neutral-heading dark:text-white mt-2 mb-5">Visual design</h3>
        {[
          ['Typography', 95],
          ['Color theory', 88],
          ['Layout', 92],
          
        ].map(([skill, value]) => (
          <div key={skill as string} className="mb-4 last:mb-0">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-neutral-heading dark:text-white font-medium">{skill}</span>
              <span className="text-neutral-body dark:text-neutral-body-dark">{value}</span>
            </div>
            <div className="h-2 rounded-full bg-neutral-100 dark:bg-neutral-700 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-400 to-pink-400"
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── DESIGN SYSTEMS ── all, design, systems */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className={`lg:col-span-3 rounded-3xl border border-blue-100 dark:border-blue-800 bg-white dark:bg-neutral-800 p-6 shadow-sm hover:shadow-xl transition-all ${
          ['all', 'design', 'systems'].includes(activeCapability) ? 'block' : 'hidden'
        }`}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Systems</span>
        <h3 className="text-xl font-bold text-neutral-heading dark:text-white mt-2 mb-5">Design systems</h3>
        {[
          { label: 'Tokens',     filled: 4, total: 5 },
          { label: 'Components', filled: 5, total: 5 },
          { label: 'Docs',       filled: 3, total: 5 },
        ].map(({ label, filled, total }) => (
          <div key={label} className="flex items-center justify-between mb-4 last:mb-0">
            <span className="text-sm font-medium text-neutral-heading dark:text-white">{label}</span>
            <div className="flex gap-1">
              {Array.from({ length: total }).map((_, i) => (
                <span
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${i < filled ? 'bg-blue-400' : 'bg-neutral-200 dark:bg-neutral-600'}`}
                />
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── EXPERIENCE ── all, design only (NOT systems) */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className={`lg:col-span-3 rounded-3xl border border-pink-100 dark:border-pink-800 bg-white dark:bg-neutral-800 p-6 shadow-sm hover:shadow-xl transition-all ${
          ['all', 'design'].includes(activeCapability) ? 'block' : 'hidden'
        }`}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-pink-600">Experience</span>
        <div className="text-5xl font-bold text-pink-500 mt-4">1+</div>
        <p className="text-neutral-heading dark:text-white font-semibold mt-2">
          year of hands-on UI/UX design experience
        </p>
        <div className="flex flex-wrap gap-1 mt-5">
          {['Idealaya','Development Platform','Freelance'].map((item) => (
            <span
              key={item}
              className="text-[10px] text-center rounded-md bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-2 py-1 font-semibold"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── USER RESEARCH ── all, research */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className={`lg:col-span-6 rounded-3xl border border-emerald-100 dark:border-emerald-800 bg-white dark:bg-neutral-800 p-6 shadow-sm hover:shadow-xl transition-all ${
          ['all', 'research'].includes(activeCapability) ? 'block' : 'hidden'
        }`}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Research</span>
        <h3 className="text-xl font-bold text-neutral-heading dark:text-white mt-2 mb-5">User research methods</h3>
        {[
          { title: 'Discovery',  items: ['User interviews', 'Competitor analysis', 'Requirement gathering'] },
          { title: 'Validation', items: ['Usability testing', 'Prototype feedback', 'Heuristic review'] },
          { title: 'Analysis',   items: ['User flows', 'Journey mapping', 'Pain point analysis'] },
        ].map(({ title, items }) => (
          <div
            key={title}
            className={`mb-4 last:mb-0 rounded-2xl p-4 ${
              title === 'Discovery'
                ? 'bg-emerald-50 dark:bg-emerald-900/20'
                : 'bg-neutral-50 dark:bg-neutral-700'
            }`}
          >
            <h4 className="text-sm font-bold text-neutral-heading dark:text-white mb-2">{title}</h4>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-white dark:bg-neutral-800 text-xs font-medium text-neutral-heading dark:text-white border border-neutral-200 dark:border-neutral-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── FULL-STACK FLUENCY ── all, code */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className={`lg:col-span-4 rounded-3xl border border-orange-100 dark:border-orange-800 bg-white dark:bg-neutral-800 p-6 shadow-sm hover:shadow-xl transition-all ${
          ['all', 'code'].includes(activeCapability) ? 'block' : 'hidden'
        }`}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Code</span>
        <h3 className="text-xl font-bold text-neutral-heading dark:text-white mt-2 mb-5">Full-stack fluency</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ['HTML / CSS',     'Production-ready'],
            ['React / JS',     'Project-grade'],
            ['Node / Express', 'Backend APIs'],
            ['MongoDB',        'Database'],
            ['REST APIs',      'Comfortable'],
            ['Git basics',     'Comfortable'],
          ].map(([skill, level]) => (
            <div key={skill} className="rounded-2xl bg-orange-50 dark:bg-orange-900/20 p-4">
              <p className="text-sm font-bold text-orange-700 dark:text-orange-300">{skill}</p>
              <p className="text-xs text-neutral-body dark:text-neutral-body-dark mt-1">{level}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── ACCESSIBILITY ── all, design, systems */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className={`lg:col-span-3 rounded-3xl border border-blue-100 dark:border-blue-800 bg-white dark:bg-neutral-800 p-6 shadow-sm hover:shadow-xl transition-all ${
          ['all', 'design', 'systems'].includes(activeCapability) ? 'block' : 'hidden'
        }`}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Accessibility</span>
        <div className="text-5xl font-bold text-blue-500 mt-4">AA</div>
        <p className="text-sm text-neutral-heading dark:text-white font-semibold mt-2">
          WCAG compliance, always
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {['Screen readers', 'Contrast ratios', 'Keyboard nav'].map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── DAILY TOOLS ── always visible */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className="lg:col-span-12 rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-6 shadow-sm hover:shadow-xl transition-all"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-body dark:text-neutral-body-dark">
          Daily tools
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
          {[
            ['Figma',        'bg-primary-500'],
            ['Notion',       'bg-neutral-700'],
            ['Jira',         'bg-blue-500'],
            ['Basecamp',     'bg-emerald-500'],
            ['Slack',        'bg-pink-500'],
            ['Git & GitHub', 'bg-neutral-700'],
            ['Postman',      'bg-orange-500'],
            ['Vercel',       'bg-pink-500'],
          ].map(([tool, color]) => (
            <div
              key={tool}
              className="flex items-center gap-2 rounded-xl bg-neutral-50 dark:bg-neutral-700 px-4 py-3 text-sm font-semibold text-neutral-heading dark:text-white"
            >
              <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
              {tool}
            </div>
          ))}
        </div>
      </motion.div>

    </div>

    {/* Legend */}
    <div className="flex flex-wrap gap-6 mt-8 text-sm text-neutral-body dark:text-neutral-body-dark">
      {[
        ['Design',   'bg-primary-500'],
        ['Research', 'bg-emerald-500'],
        ['Code',     'bg-orange-500'],
        ['Systems',  'bg-blue-500'],
      ].map(([label, dot]) => (
        <span key={label} className="inline-flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${dot}`} />
          {label}
        </span>
      ))}
    </div>

  </motion.div>
</Section>
  </motion.div>
</Section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <Section
          title="Experience & Education"
          subtitle="My journey through design, development, and learning"
          className="bg-neutral-50 dark:bg-neutral-800"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              {/* EDUCATION TIMELINE */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-12 h-12 rounded-full bg-secondary-100 dark:bg-secondary-900/40 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-heading dark:text-white">
                    Education
                  </h3>
                </div>

                <div className="relative border-l-2 border-secondary-200 dark:border-secondary-800 ml-6 space-y-10">
                  {[
                    {
                      period: 'Jul 2024 - May 2026',
                      title: "Bachelor's in Computer Science",
                      place: 'Herald College Kathmandu',
                      description:
                        'Focused on UI/UX, Human-Computer Interaction, web technologies, and full-stack development.',
                      highlights: ['FYP: SewaHive', 'MERN Stack', 'UI/UX + HCI']
                    },
                    {
                      period: 'Jan 2021 - Jan 2023',
                      title: '+2 Science',
                      place: 'DAV College',
                      description:
                        'Completed higher secondary education as a Computer Science student in the Physics stream.',
                      highlights: ['Computer Science', 'Physics Stream', 'Science Foundation']
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                      className="relative pl-8 group"
                    >
                      <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-secondary-500 ring-4 ring-secondary-100 dark:ring-secondary-900 group-hover:scale-125 transition-transform" />

                      <div className="pb-8 border-b border-secondary-100 dark:border-secondary-900/50">
                        <span className="inline-block text-sm font-semibold text-secondary-600 dark:text-secondary-400 mb-2">
                          {item.period}
                        </span>

                        <h4 className="text-xl font-bold text-neutral-heading dark:text-white mb-1">
                          {item.title}
                        </h4>

                        <p className="text-secondary-600 dark:text-secondary-400 font-medium mb-3">
                          {item.place}
                        </p>

                        <p className="text-neutral-body dark:text-neutral-body-dark leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary-100 dark:bg-secondary-900/40 text-secondary-700 dark:text-secondary-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* EXPERIENCE TIMELINE */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-heading dark:text-white">
                    Experience
                  </h3>
                </div>

                <div className="relative border-l-2 border-primary-200 dark:border-primary-800 ml-6 space-y-10">
                  {[
                    {
                      period: '1 Year',
                      title: 'UI/UX Designer',
                      place: 'Idealaya',
                      description:
                        'Worked on website design, social media creatives, typography practice, and visual design tasks for digital platforms.',
                      highlights: ['Figma', 'Typography', 'Social Media Design', 'Website Design']
                    },
                    {
                      period: '3 Months',
                      title: 'UI/UX Design Intern',
                      place: 'Development Platform',
                      description:
                        'Designed a recruitment portal with user flows, wireframes, prototypes, and clean interface layouts.',
                      highlights: ['Recruitment Portal', 'Wireframing', 'Prototyping', 'Figma']
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                      className="relative pl-8 group"
                    >
                      <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-primary-100 dark:ring-primary-900 group-hover:scale-125 transition-transform" />

                      <div className="pb-8 border-b border-primary-100 dark:border-primary-900/50">
                        <span className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2">
                          {item.period}
                        </span>

                        <h4 className="text-xl font-bold text-neutral-heading dark:text-white mb-1">
                          {item.title}
                        </h4>

                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                          {item.place}
                        </p>

                        <p className="text-neutral-body dark:text-neutral-body-dark leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </Section>

        
    </div>
    </>
  );
};

export default About;