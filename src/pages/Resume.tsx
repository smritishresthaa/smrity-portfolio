import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
} from 'lucide-react';

import SEO from '../components/SEO';
import { portfolioData } from '../data/portfolio';

const Resume: React.FC = () => {
  const { personalInfo } = portfolioData;

  const resumePdfPath = '/images/projects/Resume.pdf';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <SEO
        title="Resume"
        description="View and download Smriti Shrestha's professional resume."
        keywords="Smriti Shrestha Resume, UI UX Designer Resume, Frontend Developer Resume"
      />

      <div className="bg-background-light dark:bg-background-dark">
        <section className="bg-gradient-to-br from-primary-50 via-background-light to-accent-50 dark:from-primary-900/20 dark:via-background-dark dark:to-accent-900/20 px-4 sm:px-6 lg:px-8 pt-10 pb-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-6">
              <div className="flex items-center justify-between mb-5">
                <h1 className="text-3xl lg:text-4xl font-bold text-neutral-heading dark:text-white">
                  Resume
                </h1>

                <motion.a
                  href={resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={18} />
                  <span>View PDF</span>
                </motion.a>
              </div>

              <p className="text-lg text-neutral-body dark:text-neutral-body-dark">
                A quick overview of my experience, projects, skills, and education.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-heading dark:text-white mb-4">
                    Contact Information
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail size={18} className="text-primary-600" />
                      <span className="text-neutral-body dark:text-neutral-body-dark">
                        {personalInfo.email}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone size={18} className="text-primary-600" />
                      <span className="text-neutral-body dark:text-neutral-body-dark">
                        {personalInfo.phone}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin size={18} className="text-primary-600" />
                      <span className="text-neutral-body dark:text-neutral-body-dark">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral-heading dark:text-white mb-4">
                    Resume PDF
                  </h3>

                  <div className="space-y-3">
                    <a
                      href={resumePdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <Globe size={18} />
                      <span>Open Resume PDF</span>
                    </a>

                    <a
                      href={resumePdfPath}
                      download
                      className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <Download size={18} />
                      <span>Download Resume PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Resume;