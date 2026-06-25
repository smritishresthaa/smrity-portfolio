/**
 * Work Page Component - Portfolio Projects Showcase
 */

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, RotateCcw, Eye } from 'lucide-react';
import Section from '../components/ui/Section';
import ProjectCard from '../components/ui/ProjectCard';
import SEO from '../components/SEO';
import { portfolioData } from '../data/portfolio';

const Work: React.FC = () => {
  const { projects } = portfolioData;

  const [searchTerm, setSearchTerm] = useState('');
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        activeProjectFilter === 'all' ||
        project.category === activeProjectFilter;

      return matchesSearch && matchesCategory;
    });
  }, [projects, searchTerm, activeProjectFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setActiveProjectFilter('all');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55 },
    },
  };

  const projectFilters = [
    {
      key: 'all',
      label: 'All projects',
      dot: 'bg-primary-500',
    },
    {
      key: 'design',
      label: 'UI/UX design',
      dot: 'bg-pink-500',
    },
    {
      key: 'web',
      label: 'Web development',
      dot: 'bg-orange-500',
    },
    {
      key: 'ai',
      label: 'AI & Simulation',
      dot: 'bg-emerald-500',
    },
  ];

  const projectGroups = [
    {
      key: 'design',
      label: 'UI/UX design',
      accentClass: 'text-pink-600 dark:text-pink-400',
      borderClass: 'border-pink-200 dark:border-pink-800',
    },
    {
      key: 'web',
      label: 'Web development',
      accentClass: 'text-orange-600 dark:text-orange-400',
      borderClass: 'border-orange-200 dark:border-orange-800',
    },
    {
      key: 'ai',
      label: 'AI & Simulation',
      accentClass: 'text-emerald-600 dark:text-emerald-400',
      borderClass: 'border-emerald-200 dark:border-emerald-800',
    },
  ];

  return (
    <>
      <SEO
        title="My Work"
        description="Explore Smriti Shrestha's portfolio of web development projects including full-stack applications, UI/UX designs, and innovative digital solutions using React, Node.js, and modern technologies."
        keywords="Smriti Shrestha Projects, Web Development Portfolio, React Projects, Full Stack Applications, UI/UX Design Work, JavaScript Projects"
      />

      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        {/* HERO */}
        <Section
          title=""
          subtitle=""
          className="bg-gradient-to-b from-[#FBF8FF] via-[#FFFDFE] to-background-light dark:from-primary-950/20 dark:via-background-dark dark:to-background-dark"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F1E9FF] text-primary-600 text-xs font-semibold tracking-[0.18em] uppercase mb-5 dark:bg-primary-900/30 dark:text-primary-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Work
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-heading dark:text-white"
            >
              Projects I’ve loved working on
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-xl mx-auto text-neutral-body dark:text-neutral-body-dark mt-4 leading-relaxed text-base"
            >
              A soft little collection of my UI/UX designs and web development
              projects, shaped with clean layouts, thoughtful details, and
              practical functionality.
            </motion.p>
          </motion.div>
        </Section>

        {/* FILTER + PROJECTS */}
        <Section className="bg-background-light dark:bg-background-dark">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {/* Search + Filters */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary-400 w-5 h-5" />

                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-5 py-4 rounded-full border border-[#DCCEFF] bg-[#FCFAFF] text-neutral-heading placeholder:text-neutral-body/70 shadow-sm outline-none transition-all focus:border-[#BFA7FF] focus:ring-2 focus:ring-[#CBB7FF] dark:border-primary-800 dark:bg-neutral-950 dark:text-white dark:placeholder:text-neutral-body-dark"
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {projectFilters.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActiveProjectFilter(item.key)}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                      activeProjectFilter === item.key
                        ? 'bg-[#E9DDFF] text-primary-700 shadow-sm'
                        : 'bg-[#F8F3FF] text-neutral-heading hover:bg-[#EFE5FF]'
                    } dark:bg-primary-900/30 dark:text-primary-200`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        activeProjectFilter === item.key
                          ? 'bg-primary-600'
                          : item.dot
                      }`}
                    />
                    {item.label}
                  </button>
                ))}

                {(searchTerm || activeProjectFilter !== 'all') && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-600 transition-all hover:bg-[#F3ECFF] dark:text-primary-300 dark:hover:bg-primary-900/20"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Clear filters
                  </button>
                )}
              </div>
            </motion.div>

            {/* Projects */}
            {filteredProjects.length > 0 ? (
              <div className="space-y-14">
                {projectGroups
                  .filter(
                    (group) =>
                      activeProjectFilter === 'all' ||
                      activeProjectFilter === group.key
                  )
                  .map((group) => {
                    const groupedProjects = filteredProjects.filter(
                      (project) => project.category === group.key
                    );

                    if (groupedProjects.length === 0) return null;

                    return (
                      <motion.div
                        key={group.key}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <div className="flex items-center gap-4 mb-7">
                          <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />

                          <div
                            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${group.accentClass}`}
                          >
                            <span>{group.label}</span>

                            <span
                              className={`px-2 py-0.5 rounded-full border text-[10px] font-semibold ${group.borderClass}`}
                            >
                              {groupedProjects.length}{' '}
                              {groupedProjects.length === 1
                                ? 'project'
                                : 'projects'}
                            </span>
                          </div>

                          <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
                        </div>

                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                          {groupedProjects.map((project) => (
                            <motion.div
                              key={project.id}
                              variants={itemVariants}
                              className="flex flex-col"
                            >
                              <ProjectCard
                                project={project}
                                variant="default"
                                onClick={() => {
                                  const url =
                                      project.caseStudyUrl || project.liveUrl || project.githubUrl;

                                  if (url) window.open(url, '_blank');
                                  if (url) window.open(url, '_blank');
                                }}
                              />

                              {group.key === 'design' && project.showCaseStudyButton && (
                                <div className="mt-3 px-1">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const url =
                                        project.caseStudyUrl ||
                                        project.liveUrl ||
                                        project.githubUrl;

                                      if (url) window.open(url, '_blank');
                                    }}
                                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#F3ECFF] border border-[#D8C6FF] text-primary-700 text-sm font-medium shadow-sm hover:bg-[#E9DDFF] hover:shadow-md hover:-translate-y-0.5 transition-all dark:bg-primary-900/40 dark:border-primary-800 dark:text-primary-200"
                                  >
                                    <Eye size={15} />
                                    View case study
                                  </button>
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    );
                  })}
              </div>
            ) : (
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="text-center py-16"
              >
                <div className="w-20 h-20 mx-auto mb-5 rounded-[2rem] bg-[#F3ECFF] dark:bg-primary-900/30 flex items-center justify-center">
                  <Search className="w-9 h-9 text-primary-400" />
                </div>

                <h3 className="text-xl font-semibold text-neutral-heading dark:text-white mb-2">
                  No projects found
                </h3>

                <p className="text-neutral-body dark:text-neutral-body-dark mb-6">
                  Try adjusting your search or selected project type.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F3ECFF] text-primary-700 text-sm font-medium hover:bg-[#E9DDFF] transition-all dark:bg-primary-900/40 dark:text-primary-200"
                >
                  <RotateCcw className="w-4 h-4" />
                  Clear all filters
                </button>
              </motion.div>
            )}
          </motion.div>
        </Section>
      </div>
    </>
  );
};

export default Work;