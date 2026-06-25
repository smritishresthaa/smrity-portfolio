import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

const NotFound: React.FC = () => {
  const { personalInfo } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const popularPages = [
    { name: 'Home', path: '/', icon: Home, description: 'Back to the main page' },
    { name: 'Work', path: '/work', icon: Search, description: 'View my projects and portfolio' },
    { name: 'About', path: '/about', icon: ExternalLink, description: 'Learn more about me' },
    { name: 'Contact', path: '/contact', icon: Mail, description: 'Get in touch with me' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-background-light to-accent-50 dark:from-primary-900/20 dark:via-background-dark dark:to-accent-900/20 flex items-center justify-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        {/* 404 Animation */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="mb-8"
        >
          <div className="relative">
            {/* Large 404 */}
            <motion.h1
              variants={itemVariants}
              className="text-8xl lg:text-9xl font-bold text-primary-200 dark:text-primary-800 select-none"
            >
              404
            </motion.h1>
            
            {/* Floating elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-4 right-4 w-8 h-8 bg-accent-400 rounded-full opacity-60"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-8 left-8 w-6 h-6 bg-mint-400 rounded-full opacity-60"
            />
            <motion.div
              animate={{
                y: [-5, 5, -5],
                x: [-3, 3, -3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-4 w-4 h-4 bg-primary-400 rounded-full opacity-60"
            />
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-heading dark:text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg lg:text-xl text-neutral-body dark:text-neutral-body-dark leading-relaxed max-w-2xl mx-auto">
            The page you're looking for seems to have wandered off into the digital void.
            Don't worry though, let's get you back on track!
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium transition-colors group"
            >
              <Home size={20} className="group-hover:scale-110 transition-transform" />
              <span>Go Home</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-neutral-heading dark:text-white border border-gray-300 dark:border-gray-600 px-8 py-4 rounded-lg font-medium transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Go Back</span>
            </button>
          </div>
        </motion.div>

        {/* Popular Pages */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-xl font-semibold text-neutral-heading dark:text-white mb-6">
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularPages.map((page, index) => {
              const IconComponent = page.icon;
              return (
                <motion.div
                  key={page.path}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={page.path}
                    className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                      <IconComponent className="text-primary-600 dark:text-primary-400" size={24} />
                    </div>
                    <h4 className="font-semibold text-neutral-heading dark:text-white mb-2">
                      {page.name}
                    </h4>
                    <p className="text-sm text-neutral-body dark:text-neutral-body-dark">
                      {page.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-neutral-heading dark:text-white mb-4">
            Still Can't Find What You're Looking For?
          </h3>
          <p className="text-neutral-body dark:text-neutral-body-dark mb-6 leading-relaxed">
            If you believe this is an error or you were expecting to find something here,
            please don't hesitate to reach out. I'm here to help!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-medium transition-colors group"
            >
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
              <span>Contact Me</span>
            </Link>
            
            <a
              href={`mailto:${portfolioData.contactInfo.email}?subject=404 Error Report&body=I encountered a 404 error on: ${window.location.href}`}
              className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-neutral-heading dark:text-white px-6 py-3 rounded-lg font-medium transition-colors group"
            >
              <ExternalLink size={18} className="group-hover:scale-110 transition-transform" />
              <span>Report Issue</span>
            </a>
          </div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Fun fact: HTTP 404 errors were named after room 404 at CERN,
            where the World Wide Web was invented! 🌐
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;