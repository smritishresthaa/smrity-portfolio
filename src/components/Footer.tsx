import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Globe, Heart, ArrowUp, Briefcase, Figma, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { SiFigma, SiUpwork } from 'react-icons/si';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  globe: Globe,
  briefcase: Briefcase,
  figma: Figma,
  upwork: SiUpwork
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { personalInfo, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-primary-100 dark:border-primary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-neutral-body dark:text-neutral-body-dark text-sm leading-relaxed max-w-md">
              {personalInfo.title}. Creating innovative solutions that bridge design and functionality.
            </p>
            <div className="flex items-center space-x-1 text-xs text-neutral-body dark:text-neutral-body-dark">
              <span>Made with</span>
              <Heart size={12} className="text-secondary-500 fill-current" />
              <span>using React & TypeScript</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-heading dark:text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {[
                { name: 'About', href: '/about' },
                { name: 'Work', href: '/work' },
                { name: 'Resume', href: '/resume' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="block text-sm text-neutral-body dark:text-neutral-body-dark hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-heading dark:text-white uppercase tracking-wider">
              Connect
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-neutral-body dark:text-neutral-body-dark">
                {personalInfo.location}
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-sm text-neutral-body dark:text-neutral-body-dark hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors"
                    aria-label={`Visit ${social.platform}`}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-100 dark:border-primary-900 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="text-sm text-neutral-body dark:text-neutral-body-dark">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="/privacy"
              className="text-sm text-neutral-body dark:text-neutral-body-dark hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-neutral-body hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Terms of Service
            </a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;