import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../../types';

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
}) => {
  return (
    <section className={`py-10 lg:py-14 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-10"
          >
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-heading dark:text-white mb-3">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="text-lg text-neutral-body dark:text-neutral-body-dark max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
};

export default Section;