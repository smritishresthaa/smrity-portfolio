import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { ProjectCardProps } from '../../types';

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  variant = 'default', 
  showCategory = true, 
  onClick 
}) => {
  const cardVariants = {
    default: 'bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl',
    featured: 'bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl shadow-lg hover:shadow-xl border border-primary-200 dark:border-primary-700',
    compact: 'bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg'
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-mint-100 text-mint-800 dark:bg-mint-900/20 dark:text-mint-400';
      case 'in-progress':
        return 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/20 dark:text-secondary-400';
      case 'planned':
        return 'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`${cardVariants[variant]} overflow-hidden cursor-pointer group`}
      onClick={onClick}
    >
      {/* Project Image */}
      {project.images && project.images.length > 0 && (
        <div className="relative overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Featured
              </span>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
              {project.status.replace('-', ' ').toUpperCase()}
            </span>
          </div>
        </div>
      )}

      {/* Project Content */}
      <div className="p-6">
        {/* Category & Date */}
        {showCategory && (
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Tag size={14} className="text-primary-500" />
              <span className="text-sm text-primary-600 dark:text-primary-400 font-medium capitalize">
                {project.category}
              </span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-neutral-body">
              <Calendar size={12} />
              <span>{formatDate(project.startDate)}</span>
              {project.endDate && (
                <>
                  <span>-</span>
                  <span>{formatDate(project.endDate)}</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-neutral-heading dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-neutral-body dark:text-neutral-body-dark text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, variant === 'compact' ? 3 : 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (variant === 'compact' ? 3 : 5) && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md font-medium">
              +{project.technologies.length - (variant === 'compact' ? 3 : 5)}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center space-x-4">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-neutral-body hover:text-neutral-heading dark:hover:text-white text-sm font-medium transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
              <span>Code</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;