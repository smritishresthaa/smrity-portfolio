import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Eye
} from 'lucide-react';
import { SiUpwork, SiFigma } from 'react-icons/si';
import { Link } from 'react-router-dom';

import Section from '../components/ui/Section';
import ProjectCard from '../components/ui/ProjectCard';
import SkillBadge from '../components/ui/SkillBadge';
import SEO from '../components/SEO';
import { portfolioData } from '../data/portfolio';

type ProjectFilter = 'all' | 'operations' | 'design' | 'web' | 'ai';

const projectFilters: Array<{
  key: ProjectFilter;
  label: string;
  dot: string;
  activeBg: string;
}> = [
  {
    key: 'all',
    label: 'All projects',
    dot: 'bg-primary-500',
    activeBg: 'bg-primary-600 border-primary-600'
  },
  {
    key: 'operations',
    label: 'Operations systems',
    dot: 'bg-sky-500',
    activeBg: 'bg-sky-500 border-sky-500'
  },
  {
    key: 'design',
    label: 'UI/UX design',
    dot: 'bg-pink-500',
    activeBg: 'bg-pink-500 border-pink-500'
  },
  {
    key: 'web',
    label: 'Web development',
    dot: 'bg-orange-500',
    activeBg: 'bg-orange-500 border-orange-500'
  },
  {
    key: 'ai',
    label: 'AI & Simulation',
    dot: 'bg-emerald-500',
    activeBg: 'bg-emerald-500 border-emerald-500'
  }
];

const projectGroups = [
  {
    key: 'operations',
    label: 'Operations & systems',
    accentClass: 'text-sky-600 dark:text-sky-400',
    borderClass: 'border-sky-200 dark:border-sky-800'
  },
  {
    key: 'design',
    label: 'UI/UX design',
    accentClass: 'text-pink-600 dark:text-pink-400',
    borderClass: 'border-pink-200 dark:border-pink-800'
  },
  {
    key: 'web',
    label: 'Web development',
    accentClass: 'text-orange-600 dark:text-orange-400',
    borderClass: 'border-orange-200 dark:border-orange-800'
  },
  {
    key: 'ai',
    label: 'AI & Simulation',
    accentClass: 'text-emerald-600 dark:text-emerald-400',
    borderClass: 'border-emerald-200 dark:border-emerald-800'
  }
] as const;

const openExternalLink = (url?: string) => {
  if (!url) return;

  window.open(url, '_blank', 'noopener,noreferrer');
};

const Home: React.FC = () => {
  const { personalInfo, projects, skills, socialLinks } = portfolioData;

  const [activeProjectFilter, setActiveProjectFilter] =
    useState<ProjectFilter>('all');

  const featuredProjects = projects.filter((project) => project.featured);

  const topSkills = [
    'UI/UX Design',
    'Figma',
    'Wireframing',
    'MERN Stack',
    'React.js',
    'Node.js',
    'MongoDB',
    'Tailwind CSS',
    'Python',
    'Java'
  ]
    .map((skillName) => skills.find((skill) => skill.name === skillName))
    .filter(Boolean);

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      <SEO />

      <div className="overflow-hidden">
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-background-light to-accent-50 dark:from-primary-900/20 dark:via-background-dark dark:to-accent-900/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div variants={itemVariants} className="mb-8">
                <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 p-1 shadow-xl">
                  <img
                    src="/images/projects/pic.jpeg"
                    alt={personalInfo.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-heading dark:text-white mb-4"
              >
                {personalInfo.name}
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl lg:text-3xl text-primary-600 dark:text-primary-400 font-medium mb-6"
              >
                {personalInfo.title}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-neutral-body dark:text-neutral-body-dark max-w-2xl mx-auto leading-relaxed mb-8"
              >
                {personalInfo.bio}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center space-x-2 text-neutral-body dark:text-neutral-body-dark mb-8"
              >
                <MapPin size={18} className="text-primary-500" />
                <span>{personalInfo.location}</span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
              >
                <Link
                  to="/work"
                  className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors group"
                >
                  <span>View My Work</span>

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <a
                  href="/images/projects/Resume.pdf"
                  download="Smriti_Shrestha_Resume.pdf"
                  className="inline-flex items-center space-x-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center space-x-6"
              >
                {socialLinks.map((social) => {
                  const iconMap = {
                    github: Github,
                    linkedin: Linkedin,
                    figma: SiFigma,
                    upwork: SiUpwork,
                    twitter: Mail,
                    globe: Mail
                  };

                  const IconComponent =
                    iconMap[social.icon as keyof typeof iconMap] || Mail;

                  return (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.1,
                        y: -2
                      }}
                      whileTap={{
                        scale: 0.95
                      }}
                      className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-all"
                      aria-label={`Visit ${social.platform}`}
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Section
          title=""
          subtitle=""
          className="bg-background-light dark:bg-background-dark"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-10">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-body dark:text-neutral-body-dark">
                Work
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-heading dark:text-white mt-2">
                Featured projects
              </h2>

              <p className="text-neutral-body dark:text-neutral-body-dark mt-2">
                A selection of operations systems, UI/UX designs, web
                applications and technical projects.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-10"
            >
              {projectFilters.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveProjectFilter(item.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold shadow-sm transition-all ${
                    activeProjectFilter === item.key
                      ? `${item.activeBg} text-white shadow-md`
                      : 'border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-heading dark:text-white hover:-translate-y-1 hover:shadow-md'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      activeProjectFilter === item.key
                        ? 'bg-white'
                        : item.dot
                    }`}
                  />

                  {item.label}
                </button>
              ))}
            </motion.div>

            <div className="space-y-12">
              {projectGroups
                .filter(
                  (group) =>
                    activeProjectFilter === 'all' ||
                    activeProjectFilter === group.key
                )
                .map((group) => {
                  const groupProjects = featuredProjects.filter(
                    (project) => project.category === group.key
                  );

                  if (groupProjects.length === 0) {
                    return null;
                  }

                  return (
                    <motion.div
                      key={group.key}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />

                        <div
                          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${group.accentClass}`}
                        >
                          <span>{group.label}</span>

                          <span
                            className={`px-2 py-0.5 rounded-full border text-[10px] font-semibold ${group.borderClass}`}
                          >
                            {groupProjects.length}{' '}
                            {groupProjects.length === 1
                              ? 'project'
                              : 'projects'}
                          </span>
                        </div>

                        <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {groupProjects.map((project) => (
                          <div key={project.id} className="flex flex-col">
                            <ProjectCard
                              project={project}
                              variant="default"
                              onClick={() => {
                                // The Affiliate Operations card uses liveUrl,
                                // so it opens the Google Spreadsheet.
                                const cardUrl =
                                  project.liveUrl ||
                                  project.githubUrl ||
                                  project.caseStudyUrl;

                                openExternalLink(cardUrl);
                              }}
                            />

                            {project.showCaseStudyButton && (
                              <div className="mt-3 px-1">
                                <button
                                  type="button"
                                  onClick={() => {
                                    // This prioritises the Notion case study.
                                    const caseStudyUrl =
                                      project.caseStudyUrl ||
                                      project.liveUrl ||
                                      project.githubUrl;

                                    openExternalLink(caseStudyUrl);
                                  }}
                                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                                >
                                  <Eye size={15} />
                                  View case study
                                </button>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: 0.3
              }}
              className="text-center mt-12"
            >
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group"
              >
                <span>View all projects</span>

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>
        </Section>

        <Section className="bg-primary-50/50 dark:bg-primary-900/10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="mb-10"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-500 dark:text-primary-400 mb-2">
              What I work with
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
              Skills &amp; expertise
            </h2>

            <p className="text-base text-gray-500 dark:text-gray-400">
              Technologies and tools I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {topSkills.map((skill, index) => {
              if (!skill) {
                return null;
              }

              return (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08
                  }}
                  whileHover={{
                    y: -3,
                    transition: {
                      duration: 0.2
                    }
                  }}
                >
                  <SkillBadge
                    skill={skill}
                    variant="compact"
                    showLevel={false}
                  />
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 16
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
            className="mt-10 flex justify-center"
          >
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group transition-colors duration-200"
            >
              <span>Learn more about me</span>

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </Section>

        <Section className="bg-background-light dark:bg-background-dark">
          <motion.div
            initial={{
              opacity: 0,
              y: 24
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500 via-primary-500 to-fuchsia-500 px-6 py-16 sm:px-10 lg:px-16 text-center shadow-2xl"
          >
            <div className="absolute -top-24 left-10 h-80 w-80 rounded-full bg-white/25 blur-3xl" />
            <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-accent-300/35 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-200/15 blur-3xl" />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm backdrop-blur-md">
                Open to opportunities
              </p>

              <h2 className="mb-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
                Let&apos;s create something users love.
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                Whether it&apos;s designing intuitive experiences, building
                modern web applications, organising operational systems, or
                solving real-world problems through technology, I&apos;m always
                excited to collaborate on meaningful digital products.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 font-semibold text-primary-700 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-primary-50 hover:shadow-xl"
                >
                  <span>Start a conversation</span>

                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="/images/projects/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/15 px-8 py-3 font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:text-primary-700"
                >
                  <Download size={18} className="mr-2" />
                  <span>View Resume</span>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-white/85">
                <span>Nepal</span>
                <span className="text-white/40">•</span>
                <span>UI/UX Designer</span>
                <span className="text-white/40">•</span>
                <span>MERN Stack Developer</span>
              </div>
            </div>
          </motion.div>
        </Section>
      </div>
    </>
  );
};

export default Home;